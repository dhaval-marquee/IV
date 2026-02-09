function loadTestCode() {
    if (!$('body').hasClass('sticky_header_iv')) {
        $('body').addClass('sticky_header_iv');

        // Put your test code here
        var topDistance = $('header').offset().top;
        var button = $('.avl-header__button');
        var originalText = 'GET QUOTE';
        var stickyText = 'GET A FREE QUOTE';

        $(window).on('scroll', function () {
            if (window.scrollY > topDistance) {
                button.text(stickyText);
            } else {
                button.text(originalText);
            }
        });
    }
}

var checkCondition = setInterval(function () {
    if (typeof jQuery !== 'undefined' && $('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);