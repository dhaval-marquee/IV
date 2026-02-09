if (!$('body').hasClass('review_iv')) {
    $('body').addClass('review_iv');
    // Put your test code here

    $.getScript("//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js", function () {
        $('#content ul.marketing-icon.batteries-marketing-icon').after('<div id="review_wrapper">\
            <div id="trustbox" class="trustpilot-widget" data-locale="en-US" data-template-id="53aa8912dec7e10d38f59f36" data-businessunit-id="481734ef0000640005026317" data-style-height="140px" data-style-width="100%" data-theme="light" data-stars="5" data-review-languages="en">\
                <a href="https://www.trustpilot.com/review/www.macsales.com" target="_blank" rel="noopener">Trustpilot</a>\
            </div>\
        </div>');

        const trustbox = document.getElementById('trustbox');
        window.Trustpilot.loadFromElement(trustbox);
    });
}