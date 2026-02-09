function loadTestCode() {
    if (!jQuery('body').hasClass('hero_iv')) {
        jQuery('body').addClass('hero_iv variant3');

        jQuery.getScript("//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js", function () {
            // Ensure the target element exists before appending
            jQuery('.trial-wrapper .trial-content ul').after(`
                <div id="review_wrapper">
                    <div class="trustpilot-widget"
                        data-locale="en-US"
                        data-template-id="53aa8807dec7e10d38f59f32"
                        data-businessunit-id="5e32ebb8878b550001034494"
                        data-style-height="150px"
                        data-style-width="100%">
                        <a href="https://www.trustpilot.com/review/mapcommunications.com" target="_blank" rel="noopener">Trustpilot</a>
                    </div>
                </div>
            `);

            // Initialize the Trustpilot widget after the script is loaded and DOM is updated
            const trustBox = document.querySelector('#review_wrapper .trustpilot-widget');
            if (trustBox && window.Trustpilot) {
                window.Trustpilot.loadFromElement(trustBox);
            }
        });
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('.trial-wrapper .trial-content ul').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);