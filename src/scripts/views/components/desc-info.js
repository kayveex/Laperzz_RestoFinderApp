/* eslint-disable no-useless-constructor */

class DescInfo extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const description = this.getAttribute('description');
		this.render(description);
	}

	emptyContent() {
		this.innerHTML = '';
	}

	render(description) {
		this.emptyContent();
		this.renderAll(description);
	}

	renderAll(description) {
		const descSection = document.createElement('section');
		descSection.id = 'resto_desc';
		descSection.innerHTML = `
            <div id="wrap_desc_title">
                <i class="ri-edit-fill"></i>
                <h3>Description</h3>
            </div>
            <div id="desc_content">
                <p>${description}</p>
            </div>
        `;
		this.appendChild(descSection);
	}
}
customElements.define('desc-info', DescInfo);
