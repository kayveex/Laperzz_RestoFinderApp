
/* eslint-disable object-shorthand */
/* eslint-disable no-useless-constructor */
import '../../data/restodb-source.js';
import RestoDBSource from '../../data/restodb-source.js';
const Swal = require('sweetalert2');

class ReviewForm extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const id = this.getAttribute('id');
		this.render(id);
	}

	emptyContent() {
		this.innerHTML = '';
	}

	render(id) {
		this.emptyContent();
		this.renderAll(id);
	}

	renderAll(id) {
		const formSection = document.createElement('section');
		formSection.id = 'review_section';
		formSection.innerHTML = `
            <div class="review_title">
                <i class="ri-search-eye-line"></i>
                <h3 tabindex="0">Customer Review</h3>
            </div>
            <form id="review_form">
                <input tabindex="0" type="text" name="name_input" id="name_input" placeholder="Your name..." aria-label="Insert your name">
                <h5 tabindex="0" id="error_name">Test</h5>
                <textarea tabindex="0" placeholder="Review about the restaurant..." name="review_input" id="review_input" cols="30" rows="10"></textarea>
                <h5 tabindex="0" id="error_review"></h5>
                <button tabindex="0" aria-label="Review Submit Button" type="submit" id="submit_review">Submit</button>
            </form>
        `;
		this.appendChild(formSection);

		// Form selector
		const reviewForm = formSection.querySelector('#review_form');
		const nameInput = formSection.querySelector('#name_input');
		const reviewInput = formSection.querySelector('#review_input');
		const errorName = formSection.querySelector('#error_name');
		const errorReview = formSection.querySelector('#error_review');

		// Submit event
		reviewForm.addEventListener('submit', async e => {
			e.preventDefault();

			// Custom validation
			if (nameInput.value.trim() === '' && reviewInput.value.trim() === '') {
				errorName.textContent = 'Name cannot be empty';
				errorName.style.display = 'block';
				errorReview.textContent = 'Review cannot be empty';
				errorReview.style.display = 'block';
				return;
			}

			if (nameInput.value.trim() === '') {
				errorName.textContent = 'Name cannot be empty';
				errorName.style.display = 'block';
				return;
			}

			if (reviewInput.value.trim() === '') {
				errorReview.textContent = 'Review cannot be empty';
				errorReview.style.display = 'block';
				return;
			}

			if (nameInput.value.length < 3) {
				errorName.textContent = 'Name must be at least 3 characters';
				errorName.style.display = 'block';
			}

			if (nameInput && reviewInput) {
				const reviewData = {
					id: id,
					name: nameInput.value,
					review: reviewInput.value,
				};

				try {
					const startTime = performance.now();
					RestoDBSource.addReview(reviewData);
					const endTime = performance.now();

					const apiLatency = endTime - startTime;
					const timerDuration = Math.max(apiLatency, 1000);

					await Swal.fire({
						position: 'center',
						icon: 'success',
						title: 'Sucessfully added the review!',
						showConfirmButton: false,
						background: '#212330',
						color: 'white',
						timer: timerDuration,
					});

					// Reload the page
					location.reload();

					// Reset form
					nameInput.value = '';
					reviewInput.value = '';
				} catch (error) {
					console.error('Error sending review:', error);
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Something went wrong while adding the review. Please try again later.',
						background: '#212330',
						color: 'white',
					});
				}
			}
		});
	}
}
customElements.define('review-form', ReviewForm);
