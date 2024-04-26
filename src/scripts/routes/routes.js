/*************************************************************************
 * Routes Registration
 **************************************************************************/

// Import Sections
import RestoLists from '../views/pages/resto-list';
import RestoDetail from '../views/pages/resto-detail';
import RestoLiked from '../views/pages/resto-liked';

// Content
const routes = {
	'/': RestoLists,
	'/resto-list': RestoLists,
	'/detail/:id': RestoDetail,
	'/liked': RestoLiked,
};

export default routes;
