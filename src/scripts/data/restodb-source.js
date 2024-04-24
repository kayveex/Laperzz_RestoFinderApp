/*************************************************************************
 * Restaurants Database Source
 **************************************************************************/
// Imports
import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestoDBSource {
	static async restoLists() {
		const response = await fetch(API_ENDPOINT.RESTO_LISTS);
		const responseJson = await response.json();
		console.log(responseJson.restaurants);
		return responseJson.restaurants;
	}

	static async restoDetail(id) {
		try {
			// eslint-disable-next-line new-cap
			const response = await fetch(API_ENDPOINT.RESTO_DETAIL(id));
			const responseJson = await response.json();

			if (responseJson.error) {
				throw new Error(responseJson.message);
			}

			const {restaurant} = responseJson;
			console.log(restaurant);
			return restaurant;
		} catch (error) {
			console.error('Error getting restaurant data:', error);
			throw error;
		}
	}

	static async searchResto(query) {
		// eslint-disable-next-line new-cap
		const response = await fetch(API_ENDPOINT.SEARCH_RESTO(query));
		const responseJson = await response.json();
		return responseJson.restaurants;
	}

	static async addReview(review) {
		const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Auth-Token': CONFIG.API_KEY,
			},
			body: JSON.stringify(review),
		});
		return response.json();
	}
}

export default RestoDBSource;
