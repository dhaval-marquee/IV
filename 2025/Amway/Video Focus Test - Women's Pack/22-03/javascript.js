function loadTestCode() {
    if (!document.querySelector('body').classList.contains('hero_iv')) {
        document.querySelector('body').classList.add('hero_iv');
        
        // Put your test code here
        window.dispatchEvent(new Event('resize'));
    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);