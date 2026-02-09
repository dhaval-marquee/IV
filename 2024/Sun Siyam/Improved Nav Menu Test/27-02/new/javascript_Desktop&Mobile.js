function loadCode() {
    var i = 0;
    var checkButton = setInterval(() => {
        jQuery('.site-header').find('.menu-item-225').addClass('bkred').find('a').text('Request A Demo');
        jQuery('.site-header').find('.menu-item-225').before(jQuery('.site-header').find('.menu-item-3476'));
        jQuery('.site-header').find('.menu-item-3476').removeClass('bkred');
        if (jQuery('.newBtn').length == 0) {
            jQuery('.site-header').find('.title-area').before('<a class="yellowbtn bkred newBtn" href="/demo-request">Request A Demo</a>');
        }
        if (i == 100) {
            clearInterval(checkButton)
        }
    }, 100);
}
var jQisLoaded = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQisLoaded);
        loadCode();
    }
}, 100);