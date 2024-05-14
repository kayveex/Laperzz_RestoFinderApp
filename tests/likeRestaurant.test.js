/* eslint-disable object-curly-spacing */

/* eslint-disable indent */
/* eslint-disable no-undef */

import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };

    beforeEach(() => {
        addLikeButtonContainer();
    });

    it('should show the like button when the restaurant has not been liked before', async () => {
        const likeButtonContainer = await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        await LikeButtonInitiator.init({
            likeButtonContainer,
            restaurant: { id: 1 },
        });

        expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
    });

    it('should not show the unlike button when the restaurant has not been liked before', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
        await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
            id: 1,
        },
        });
        expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
    });

    it('should be able to like the restaurant', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
        await LikeButtonInitiator.init({
          likeButtonContainer: document.querySelector('#likeButtonContainer'),
          restaurant: {
            id: 1,
          },
        });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
        expect(restaurant).toEqual({ id: 1 });
      });
  });
