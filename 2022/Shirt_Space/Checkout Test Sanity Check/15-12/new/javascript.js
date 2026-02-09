function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('checkout_iv')) {
        bodyEle.classList.add('checkout_iv');
        
        // Put your test code here

        $('.checkout_iv .checkout__account-details').before(`
            <div class="trust_pilot_review">
                <p>Reviews 23,541&nbsp;  •  &nbsp;Excellent </p>
                <a href="https://www.trustpilot.com/review/www.shirtspace.com">
                    <img alt="TrustScore 4.5 out of 5" src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg"> 4.7
                </a>
            </div>
        `);

        $('.checkout_iv .payment-info').before(`<article class="checkout-section billing_address">
            <header>
                <span class="number">2</span>
                <h1>Billing Address</h1>
            </header>
            <div class="content"></div>
        </article>`);

        $('.checkout_iv .billing_address > .content').append($('.checkout_iv .billing-address'));
        $('.checkout_iv .billing_address > .content').prepend($('.checkout_iv #billing-same-as-shipping').closest('.field-container'));
        $('.checkout_iv #billing-same-as-shipping').prop('checked','true');
        $('.checkout_iv #checkout.container article.checkout-section.payment-info .number').text('3');

        $('#checkout.container article.checkout-section.payment-info .content').append(`
        <ul class="list_iv">
            <li><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1671092139/ShirtSpace/Returns_Icon.png" width="30" alt="Return Icon"> Free 45-day Returns</li>
            <li><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1671092140/ShirtSpace/Guarantee_Icon.png" width="30" alt="Guarantee Badge Icon"> 100% Satisfaction Guarantee</li>
            <li><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1671092139/ShirtSpace/Lock_Icon.png" width="30" alt="Privacy Lock Icon"> This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</li>
        </ul>`);

        // Beauty form on load
        function beautyFromCodeOnLoad() {
            $('.checkout_iv #checkout.container article.checkout-section form input, .checkout_iv #checkout.container article.checkout-section form select').each(function() {
                if ($(this).val() == '' || $(this).val() == null) {
                    $(this).closest('.field-container').removeClass("focused typing");
                } else if ($(this).val() != '' || $(this).val() != null) {
                    $(this).closest('.field-container').addClass("focused").removeClass('typing');
                }
            });
        }
        $(window).on('load', function() {
            beautyFromCodeOnLoad();
        });

            
        function beautyFromCode() {
            $('.checkout_iv #shipping-address-line1, #billing-address-line1').attr('placeholder','Street Address');
            $('.checkout_iv #shipping-address-zip, #billing-address-zip').attr('placeholder','Zip Code');
            $(".checkout_iv #checkout.container article.checkout-section form.simple_form input").each(function() {
                $(this).attr('placeholder',$(this).attr('placeholder')+' *');
            });

            $(document).on('focus', '.checkout_iv #checkout.container article.checkout-section form input, .checkout_iv #checkout.container article.checkout-section form select', function () {
                $(this).closest('.field-container').addClass("focused typing");
            })
            
            $(document).on('blur', '.checkout_iv #checkout.container article.checkout-section form input, .checkout_iv #checkout.container article.checkout-section form select', function () {
                if ($(this).val() == '' || $(this).val() == null) {
                    $(this).closest('.field-container').removeClass("focused typing");
                } else if ($(this).val() != '' || $(this).val() != null) {
                    $(this).closest('.field-container').addClass("focused").removeClass('typing');
                }
            });
        }
        beautyFromCode();

        $(document).on('focus blur keyup keydown', '.checkout_iv #shipping-address-zip', function () {
            setTimeout(() => {
                var checkvalue = $('.checkout_iv #shipping-address-city, .checkout_iv #shipping-address-state');
                $(checkvalue).each(function() {
                    if ($(this).val() == '' || $(this).val() == null) {
                        $(this).closest('.field-container').removeClass("focused typing");
                    } else if ($(this).val() != '' || $(this).val() != null) {
                        $(this).closest('.field-container').addClass("focused").removeClass('typing');
                    }
                });
            }, 400);
        });

        $(document).on('focus blur keyup keydown', '#billing-address-zip', function () {
            setTimeout(() => {
                var checkvalue = $('.checkout_iv #billing-address-city, .checkout_iv #billing-address-state');
                $(checkvalue).each(function() {
                    if ($(this).val() == '' || $(this).val() == null) {
                        $(this).closest('.field-container').removeClass("focused typing");
                    } else if ($(this).val() != '' || $(this).val() != null) {
                        $(this).closest('.field-container').addClass("focused").removeClass('typing');
                    }
                });
            }, 400);
        });

        $(document).on('click', '.checkout_iv #checkout.container .checkout-section.shipping-address input[value="Save & Continue"], .checkout_iv #checkout.container .checkout-section.payment-info .place-order', function() {
            
            setTimeout(() => {
                beautyFromCodeOnLoad();
            }, 1000);

            var i = 0
            var checkError = setInterval(() => {
                console.log(i)
                if($('.checkout_iv .flashes-container').length > 0) {
                    clearInterval(checkError);
                    beautyFromCode();

                } else if(i == 50) {
                    clearInterval(checkError);
                }
                i++
            }, 100);
        });

        function getScrollbarWidth() {
            var div = jQuery('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');
            jQuery('body').append(div);
            var w1 = jQuery('div', div).innerWidth();
            div.css('overflow-y', 'scroll');
            var w2 = jQuery('div', div).innerWidth();
            jQuery(div).remove();
            return (w1 - w2);
        }
        
        jQuery(window).on("resize", function () {
            var scrollWidth = getScrollbarWidth();
            var windowWidth = jQuery(window).width();
            windowWidthFull = windowWidth + scrollWidth;
         
            if (windowWidthFull < 768) {
                $('.checkout_iv #checkout.container .checkout-section.payment-info .content > h4 ~ h4').after($('.checkout_iv #checkout > .sidebar'));
            } else {
                $('.checkout_iv #checkout').prepend($('.checkout_iv #checkout.container .checkout-section.payment-info .content .sidebar'));  
            }
        }).resize();
    }
}

if ($('.checkout__sign-in-trigger').length > 0){
    loadTestCode();
}