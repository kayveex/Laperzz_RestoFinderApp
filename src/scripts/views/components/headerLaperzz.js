class HeaderLaperzz extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	emptyContent() {
		this.innerHTML = '';
	}

	render() {
		this.emptyContent();
		this.renderNavbar();
		this.renderMobileNavbar();
		this.setupEventListeners();
		this.setupMediaQuery();
	}

	renderNavbar() {
		this.innerHTML += `
            <nav id="navbar_laperzz">
                <img tabindex="0" id="navbar_logo" src="webAssets/logo_laperzz.png" alt="laperzzLogo">
                <ul class="navlist">
                    <li class="nav_item"><a href="/">Home</a></li>
                    <li class="nav_item"><a href="#/liked">Favorite</a></li>
                    <li class="nav_item"><a target="_blank" href="https://www.linkedin.com/in/kornelius-rhesa/">About Us</a></li>
                </ul>
            </nav>
        `;
	}

	renderMobileNavbar() {
		this.innerHTML += `
            <nav id="navbar_laperzz_mobile">
                <img tabindex="0" id="navbar_logo_mob" src="webAssets/logo_laperzz.png" alt="laperzzLogoMobile">
                <button id="hamburger_button" aria-label="Menu Toggle">
                    <i class="ri-menu-line"></i>
                </button>
            </nav>
            <section id="mob_drawer">
                <ul class="mob_list">
                    <li class="mob_item"><a href="/">Home</a></li>
                    <li class="mob_item"><a href="#/liked">Favorite</a></li>
                    <li class="mob_item"><a target="_blank" href="https://www.linkedin.com/in/kornelius-rhesa/">About Us</a></li>
                </ul>
            </section>
        `;
	}

	setupEventListeners() {
		const hamburgerButton = this.querySelector('#hamburger_button');
		const drawerElement = this.querySelector('#mob_drawer');

		hamburgerButton.addEventListener('click', event => {
			drawerElement.classList.toggle('open');
			event.stopPropagation();
		});

		document.body.addEventListener('click', () => {
			drawerElement.classList.remove('open');
		});
	}

	setupMediaQuery() {
		const mediaQuery = window.matchMedia('(max-width: 640px)');
		const navbarLaperzz = this.querySelector('#navbar_laperzz');
		const navbarLaperzzMobile = this.querySelector('#navbar_laperzz_mobile');

		const handleMediaQuery = media => {
			if (media.matches) {
				navbarLaperzz.style.display = 'none';
				navbarLaperzzMobile.style.display = 'flex';
			} else {
				navbarLaperzz.style.display = 'flex';
				navbarLaperzzMobile.style.display = 'none';
			}
		};

		handleMediaQuery(mediaQuery);
		mediaQuery.addEventListener('change', handleMediaQuery);
	}
}

customElements.define('header-laperzz', HeaderLaperzz);
