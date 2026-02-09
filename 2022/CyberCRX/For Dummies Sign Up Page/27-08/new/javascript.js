function loadCode() {
    if (!$('body').hasClass('cyberGRX')) {
        $('body').addClass('cyberGRX');
        
        // Put your test code here
        $('body').addClass('cyberGRX');
    
        $('.mod-banner.mod-banner-l .content-banner h1').after($('.f-landing-right .cont-r-landing'));
        $('.mod-banner-l .col-right-chart .img-canvas').after($('#hs_cos_wrapper_widget_31128385958 .box-f-landing'));
    }
}



// Load code just for Desktop 
if (window.matchMedia("(min-width: 1025px)").matches) {

    loadCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 1024.98px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 1025px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for Desktop over