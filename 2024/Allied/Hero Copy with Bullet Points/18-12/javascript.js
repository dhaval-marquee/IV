function loadTestCode() {
    if (!$('body').hasClass('iv_home')) {
        $('body').addClass('iv_home');

        $('.iv_home .moving-from-to').wrapInner('<div class="slide-overlay"></div>');
        $('.iv_home .moving-from-to .slide-header > p, .iv_home .moving-from-to .slide-footer > p').remove();
        $('.iv_home .moving-from-to .slide-header').append(`<ul>
            <li>Full-Service Moving: Packing, Transport, and Unpacking</li>
            <li>24/7 Customer Support Every Step of the Way</li>
            <li>Transparent Pricing with No Hidden Fees</li>
        </ul>`);
        $('.iv_home .moving-from-to button.btn').text('CONTINUE');
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);