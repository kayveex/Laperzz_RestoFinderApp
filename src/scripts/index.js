/*************************************************************************
 * Main JavaScript File
 **************************************************************************/

// CSS Import
import '../styles/main.css';

// Component Import
import './views/components/components.js';

// Import RemixIcon
import 'remixicon/fonts/remixicon.css';

// Import Regenerator Runtime
import 'regenerator-runtime';

// Import App
import App from './views/app';

// Import Service Worker Register
import swRegister from './utils/sw-register';

// Function Main
function main() {

}

// DOMContentLoaded Event
document.addEventListener('DOMContentLoaded', main);

const app = new App();

window.addEventListener('hashchange', () => {
	app.renderPage();
});

window.addEventListener('load', () => {
	app.renderPage();
	swRegister();
});
