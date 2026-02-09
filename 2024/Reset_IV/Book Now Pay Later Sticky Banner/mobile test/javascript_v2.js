function loadTestCode() {
    if(!jQuery('body').hasClass('banner_iv')) {
        jQuery('body').addClass('banner_iv');
        jQuery('body').addClass('banner_iv2');
    
        jQuery('.banner_iv2 .main_container').prepend(`<div class="banner">
            <div class="container">
                <div class="contentWrapper">
                    <p>Book Now and Pay Later!</p>
                    <a href="https://resetiv.com/pages/packages" class="banner_btn">Book Now</a>
                </div>
            </div>
        </div>`);
        jQuery('.banner').css('top',jQuery("#header-mobile").height()+'px');
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
