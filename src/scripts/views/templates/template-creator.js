/*************************************************************************
 * This Template is used for Jest Testing
 **************************************************************************/
/* eslint-disable new-cap */
/* eslint-disable indent */
/* eslint-disable arrow-parens */

import API_ENDPOINT from '../../globals/api-endpoint';

const createRestaurantDetailTemplate = (restaurant) => `
  <img class="restaurant__picture" data-src="${API_ENDPOINT.MEDIUM_IMAGE(restaurant.pictureId)}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h2 class="restaurant__name">${restaurant.name}</h2>
    <h3>Information</h3>
    <div class="restaurant__tagline">
      <h4>City</h4>
      <p>${restaurant.city}</p>
    </div>
    <div class="restaurant__release-date">
      <h4>Address</h4>
      <p>${restaurant.address}</p>
    </div>
    <div class="restaurant__rating">
      <h4>Rating: </h4>
      <p>${restaurant.rating}</p>
    </div>
  </div>
  <div class="restaurant__overview">
    <h3>Overview</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant__menu">
    <h3>Menus</h3>
    <div class="restaurant__menu-grid">
      <div class="restaurant__foods">
        <h4>Foods</h4>
        <div class="menu-grid">
          ${createMenuGrid(restaurant.menus.foods)}
        </div>
      </div>
      <div class="restaurant__drinks">
        <h4>Drinks</h4>
        <div class="menu-grid">
          ${createMenuGrid(restaurant.menus.drinks)}
        </div>
      </div>
    </div>
  </div>
  <div class="restaurant__reviews">
    <h3>Customer Reviews</h3>
    <ul>
      ${restaurant.customerReviews.map((review) => `
        <li class="reviewcs">
          <div class="review__header">
            <p class="review__name">${review.name}</p>
            <p class="review__date">${review.date}</p>
          </div>
          <p class="review__content">${review.review}</p>
        </li>
      `).join('')}
    </ul>
  </div>
`;

const createMenuGrid = (menuItems) => {
  const filteredMenuItems = menuItems.filter((item) => item.name);

  const itemsPerColumn = Math.ceil(filteredMenuItems.length / 3);
  const column1 = filteredMenuItems.slice(0, itemsPerColumn);
  const column2 = filteredMenuItems.slice(itemsPerColumn);

  const createColumnHTML = (column) => `
    <ul>
      ${column.map((item) => `<li class="menuRestoran">${item.name}</li>`).join('')}
    </ul>
  `;

  return `
    <div class="menu-column">${createColumnHTML(column1)}</div>
    <div class="menu-column">${createColumnHTML(column2)}</div>
  `;
};

const createRestaurantItemTemplate = (restaurant) => `
      <div class="resto_item restaurant-item">
        <div tabindex="0" class="location_item">
            <h4 aria-label="Restaurant location: ${restaurant.city}">${restaurant.city}</h4>
        </div>
        <img tabindex="0" class="img_resto" src="${API_ENDPOINT.MEDIUM_IMAGE(restaurant.pictureId)}" alt="restaurant image">
        <div class="resto_item_textwrap">
            <h5 tabindex="0" class="rating_item">Rating: ${restaurant.rating} / 5</h5>
            <h3 tabindex="0" aria-label="Restaurant name: ${restaurant.name}" class="title_item restaurant__name">
                <a href="/#/detail/${restaurant.id}" class="restaurant__name">${restaurant.name}</a>
            </h3>
            <p tabindex="0" aria-label="Restaurant description: ${restaurant.description}" class="desc_item">${restaurant.description.slice(0, 100)}...</p>
        </div>
      </div>
`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="ri-heart-add-2-fill" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="ri-heart-fill" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
