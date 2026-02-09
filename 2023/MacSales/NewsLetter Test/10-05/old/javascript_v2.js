function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('newsLetter_Test')) {
        bodyEle.classList.add('newsLetter_Test');
        
        // Put your test code here
        $('.newsLetter_Test .hero-builder__heading').text('OWC Insiders');


        if (!bodyEle.classList.contains('newsLetter_Test_sw')) {
            var icon = $('.newsLetter_Test #navigation-email a > span').detach()
            $('.newsLetter_Test #navigation-email a').text('OWC Insiders');
            $('.newsLetter_Test #navigation-email a').prepend(icon);

            $('.newsLetter_Test #navigation-mobile-upgrades').before(`<li id="navigation-mobile-upgrades" class="nav-mobile__link nav-mobile__link-icon">
                <a href="/shop/macsales_newsletter" aria-label="upgrades"><span class="nav-mobile__lower-icon"><svg fill="#fff" stroke="#fefefe" viewBox="0 0 25 16" width="25" height="16" role="presentation" focusable="false"><use xlink:href="/assets/images/defs.svg#icon-email"></use><title>email</title></svg></span>OWC Insiders</a>
            </li>`);
        }

        $('.block__form form').closest('.block__wrap').addClass('content_column');
        $('.content_column ~ div').addClass('form_column');
        $('.newsLetter_Test .form_column').wrapInner( '<div class="privacyPromise_wrap"></div>');
        $('.privacyPromise_wrap').before($('.block__form form').parent());
        $('.content_column > div:first-child').prepend('<h2 class="subtitle_heading">The OWC <span>Hot Deals</span> Newsletter</h2>');
        $('.newsLetter_Test .subtitle_heading').next().addClass('list_img_wrapper');
        $('.content_column > div:last-child > div:last-child').remove();
        $('.content_column > div:last-child > div').append(`
            <h2>Sign Up and Receive:</h2>
            <ul>
                <li><span class="text-highlight">+</span>OWC's Hottest Deals</li>
                <li><span class="text-highlight">+</span>Limited-Quantity Specials</li>
                <li><span class="text-highlight">+</span>Exclusive Prices</li>
                <li><span class="text-highlight">+</span>Exciting Product releases</li>
                <li><span class="text-highlight">+</span>Advance Pre-Orders</li>
            </ul>`);
    }
}
loadTestCode();