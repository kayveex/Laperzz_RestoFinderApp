/* eslint-disable arrow-parens */
/* eslint-disable new-cap */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import API_ENDPOINT from '../../../globals/api-endpoint';

const createRestoItemTemplate = (resto) => `
    <div class="resto_item restaurant-item">
        <div tabindex="0" class="location_item">
            <h4 aria-label="Restaurant location: ${resto.city}">${resto.city}</h4>
        </div>
        <img tabindex="0" class="img_resto lazyload" data-src="${API_ENDPOINT.MEDIUM_IMAGE(resto.pictureId)}" alt="restaurant image">
        <div class="resto_item_textwrap">
            <h5 tabindex="0" class="rating_item">Rating: ${resto.rating} / 5</h5>
            <h3 tabindex="0" aria-label="Restaurant name: ${resto.name}" class="title_item restaurant__name">
                <a href="/#/detail/${resto.id}" class="restaurant__name">${resto.name}</a>
            </h3>
            <p tabindex="0" aria-label="Restaurant description: ${resto.description}" class="desc_item">${resto.description.slice(0, 100)}...</p>
        </div>
    </div>
`;

export default createRestoItemTemplate;
