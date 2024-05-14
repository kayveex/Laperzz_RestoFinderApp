
const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="ri-heart-add-2-fill" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="ri-heart-fill" aria-hidden="true"></i>
    </button>
`;

export {createLikeButtonTemplate, createLikedButtonTemplate};
