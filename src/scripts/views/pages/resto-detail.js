/*************************************************************************
 * Restaurant Detail Page
 **************************************************************************/
/* eslint-disable new-cap */
import UrlParser from '../../routes/url-parser';
import RestoDBSource from '../../data/restodb-source';
import API_ENDPOINT from '../../globals/api-endpoint.js';
import '../components/restoBannerDetail.js';
import '../components/detail-info.js';
import '../components/desc-info.js';
import '../components/food-menu.js';

const RestoDetail = {
	async render() {
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		const resto = await RestoDBSource.restoDetail(url.id);
		return `
            <resto-banner-detail srcBackground="${API_ENDPOINT.IMAGE_LARGE(resto.pictureId)}" 
				title="${resto.name}" 
				subtitle="${resto.city}">
			</resto-banner-detail>
			<detail-info rating = "${resto.rating}" 
				address="${resto.address}" 
				categories='${JSON.stringify(resto.categories)}' >
			</detail-info>
			<desc-info description="${resto.description}" ></desc-info>
			<food-menu foods='${JSON.stringify(resto.menus.foods)}' drinks='${JSON.stringify(resto.menus.drinks)}'></food-menu>
        `;
	},
};

export default RestoDetail;
