/*************************************************************************
 * API ENDPOINT
 **************************************************************************/

// Imports
import CONFIG from './config';

const API_ENDPOINT = {
	RESTO_LISTS: `${CONFIG.BASE_URL}list`,
	RESTO_DETAIL: id => `${CONFIG.BASE_URL}detail/${id}`,
	SEARCH_RESTO: query => `${CONFIG.BASE_URL}search?q=${query}`,
	ADD_REVIEW: `${CONFIG.BASE_URL}review`,
	IMAGE_SMALL: imageId => `${CONFIG.BASE_IMAGE_URL}small/${imageId}`,
	IMAGE_MEDIUM: imageId => `${CONFIG.BASE_IMAGE_URL}medium/${imageId}`,
	IMAGE_LARGE: imageId => `${CONFIG.BASE_IMAGE_URL}large/${imageId}`,
};

export default API_ENDPOINT;
