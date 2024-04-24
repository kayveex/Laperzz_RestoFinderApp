/*************************************************************************
 * Routes Registration
 **************************************************************************/

// Import Sections
import RestoLists from '../views/pages/resto-list';
import RestoDetail from '../views/pages/resto-detail';

// Content
const routes = {
	'/': RestoLists,
	'/resto-list': RestoLists,
	'/detail/:id': RestoDetail,
};

export default routes;
