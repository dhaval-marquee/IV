function loadTest() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('demoPage_iv')) {
        bodyEle.classList.add('demoPage_iv');

        // Put your test code here
        document.querySelector('.demoPage_iv .container .text h1').innerHTML = "<b>Discover Why We're Still Leading The TPRM Charge With a Quick Demo</b>";

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