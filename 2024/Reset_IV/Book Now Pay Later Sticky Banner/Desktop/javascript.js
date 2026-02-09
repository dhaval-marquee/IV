function loadTestCode() {
    if(!jQuery('body').hasClass('banner_iv')) {
        jQuery('body').addClass('banner_iv');
    
        jQuery('.banner_iv .main_container').prepend(`<div class="banner">
            <div class="container">
                <div class="contentWrapper">
                    <p>Book Now and Pay Later!</p>
                    <a href="https://resetiv.com/pages/packages" class="reset-btn btn-dark btn-large">
                        <span> Book Now </span>
                    </a>
                </div>
            </div>
        </div>`);
        if (window.matchMedia("(min-width: 1025px)").matches) {
            jQuery('.banner').css('top',jQuery("#header-content").outerHeight()+'px');
        } else {
            jQuery('.banner').css('top',jQuery("#header-mobile").outerHeight()+'px');
        }
        jQuery('main').css('padding-top',jQuery('.banner').outerHeight()+'px');
    }
}
var loadTest = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(loadTest);
        loadTestCode();
    } 
}, 100);
