/**
 * Animations JavaScript file for Alex Chen's portfolio
 * Handles scroll-triggered animations using Intersection Observer API
 */

document.addEventListener('DOMContentLoaded', function () {
    // Initialize scroll animations
    initScrollAnimations();

    // Initialize staggered animations
    initStaggeredAnimations();
});

/**
 * Initialize scroll-triggered animations using Intersection Observer
 */
function initScrollAnimations() {
    // Select all elements with the animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    if (animatedElements.length === 0) return;

    // Create the observer options
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    // Create the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is in the viewport
            if (entry.isIntersecting) {
                // Add the in-view class
                entry.target.classList.add('in-view');

                // If the element should only animate once, unobserve it
                if (entry.target.dataset.once === 'true') {
                    observer.unobserve(entry.target);
                }
            } else {
                // If the element should reset when out of view
                if (!entry.target.dataset.once) {
                    entry.target.classList.remove('in-view');
                }
            }
        });
    }, observerOptions);

    // Observe each animated element
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * Initialize staggered animations for elements that should animate in sequence
 */
function initStaggeredAnimations() {
    // Find all elements with staggered animation classes
    const staggeredGroups = document.querySelectorAll('[data-stagger-group]');

    staggeredGroups.forEach(group => {
        const elements = group.querySelectorAll('[data-stagger]');

        // Sort elements by their stagger value
        const sortedElements = Array.from(elements).sort((a, b) => {
            return parseInt(a.dataset.stagger) - parseInt(b.dataset.stagger);
        });

        // Apply increasing delay to each element
        sortedElements.forEach((element, index) => {
            const delay = 0.1 * index;
            element.style.transitionDelay = `${delay}s`;
        });
    });
}

/**
 * Trigger animations manually for specific elements
 * @param {string} selector - CSS selector for the elements to animate
 */
function triggerAnimation(selector) {
    const elements = document.querySelectorAll(selector);

    elements.forEach((element, index) => {
        // Add a slight delay between each element
        setTimeout(() => {
            element.classList.add('in-view');
        }, index * 100);
    });
}

// Export functions for use in other scripts
window.portfolioAnimations = {
    triggerAnimation: triggerAnimation,
    initScrollAnimations: initScrollAnimations
};