function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('checkout_iv')) {
        bodyEle.classList.add('checkout_iv');
        
        // Put your test code here

        $('.checkout__account-details').before(`
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

        $('.billing_address > .content').append($('.billing-address'));
        $('.billing_address > .content').prepend($('#billing-same-as-shipping').closest('.field-container'));
        $('#billing-same-as-shipping').prop('checked','true');

        // Beauty form on load
        function beautyFromCodeOnLoad() {
            $('#checkout.container article.checkout-section form input, #checkout.container article.checkout-section form select').each(function() {
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
            $('#shipping-address-line1, #billing-address-line1').attr('placeholder','Street Address');
            $('#shipping-address-zip, #billing-address-zip').attr('placeholder','Zip Code');
            $("#checkout.container article.checkout-section form input").each(function() {
                $(this).attr('placeholder',$(this).attr('placeholder')+' *');
            });

            $("#checkout.container article.checkout-section form input, #checkout.container article.checkout-section form select").focus(function () {
                $(this).closest('.field-container').addClass("focused typing");
            }).blur(function () {
                if ($(this).val() == '' || $(this).val() == null) {
                    $(this).closest('.field-container').removeClass("focused typing");
                } else if ($(this).val() != '' || $(this).val() != null) {
                    $(this).closest('.field-container').addClass("focused").removeClass('typing');
                }
            });
        }
        beautyFromCode();

        $(document).on('focus blur keyup keydown', '#shipping-address-zip', function () {
            setTimeout(() => {
                var checkvalue = $('#shipping-address-city, #shipping-address-state');
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
                var checkvalue = $('#billing-address-city, #billing-address-state');
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
                if($('.flashes-container').length > 0) {
                    clearInterval(checkError);
                    beautyFromCode();

                } else if(i == 50) {
                    clearInterval(checkError);
                }
                i++
            }, 100);
        });
    }
}
loadTestCode();