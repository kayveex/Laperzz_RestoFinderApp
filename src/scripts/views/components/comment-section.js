/* eslint-disable no-useless-constructor */
class CommentSection extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const comments = JSON.parse(this.getAttribute('comments'));
		this.render(comments);
	}

	emptyContent() {
		this.innerHTML = '';
	}

	render(comments) {
		this.emptyContent();
		this.renderAll(comments);
	}

	renderAll(comments) {
		const commentSection = document.createElement('section');
		commentSection.id = 'comment_section';
		commentSection.innerHTML = `
            ${comments.map(comment => `
                <div class="comment_item">
                    <div class="profile">
                        <img src="webAssets/default_profile.png" alt="Default Profile Picture">
                    </div>
                    <div class="comment_content">
                        <h3 tabindex="0">${comment.name}</h3>
                        <p tabindex="0">${comment.review}</p>
                        <h5 tabindex="0">${comment.date}</h5>
                    </div>
                </div> 
            `).join('')}
        `;
		this.appendChild(commentSection);
	}
}
customElements.define('comment-section', CommentSection);
