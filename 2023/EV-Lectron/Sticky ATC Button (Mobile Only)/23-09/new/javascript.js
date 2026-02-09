var pageATC = document.querySelectorAll('form[id*="product_form"]')[0];

var announcementHeight = 0;
if(document.querySelector('.site-announcement')) {
    announcementHeight = document.querySelector('.site-announcement').offsetHeight - 23;
}

const firstSectionButton = pageATC;
const stickyBar = document.querySelector('.sticky-bar-form');

// Get the position of the first section button
const firstSectionButtonPosition = firstSectionButton.getBoundingClientRect().top + pageATC.offsetHeight + announcementHeight + window.pageYOffset;

// Function to toggle the visibility of the sticky bar
function toggleStickyBar() {
    document.querySelector('.sticky-bar-form').classList.add('active');
}

// Event listener for scroll
window.addEventListener('scroll', () => {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Toggle the visibility of the sticky bar based on scroll position
    if (scrollPosition > firstSectionButtonPosition || firstSectionButton.getBoundingClientRect().top > window.innerHeight - pageATC.offsetHeight) {
        document.querySelector('.sticky-bar-form').classList.add('active');
        document.querySelector('footer').style.paddingBottom = document.querySelector('.sticky-bar-form').offsetHeight + 'px';
    } else {
        document.querySelector('.sticky-bar-form').classList.remove('active');
    }
});


var stickybarIsAvailable = setInterval(() => {
    console.log('111111');
    if(document.querySelectorAll('.sticky-bar-form').length > 0) {
        clearInterval(stickybarIsAvailable);
        console.log('222222');
        window.dispatchEvent(new CustomEvent('scroll'));
    }
}, 100);