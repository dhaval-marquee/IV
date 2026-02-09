function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('macBook_test')) {
        bodyEle.classList.add('macBook_test');

        // Put your test code here
        $('.hero-unit__content .hero-unit__description').html("<span>Warrantied and backed by OWC's expert support team.</span> <span>14-Day 100% Money-Back Guarantee.</span> <span>Add up to 2 years of extended protection.</span>");

        $('.macBook_test .used-macs-marketing__hr').before($('.used-macs-hero__parallels_link'));

        }
    }
    
loadTestCode();

// Load code just for Mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {

    initCode();

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
// Load code just for Mobile over