function heroText() {
    if (!$('body').hasClass('hero_iv')) {
        $('body').addClass('hero_iv');

        $('.hero_iv .moving-from-to').eq(0).addClass('step1');
        $('.hero_iv .step1 .slide-header > p').remove();
        $('.hero_iv .step1 .slide-header').append(`<ul>
            <li>Full-Service or Customizable Moving Options</li>
            <li>24/7 Customer Support Every Step of the Way</li>
            <li>Transparent Pricing with No Hidden Fees</li>
        </ul>`);
        $('.hero_iv .step1 .slide-footer').append('<h2 class="head2"><span style="color: #ffd31f;">Allied is proud to drive life\'s biggest moments since 1928.</span></h2>');
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        heroText();
    }
}, 100);
