function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-remove-cta')) {
        document.querySelector('body').classList.add('iv-remove-cta');
     
    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);