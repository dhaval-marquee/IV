var $ = jQuery;
if (!$('body').hasClass('esg_iv')) {
    $('body').addClass('esg_iv');
    var refreshInterval = setInterval(function () {
        if ($('.esg_iv #section-1312-540').length > 0) {
            clearInterval(refreshInterval);
            $('#section-1139-540').after($('#section-1243-540'));
            $('#text_block-1247-540').html(`<p>ESG is currently the most effective non-surgical weight loss procedure available, producing an average of 23.1% total body weight loss at 1 year.</p>
            <p>Though results may vary for each individual undergoing ESG, most patients will lose 70% of their excess weight, or more.</p>`);
            $('#text_block-1253-540').after(`<a class="ct-link-button" href="https://trueyouweightloss.com/request-a-consultation/">Request a Free Consultation</a>`);
            $('#section-1279-540').after($('#section-1149-540'));
            $('#section-1279-540').after($('#section-1149-540'));
        }
    }, 200);
}