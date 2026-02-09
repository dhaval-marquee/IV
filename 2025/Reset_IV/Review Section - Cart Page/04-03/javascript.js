function loadTestCode() {
    if (!jQuery('body').hasClass('cartPage_iv')) {
        jQuery('body').addClass('cartPage_iv');
        
        // Put your test code here

        var PageUrl = 'https://resetiv.com';
        jQuery('.cart-implementation').before('<div class="review-section what-people-say"></div>');
        jQuery('.review-section').load(PageUrl + ' .what-people-say .content-column');

        var versionUpdate = (new Date()).getTime();  
        var script = document.createElement("script");  
        script.type = "text/javascript";  
        script.src = "https://app.testimonialhub.com/shopifyapp/showsrstemplate.js?shop=resetiv.myshopify.com&v=" + versionUpdate;  
        document.body.appendChild(script);  
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);