function loadTestCode() {
    if (!document.querySelector('body').classList.contains('test_related_class')) {
        document.querySelector('body').classList.add('test_related_class');
        
        // Put your test code here




    }
}


var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);