function loadTestCode() {
    if (!jQuery('body').hasClass('homepageTest_iv')) {
        jQuery('body').addClass('homepageTest_iv');

        var checkElement = setInterval(() => {
            if ($('.homepageTest_iv #container .top-wrapper').length > 0 && $('.homepageTest_iv #two-column-sections').length > 0) {
                clearInterval(checkElement);

                var RequestPageUrl = "https://www.mapcommunications.com/contact-us/request-free-trial/";
                $('.homepageTest_iv #container .top-wrapper').after('<div class="company-logos-wrapper"></div>');
                $('.company-logos-wrapper').load(RequestPageUrl + ' .company-logos-block');
                var logoUrl = "https://www.mapcommunications.com/services/virtual-receptionist-services/";
                $('.homepageTest_iv #two-column-sections').before('<div class="choose-wrapper"></div>');
                $('.choose-wrapper').load(logoUrl + ' .choose-section');
            }
        }, 100);
    }
}

var loadTest = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(loadTest);
        loadTestCode();
    }
}, 100);