/* eslint-disable no-useless-constructor */
class HeroSection extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
	}

	emptyContent() {
		this.innerHTML = '';
	}

	render() {
		this.emptyContent();
		this.renderAll();
	}

	renderAll() {
		this.innerHTML = `
		<section id="hero_element">
			<h1 tabindex="0">Find Place to Eat</h1>
			<h2 tabindex="0">Without Worries</h2>
		</section>   
		`;
	}
}
customElements.define('hero-section', HeroSection);
