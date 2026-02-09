function loadTestCode() {
    if (!jQuery('body').hasClass('landingPage_iv')) {
        jQuery('body').addClass('landingPage_iv');
        
        // Put your test code here

        var text = jQuery('.landingPage_iv h4.fusion-title-heading').eq(1).text();
        var contactNumber = text.match(/\d{3}-\d{3}-\d{4}/)[0];

        jQuery('.landingPage_iv #gform_wrapper_21').before(`<div class="hero-number">
            <div class="number-wrapper">
                <p>Call: <span>${contactNumber}</span></p>
            </div>
            <p>or fill the form below</p>
        </div>`);
    }
}

function runCode() {
    var checkCondition = setInterval(function() {
        if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
            clearInterval(checkCondition);
            loadTestCode();
        }
    }, 100);
}

// Load code just for Desktop 
if (window.matchMedia("(min-width: 1025px)").matches) {

    runCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 1024.98px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 1025px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for Desktop over