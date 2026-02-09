function loadcode() {
    if (!$('body').hasClass('iv_desktop')) {
        $('body').addClass('iv_desktop');
        
        // Put your test code here
        var trustPilot = $('.iv_desktop .main-product__overview .product__block .trustpilot-widget');
        $('.iv_desktop .main-product__heading').wrapInner('<span></span>');
        $('.iv_desktop .main-product__heading').before(trustPilot);

        $('.iv_desktop h3.product__block').text('Removes 99% of airborne allergens, dust, pollen, mold, and odors');

        function changePriceDesign() {
            $('.iv_desktop .main-product__price-net').before($('.main-product__original-price'));
            $('.iv_desktop .main-product__price-difference').html($('.iv_desktop .main-product__price-difference').html().replace('OFF','').replace(' ',''));

            var discountPrice = $('.iv_desktop .main-product__price-difference').text();
            $('.iv_desktop .main-product__price-net').append('<span>Save' + discountPrice +'!</span>');  

            $('.iv_desktop .main-product__variants ul li:first-child').html($('.main-product__richtext > div').html());
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
                    trackSmallSelect();

                    running = true;
                    setTimeout(function(){running = false;}, 100);
                }
            };
            const observer = new MutationObserver(callback);
            observer.observe(target, config);
            // End observer binding
        }

        function trackSmallSelect() {
            if($('.main-product__select').val() == 'Small') {
                $('.iv_desktop .main-product__variants ul > li:first-child').html('<strong>Small</strong> - Up to 250 sq ft. - perfect for bedroom, small offices, and small basements');
                $('.main-product__price').removeClass('non_small_product')
            } else {
                $('.main-product__price').addClass('non_small_product');
            }
        }

        var checkPrice = setInterval(() => {
            if($('.iv_desktop .main-product__price').length > 0 && $('.iv_desktop .main-product__price-net').length > 0 && $('.iv_desktop .main-product__price-difference').length > 0) {
                clearInterval(checkPrice);

                changePriceDesign();
                trackSmallSelect();
                observerForLoadingBlockDesktop();
            }
        }, 100);
        
        $('.main-product__price').after($('.product-form__installments'))

        $('.iv_desktop .main-product__variants fieldset').append(`<ul>
            <li></li>
            <li>5 layers of protection -  HEPA filter, carbon filter, silver ion filter, UV light, and Bi-Polar ionization</li>
            <li>Lightweight and easy to move</li>
            <li>Includes pre-installed filter</li>
            <li>Limited stock - order now!</li>
        </ul>`);

        // Rearrange sections
        $($('.richtext').eq(0).closest('.shopify-section')).before($('.two-column-rich__content.wysiwyg').eq(0).closest('.shopify-section'));
        $('#MainContent').append($('.shopify-section.review'));


        $('.main-product__product-description').before(`<ul class="return_policies">
            <li>
                <span class="img_wrapper">
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1659943695/Air_Oasis/Free_Shipping.png" alt="Shipping Truck Icon" width='120' >
                </span>
                <span>Free Shipping</span>
            </li>
            <li>
                <span class="img_wrapper">
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1659943694/Air_Oasis/Easy_Returns.png" alt="Return Item Image" width='75' >
                </span>
                <span>Easy 60-Day Returns</span>
            </li>
            <li>
                <span class="img_wrapper">
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1659943695/Air_Oasis/Lifetime_Warranty.png" alt="Warranty badge" width='70' >
                </span>
                <span>Lifetime Warranty</span>
            </li>
        <ul>`)

        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }
}


try {
    // PG Cookies Add
    var cookieName = 'iv_desktop';
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


    // Load code just for Desktop 
    if (window.matchMedia("(min-width: 1025px)").matches) {

        initCode();

        window.addEventListener('resize', function(event) {
            if (window.matchMedia("(max-width: 1024.98px)").matches) {
                location.reload();
            }
        }, true);
    } else {
        window.addEventListener('resize', function(event) {
            if (window.matchMedia("(min-width: 1025px)").matches) {
                location.reload();
            }
        }, true);
    }
    // Load code just for Desktop over


} catch(ex) {

} finally {
    document.getElementsByTagName("body")[0].style.visibility = "visible";
}