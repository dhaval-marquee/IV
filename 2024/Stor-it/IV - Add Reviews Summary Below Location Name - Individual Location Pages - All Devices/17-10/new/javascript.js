function loadTestCode() {
    if (!jQuery('body').hasClass('location_iv')) {
        jQuery('body').addClass('location_iv');

        // Find the number of reviews from the tab (adjust selector if needed)
        const reviewsText = jQuery('#reviews_theme_1 .reviewTable tr.facReview').length;

        // Corrected console.log to use template literals
        console.log(`Number of reviews: ${reviewsText}`);
        
        
        var totalWidth = 0;
        var count = 0;

        jQuery('.star-ratings-css .star-ratings-css-top').each(function() {
            var width = jQuery(this).css('width');
                width = parseFloat(width);
                totalWidth += width;
                count++;
        });

        var averageWidth = totalWidth / count;
        var starRating = (averageWidth / 20).toFixed(1);
        console.log('Average Width: ' + averageWidth);
        console.log(starRating);

        
        // Put your test code here
        jQuery('#tab1 h1').after(`<div class="reviews">
            <div class="reviews-Inner">
                <div class="reviewRating">
                    <div class="candee rating">
                        <div class="star-ratings-css">
                            <div class="star-ratings-css-top text_color_1" style="width: ${averageWidth}%">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>
                            <div class="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                        </div>
                    </div>
                </div>
                <p>(${starRating}) (${reviewsText} reviews)</p>
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
