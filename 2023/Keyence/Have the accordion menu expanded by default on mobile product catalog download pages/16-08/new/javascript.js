function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('toggleShow')) {
        bodyEle.classList.add('toggleShow');
        
        // Put your test code here
        document.querySelector('.toggleShow #suz_registrationForm .js-toggleCart-item')?.setAttribute('aria-expanded','true');
        document.querySelector('.toggleShow button + div[aria-hidden="true"]')?.setAttribute('aria-hidden','false');
    }
}

// Load code just for mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {

    loadTestCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 768px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for mobile over