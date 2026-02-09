function loadTestCode() {
    if (!jQuery('body').hasClass('homePageBtn_iv')) {
        jQuery('body').addClass('homePageBtn_iv');
        
        // Put your test code here
        jQuery('.homePageBtn_iv .home-banner .banner-ctas a').html('Get started with KX');

        var currentPage = window.location.href.split('?')[0].split('#')[0];
        if (currentPage == 'https://kx.com/book-demo/') {
            jQuery('.homePageBtn_iv .page-banner nav.breadcrumbs ul li span').html('Get started with KX');
            jQuery('.homePageBtn_iv .page-banner .form  h3').html('Get started right, with a personalized demo');
        }
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
