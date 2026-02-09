function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('newsLetter_Test_sw') && !bodyEle.classList.contains('newsLetter_Test')) {
        bodyEle.classList.add('newsLetter_Test_sw');
        
        // Put your test code here
        var icon = $('.newsLetter_Test_sw #navigation-email a > span').detach()
        $('.newsLetter_Test_sw #navigation-email a').text('OWC Insiders');
        $('.newsLetter_Test_sw #navigation-email a').prepend(icon);

        $('.newsLetter_Test_sw #navigation-mobile-upgrades').before(`<li id="navigation-mobile-upgrades" class="nav-mobile__link nav-mobile__link-icon">
            <a href="/shop/macsales_newsletter" aria-label="upgrades"><span class="nav-mobile__lower-icon"><svg fill="#fff" stroke="#fefefe" viewBox="0 0 25 16" width="25" height="16" role="presentation" focusable="false"><use xlink:href="/assets/images/defs.svg#icon-email"></use><title>email</title></svg></span>OWC Insiders</a>
        </li>`);
    }
}
loadTestCode();