function loadTestCode() {
    if (!$('body').hasClass('iv-location-section')) {
        $('body').addClass('iv-location-section');

        var anotherPageURL = "https://www.priceselfstorage.com/locations/";

        $('#section').before(`<div class="locationSection" style="display: none">
            <div class="iv-container">
                <div class="iv-price-logo">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1741346037/PriceSelfStorage/pss-logo-main-small.svg" alt="" />
                </div>
                <div class="sectionBottom">
                    <h3 class="iv-info-text">Right Around The Corner</h3>
                    <a href="https://www.priceselfstorage.com/locations/" class="iv-view-all-cta">View All Locations</a>
                </div>
                <div class="dynamicContentWrapper"></div>
                <div class="carousel-controls">
                    <a href="javascript:;"class="arrow prev">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" version="1.1" x="0px" y="0px" width="539px" height="438px" viewBox="-0.521 -0.033 539 438" enable-background="new -0.521 -0.033 539 438" xml:space="preserve">
                            <defs>
                            </defs>
                            <path fill="#FFFFFF" d="M219.5,6.567c-3.5,2.6-89.399,79.6-190.199,170.7C1.601,202.367,0,204.467,0,217.467  c0,6.4,0.4,8.3,2.801,12.6c3.399,6,5.899,8.4,79.199,74.4c30.801,27.8,74.601,67.3,97.4,87.8c22.7,20.5,43.2,38.4,45.5,39.7  c23.1,13.5,54.1-1.7,54-26.4c-0.1-9.5-2.9-15.199-11.7-23.8c-4-3.899-25.899-23.8-48.7-44.399c-22.8-20.5-54.199-48.801-69.8-62.801  l-28.3-25.6l196.3-0.5l196.3-0.5l5.7-2.8c7.4-3.601,15.1-12,17.3-18.8c4.9-14.601-2.7-30.5-18-37.601l-6-2.8l-195.699-0.5  l-195.801-0.5l16.801-15.1c9.199-8.3,40.1-36.1,68.699-61.8c62.301-56.1,64.801-58.5,67.5-64.8c2.601-6.1,2.9-14.7,0.601-21.5  c-3.3-9.8-13.601-18.3-25.601-21C238.9-1.333,227.2,0.967,219.5,6.567z"/>
                        </svg>
                    </a>
                    <div class="progress-bar-container">
                        <div class="progress-bar"></div>
                    </div>
                    <a href="javascript:;"class="arrow next">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" version="1.1" x="0px" y="0px" width="538px" height="438px" viewBox="-0.521 -0.033 538 438" enable-background="new -0.521 -0.033 538 438" xml:space="preserve">
                            <defs>
                            </defs>
                            <path fill="#FFFFFF" d="M288.979,0.767c-12,2.7-22.301,11.2-25.601,21c-2.3,6.8-2,15.4,0.601,21.5c2.699,6.3,5.199,8.7,67.5,64.8  c28.6,25.7,59.5,53.5,68.699,61.8l16.801,15.1l-195.801,0.5l-195.699,0.5l-6,2.8c-15.3,7.1-22.9,23-18,37.601  c2.2,6.8,9.899,15.199,17.3,18.8l5.7,2.8l196.3,0.5l196.3,0.5l-28.3,25.6c-15.601,14-47,42.301-69.8,62.801  c-22.801,20.6-44.7,40.5-48.7,44.399c-8.8,8.601-11.601,14.3-11.7,23.8c-0.1,24.7,30.9,39.9,54,26.4c2.3-1.3,22.8-19.2,45.5-39.7  c22.8-20.5,66.6-60,97.4-87.8c73.3-66,75.8-68.4,79.199-74.4c2.4-4.3,2.801-6.199,2.801-12.6c0-13-1.601-15.1-29.301-40.2  c-100.8-91.1-186.699-168.1-190.199-170.7C310.279,0.967,298.579-1.333,288.979,0.767z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>`);

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

                            const urlsToHide = [
                                '/azusa-rv-boat-storage/',
                                '/san-diego-boat-rv-storage-murphy-canyon/',
                                '/norco-boat-rv-storage/',
                                '/solana-beach-boat-rv-storage/',
                                '/west-los-angeles-vehicle-storage/',
                                '/wine-storage-walnut-creek/'
                            ];

                            // Iterate over each storage location to calculate distances
                            cardItems.forEach(function(card, index) {
                                const lat = parseFloat(card.getAttribute('lat'));
                                const lon = parseFloat(card.getAttribute('long'));

                                // Removed RV/Boat storage
                                const link = card.querySelector('a');
                                if (link) {
                                    const href = link.getAttribute('href');
                                    if (urlsToHide.some(url => href.includes(url))) {
                                        const span = card.closest('span');
                                        if (span) {
                                            span.remove();
                                        }
                                    }
                                }

                                // Calculate distance
                                const distance = getDistance(currentLat, currentLon, lat, lon);

                                if (distance <= 15) {  // 15+ miles away need to set default
                                    distances.push({
                                        index: index,
                                        distance: distance
                                    });
                                } else {
                                    card.closest('span').remove(); 
                                    let checkInterval = setInterval(() => {
                                        if ($('.locationSection #MainContent_LocationRepeater span[class*="nearest"]').length === 0) {
                                            clearInterval(checkInterval);
                                            $('.locationSection').hide();
                                        }
                                    });
                                }
                            });

                            distances.sort(function(a, b) {
                                return a.distance - b.distance;
                            });

                            // Update card items based on sorted distances and show only the first five
                            distances.slice(0, 7).forEach(function(item, sortedIndex) {
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

                            
                            const container = document.querySelector("#MainContent_LocationRepeater");
                            if (container) {
                                const elements = Array.from(container.children);
                                
                                // Sort by nearest-x number
                                elements.sort((a, b) => {
                                    const numA = parseInt(a.className.match(/nearest-(\d+)/)?.[1] || 999, 10);
                                    const numB = parseInt(b.className.match(/nearest-(\d+)/)?.[1] || 999, 10);
                                    return numA - numB;
                                });
                        
                                // Append in correct order
                                elements.forEach((el) => container.appendChild(el));
                            }

                            // Hide all card items beyond the first five
                            distances.slice(7).forEach(function(item) {
                                const card = cardItems[item.index];
                                card.closest('span').remove();
                            });

                            $('#MainContent_LocationRepeater br').remove();

                            $('.dynamicContentWrapper #MainContent_LocationRepeater .pss-card-list__titlebox a').text(function(_, text) {
                                return text.replace('Indoor & Outdoor Vehicle Storage in West Los Angeles', 'West Los Angeles');
                            });

                            $(".pss-card-list__distance").each(function() {
                                $(this).prepend('<span class="iv-miles-text">Miles Away</span>'); // Add new span with text
                            });

                            $(".pss-card-list__distance span:last-child").each(function() {
                                let content = $(this).html()
                                    .replace(/<\/svg>\s+/g, "</svg>") // Remove space after </svg>
                                    .replace(/\s*Miles Away\s*/gi, ""); // Remove "Miles Away" (case insensitive)

                                $(this).html(content.trim());
                            });


                            $('.locationSection').show();
                            $(".dynamicContentWrapper img.lazy").each(function() {
                                var img = $(this);
                                if (img.data("src")) {
                                    img.attr("src", img.data("src")); // Assign data-src to src
                                    img.removeAttr("data-src"); // Remove data-src attribute
                                }
                            });

                            $(document).ready(function() {

                                if($('.iv-location-section .dynamicContentWrapper #MainContent_LocationRepeater > span').length > 3){
                                    let totalSlides = $('#MainContent_LocationRepeater .show').length;
                                    let progressBar = $('.progress-bar');
    
                                    let slickSlider = $('#MainContent_LocationRepeater').slick({
                                        slidesToShow: 3.5,
                                        slidesToScroll: 1,
                                        infinite: false,
                                        prevArrow: $('.prev'),
                                        nextArrow: $('.next'),
                                        responsive: [{
                                                breakpoint: 992,
                                                settings: {
                                                    slidesToShow: 2.3
                                                }
                                            },
                                            {
                                                breakpoint: 768,
                                                settings: {
                                                    slidesToShow: 2.1
                                                }
                                            },
                                            {
                                                breakpoint: 576.98,
                                                settings: {
                                                    slidesToShow: 1.1
                                                }
                                            }
                                        ]
                                    });
    
                                    function updateProgressBar(currentSlide) {
                                        let visibleSlides = slickSlider.slick('slickGetOption', 'slidesToShow');
                                        let progress = ((currentSlide) / (totalSlides - visibleSlides)) * 70; // Progress calculated from remaining 70%
    
                                        let finalProgress = 30 + progress; // Start from 30% and add progress
    
                                        progressBar.css({
                                            'width': finalProgress + '%',
                                            'transition': 'width 0.6s cubic-bezier(0.25, 1.5, 0.5, 1)' // Bounce effect
                                        });
                                    }
    
                                    // Set initial progress bar state to 30%
                                    progressBar.css('width', '30%');
    
                                    $('#MainContent_LocationRepeater').on('afterChange', function(event, slick, currentSlide) {
                                        updateProgressBar(currentSlide);
                                    });
                                    if($('.not-slider').length > 0){
                                        $('.dynamicContentWrapper').removeClass('not-slider');
                                    }
                                } else {
                                    $('.dynamicContentWrapper').addClass('not-slider');
                                }

                            });
                        },
                        function(error) {
                            console.error('Error getting location:', error.message);
                        }, {
                            enableHighAccuracy: true,
                            timeout: 5000,
                            maximumAge: 0
                        }
                    );
                } else {
                    console.error('Geolocation is not supported by this browser.');
                }
            }

            getLocationAndCalculateDistances();
        });
    }
}

// Check condition and initialize the code
var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);