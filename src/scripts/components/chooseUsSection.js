class chooseUsSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    emptyContent() {
        this.innerHTML = '';
    }

    render() {
        this.emptyContent();

        this.innerHTML = `
            <section id="choose_us">
                <h2>Why Choose Us?</h2>
                <h3>Over the millions of peoples are happy with us</h3>
                <div class="wrapper_choose_us">
                <div class="choose_us_item">
                    <div class="wrapper_content">
                    <i class="ri-shake-hands-fill ri-10x yellow_color"></i>
                    <h4 class="choose_us_title">Trusted</h4>
                    <p class="choose_us_desc">
                        We always maintain information so that it is always accurate and reliable.
                    </p>
                    </div>
                </div>
                <div class="choose_us_item">
                    <div class="wrapper_content">
                    <i class="ri-refresh-fill ri-10x yellow_color"></i>
                    <h4 class="choose_us_title">Up-to-date</h4>
                    <p class="choose_us_desc">
                        We always update our database, in real time.
                    </p>
                    </div>
                </div>
                <div class="choose_us_item">
                    <div class="wrapper_content">
                    <i class="ri-shapes-fill ri-10x yellow_color"></i>
                    <h4 class="choose_us_title">Keep It Simple</h4>
                    <p class="choose_us_desc">
                        The display is intuitive, inclusive, and of course easy to use for all ages.
                    </p>
                    </div>
                </div>
                </div>
            </section>
        `;
    }
}

customElements.define('choose-us-section', chooseUsSection);