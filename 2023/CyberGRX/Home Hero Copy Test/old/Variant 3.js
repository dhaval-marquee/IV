function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('iv_home_hero')) {
        bodyEle.classList.add('iv_home_hero');

        document.querySelector('.iv_home_hero .m-bannerhome h1').textContent = 'The leader in third party risk management';
        document.querySelector('.iv_home_hero .m-bannerhome p > span').textContent = 'Efficiently prioritize, monitor, and mitigate third-party threats to your organization’s productivity and profitability.';
    }
}

// Load code just for Desktop 
if (window.matchMedia("(min-width: 1025px)").matches) {

    loadTestCode();

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