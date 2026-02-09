function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('verification_test')) {
        bodyEle.classList.add('verification_test');

        $('.jumbotron-container .jumbotron h2').html($('.jumbotron-container .jumbotron h2').html().replace('Make sure you’re collecting accurate and active phone numbers.','Our advanced phone verification uses data from approximately 1,500 telecommunication providers in over 200 countries and territories to deliver accurate, fast results'));
        $('.jumbotron-container .jumbotron a#hero-area-btn1').html($('.jumbotron-container .jumbotron a#hero-area-btn1').html().replace('Free trial for businesses','Phone Verification Free Trial'));

        $('#mainContentOfPage .jumbotron-container').after(`<section class="location_section">
            <div class="container">
                <ul>
                    <li>
                        <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1666937299/EDQ/Phone_Verification_Page_Hero/location_icon_2x.png" alt="Location icon">
                        <p>62 M+ PHONE NUMBERS VALIDATED EACH YEAR</p>
                    </li>
                    <li>
                        <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1666937299/EDQ/Phone_Verification_Page_Hero/home_icone_2x.png" alt="home icone">
                        <p>99% REDUCTION IN INCORRECT NUMBERS</p>
                    </li>
                    <li>
                        <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1666937299/EDQ/Phone_Verification_Page_Hero/browser_icon_2x.png" alt="Browser icon">
                        <p>245 COUNTRIES AND TERRITORIES COVERED</p>
                    </li>
                </ul>
            </div>
        </section>`);

        $('.tinymce ul:not([class*=-icon--])').after(`<section class="icon_section">
            <h2>Features</h2>
            <div class="section_inner">
                <div class="row-fluid max-4">
                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div class="panel-item">
                            <img alt="Cell phone" class="panel-main-image" src="//res.cloudinary.com/ignite-visibility/image/upload/v1666940943/EDQ/Phone_Verification_Page_Hero/cell_phone_2x.png">
                            <p>10-digit validation of phone numbers as they are entered</p>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div class="panel-item">
                            <img alt="Circle arrow" class="panel-main-image" src="//res.cloudinary.com/ignite-visibility/image/upload/v1666940943/EDQ/Phone_Verification_Page_Hero/circle_arrow_2x.png">
                            <p>Up-to-date data files that are refreshed every 10 minutes</p>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div class="panel-item">
                            <img alt="Phone" class="panel-main-image" src="//res.cloudinary.com/ignite-visibility/image/upload/v1666940943/EDQ/Phone_Verification_Page_Hero/phone_2x.png">
                            <p>Phone type identification ensures compliance with regulations</p>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div class="panel-item">
                            <img alt="Square arrow" class="panel-main-image" src="//res.cloudinary.com/ignite-visibility/image/upload/v1666940943/EDQ/Phone_Verification_Page_Hero/square_arrow_2x.png">
                            <p>Reverse phone append option returns the name and address associated with a number</p>
                    </div>
                </div>
            </div>
            </div>
        </section>`);
    }
}

// Load code just for Desktop 
if (window.matchMedia("(min-width: 992px)").matches) {   
    var jQisLoaded = setInterval(function () {
        if (typeof jQuery != 'undefined') {
            clearInterval(jQisLoaded);
            loadTestCode();
        }
    }, 100);

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 991.98px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 992px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for Desktop over