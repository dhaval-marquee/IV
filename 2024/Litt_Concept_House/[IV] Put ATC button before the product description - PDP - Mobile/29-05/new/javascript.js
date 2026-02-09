console.log('Test code working');
var getButton = setInterval(() => {
    if ($('.product-block--description').length > 0 && $('.product-block--form').length > 0) {
        clearInterval(getButton);
        console.log('button moved');
        $('.product-block--description').before($('.product-block--form'));
    }
}, 1000);