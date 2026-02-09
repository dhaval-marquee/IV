function loadcode() {
    if (!$('body').hasClass('iv_mobile')) {
        $('body').addClass('iv_mobile');
        
        // Put your test code here
        var trustPilot = $('.iv_mobile .main-product__overview .product__block .trustpilot-widget');
        $('.iv_mobile .main-product__heading').wrapInner('<span></span>');
        $('.iv_mobile .main-product__heading').append(trustPilot);

        $('.iv_mobile h3.product__block').text('Removes 99% of airborne allergens, dust, pollen, mold, and odors');

        function changePriceDesign() {
            $('.iv_mobile .main-product__price-net').before($('.main-product__original-price'));
            $('.iv_mobile .main-product__price-difference').html($('.iv_mobile .main-product__price-difference').html().replace('OFF','').replace(' ',''));

            var discountPrice = $('.iv_mobile .main-product__price-difference').text();
            $('.iv_mobile .main-product__price-net').append('<span>Save' + discountPrice +'!</span>');  

            $('.iv_mobile .main-product__variants ul li:first-child').html($('.main-product__richtext > div').html());
        }

        
        function observerForLoadingBlockDesktop(){
            // observer binding
            var target = document.querySelectorAll('.main-product__price')[0];
            const config = {
                childList: true, characterData: true, subtree: true, attributes: true,
            };
            var running = false; 
            var t;
            const callback = function(mutationsList, observer) {
                for (let mutation of mutationsList) {
                    if(running) return;
                    console.log('checkPrice');
                   
                    changePriceDesign();

                    running = true;
                    setTimeout(function(){running = false;}, 100);
                }
            };
            const observer = new MutationObserver(callback);
            observer.observe(target, config);
            // End observer binding
        }
        

        var checkPrice = setInterval(() => {
            if($('.iv_mobile .main-product__price').length > 0 && $('.iv_mobile .main-product__price-net').length > 0 && $('.iv_mobile .main-product__price-difference').length > 0) {
                clearInterval(checkPrice);

                changePriceDesign()
                observerForLoadingBlockDesktop();
            }
        }, 100);
        



        $('.main-product__price').after($('.main-product__html'));

        $('.iv_mobile .main-product__variants fieldset').append(`<ul>
            <li></li>
            <li>5 layers of protection -  HEPA filter, carbon filter, silver ion filter, UV light, and Bi-Polar ionization</li>
            <li>Lightweight and easy to move</li>
            <li>Includes pre-installed filter, remote control</li>
            <li>Limited stock - order now!</li>
        </ul>`);


        $('button.main-product__button').wrap('<div class="qty_button_wrapper"></div>');
        $('.qty_button_wrapper').prepend($('.main-product__quantity-wrapper .quantity'));


        // Rearrange sections
        $($('.richtext').eq(0).closest('.shopify-section')).before($('.two-column-rich__content.wysiwyg').eq(0).closest('.shopify-section'))
        $('#MainContent').append($('.shopify-section.review'));
        $($('.accordion.faq').closest('.shopify-section')).after($('.accordion.faq').closest('.shopify-section').prev());

        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }
}


try {
    // PG Cookies Add
    var cookieName = 'iv_mobile';
    var cookieValue = '1';
    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 30);
    document.cookie = cookieName +"=" + cookieValue + ";expires=" + myDate;
    // END PG Cookies Add

    // Initialize code after $/jQuery is define
    function initCode() {
        var jQisLoaded = setInterval(function () {
            if (typeof jQuery != 'undefined') {
                clearInterval(jQisLoaded);
                loadcode();
            } else {
                var jsElm = document.createElement("script");
                jsElm.type = "application/javascript";
                jsElm.src = '//cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js';
                document.body.appendChild(jsElm);
                clearInterval(jQisLoaded);

                var jqueryInterval = setInterval(function () {
                    if (typeof jQuery != 'undefined') {
                        clearInterval(jqueryInterval);
                        loadcode();
                    }
                }, 100);
            }
        }, 100);
    }
    // Initialize code over


    // Load code just for Mobile 
    if (window.matchMedia("(max-width: 767.98px)").matches) {

        initCode()

        window.addEventListener('resize', function(event) {
            if (window.matchMedia("(min-width: 768px)").matches) {
                location.reload();
            }
        }, true);
    } else {
        window.addEventListener('resize', function(event) {
            if (window.matchMedia("(max-width: 767.98px)").matches) {
                location.reload();
            }
        }, true);
    }
    // Load code just for Mobile over


} catch(ex) {

} finally {
    document.getElementsByTagName("body")[0].style.visibility = "visible";
}