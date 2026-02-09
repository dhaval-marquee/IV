function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('hero_iv')) {
        bodyEle.classList.add('hero_iv');
        document.querySelector('.hero.hero__overlay').innerHTML = `<div class="hero__inner">
        <div class="page-width text-center">
            <div class="hero__inner__content">
                <div class="heroTextWrapper">
                    <h3 class="h3 mega-title">Get On-Demand Mobile IV Therapy</h3>
                    <div class="rte-setting mega-subtitle">
                        <ul>
                            <li>We're Available For Service 24/7</li>
                            <li>We Don't Charge Any Travel Fees</li>
                            <li>Book Your Service Now & Pay Later</li>
                        </ul>
                    </div>
                </div>
                <div class="reset-btn-group">
                    <!-- <a href="/pages/hangover" class="btn hero__btn"> -->
                    <a href="/pages/hangover" class="reset-btn btn-dark btn-large">
                        <span>
                            Hangover treatments
                        </span>
                    </a>
                    <!-- <a href="/pages/packages" class="btn hero__btn hero__btn-2"> -->
                    <a href="/pages/packages" class="reset-btn btn-dark btn-large">
                        <span>
                            All Packages
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>`;
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



function loadTestCode() {
    if (!jQuery('body').hasClass('test_related_class')) {
        jQuery('body').addClass('test_related_class');
        
        // Put your test code here

        jQuery('.hero.hero__overlay').html(`<div class="hero__inner">
            <div class="page-width text-center">
                <div class="hero__inner__content">
                    <div class="heroTextWrapper">
                        <h3 class="h3 mega-title">Get On-Demand Mobile IV Therapy</h3>
                        <div class="rte-setting mega-subtitle">
                            <ul>
                                <li>We're Available For Service 24/7</li>
                                <li>We Don't Charge Any Travel Fees</li>
                                <li>Book Your Service Now & Pay Later</li>
                            </ul>
                        </div>
                    </div>
                    <div class="reset-btn-group">
                        <!-- <a href="/pages/hangover" class="btn hero__btn"> -->
                        <a href="/pages/hangover" class="reset-btn btn-dark btn-large">
                            <span>
                                Hangover treatments
                            </span>
                        </a>
                        <!-- <a href="/pages/packages" class="btn hero__btn hero__btn-2"> -->
                        <a href="/pages/packages" class="reset-btn btn-dark btn-large">
                            <span>
                                All Packages
                            </span>
                        </a>
                    </div>
                </div>
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