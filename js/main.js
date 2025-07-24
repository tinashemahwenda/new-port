/**
 * Main JavaScript file for Alex Chen's portfolio
 */

document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuButton = document.getElementById('close-mobile-menu');
    const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
    const mobileMenuLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
    const menuItems = mobileMenu ? mobileMenu.querySelectorAll('.menu-item-appear') : [];

    if (mobileMenuButton && mobileMenu) {
        // Open menu
        mobileMenuButton.addEventListener('click', function () {
            openMenu();
        });

        // Close menu with X button
        if (closeMenuButton) {
            closeMenuButton.addEventListener('click', function () {
                closeMenu();
            });
        }

        // Close menu when clicking on backdrop
        if (mobileMenuBackdrop) {
            mobileMenuBackdrop.addEventListener('click', function () {
                closeMenu();
            });
        }

        // Close menu when clicking on a link
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function () {
                closeMenu();
            });
        });

        // Close menu when pressing Escape key
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && !mobileMenu.classList.contains('translate-x-full')) {
                closeMenu();
            }
        });
    }

    // Function to open the mobile menu
    function openMenu() {
        if (mobileMenu) {
            mobileMenu.classList.remove('translate-x-full');
            document.body.classList.add('overflow-hidden', 'mobile-menu-open');

            // Show backdrop
            if (mobileMenuBackdrop) {
                mobileMenuBackdrop.classList.add('active');
            }

            // Animate menu items
            menuItems.forEach(item => {
                setTimeout(() => {
                    item.classList.add('active');
                }, 100);
            });
        }
    }

    // Function to close the mobile menu
    function closeMenu() {
        if (mobileMenu) {
            mobileMenu.classList.add('translate-x-full');
            document.body.classList.remove('overflow-hidden', 'mobile-menu-open');

            // Hide backdrop
            if (mobileMenuBackdrop) {
                mobileMenuBackdrop.classList.remove('active');
            }

            // Reset menu item animations
            menuItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update URL without page reload
                history.pushState(null, null, targetId);
            }
        });
    });

    // Active link highlighting
    function setActiveLink() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('nav a');

        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');

            // Check if the link matches the current path
            if (currentPath.endsWith(linkPath) ||
                (currentPath === '/' && linkPath === 'index.html') ||
                (currentPath.endsWith('/index.html') && linkPath === 'index.html')) {
                link.classList.add('font-bold', 'underline');
            } else {
                link.classList.remove('font-bold', 'underline');
            }
        });
    }

    // Call on page load
    setActiveLink();
});