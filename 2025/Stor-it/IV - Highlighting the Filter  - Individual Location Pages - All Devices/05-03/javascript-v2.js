function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-filter-v2')) {
        document.querySelector('body').classList.add('iv-filter-v2');

    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
