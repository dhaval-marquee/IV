function runCode() {
    function addCalendlyWidget(fieldId, url) {
        $(fieldId).after(`<div class="calendly-inline-widget" data-url="${url}" style="min-width:320px;height:700px;"></div>`);
        $('<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>').appendTo($('head'));
        $(fieldId).remove();
    }

    function waitForElement(selector, callback, timeout) {
        var startTime = new Date().getTime();
        var interval = setInterval(function() {
            if (document.querySelector(selector)) {
                clearInterval(interval);
                callback();
            } else {
                if (new Date().getTime() - startTime > timeout) {
                    clearInterval(interval);
                    console.error("Timeout exceeded while waiting for element with selector: " + selector);
                }
            }
        }, 1000); // check every second
    }

    // Fitness Consultation
    waitForElement('#field_8_4', function() {
        addCalendlyWidget('#field_8_4', 'https://calendly.com/jackcityfitness/fitness-consultation?primary_color=fe5000');
    }, 10000); // wait for up to 10 seconds

    // Health Appraisal
    waitForElement('#field_9_4', function() {
        addCalendlyWidget('#field_9_4', 'https://calendly.com/jackcityfitness/health-appraisal?primary_color=fe5000');
    }, 10000); // wait for up to 10 seconds

    // Gym Tour
    waitForElement('#field_13_4', function() {
        addCalendlyWidget('#field_13_4', 'https://calendly.com/jackcityfitness/gym-tour?primary_color=fe5000');
    }, 10000); // wait for up to 10 seconds

}

var jQisLoaded = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQisLoaded);
        runCode();
    }
}, 100);