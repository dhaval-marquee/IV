function loadTestCode() {
    if (!$('body').hasClass('location-iv')) {
        $('body').addClass('location-iv');

        // Your test code here
        $('.pss-facility-faq-holder').before(`
        <div class="location-section">
            <div class="row">
                <div class="col-lg-4"></div>
                <div class="col-lg-8">
                    <div class="pss-heading">
                        <h2 class="h4">Nearby Storage Locations</h2>
                    </div>
                    <div class="pss-cards">
                        ${['one', 'two', 'three'].map(i => `
                            <div class="pss-card pss-card-${i}">
                                <div class="pss-card__imagebox"><a href=""><img src="" alt=""></a></div>
                                <div class="pss-card__contentbox">
                                    <div class="pss-card__title"><a href=""></a></div>
                                    <div class="pss-card__address"></div>
                                    <div class="pss-card__distance">
                                        <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/PriceSelfStorage/location-icon-grey.png" alt="location icon">
                                    </div>
                                </div>
                                <div class="pss-card__actions">
                                    <a href="" class="pss-button pss-button__cta-blue">View Units</a>
                                    <div class="pss-rating_star">
                                        <div class="star-rating"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/PriceSelfStorage/five-star.png" alt="Star" class="star-icon"></div>
                                        <div class="rating-label"></div>
                                    </div>
                                </div>
                            </div>`).join('')}
                    </div>
                    <div class="pss-buttons">
                        <a href="https://www.priceselfstorage.com/locations/" class="pss-button pss-button__cta-blue">View All Locations</a>
                    </div>
                </div>
            </div>
        </div>`);

        const locations = ['one', 'two', 'three'];
        let requestsCompleted = 0; // To track when all AJAX requests are done
        const totalRequests = locations.length; // Total number of requests

        locations.forEach((loc, idx) => {
            let itemURL = $('#MainContent_dtNearByLocations tr').eq(idx).find('a').attr('href');
            let itemMiles = $('#MainContent_dtNearByLocations tr').eq(idx).find('span').text();
            let dynamicURL = 'https://www.priceselfstorage.com' + itemURL;

            // Fetch the page content using $.get() once for all updates
            $.get(dynamicURL, function(response) {
                // Extract image URL, title, address, and other data
                let imageURL = $(response).find('#hdmMobileFileName').attr('value');
                let title = $(response).find('#MainContent_lblFacilityName').text();
                let address = $(response).find('.pss-facility__content-address .pss-link > span').html();
                let rating = $(response).find('span.pss-rating__review').text();

                // Set the image src if valid image URL is found
                if (imageURL) {
                    $(`.pss-card-${loc} .pss-card__imagebox img`).attr('src', imageURL);
                }

                // Update the URLs for the links
                $(`.pss-card-${loc} .pss-card__imagebox a`).attr('href', dynamicURL);
                $(`.pss-card-${loc} .pss-card__title a`).attr('href', dynamicURL).text(title + ' Facility');
                $(`.pss-card-${loc} .pss-card__actions a`).attr('href', dynamicURL);

                // Update the text for address, distance, and rating
                $(`.pss-card-${loc} .pss-card__address`).html(address);
                $(`.pss-card-${loc} .pss-card__distance img`).after(`${itemMiles}les Away`);
                $(`.pss-card-${loc} .pss-rating_star .rating-label`).text(rating);

                // Track completion of AJAX requests
                requestsCompleted++;

                // Once all requests are completed, adjust the heights
                if (requestsCompleted === totalRequests) {
                    setEqualHeight('.pss-card__title');
                    setEqualHeight('.pss-card__address');
                }
            });
        });

        // Function to adjust equal height
        function setEqualHeight(selector) {
            var $elements = $(selector);
            var maxHeight = 0;
            $elements.each(function() {
                $(this).css('height', 'auto');
                var height = $(this).outerHeight();
                if (height > maxHeight) {
                    maxHeight = height;
                }
            });
            $elements.css('height', maxHeight);
        }
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && $('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
