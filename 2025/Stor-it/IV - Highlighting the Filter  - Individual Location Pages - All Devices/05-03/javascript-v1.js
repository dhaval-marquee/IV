function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-filter-v1')) {
        document.querySelector('body').classList.add('iv-filter-v1');

    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
