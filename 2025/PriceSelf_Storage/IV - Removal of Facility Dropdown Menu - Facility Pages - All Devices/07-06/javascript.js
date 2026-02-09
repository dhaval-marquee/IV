function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-location-dropdown')) {
        document.querySelector('body').classList.add('iv-location-dropdown');
    }
}
const checkCondition = setInterval(() => {
    if (document.querySelectorAll('body').length > 0) {
        loadTestCode();
        clearInterval(checkCondition);
    }
}, 2000);