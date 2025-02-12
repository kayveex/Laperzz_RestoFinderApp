
class RestoBannerDetail extends HTMLElement {
	constructor() {
		super();
		// Make <style> tag that will store the CSS for this component
		this.styleElement = document.createElement('style');
	}

	connectedCallback() {
		const title = this.getAttribute('title');
		const subtitle = this.getAttribute('subtitle');
		const srcBackground = this.getAttribute('srcBackground');
		const srcBackgroundMin = this.getAttribute('srcBackgroundMin');
		this.render(title, subtitle, srcBackground, srcBackgroundMin);
	}

	emptyContent() {
		this.innerHTML = '';
	}

	render(title, subtitle, srcBackground, srcBackgroundMin) {
		this.emptyContent();
		this.renderAll(title, subtitle, srcBackground, srcBackgroundMin);
	}

	renderAll(title, subtitle, srcBackground, srcBackgroundMin) {
		// Check screen width
		const screenWidth = window.innerWidth;

		// Define the CSS includes background-image based on screen width
		let backgroundUrl;
		if (screenWidth < 800) {
			backgroundUrl = `url('${srcBackgroundMin}')`;
		} else {
			backgroundUrl = `url('${srcBackground}')`;
		}

		const styles = `
        #resto_banner {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 400px;
            width: 100%;
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%),
                        lightgray ${backgroundUrl} no-repeat center / cover;
        }
    `;
		this.styleElement.textContent = styles;
		// Append this to head
		document.head.appendChild(this.styleElement);

		// Make HTML component
		const bannerSection = document.createElement('section');
		bannerSection.id = 'resto_banner';
		bannerSection.innerHTML = `
        <h1 tabindex="0" aria-label="Restaurant name: ${title}" tabindex="0">${title}</h1>
        <h2 tabindex="0" aria-label="Restaurant city: ${subtitle}" tabindex="0">${subtitle}</h2>
    `;

		this.appendChild(bannerSection);
	}
}
customElements.define('resto-banner-detail', RestoBannerDetail);
