function headerButton() {
    if (!$('body').hasClass('sticky_header_iv')) {
        $('body').addClass('sticky_header_iv');
        $('.avl-header__button').text('Get a Free Quote');
    }
}

var checkCondition = setInterval(function () {
    if (typeof jQuery !== 'undefined' && $('body').length > 0) {
        clearInterval(checkCondition);
        headerButton();
    }
}, 100);
