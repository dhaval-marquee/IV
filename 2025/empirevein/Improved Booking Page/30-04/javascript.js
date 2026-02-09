function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-booking-page')) {
        document.querySelector('body').classList.add('iv-booking-page');


    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
