function loadTestCode() {
    if(!jQuery('body').hasClass('reviews_iv')) {
        jQuery('body').addClass('reviews_iv');

        jQuery('.template-index .main_container > div').eq(0).after(jQuery('.template-index .main_container > div').eq(9).addClass('sliderWrapper'));

        jQuery(".section-has-title .review-wrapper").after(`<div class="btn-wrapper">
            <a href="https://resetiv.com/pages/packages" class="btn btn-banner2 viewDripPackage-btn">
                <span>View Drip Packages</span>
            </a>          
        </div>`);
        
    }
}

// Load code just for mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {

    loadTestCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 768px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for mobile over