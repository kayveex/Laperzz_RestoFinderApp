/* eslint-disable no-useless-constructor */
import FavoriteRestoIdb from '../../data/favorite-resto-idb.js';
import createRestoItemTemplate from './subcomponent/resto-item';

class LikedList extends HTMLElement {
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
		heading.textContent = 'Liked Restaurants';
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

		// Adding Loading Indicator
		wrapperResto.innerHTML = '<h1 id="loading_text">Loading...</h1>';

		// Record start time
		const startTime = Date.now();

		try {
			// Get the data from API
			const restoData = await FavoriteRestoIdb.getAllResto();
			const elapsedTime = Date.now() - startTime;
			const timeoutDuration = Math.max(2000 - elapsedTime, 0);

			// Clear Loading indicator after timeoutDuration
			setTimeout(() => {
				const loadingIndicator = wrapperResto.querySelector('#loading_text');
				if (loadingIndicator) {
					loadingIndicator.remove();
				}
			}, timeoutDuration);
			restoData.forEach(resto => {
				wrapperResto.innerHTML += createRestoItemTemplate(resto);
			});
		} catch (error) {
			console.error('Error rendering restaurant data:', error);
			// You may want to handle the error here
		}
	}
}

customElements.define('liked-list', LikedList);
