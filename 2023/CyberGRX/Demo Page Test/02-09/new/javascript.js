function loadTest() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('demoPage_iv')) {
        bodyEle.classList.add('demoPage_iv');

        // Put your test code here
        document.querySelector('.demoPage_iv .container .text h1').innerHTML = "<b>Discover Why We're Still Leading The TPRM Charge With a Quick Demo</b>";

        var getForm = setInterval(() => {
            console.log('changed');
            if(document.querySelectorAll("#hs-form-iframe-0").length > 0) {
                var iframe = document.getElementById("hs-form-iframe-0");
                if (iframe) {
                    var iframeContent = iframe.contentWindow;
                    if (iframeContent) {
                        var buttonElement = iframeContent.document.querySelector('input.hs-button');
                        if (buttonElement) {
                            buttonElement.setAttribute('value','Book a Quick No-Obligation Demo');
                            buttonElement.classList.add('textChanged');
                            clearInterval(getForm);
                        }
                    }
                }
            }
        }, 100);
    }
}

// Load code just for Desktop 
if (window.matchMedia("(min-width: 1025px)").matches) {

    loadTest();

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