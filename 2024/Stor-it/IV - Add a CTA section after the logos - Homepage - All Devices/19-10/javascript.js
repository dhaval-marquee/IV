function loadTestCode() {
    if (!jQuery('body').hasClass('homepage_iv')) {
        jQuery('body').addClass('homepage_iv');
        
        // Put your test code here
        jQuery('.logo-section').closest('section').addClass('brand-logos-section');
        jQuery('.brand-logos-section + br').after(`<hr><div class="cta-Section">
                <div class="container">
                    <div class="content">
                        <h2>Rent your unit in just a few easy&nbsp;clicks!</h2>
                        <p>Renting your storage unit is a breeze with our easy online process! You can do it from any device, so you can find the perfect space whenever
                            you need it. Give it a try&nbsp;today!</p>
                        <a class="findButt rippleFlashL2R " href="https://www.stor-it.com/locations/"> View Units</a>
                    </div>
                </div>
        </div>`);

    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);