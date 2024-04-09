class footerLaperzz extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    emptyContent() {
        this.innerHTML = '';
    }

    getCurrentYear() {
        return new Date().getFullYear();
    }

    render() {
        this.emptyContent();

        // Render All
        this.innerHTML = `
        <footer id="footer_laperzz">
            <h4 tabindex="0" >© ${this.getCurrentYear()} Laperzz App, Made with 💖 by Kayveex.</h4>
        </footer>
        `;
    }
}

customElements.define('footer-laperzz', footerLaperzz);