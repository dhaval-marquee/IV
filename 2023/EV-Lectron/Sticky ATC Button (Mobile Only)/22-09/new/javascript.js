const firstSectionButton = document.querySelectorAll('form[id*="product_form"]')[0];
const stickyBar = document.querySelector('.sticky-bar-form');

// Get the position of the first section button
const firstSectionButtonPosition = firstSectionButton.getBoundingClientRect().top + document.querySelectorAll('form[id*="product_form"]')[0].offsetHeight + window.pageYOffset;

// Function to toggle the visibility of the sticky bar
function toggleStickyBar() {
    document.querySelector('.sticky-bar-form').classList.add('active');
}

// Event listener for scroll
window.addEventListener('scroll', () => {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Toggle the visibility of the sticky bar based on scroll position
    if (scrollPosition > firstSectionButtonPosition) {
        document.querySelector('.sticky-bar-form').classList.add('active');
        document.querySelector('footer').style.paddingBottom = document.querySelector('.sticky-bar-form').offsetHeight + 'px';
    } else {
        document.querySelector('.sticky-bar-form').classList.remove('active');
    }
});