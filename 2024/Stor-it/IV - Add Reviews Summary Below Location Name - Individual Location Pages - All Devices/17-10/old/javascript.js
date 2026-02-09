function loadTestCode() {
    if (!jQuery('body').hasClass('location_iv')) {
        jQuery('body').addClass('location_iv');
        
        // Put your test code here
        jQuery('#tab1 h1').after(`<div class="reviews">
            <div class="reviews-Inner">
                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1729079320/Store-IT/rating-stars.svg" alt="rating-stars">
                <p>(4.8) (630 reviews)</p>
            </div>
        </div>`);

    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);