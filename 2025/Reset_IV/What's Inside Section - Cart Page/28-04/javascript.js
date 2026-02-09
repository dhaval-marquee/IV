function loadTestCode() {
    if (!jQuery('body').hasClass('cart_iv')) {
        jQuery('body').addClass('cart_iv');

        // Put your test code here
        var $productLink = jQuery('.template-cart .main-content #cart .cart-list td a');
        $productLink.each(function () {
            var productUrl = jQuery(this).attr('href');
            var productName = productUrl ? productUrl.split('?')[0] : '';
            var pageUrl = 'https://resetiv.com' + productName;
            jQuery(this).after('<div class="what-inside-section"></div>');
            jQuery(this).next('.what-inside-section').load(pageUrl + ' .what-inside-list');
        });

        jQuery(document).on('click', '.inside-list-title', function () {
            jQuery(this).closest('.cart_iv .what-inside-section').find('.what-inside-list').toggleClass('active');
        });

    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);