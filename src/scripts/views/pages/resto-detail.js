/*************************************************************************
 * Restaurant Detail Page
 **************************************************************************/
/* eslint-disable new-cap */
import UrlParser from '../../routes/url-parser';
import RestoDBSource from '../../data/restodb-source';
import API_ENDPOINT from '../../globals/api-endpoint.js';
import '../components/restoBannerDetail.js';

const RestoDetail = {
	async render() {
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		const resto = await RestoDBSource.restoDetail(url.id);
		console.log(resto.name);
		console.log(API_ENDPOINT.IMAGE_LARGE(resto.pictureId));

		return `
            <resto-banner-detail srcBackground="${API_ENDPOINT.IMAGE_LARGE(resto.pictureId)}" 
				title="${resto.name}" 
				subtitle="${resto.city}">
			</resto-banner-detail>
        `;
	},
};

export default RestoDetail;
