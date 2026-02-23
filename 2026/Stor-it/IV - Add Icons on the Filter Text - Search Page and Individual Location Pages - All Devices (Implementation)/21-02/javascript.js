function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-top-features')) {
        document.querySelector('body').classList.add('iv-top-features');
    
    }
}

const checkCondition = setInterval(function() {
    if (document.querySelector('body')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);