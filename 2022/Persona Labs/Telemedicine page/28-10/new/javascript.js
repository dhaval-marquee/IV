function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('telemedicine_test')) {
        bodyEle.classList.add('telemedicine_test');

        jQuery('.telemedicine_test .elementor-element.elementor-element-67a2e222 > .elementor-widget-container').html('<h1>Personalized, High-Quality, & Affordable Health Care From the Comfort of Your Home</h1>');
        jQuery('.telemedicine_test .subtitle-text p').html('<p>Our board-certified network of doctors can provide you with medical advice and fill prescriptions through virtual doctor visits - no insurance required</p>');

        jQuery('a[href="#products"] .elementor-button-text').html('Get Started');

        
        
    }
}
loadTestCode() 
// Load code just for Desktop 
// if (window.matchMedia("(min-width: 992px)").matches) {   
//     var jQisLoaded = setInterval(function () {
//         if (typeof jQuery != 'undefined') {
//             clearInterval(jQisLoaded);
//             loadTestCode();
//         }
//     }, 100);

//     window.addEventListener('resize', function(event) {
//         if (window.matchMedia("(max-width: 991.98px)").matches) {
//             location.reload();
//         }
//     }, true);
// } else {
//     window.addEventListener('resize', function(event) {
//         if (window.matchMedia("(min-width: 992px)").matches) {
//             location.reload();
//         }
//     }, true);
// }
// Load code just for Desktop over









