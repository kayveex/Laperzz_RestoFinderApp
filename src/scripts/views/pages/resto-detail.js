/*************************************************************************
 * Restaurant Detail Page
 **************************************************************************/
/* eslint-disable new-cap */
import UrlParser from '../../routes/url-parser';
import RestoDBSource from '../../data/restodb-source';
import API_ENDPOINT from '../../globals/api-endpoint.js';
import '../components/components.js';

const RestoDetail = {
	async render() {
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		const resto = await RestoDBSource.restoDetail(url.id);
		console.log(resto.id);
		return `
            <resto-banner-detail srcBackground="${API_ENDPOINT.IMAGE_LARGE(resto.pictureId)}" 
				title="${resto.name}" 
				subtitle="${resto.city}">
			</resto-banner-detail>
			<like-button IdFromAPI="${resto.id}"></like-button>
			<detail-info rating = "${resto.rating}" 
				address="${resto.address}" 
				categories='${JSON.stringify(resto.categories)}' >
			</detail-info>
			<desc-info description="${resto.description}" ></desc-info>
			<food-menu foods='${JSON.stringify(resto.menus.foods)}' drinks='${JSON.stringify(resto.menus.drinks)}'></food-menu>
			<review-form id="${resto.id}"></review-form>
			<comment-section comments='${JSON.stringify(resto.customerReviews)}'></comment-section>
        `;
	},

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
	},
};

export default RestoDetail;
