/* eslint-disable arrow-parens */
/* eslint-disable indent */
/* eslint-disable no-useless-constructor */
import FavoriteRestoIdb from '../../data/favorite-restaurant-idb.js';
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

        // Create the form element for search
        const searchForm = document.createElement('form');
        searchForm.setAttribute('id', 'searchForm');
        searchForm.innerHTML = `
            <input tabindex="0" id="query" type="text" placeholder="Search restaurants...">
            <button tabindex="0" type="submit">
                <i class="ri-search-2-line"></i>
            </button>
        `;

        // Create the div element with the class "wrapper_resto"
        const wrapperResto = document.createElement('div');
        wrapperResto.classList.add('wrapper_resto');

        // Append the h2 element to the section
        section.appendChild(heading);

        // Append the search form to the section
        section.appendChild(searchForm);

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
            const restoData = await FavoriteRestoIdb.getAllRestaurants();
            const elapsedTime = Date.now() - startTime;
            const timeoutDuration = Math.max(2000 - elapsedTime, 0);

            // Clear Loading indicator after timeoutDuration
            setTimeout(() => {
                const loadingIndicator = wrapperResto.querySelector('#loading_text');
                if (loadingIndicator) {
                    loadingIndicator.remove();
                }
            }, timeoutDuration);

            // If no restaurants found
            if (restoData.length === 0) {
                const notFoundDiv = document.createElement('div');
                notFoundDiv.classList.add('restaurant-item__not__found');
                notFoundDiv.textContent = 'Restaurant Not Found!';
                wrapperResto.appendChild(notFoundDiv);
            } else {
                restoData.forEach(resto => {
                    wrapperResto.innerHTML += createRestoItemTemplate(resto);
                });
            }
        } catch (error) {
            console.error('Error rendering restaurant data:', error);
        }

        // Add event listener for search form submission
        searchForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const query = document.getElementById('query').value;
            try {
                const searchResult = await FavoriteRestoIdb.searchRestaurants(query);
                wrapperResto.innerHTML = '';
                if (searchResult.length === 0) {
                    const notFoundDiv = document.createElement('div');
                    notFoundDiv.classList.add('restaurant-item__not__found');
                    notFoundDiv.textContent = 'Tidak ada restoran yang cocok dengan pencarian Anda';
                    wrapperResto.appendChild(notFoundDiv);
                } else {
                    searchResult.forEach(resto => {
                        wrapperResto.innerHTML += createRestoItemTemplate(resto);
                    });
                }
            } catch (error) {
                console.error('Error searching restaurants:', error);
                // You may want to handle the error here
            }
        });
    }
}

customElements.define('liked-list', LikedList);
