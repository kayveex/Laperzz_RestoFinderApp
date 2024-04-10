class ExploreRestoSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    emptyContent() {
        this.innerHTML = '';
    }

    async render() {
        this.emptyContent();
    
        // Create the section element
        const section = document.createElement('section');
        section.setAttribute('id', 'explore_resto');
    
        // Create the h2 element
        const heading = document.createElement('h2');
        heading.textContent = 'Explore Restaurant';
        heading.setAttribute('tabindex', '0');
    
        // Create the div element with the class "wrapper_resto"
        const wrapperResto = document.createElement('div');
        wrapperResto.classList.add('wrapper_resto');
    
        // Append the h2 element to the section
        section.appendChild(heading);
    
        // Append the div element to the section
        section.appendChild(wrapperResto);
    
        // Append the section to the custom element
        this.appendChild(section);
    
        try {
            // Get the data from JSON
            const restoData = await this.getRestoData();
    
            restoData.forEach(resto => {
                wrapperResto.innerHTML += `
                    <div class="resto_item">
                        <div tabindex="0" class="location_item">
                            <h4 aria-label="Restaurant location: ${resto.city}">${resto.city}</h4>
                        </div>
                        <img tabindex="0" class="img_resto" src="${resto.pictureId}" alt="restaurant image">
                        <div class="resto_item_textwrap">
                            <h5 tabindex="0" class="rating_item">Rating: ${resto.rating} / 5</h5>
                            <h3 tabindex="0" aria-label="Restaurant name: ${resto.name}" class="title_item">${resto.name}</h3>
                            <p tabindex="0" aria-label="Restaurant description: ${resto.description}" class="desc_item">${resto.description.slice(0,100)}...</p>
                        </div>
                    </div>
                `;
            });
        } catch (error) {
            console.error('Error rendering restaurant data:', error);
            // You may want to handle the error here
        }
    }
    
 
    async getRestoData() {
        try {
            const {
                default: jsonData
            } = await import('../../public/data/DATA.json');

            // Check JSON Data
            console.log(jsonData);

            // Get the data from JSON
            let restoData = jsonData.restaurants;
            console.log(restoData);
            return restoData;
        } catch (error) {
            console.error('Error fetching JSON data:', error);
            window.alert('An error occurred while fetching data. Please try again later.');
            throw error; // Rethrow the error to handle it further if necessary
        }
    }

}

customElements.define('explore-resto-section', ExploreRestoSection);