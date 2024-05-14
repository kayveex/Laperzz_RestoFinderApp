/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-spacing */
/* eslint-disable new-cap */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable no-undef */
 
const assert = require('assert');

Feature('Liking Restaurants');
Before(({ I }) => {
  I.amOnPage('/#/liked');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#loading_text');
  I.see('Restaurant Not Found!', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Restaurant Not Found!', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant__name');
  const firstRestaurant = locate('.restaurant__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/liked');
  I.seeElement('.restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant__name a');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', async ({ I }) => {
    I.see('Restaurant Not Found!', '.restaurant-item__not__found');
    I.amOnPage('/');
    I.seeElement('.restaurant__name a');
    const firstRestaurant = locate('.restaurant__name a').first();
    const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/liked');
    I.seeElement('.restaurant__name a');
    const firstRestaurantLiked = locate('.restaurant__name a').first();
    const firstRestaurantLikedName = await I.grabTextFrom(firstRestaurantLiked);
    I.click(firstRestaurantLiked);

    I.seeElement('#likeButton');
    I.click('#likeButton'); 

    I.amOnPage('/#/liked');
    I.dontSeeElement('.restaurant-item'); 

    I.fillField('#query', firstRestaurantName);
    I.pressKey('Enter');

    I.seeElement('.restaurant-item__not__found');
});
