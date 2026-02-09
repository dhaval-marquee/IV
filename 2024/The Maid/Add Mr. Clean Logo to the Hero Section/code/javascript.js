function loadTestCode() {
    if (!jQuery('body').hasClass('heroIV')) {
        jQuery('body').addClass('heroIV');
        
        // Put your test code here
        jQuery('.heroIV #hero-section-right').html(`<div class="heroRight"><img src="https://www.maids.com/wp-content/uploads/2023/03/Image-MrCleanSeal.png"><div class="item-yellow"> <h2 class="first-title">Exclusive Partner Of Mr. Clean®</h2> <p class="y-body">Mr. Clean® has chosen The Maids as its exclusive cleaning services partner. The only maid service backed by Mr. Clean®, our highly trained teams are bonded and insured.</p></div></div>`);
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);