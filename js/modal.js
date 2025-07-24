/**
 * Modal JavaScript file for Alex Chen's portfolio
 * Handles the project modal/lightbox system
 */

document.addEventListener('DOMContentLoaded', function () {
    // Initialize modal functionality
    initModal();
});

/**
 * Initialize modal functionality
 */
function initModal() {
    // Get modal elements
    const modal = document.getElementById('project-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const closeModalButton = document.getElementById('close-modal');
    const modalContent = document.getElementById('modal-content');

    // Get all elements that should trigger the modal
    const modalTriggers = document.querySelectorAll('.project-modal-trigger');
    const featuredModalTrigger = document.getElementById('open-featured-modal');

    if (!modal || !modalContent) return;

    // Add event listeners to all modal triggers
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
            const projectId = this.dataset.project;
            openModal(projectId);
        });
    });

    // Add event listener to featured project modal trigger
    if (featuredModalTrigger) {
        featuredModalTrigger.addEventListener('click', function (e) {
            e.preventDefault();
            openModal('featured');
        });
    }

    // Close modal when clicking the close button
    if (closeModalButton) {
        closeModalButton.addEventListener('click', closeModal);
    }

    // Close modal when clicking the overlay
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    // Close modal when pressing Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

    // Prevent clicks inside the modal from closing it
    modal.querySelector('.relative').addEventListener('click', function (e) {
        e.stopPropagation();
    });
}

/**
 * Open the modal with the specified project content
 * @param {string} projectId - The ID of the project to display
 */
function openModal(projectId) {
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');

    if (!modal || !modalContent) return;

    // Load project content based on projectId
    const content = getProjectContent(projectId);
    modalContent.innerHTML = content;

    // Show the modal
    modal.classList.remove('hidden');

    // Add animation class after a small delay (for transition to work)
    setTimeout(() => {
        modal.classList.add('opacity-100');
        modal.classList.remove('opacity-0');
    }, 10);

    // Disable scrolling on the body
    document.body.style.overflow = 'hidden';

    // Focus the close button for accessibility
    const closeButton = document.getElementById('close-modal');
    if (closeButton) {
        closeButton.focus();
    }
}

/**
 * Close the modal
 */
function closeModal() {
    const modal = document.getElementById('project-modal');

    if (!modal) return;

    // Add animation class
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0');

    // Hide the modal after animation completes
    setTimeout(() => {
        modal.classList.add('hidden');

        // Re-enable scrolling on the body
        document.body.style.overflow = '';
    }, 300);
}

/**
 * Get the HTML content for a project
 * @param {string} projectId - The ID of the project
 * @returns {string} - The HTML content for the project
 */
