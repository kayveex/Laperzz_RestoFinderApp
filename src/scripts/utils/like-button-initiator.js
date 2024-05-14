/*************************************************************************
 * This Template is used for Jest Testing
 **************************************************************************/

/* eslint-disable capitalized-comments */
/* eslint-disable no-implicit-coercion */
/* eslint-disable object-curly-spacing */
/* eslint-disable indent */

import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = FavoriteRestaurantIdb;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();
    // this._likeButton = document.querySelector('#likeButton');
    this._likeButton = this._likeButtonContainer.querySelector('#likeButton');
    this._likeButton.addEventListener('click', this._likeButtonHandler.bind(this));
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();
    // this._likeButton = document.querySelector('#likeButton');
    this._likeButton = this._likeButtonContainer.querySelector('#likeButton');
    this._likeButton.addEventListener('click', this._likedButtonHandler.bind(this));
  },

  async _likeButtonHandler() {
    await this._favoriteRestaurants.putRestaurant(this._restaurant);
    this._renderButton();
  },

  async _likedButtonHandler() {
    await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
    this._renderButton();
  },
};

export default LikeButtonInitiator;
