/* eslint-disable no-useless-constructor */
class DetailInfo extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const rating = this.getAttribute('rating');
		const address = this.getAttribute('address');
		const categories = JSON.parse(this.getAttribute('categories'));
		this.render(rating, address, categories);
	}

	emptyContent() {
		this.innerHTML = '';
	}

	render(rating, address, categories) {
		this.emptyContent();
		this.renderAll(rating, address, categories);
	}

	renderAll(rating, address, categories) {
		const detailSection = document.createElement('section');
		detailSection.id = 'resto_detail';
		detailSection.innerHTML = `
            <div id="left" class="detailContainer">
                <i aria-label="Review Stars" tabindex="0" class="ri-star-fill"></i>
                <h3 tabindex="0">${rating} of 5</h3>
            </div>
            <div id="middle" class="detailContainer">
                <i aria-label="Address" tabindex="0" class="ri-map-pin-2-line"></i>
                <h3 tabindex="0">${address}</h3>
            </div>
            <div id="right" class="detailContainer">
                <i aria-label="Categories" tabindex="0" class="ri-sort-asc"></i>
                ${categories.map((category, index) => `<h3 tabindex="0">${category.name}${index < categories.length - 1 ? ',' : ''}</h3>`).join('')}
            </div>
        `;
		this.appendChild(detailSection);
	}
}
customElements.define('detail-info', DetailInfo);