function getProjectContent(projectId) {
    // Project content templates
    const projectContent = {
        featured: `
            <div class="project-detail">
                <h2 class="text-heading mb-6">Albinism Konnect App</h2>
                
                <div class="mb-8 aspect-w-16 aspect-h-9">
                    <img src="assets/images/projects/albinism-konnect-background-gray.jpg" alt="Albinism Konnect App" class="object-cover w-full h-full rounded-lg">
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-2">
                    <div>
                        <h3 class="text-lg font-bold mb-2">Role</h3>
                        <p>Lead UX Designer & UI Developer</p>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold mb-2">Timeline</h3>
                        <p>2 months (2025)</p>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold mb-2">Tools</h3>
                        <p>Figma, Protopie, Affinity Designer, Flutter</p>
                    </div>
                </div>
                <p class="mb-6 text-sm">🏆 Awarded 2024 Davis Project for Peace Grant</p>
                <div class="prose max-w-none">
                    <h3>Overview & Main Challenge</h3>
                    <p>People with Albinism in SubSaharan Africa face an extreme and largely silent public health crisis. According to the UN, 98% of people with Albinism in the region don't live past 40. The reason? Skin cancer. It accounts for over 80% of these deaths.<br><br>

                    And the statistics are just one layer of the problem:<br>

                    Stigma and myths isolate people from getting help.
                    Lack of dermatologists means care is inaccessible.
                    And perhaps most dangerously: many don’t know what to look for or how to protect themselves.</p>
                    
                    <h3>Project Goal</h3>
                    <p>We set out to create an accessible mobile platform that:<br>
                        <ul>
                        <li>Educates users with Albinism about skin cancer, prevention, and care</li>
                        <li>Empowers them with tools to track and protect their skin</li>
                        <li>Screens suspicious lesions using machine learning (CNN) – currently under development</li>
                        </ul>
                        These goals helped me understand the main priority for the app and the key USP for the product</p>
                    
                    <h3>My Role</h3>
                    <p>As the lead designer, I was responsible for:</p>
                    <ul>
                        <li>Auditing the original app and identifying pain points</li>
                        <li>Conducting user research with individuals and health workers</li>
                        <li>Redesigning the user interface with accessibility and emotional safety in mind</li>
                        <li>Collaborating with developer and researchers on incorporating the CNN model into the user flow</li>
                        <li>Creating testable prototypes and overseeing usability testing</li>
                    </ul>
                    
                    <h3>The User Experience Problem</h3>
                    <p>When I first opened the original app, I immediately saw issues:</p>
                    <ul>
                        <li> A confusing and inconsistent layout</li>
                        <li>Tiny font sizes, poor contrast — a nightmare for users who already face visual sensitivity</li>
                        <li>Poor choice of graphs and charts design</li>
                        <li>Most critically: a tone that felt clinical, cold, and almost accusatory — the app didn’t feel like it was built for people, but for researchers</li>
                        
                    </ul>
                    <h3 >Old Screens</h3>
                    <div class="mb-8 aspect-w-16 aspect-h-9">
                    <img src="assets/images/projects/old-screen-01.jpg" alt="Albinism Konnect App" class="object-cover w-full h-full rounded-lg">
                    </div>
                    <div class="mb-8 aspect-w-16 aspect-h-9">
                    <img src="assets/images/projects/old-screen-02.jpg" alt="Albinism Konnect App" class="object-cover w-full h-full rounded-lg">
                    </div>
 
 

                    <h3 class="pt-8">The Design Process</h3>
                    <p>All the information I gathered gave me a clear understanding of the problems faced by people using Albinism Konnect App. After the empathizing phase, I managed to define the problem and start crafting a viable solution. In short, here is how I discovered, defined and developed the solution</p>

                     

                        <h5>Discover</h5>

                        <ul><li>UX audit of the current app</li>
                        <li>Created empathy maps from user interviews</li>
                        <li>Reviewed accessibility guidelines for users with low vision and photosensitivity</li></ul>

                        <h5>Define</h5>

                        <h6>Problems Identified:</h6>
                        <ul>
                        <li>Poor hierarchy and readability</li>
                        <li>Clinical tone lacked empathy</li>
                        <li>No visual aids for medical content and graphs</li>
                        <li>Complex navigation</li>
                        <li>No accessibility features</li>
                        </ul>
                        <h5>Develop</h5>
                        <ul>
                        <li>Wireframes → Lo-fi prototypes → High fidelity designs</li>
                        <li>Introduced bottom navigation with five sections</li>
                        <li>Created bitesized content cards, well thought graphs and charts with illustrations</li>
                        <li>Chose calm, sun safe colors (lime, dark blue and dim grey) for emotional reassurance</li>
                        
                        <li>Designed step by step flows to prepare for the CNN scanner integration</li></ul>
                        <h2 class="pt-8">Results</h2>
                   <p>During the design phase, I did remote usability testsing with 6 participants. Users reported:</p>
                    <ul>
                        <li>Easier navigation</li>
                        <li>Better emotional tone</li>
                        <li>Felt like the app was made for them, not just about them</li>
                    </ul>
                    <h3 >New Screens</h3>
                    <div class="mb-8 aspect-w-16 aspect-h-9">
                    <img src="assets/images/projects/new-screen-01.jpg" alt="Albinism Konnect App" class="object-cover w-full h-full rounded-lg">
                    </div>
                    <div class="mb-8 aspect-w-16 aspect-h-9">
                    <img src="assets/images/projects/new-screen-02.jpg" alt="Albinism Konnect App" class="object-cover w-full h-full rounded-lg">
                    </div>
                    
                    
                    <h3 class="pt-8">Learnings</h3>
                    <p>This project taught me the difference between userc-entered design and human-centered design. It wasn’t just about helping people navigate an app — it was about making them feel seen, heard, and respected. It reminded me that good design doesn’t just inform — it empowers.</p>
                    <h3 class="pt-8">What's Next</h3>
                    <ul>
                    <li>The app is now in pilot deployment across Zimbabwe and later Malawi</li>
                    <li>90% improvement in user satisfaction (posttest surveys)</li>
                    <li>The organisation has also requested translated versions in Shona and Chichewa</li>
                    </ul>                </div>

                    <p class="pt-8 text-sm">For a more detailed Case Study with interviews, wireframes and personas please contact me at mahwendatinashe@gmail.com</p>
            </div>
        `,
        project1: `
            <div class="project-detail">
                <h2 class="text-heading mb-6">Redi Novels App</h2>
                <p class"mb-8">Redi is a minimalistic novels app made with ethical design principles in mind. From book recommendations, short books, book summaries and more, the app is packed with high value. It can track user progress on stories read and gives you some insights on your reading patterns. <br><br>Contact mahwendatinashe@gmail.com for full case study</p>
                 <div class="mb-8 mt-8 aspect-w-16 aspect-h-9">
                    <img src="assets/images/projects/redi-screens-main.jpg" alt="Albinism Konnect App" class="object-cover w-full h-full rounded-lg">
                </div>
                <div class="mb-8 aspect-w-16 aspect-h-9">
                    <img src="assets/images/projects/redi-screens-01.jpg" alt="Albinism Konnect App" class="object-cover w-full h-full rounded-lg">
                </div>
                <div class="mb-8 aspect-w-16 aspect-h-9">
                    <img src="assets/images/projects/redi-screens-02.jpg" alt="Albinism Konnect App" class="object-cover w-full h-full rounded-lg">
                </div>
                <div class="mb-8 aspect-w-16 aspect-h-9">
                    <img src="assets/images/projects/redi-screens-03.jpg" alt="Albinism Konnect App" class="object-cover w-full h-full rounded-lg">
                </div>
                
            </div>
        `,
        project2: `
            <div class="project-detail">
                <h2 class="text-heading mb-6">Reviza Cambridge App</h2>
                <p class"mb-8">Reviza is a futuristic app that gives Cambridge Students exam type curated questions based on the past. It can analyse your academic perfomance on a topical level and generate practise questions for you. <br><br>Contact mahwendatinashe@gmail.com for full case study</p>

                 <div class="mb-8 mt-8 aspect-w-16 aspect-h-9">
                    <img src="assets/images/projects/reviza-main-screen.jpg" alt="Albinism Konnect App" class="object-cover w-full h-full rounded-lg">
                </div>
                <div class="mb-8 aspect-w-16 aspect-h-9">
                    <img src="assets/images/projects/reviza-screens-01.jpg" alt="Albinism Konnect App" class="object-cover w-full h-full rounded-lg">
                </div>
                <div class="mb-8 aspect-w-16 aspect-h-9">
                    <img src="assets/images/projects/reviza-screens-02.jpg" alt="Albinism Konnect App" class="object-cover w-full h-full rounded-lg">
                </div>
                
                
            </div>
        `,
        project3: `
            <div class="project-detail">
                <h2 class="text-heading mb-6">App Widgets Design</h2>
                <p>iOS Style Charging Widget Wireframe</p>
                <div class="mb-8 aspect-w-16 aspect-h-9">
                    <img src="assets/images/projects/charge-widget-wireframe.png" alt="Travel App" class="object-cover w-full h-full rounded-lg">
                </div>
                <p>iOS Style Charging Widget Dark & Light</p>
                <div class="mb-8 aspect-w-16 aspect-h-9">
                    <img src="assets/images/projects/charging-widget-mockup.png" alt="Travel App" class="object-cover w-full h-full rounded-lg">
                </div>
                <p>Calendar Widget Wireframe</p>
                <div class="mb-8 aspect-w-16 aspect-h-9">
                    <img src="assets/images/projects/calendar-wireframe.png" alt="Travel App" class="object-cover w-full h-full rounded-lg">
                </div>
                <p>Calendar Widget Dark</p>
                <div class="mb-8 aspect-w-16 aspect-h-9">
                    <img src="assets/images/projects/calendar-widget.png" alt="Travel App" class="object-cover w-full h-full rounded-lg">
                </div>
                <p>To Do List Widget Wireframe</p>
                <div class="mb-8 aspect-w-16 aspect-h-9">
                    <img src="assets/images/projects/to-do-list-widget-wireframe.png" alt="Travel App" class="object-cover w-full h-full rounded-lg">
                </div>
                <p>To Do List Widget Dark</p>
                <div class="mb-8 aspect-w-16 aspect-h-9">
                    <img src="assets/images/projects/to-do-list-widget.png" alt="Travel App" class="object-cover w-full h-full rounded-lg">
                </div>
            </div>
        `,
        project4: `
            <div class="project-detail">
                <h2 class="text-heading mb-6">Mulbery Dashboard</h2>
                <p class="mb-8">Mulbery is a Saas platform you can use to manage, track and view your wallet expenses from Ecocash, Bank and other e-wallets in one go.</p>
                
                <p>Mulbery Dashboard Wireframe</p>
                <div class="mb-8 aspect-w-4 aspect-h-3">
                    <img src="assets/images/projects/dashboard-wireframe.png" alt="Mulbery" class="object-cover w-full h-full rounded-lg">
                </div>
                <p>Mulbery Dashboard Mockup</p>
                <div class="mb-8 aspect-w-4 aspect-h-3">
                    <img src="assets/images/projects/dashboard.png" alt="Mulbery" class="object-cover w-full h-full rounded-lg">
                </div>
                
            </div>
        `,
        project5: `
            <div class="project-detail">
                <h2 class="text-heading mb-6">Adidas Concept Cart</h2>
                
               
                <div class="mb-8 aspect-w-4 aspect-h-3">
                    <img src="assets/images/projects/adidas-cart-2.jpg" alt="Mulbery" class="object-cover w-full h-full rounded-lg">
                </div>
              
                <div class="mb-8 aspect-w-4 aspect-h-3">
                    <img src="assets/images/projects/adidas-cart.jpg" alt="Mulbery" class="object-cover w-full h-full rounded-lg">
                </div>
                
            </div>
        `,
        project6: `
            <div class="project-detail">
                <h2 class="text-heading mb-6">Skwama Splash Screen</h2>  
                
                <div class="mb-8 aspect-w-4 aspect-h-3">
                    <img src="assets/images/projects/multiple-fix.jpg" alt="Skwama" class="object-cover w-full h-full rounded-lg">
                </div>
            
                <div class="mb-8 aspect-w-4 aspect-h-3">
                    <img src="assets/images/projects/multiple-accounts.png" alt="Skwama" class="object-cover w-full h-full rounded-lg">
                </div>
                
            </div>
        `
    };

    // Return the content for the specified project, or a default message if not found
    return projectContent[projectId] || `<p>Project details not found for "${projectId}"</p>`;
}

// Export functions for use in other scripts
window.portfolioModal = {
    openModal: openModal,
    closeModal: closeModal
};