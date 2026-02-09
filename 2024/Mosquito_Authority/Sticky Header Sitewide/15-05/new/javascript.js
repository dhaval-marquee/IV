//////////// Desktop ///////////////
function loadTestCodeDesktop() {
    if (!document.querySelector('body').classList.contains('sticky-header-desktop')) {
        document.querySelector('body').classList.add('sticky-header-desktop');

        // Get a Quote
        const getButton = `<li><a class="quote-button" href="javascript:void(0)">Get a Quote</a></li>`;

        // Main nav change
        const blogNav = document.querySelector('header nav:first-child > ul > li > a[href*="/blog/"]');
        if (blogNav) {
            blogNav.innerText = 'Own a Franchise';
            blogNav.setAttribute('href', 'https://www.mosquitofranchise.com/');
        }

        const ownnav = document.querySelector('header .elementor-section-boxed [data-id="5b2cee1"] .elementor-icon-list-items');
        if (ownnav) {
            ownnav.querySelector('li.elementor-icon-list-item').remove();
            ownnav.insertAdjacentHTML('afterbegin', getButton);
        }

        // Top bar 
        const topBar = document.querySelector('header').previousElementSibling;
        if (topBar) {
            topBar.classList.add('top-bar');
        }

        // Popup
        const popup = `<div id="getLocations" class="get-locations">
            <div class="modal-content">
                <div class="modal-content-inner">
                    <div class="modal-content-content">
                        <p>Please enter your ZIP code</p>
                        <div class="modal-form"> 
                            <input type='tel' placeholder="Enter Your Zip Code or city, state">
                            <button>Get a Quote</button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

        function openPopup() {
            document.body.insertAdjacentHTML('beforeend', popup);

            document.body.classList.add('popup-open');

            document.querySelector('.modal-form button').addEventListener('click', function (e) {
                e.preventDefault();
                var pinInput = document.querySelector('.modal-form input');
                var pinvalue = pinInput.value;
                window.location.assign('https://mosquito-authority.com/locations/?near_location=' + pinvalue);
            });

            const getLocationsForm = document.querySelector('.get-locations');
            if (getLocationsForm) {
                getLocationsForm.addEventListener('click', function (e) {
                    if (!e.target.closest('.modal-content-content')) {
                        getLocationsForm.remove();
                        if(document.querySelector('.popup-open')){
                            document.body.classList.remove('popup-open');
                        }
                    }
                });
            }
        }

        // On scroll | Header
        const quoteButton = document.querySelector('.quote-button');
        quoteButton.addEventListener('click', openPopup);

        var header = document.querySelector("header");

        function addClassOnScroll() {
            if (window.pageYOffset > 0) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }
        window.addEventListener("scroll", addClassOnScroll);
    }
}

//////////// Mobile ///////////////
function loadTestCodeMobile() {
    if (!document.querySelector('body').classList.contains('sticky-header')) {
        document.querySelector('body').classList.add('sticky-header');
        // Top bar
        var mobileGetToKnow = `<div class="get-to-main"><a class="get-to-know-top" href="https://www.mosquito-authority.com/your-source-for-tick-control/">Your source for tick control</a></div>`
        var getToKnow = document.querySelector('header.ast-custom-header');
        if(getToKnow){
            getToKnow.insertAdjacentHTML('afterbegin', mobileGetToKnow);
        }
        // Phone number and CTA
        const headPhone = `<div class="header-right">
            <a href="tel:8884576630" class="phone">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M497.4 361.8l-112-48a24 24 0 0 0 -28 6.9l-49.6 60.6A370.7 370.7 0 0 1 130.6 204.1l60.6-49.6a23.9 23.9 0 0 0 6.9-28l-48-112A24.2 24.2 0 0 0 122.6 .6l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.3 24.3 0 0 0 -14-27.6z"></path></svg>
            </a>
            <a class="quote-cta" href="javascript:void(0)">Get a Quote</a>
        </div>`;
        var ctaRight= document.querySelector('.sticky-header header.ast-custom-header [data-elementor-post-type=astra-advanced-hook] section section > div > div:last-child');
        if(ctaRight){
            ctaRight.insertAdjacentHTML('afterbegin', headPhone);
        }
        // For locations only
        var ctaRightL= document.querySelector('.sticky-header header.ast-custom-header section section > .elementor-container .elementor-row > div:last-child');
        if(ctaRightL){
            ctaRightL.insertAdjacentHTML('afterbegin', headPhone);
        }
        document.querySelector('nav:not(.elementor-nav-menu--main) .elementor-nav-menu').insertAdjacentHTML('beforeend', `<li class="elementor-icon-list-item menu-item menu-franchise"> 
            <a href="https://www.mosquitofranchise.com/" target="_blank"> 
                <span class="elementor-icon-list-icon"> 
                    <i aria-hidden="true" class="fas fa-globe-americas"></i> 
                </span> 
                <span class="elementor-icon-list-text">Own a Franchise</span> 
            </a> 
        </li>`);
        // Model Location
        document.querySelector('.sticky-header').insertAdjacentHTML('beforeend', `<div id="modal_location" class="modal-location fade">
            <div class="modal-body">
                <div class="modal-content">
                    <a href="javascript:;" class="model-close eicon-close"></a>
                    <div class="model-inner">
                        <h3 class="model-title">Please enter your ZIP code</h3>
                        <form action='' name='location-filter' id="location-search" method='POST'>
                            <input type='tel' name='locationsfilter' id="locationsfilter" placeholder="Enter Your Zip Code Here" data-acsb-navigable="true" data-acsb-now-navigable="true" aria-hidden="false"
                            data-acsb-hidden="false" data-acsb-validation-uuid="locationsfilter" data-acsb-fieldvisible="true" aria-invalid="false" aria-required="false" aria-label="Enter Your Zip Code Here"
                            data-acsb-tooltip="Enter Your Zip Code Here">
                            <button type='submit'>Find a Location Near Me & Get a Quote</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>`);
        // Model Open
        document.querySelectorAll('.quote-cta').forEach(function(link) {
            link.addEventListener('click', function() {
                var modelLightbox = document.getElementById('modal_location');
                modelLightbox.style.display = 'block';
                document.documentElement.style.overflow = 'hidden';
                document.body.style.overflow = 'hidden';
                var modalInterval = setInterval(function () {
                    if (document.getElementById('modal_location') !== null) {
                        document.getElementById('modal_location').classList.add('in');
                        clearInterval(modalInterval);
                    }
                }, 200);
            });
        });
        // Modal Close
        document.querySelector('#modal_location .model-close').addEventListener('click', function() {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
            var modelLightbox = document.getElementById('modal_location');
            modelLightbox.style.display = '';
            modelLightbox.classList.remove('in');
        });
        document.querySelector('#modal_location #location-search').addEventListener('submit', function(event) {
            var locfil = document.querySelector('#modal_location #locationsfilter').value;
            this.setAttribute('action', "https://www.mosquito-authority.com/locations/?near_location=" + locfil);
        });
    }
}

function loadCodeFinally() {
    console.log('sticky header code working');
    var waitForHeader = setInterval(() => {
        if (window.matchMedia("(min-width: 1025px)").matches) {
            if (document.querySelector('header')) {
                clearInterval(waitForHeader);
                console.log('desktop test');
                loadTestCodeDesktop();

                window.addEventListener('resize', function(event) {
                    if (window.matchMedia("(max-width: 1024.98px)").matches) {
                        location.reload();
                    }
                }, true);
            }
        } else if (window.matchMedia("(max-width: 1024.98px)").matches) {
            if (document.querySelector('header')) {
                clearInterval(waitForHeader);
                console.log('mobile test');
                loadTestCodeMobile();
                window.addEventListener('resize', function(event) {
                    if (window.matchMedia("(min-width: 1025px)").matches) {
                        location.reload();
                    }
                }, true);
            }
        }
    }, 200);
}

loadCodeFinally(); // Initial load based on current screen size