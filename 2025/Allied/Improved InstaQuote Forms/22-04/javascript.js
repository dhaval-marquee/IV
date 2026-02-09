function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-instantQuote')) {
        document.querySelector('body').classList.add('iv-instantQuote');

        jQuery('form fieldset[data-step="2"]').wrapInner( '<div class="slide-overlay"></div>').addClass('moving-from-to');
        jQuery('form fieldset[data-step="3"]').wrapInner( '<div class="slide-overlay"></div>').addClass('moving-from-to');
        jQuery('form fieldset[data-step="4"]').wrapInner( '<div class="slide-overlay"></div>').addClass('moving-from-to');

        jQuery('form fieldset[data-step="2"] > div p.head4 span').html(jQuery('form fieldset[data-step="2"] > div p.head4 span').html().replace('step 2 of 5','step 2 of 4'));
        jQuery('form fieldset[data-step="3"] > div p.head4 span').html(jQuery('form fieldset[data-step="3"] > div p.head4 span').html().replace('step 3 of 5','step 3 of 4'));
        jQuery('form fieldset[data-step="4"] > div p.head4').html('Final Step!');


        jQuery('form fieldset[data-step="3"] > div p.head1').html('Select your current home type');
        jQuery('form fieldset[data-step="4"] > div button#insta-quote-submit').html('GET QUOTE');

    }

}

// Ensure the script runs only after the body exists
var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 200);
