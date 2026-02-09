function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('newsLetter_Test')) {
        bodyEle.classList.add('newsLetter_Test');
        
        // Put your test code here
        $('.newsLetter_Test .block__wrap.u-margin-top-mobile__medium').wrapInner( '<div class="privacyPromise_wrap"></div>');

        $('.newsLetter_Test .block__wrap.u-margin-top-mobile__medium .privacyPromise_wrap').before($('.block__wrap.u-margin-top-mobile__none .block__form'));

        $('.newsLetter_Test .block__wrap .inner-block-grid').prepend($('.block__wrap.u-margin-top-mobile__none .block__heading-h2 h2').html('The OWC <span>Hot Deals</span> Newsletter'));

        $('.block__wrap.u-margin-top-mobile__none .block__heading-h2+.block__copy').append(`<h2>Sign Up and Receive:</h2>
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
