/* eslint-disable no-useless-constructor */
class FoodMenu extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const foods = JSON.parse(this.getAttribute('foods'));
		const drinks = JSON.parse(this.getAttribute('drinks'));
		this.render(foods, drinks);
	}

	emptyContent() {
		this.innerHTML = '';
	}

	render(foods, drinks) {
		this.emptyContent();
		this.renderAll(foods, drinks);
	}

	renderAll(foods, drinks) {
		const menuSection = document.createElement('section');
		menuSection.id = 'menu_section';
		menuSection.innerHTML = `
        <div id="left_menu" class="menu_container">
            <div class="wrap_title_menu">
                <i class="ri-bowl-fill"></i>
                <h3>Food Menu</h3>
            </div>
            <div class="wrap_menu_list">
            ${foods.map(food => `
                <div class="menu_item">
                    <h4>${food.name}</h4>
                </div>
            `).join('')}
            </div>        
        </div>
        <div id="right_menu" class="menu_container">
            <div class="wrap_title_menu">
                <i class="ri-drinks-fill"></i>
                <h3>Drink Menu</h3>
            </div>
            <div class="wrap_menu_list">
                ${drinks.map(drink => `
                <div class="menu_item">
                    <h4>${drink.name}</h4>
                </div> 
                `).join('')}
            </div>
        </div>
        `;
		this.appendChild(menuSection);
	}
}
customElements.define('food-menu', FoodMenu);
