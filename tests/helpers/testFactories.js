/* eslint-disable object-curly-spacing */
/* eslint-disable arrow-parens */
/* eslint-disable indent */
/* eslint-disable quotes */
import LikeButtonInitiator from "../../src/scripts/utils/like-button-initiator";

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
    const likeButtonContainer = document.createElement('div');
    likeButtonContainer.id = 'likeButtonContainer';
    document.body.appendChild(likeButtonContainer);

    await LikeButtonInitiator.init({
        likeButtonContainer,
        restaurant,
    });

    return likeButtonContainer;
};

export { createLikeButtonPresenterWithRestaurant };
