import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
	async renderPage() {
		try {
			const url = UrlParser.parseActiveUrlWithCombiner();
			const page = routes[url];
			const main = document.getElementById('mainContent');

			if (!page) {
				this.renderNotFoundPage(main);
				return;
			}

			main.innerHTML = await page.render();
			await page.afterRender();

			const skipLink = document.querySelector('.skip-link');
			skipLink.addEventListener('click', e => {
				e.preventDefault();
				const main = document.querySelector('#mainContent');
				main.focus();
			});
		} catch (error) {
			console.error('Error rendering page:', error);
		}
	}

	renderNotFoundPage(main) {
		main.innerHTML = '<h1 class="not-found">Page Not Found!</h1>';
	}
}

export default App;
