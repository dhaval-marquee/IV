function loadTestCode() {
    if (!jQuery('body').hasClass('cartPage_iv')) {
        jQuery('body').addClass('cartPage_iv');
        
        // Put your test code here
        console.log('Selector available == ', jQuery('.cart-implementation').length);
        var contentPage = 'https://resetiv.com';
        jQuery('.cart-implementation').before('<div class="review-section what-people-say"></div>');
        jQuery('.review-section').load(contentPage + ' .what-people-say .content-column', function (response, status, xhr) {
            if (status == "success") {
                console.log('content loaded, You can change anything on cloned content');

                var runScript = setInterval(() => {
                    if(jQuery('.review-wrapper').length > 0) {
                        clearInterval(runScript);
                        setTimeout(() => {
                            var versionUpdate = (new Date()).getTime();  
                            var script = document.createElement("script");  
                            script.type = "text/javascript";  
                            script.src = "https://app.testimonialhub.com/shopifyapp/showsrstemplate.js?shop=resetiv.myshopify.com&v=" + versionUpdate;  
                            document.body.appendChild(script);
                            console.log('script loaded');
                        }, 500);
                    }
                }, 100);
            } else {
                console.error("Failed to load intro content.");
            }
        });
        console.log('code end');
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('.cart-implementation').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);