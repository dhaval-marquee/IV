function heroThumbnail() {
    if (!$('body').hasClass('thumbnail-iv')) {
        $('body').addClass('thumbnail-iv');
        
        // Put your test code here
        $('.product-gallery button.product-gallery__thumbnail').eq(1).after($('.product-gallery button.product-gallery__thumbnail .product-gallery__media-badge').closest('button'));

        $('.product-gallery__carousel .product-gallery__media').eq(1).after($('.product-gallery__carousel .product-gallery__media[data-media-type="video"]'));
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && $('body').length > 0) {
        clearInterval(checkCondition);
        heroThumbnail();
    }
}, 100);