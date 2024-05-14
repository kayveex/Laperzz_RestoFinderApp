/* eslint-disable no-useless-constructor */
import {createLikeButtonTemplate, createLikedButtonTemplate} from './subcomponent/like-button';
import FavoriteRestoIdb from '../../data/favorite-restaurant-idb.js';
import RestoDBSource from '../../data/therestaurantdb-source.js';
class LikeButton extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const IdFromAPI = this.getAttribute('IdFromAPI');
		this.render(IdFromAPI);
	}

	emptyContent() {
		this.innerHTML = '';
	}

	async render(IdFromAPI) {
		this.emptyContent();
		const checkResult = await this.isTheIDExist(IdFromAPI);
		if (checkResult === true) {
			this.renderLiked();
		} else {
			this.renderLike();
		}
	}

	async isTheIDExist(IdFromAPI) {
		const checkId = await FavoriteRestoIdb.getRestaurant(IdFromAPI);
		console.log(checkId);

		if (checkId && checkId.id !== undefined) {
			return true;
		}

		return false;
	}

	async getRestoData(IdFromAPI) {
		const resto = await RestoDBSource.detailRestaurant(IdFromAPI);
		return resto;
	}

	renderLike() {
		this.innerHTML = createLikeButtonTemplate();
		const likeButton = this.querySelector('#likeButton');
		likeButton.addEventListener('click', async () => {
			const IdFromAPI = this.getAttribute('IdFromAPI');
			const restoData = await this.getRestoData(IdFromAPI);
			const extractData = this.extractRestoData(restoData);
			await FavoriteRestoIdb.putRestaurant(extractData);
			this.render(IdFromAPI);
		});
	}

	renderLiked() {
		this.innerHTML = createLikedButtonTemplate();
		const likedButton = this.querySelector('#likeButton');
		likedButton.addEventListener('click', async () => {
			const IdFromAPI = this.getAttribute('IdFromAPI');
			await FavoriteRestoIdb.deleteRestaurant(IdFromAPI);
			this.render(IdFromAPI);
		});
	}

	extractRestoData(resto) {
		return {
			id: resto.id,
			name: resto.name,
			city: resto.city,
			address: resto.address,
			pictureId: resto.pictureId,
			rating: resto.rating,
			description: resto.description,
		};
	}
}
customElements.define('like-button', LikeButton);
