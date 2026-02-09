function loadTestCode() {
        if (!document.querySelector('body').classList.contains('homepageTest_iv')) {
                document.querySelector('body').classList.add('homepageTest_iv');
                // Put your test code here

                var RequestpageUrl = "https://www.mapcommunications.com/contact-us/request-free-trial/";
                $('.homepageTest_iv #container .top-wrapper').after('<div class="company-logos-wrapper"></div>');
                $('.company-logos-wrapper').load(RequestpageUrl + ' .company-logos-block');

                var logoUrl = "https://www.mapcommunications.com/services/virtual-receptionist-services/";
                $('.homepageTest_iv #two-column-sections').before('<div class="choose-wrapper"></div>');
                $('.choose-wrapper').load(logoUrl + ' .choose-section');
        }
}
loadTestCode();