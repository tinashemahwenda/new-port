/**
 * Form JavaScript file for Alex Chen's portfolio
 * Handles contact form validation and submission
 */

document.addEventListener('DOMContentLoaded', function () {
    // Initialize form functionality
    initContactForm();
});

/**
 * Initialize contact form functionality
 */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');
    const formError = document.getElementById('form-error');

    if (!contactForm) return;

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Reset form messages
        formSuccess.classList.add('hidden');
        formError.classList.add('hidden');

        // Get form data
        const formData = {
            name: contactForm.elements.name.value.trim(),
            email: contactForm.elements.email.value.trim(),
            subject: contactForm.elements.subject.value.trim(),
            message: contactForm.elements.message.value.trim()
        };

        // Validate form data
        if (!validateForm(formData)) {
            formError.textContent = 'Please fill out all fields correctly.';
            formError.classList.remove('hidden');
            return;
        }

        // Simulate form submission (in a real project, this would be an API call)
        submitForm(formData)
            .then(() => {
                // Show success message
                formSuccess.classList.remove('hidden');

                // Reset form
                contactForm.reset();

                // Scroll to success message
                formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
            })
            .catch(error => {
                // Show error message
                formError.textContent = error.message || 'There was an error sending your message. Please try again later.';
                formError.classList.remove('hidden');
            });
    });
}

/**
 * Validate form data
 * @param {Object} formData - The form data to validate
 * @returns {boolean} - Whether the form data is valid
 */
function validateForm(formData) {
    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        return false;
    }

    return true;
}

/**
 * Submit form data (simulated)
 * @param {Object} formData - The form data to submit
 * @returns {Promise} - A promise that resolves when the form is submitted
 */
function submitForm(formData) {
    return new Promise((resolve, reject) => {
        // Simulate API call with a timeout
        setTimeout(() => {
            // Simulate successful submission (90% success rate)
            const isSuccess = Math.random() < 0.9;

            if (isSuccess) {
                resolve();
            } else {
                reject(new Error('Network error. Please try again.'));
            }
        }, 1500);
    });
}

// Add input validation on blur
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    if (!contactForm) return;

    // Add validation to each input field
    const inputs = contactForm.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        input.addEventListener('blur', function () {
            validateInput(this);
        });
    });

    // Special validation for email field
    const emailInput = contactForm.querySelector('#email');
    if (emailInput) {
        emailInput.addEventListener('blur', function () {
            validateEmail(this);
        });
    }
});

/**
 * Validate a single input field
 * @param {HTMLElement} input - The input element to validate
 */
function validateInput(input) {
    if (input.value.trim() === '') {
        input.classList.add('border-red-500');

        // Add error message if it doesn't exist
        let errorMessage = input.parentNode.querySelector('.error-message');
        if (!errorMessage) {
            errorMessage = document.createElement('p');
            errorMessage.className = 'text-red-500 text-sm mt-1 error-message';
            errorMessage.textContent = 'This field is required';
            input.parentNode.appendChild(errorMessage);
        }
    } else {
        input.classList.remove('border-red-500');

        // Remove error message if it exists
        const errorMessage = input.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }
}

/**
 * Validate email field
 * @param {HTMLElement} input - The email input element to validate
 */
function validateEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (input.value.trim() !== '' && !emailRegex.test(input.value.trim())) {
        input.classList.add('border-red-500');

        // Add error message if it doesn't exist
        let errorMessage = input.parentNode.querySelector('.error-message');
        if (!errorMessage) {
            errorMessage = document.createElement('p');
            errorMessage.className = 'text-red-500 text-sm mt-1 error-message';
            errorMessage.textContent = 'Please enter a valid email address';
            input.parentNode.appendChild(errorMessage);
        } else {
            errorMessage.textContent = 'Please enter a valid email address';
        }
    }
}