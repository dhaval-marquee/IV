if(!$('body').hasClass('iv_home')) {
        
    $('body').addClass('iv_home');
    $('.iv_home .marketing-banner__container').after('<div class="margin-top-40">\
        <div class="grid-container">\
            <div class="grid-span-12 hero_block">\
                <div class="hero_content">\
                    <h2 class="grid-tile__header">The Most Trusted Name in Apple Storage and Memory since 1988</h2>\
                    <div class="tp_rating"></div>\
                    <a href="https://eshop.macsales.com/shop/ssd/owc" class="owc-button">Shop SSDs</a>\
                    <a href="https://eshop.macsales.com/shop/apple/memory/" class="owc-button">Shop Memory</a>\
                </div>\
                <div class="hero_image">\
                    <img class="center-block img-responsive" src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/macsales/hero-image.png" alt="OWC Upgrade Service">\
                </div>\
            </div>\
        </div>\
    </div>\
    <div class="margin-top-40">\
        <div class="grid-container">\
            <div class="grid-span-12 marketing_block">\
                <div class="grid-span-3">\
                    <img class="marketing-icon__img" src="//res.cloudinary.com/ignite-visibility/image/upload/v1661406878/macsales/Icon-Lifetime-Warranty-MS.png" alt="Lifetime Warranty" width="50">\
                    <h3>Lifetime Warranty</h3>\
                    <p>On OWC Memory</p>\
                </div>\
                <div class="grid-span-3">\
                    <img class="marketing-icon__img" src="//res.cloudinary.com/ignite-visibility/image/upload/v1661406878/macsales/Icon-Free-Shipping-MS.png" alt="Free Shipping" width="100">\
                    <h3>Free Shipping</h3>\
                    <p>On Most Orders Over $149</p>\
                </div>\
                <div class="grid-span-3">\
                    <img class="marketing-icon__img" src="//res.cloudinary.com/ignite-visibility/image/upload/v1661406878/macsales/Icon-Money-Back-MS.png" alt="30-day Money-Back Guarantee" width="60">\
                    <h3>30-day Money-Back Guarantee</h3>\
                    <p>With Easy Returns</p>\
                </div>\
                <div class="grid-span-3">\
                    <img class="marketing-icon__img" src="//res.cloudinary.com/ignite-visibility/image/upload/v1661406878/macsales/Icon-World-Class-Support-MS.png" alt="World Class Support" width="50">\
                    <h3>World Class Support</h3>\
                    <p>Available Online, Chat, Email, or Phone</p>\
                </div>\
            </div>\
        </div>\
    </div>');



    $.getScript("//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js", function () {
        $('.tp_rating').append('<div id="trustbox" class="trustpilot-widget" data-locale="en-US" data-template-id="5419b6ffb0d04a076446a9af" data-businessunit-id="481734ef0000640005026317" data-style-height="40px" data-style-width="100%" data-theme="light">\
            <a href="https://www.trustpilot.com/review/www.macsales.com" target="_blank" rel="noopener">Trustpilot</a>\
        </div>');

        const trustbox = document.getElementById('trustbox');
        window.Trustpilot.loadFromElement(trustbox);
    });

}