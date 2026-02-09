function loadTestCode() {
    if (!$('body').hasClass('locationSectionIV')) {
        $('body').addClass('locationSectionIV');

        // Put your test code here
        var anotherPageURL = "https://www.priceselfstorage.com/locations/";
        $('#section').before(`<div class="locationSection" style="display: none">
            <div class="sectionTop">
                <h2>Storage Units Near You</h2>
                <a href="javascript:;" id="showModal">Change my location</a>
                <div id="searchBoxModal" style="display: none">
                    <a href="javascript:;" id="closeSearchBox">Close</a>
                    <h2>Enter your ZIP Code</h2>
                    <div id="searchBox"></div>
                </div>
            </div>
            <div class="dynamicContentWrapper"></div>
            <div class="sectionBottom">
                <a href="https://www.priceselfstorage.com/locations/" class="pss-button pss-button__cta-blue">View All Locations</a>
            </div>
        </div>`);

        // <a href="javascript:;" id="searchModalSubmit" class="pss-button pss-button__cta-blue">Change Location</a>

        $(document).on('click', function(e) {
            if(e.target.id == 'showModal') {
                
                if(window.matchMedia('(max-width: 1200px)').matches) {
                    $('#pss-navbar-with-search .pss-form').appendTo($('#searchBox'));
                } else {
                    $('header .pss-navbar__search-mobile .pss-form').appendTo($('#searchBox'));
                }

                $('body').addClass('modalOpen');
                $('#searchBoxModal').show();

                return false;
            }

            if(e.target.id == 'closeSearchBox') {
                if(window.matchMedia('(max-width: 1200px)').matches) {
                    $('#pss-navbar-with-search').append($('#searchBox .pss-form'));
                } else {
                    $('header .pss-navbar__search-mobile').append($('#searchBox .pss-form'));
                }

                $('#searchBoxModal').hide();
                $('body').removeClass('modalOpen');

                return false;
            }

            // if(e.target.id == 'searchModalSubmit') {
            //     $('#searchBox a').click();

            //     return false;
            // }
        });

        $('.dynamicContentWrapper').load(anotherPageURL + ' #MainContent_LocationRepeater', function() {
            // Function to calculate distance using Haversine formula in miles
            function getDistance(lat1, lon1, lat2, lon2) {
                const R = 3958.8; // Radius of the Earth in miles
                const dLat = (lat2 - lat1) * Math.PI / 180;
                const dLon = (lon2 - lon1) * Math.PI / 180;
                const a =
                    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                    Math.sin(dLon / 2) * Math.sin(dLon / 2);
                const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                const distance = R * c; // Distance in miles
                return distance;
            }

            // Function to get current location and calculate distances
            function getLocationAndCalculateDistances() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        function(position) {
                            const currentLat = position.coords.latitude;
                            const currentLon = position.coords.longitude;

                            // Get all card items
                            const cardItems = document.querySelectorAll('.pss-card-list');

                            // Array to hold distances and corresponding card items
                            const distances = [];

                            // Iterate over each storage location to calculate distances
                            cardItems.forEach(function(card, index) {
                                const lat = parseFloat(card.getAttribute('lat'));
                                const lon = parseFloat(card.getAttribute('long'));

                                // Calculate distance
                                const distance = getDistance(currentLat, currentLon, lat, lon);

                                // Store distance and card item in array
                                distances.push({ index: index, distance: distance });
                            });

                            // Sort distances array by distance (ascending order)
                            distances.sort(function(a, b) {
                                return a.distance - b.distance;
                            });

                            // Update card items based on sorted distances and show only the first five
                            distances.slice(0, 5).forEach(function(item, sortedIndex) {
                                const card = cardItems[item.index];
                                const distance = Math.round(item.distance); // Round to nearest whole number

                                // Update distance display (you can modify this to suit your HTML structure)
                                const distanceElement = card.querySelector('.pss-card-list__distance');
                                if (distanceElement) {
                                    distanceElement.style.display = 'block';
                                    distanceElement.innerHTML = `<span><svg><use href="/Assets/sprite/icons.svg#distance"></use></svg> ${distance} Miles Away</span>`;
                                }

                                // Assign numerical class based on sorted order (1, 2, 3, ...)
                                card.closest('span').classList.add('show');
                                card.closest('span').classList.add(`nearest-${sortedIndex + 1}`);
                            });

                            // Hide all card items beyond the first five
                            distances.slice(5).forEach(function(item) {
                                const card = cardItems[item.index];
                                card.style.display = 'none';
                            });

                            // Function to display star ratings and aria-label text based on rating attribute
                            function displayStarRatingsAndLabels() {
                                const ratingElements = document.querySelectorAll('.pss-rating_star'); // Select all elements with class 'pss-rating_star'
                            
                                ratingElements.forEach(function(ratingElement) {
                                    const rating = parseFloat(ratingElement.getAttribute('rating'));
                                    let ariaLabel = ratingElement.getAttribute('aria-label'); // Get aria-label text
                            
                                    ariaLabel = ariaLabel.replace(' stars', ''); // Remove the word 'stars'
                            
                                    // Update rating element with stars and modified aria-label text
                                    ratingElement.innerHTML = `<div class="star-rating"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1706773346/Aireserv/five-star.png" alt="Star" class="star-icon"></div><div class="rating-label">${ariaLabel}</div>`;
                                });
                            }

                            // Call the function to display star ratings and labels
                            displayStarRatingsAndLabels();

                            $('.dynamicContentWrapper #MainContent_LocationRepeater .pss-card-list__imagebox a').each(function() {
                                var href = $(this).attr('href');
                                $(this).closest('.pss-card-list').append('<div class="bottomWrapper"></div>');
                                $(this).closest('.pss-card-list').find('.bottomWrapper').append('<a href="'+href+'" class="pss-button pss-button__cta-blue">View Units</a>');
                                $(this).closest('.pss-card-list').find('.bottomWrapper').append( $(this).closest('.pss-card-list').find('.pss-rating_star'))
                            });

                            $('.dynamicContentWrapper #MainContent_LocationRepeater .pss-card-list__titlebox a').text(function(_, text) {
                                return text.replace('Indoor & Outdoor Vehicle Storage in West Los Angeles', 'West Los Angeles');
                            });

                            $('.locationSection').show();
                        },
                        function(error) {
                            console.error('Error getting location:', error.message);
                        },
                        {
                            enableHighAccuracy: true,
                            timeout: 5000,
                            maximumAge: 0
                        }
                    );
                } else {
                    console.error('Geolocation is not supported by this browser.');
                }
            }

            // Call the function to get location and calculate distances
            getLocationAndCalculateDistances();
        });
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
