/*************************************************************************
 * Restaurant List Page
 **************************************************************************/
// Imports
import '../components/heroSection.js';
import '../components/exploreRestoSection.js';
import '../components/chooseUsSection.js';

const RestoLists = {
	async render() {
		return `
            <hero-section></hero-section>
			<explore-resto-section></explore-resto-section>
			<choose-us-section></choose-us-section>
        `;
	},
};

export default RestoLists;
