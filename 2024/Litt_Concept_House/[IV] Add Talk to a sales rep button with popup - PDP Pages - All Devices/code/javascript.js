function loadTestCode() {
    if (!$('body').hasClass('talkModalIV')) {
        $('body').addClass('talkModalIV');

        $('button.action_button').after(`<a href="javascript:;" id="showSalesModal" class="openModal">Talk to a Sales Representative  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="380.000000pt" height="336.000000pt" viewBox="0 0 380.000000 336.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,336.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    <path d="M660 3341 c-50 -16 -127 -61 -195 -116 -368 -295 -464 -445 -452 -710 4 -97 9 -123 44 -220 293 -803 814 -1451 1513 -1883 245 -152 625 -328 826 -383 109 -30 260 -24 352 13 104 43 171 89 264 181 88 89 228 256 273 327 85 134 64 313 -48 422 -49 48 -120 88 -488 277 -297 152 -348 172 -441 172 -143 0 -241 -79 -298 -241 -36 -100 -80 -138 -147 -125 -61 11 -387 295 -565 492 -59 65 -139 158 -177 206 -64 79 -71 92 -71 132 0 60 28 89 114 120 179 65 256 158 256 309 -1 82 -21 137 -112 296 -42 74 -119 226 -172 338 -102 218 -117 244 -180 311 -58 62 -125 91 -206 90 -36 0 -76 -4 -90 -8z"></path>
                    <path d="M1730 3177 c187 -126 950 -601 965 -601 18 0 940 577 975 610 12 12 -128 14 -980 14 l-995 0 35 -23z"></path>
                    <path d="M1590 2500 c0 -313 2 -570 4 -570 8 0 676 700 676 708 0 8 -661 432 -674 432 -3 0 -6 -256 -6 -570z"></path>
                    <path d="M3451 2857 c-184 -117 -333 -216 -331 -222 1 -5 152 -165 334 -354 l331 -345 3 288 c1 158 1 413 0 566 l-3 279 -334 -212z"></path>
                    <path d="M2031 2153 c-209 -218 -378 -400 -375 -405 6 -10 2071 -11 2078 0 3 6 -528 569 -719 761 l-43 44 -129 -82 c-71 -44 -138 -81 -148 -81 -11 0 -76 36 -146 80 -70 44 -129 80 -132 80 -3 0 -176 -178 -386 -397z"></path>
                </g>
            </svg>
        </a>`);

        // Put your test code here
        // Modal content
        $('.talkModalIV').prepend(`<div class="talkModalIV_modal">
            <div class="talkModalIV_modal_inner">
                <div class="talkModalIV_modal_block">
                    <div class="talkModalIV_modal_header">
                        <a href="javascript:;" class="mq_close"></a>    
                    </div>
                    <div class="talkModalIV_modal_body">
                        <div class="talkModalIV_modal_product">
                            <div class="talkModalIV_modal_product_image"><img src="" alt=""></div>
                            <div class="talkModalIV_modal_product_info">
                                <div class="talkModalIV_modal_product_code"></div>
                                <div class="talkModalIV_modal_product_title"></div>
                                <div class="talkModalIV_modal_product_price"></div>
                            </div>
                        </div>
                        <div class="modalTitle">Send us a message</div>
                        <div class="talkModalIV_modal_form"></div>
                    </div>
                    <div class="talkModalIV_modal_footer">
                        <div class="talkModalIV_modal_CallText">Or Call Us At: <a href="tel:8187898900">(818) 789-8900</a></div>
                        <div class="talkModalIV_modal_PrivacyText">By submitting this form, you consent to receive marketing communication (e.g.- sales calls) from Litt Concept House at the number provided, including messages sent by autodialer. Consent is not a condition of purchase. Msg & data rates may apply. Msg frequency varies. Unsubscribe at any time by replying STOP or clicking the unsubscribe link (where available). <a href="https://www.littconcepthouse.com/policies/privacy-policy">Privacy Policy & Terms.</a></div>
                    </div>
                </div>
            </div>
        </div>`);

        function loadContent() {
            var productCode = $('.product__information .sku');
            var productTitle = $('.product__information .product-title');
            var productPrice = $('.product__information .money');
            var productImage = $('.product__images .image__container').eq(0).find('img').attr('src');

            $('.talkModalIV_modal_product_code').text(productCode.text());
            $('.talkModalIV_modal_product_title').text(productTitle.text());
            $('.talkModalIV_modal_product_price').text(productPrice.text());
            $('.talkModalIV_modal_product_image img').attr('src', productImage);
            $('.talkModalIV_modal_product_image img').attr('alt', productTitle.text());
        }

        $.getScript('//js.hsforms.net/forms/embed/v2.js', function() {
            hbspt.forms.create({
                region: "na1",
                portalId: "45467027",
                formId: "dc5bcd52-29d1-4e80-abb0-04de46005911",
                isInsideFrame: true,
                target: '.talkModalIV_modal_form',
                onFormSubmitted: function ($form) {
                    $('.talkModalIV_modal').addClass('form-submitted');
                }
            });

            var getClassInterval = setInterval(function(){
                if($('body .talkModalIV_modal .hs-submit .actions .hs-button').length > 0){
                    clearInterval(getClassInterval);
                    
                    $('body .talkModalIV_modal fieldset input.hs-input:not([type="hidden"])').each(function(){
                        $(this).attr('placeholder',$(this).closest('.hs-form-field').find('label').text());
                    });

                    $('body .talkModalIV_modal fieldset textarea').attr('placeholder','How can we help?');
                }
            },500);
        });

        // Modal Open & Close
        $('.talkModalIV .openModal').on('click', function(){
            loadContent();
            $('.talkModalIV .talkModalIV_modal').addClass('fade').show();
            $('html').addClass('talkModalIV_modal_open');
            setTimeout(() => {
                $('.talkModalIV .talkModalIV_modal').addClass('open');
            }, 75);
        });

        $(document).on('click', '.mq_close', function(){
            $('html').removeClass('talkModalIV_modal_open');
            $('.talkModalIV .talkModalIV_modal').removeClass('open');
            setTimeout(() => {
                $('.talkModalIV .talkModalIV_modal').hide();
            }, 75);
        });
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && $('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);