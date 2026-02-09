function loadCode() {
    if (!$('body').hasClass('cyberGRX_test')) {
        $('body').addClass('cyberGRX_test');
        
        // Put your test code here    
        $('.mod-banner.mod-banner-l .content-banner h1').after($('.f-landing-right .cont-r-landing'));
        $('.mod-banner-l .col-right-chart .img-canvas').after($('#hs_cos_wrapper_widget_31128385958 .box-f-landing'));

    }
}

loadCode();
