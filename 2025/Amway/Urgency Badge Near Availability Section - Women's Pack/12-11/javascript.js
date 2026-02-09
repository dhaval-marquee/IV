function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-Badge')) {
        document.querySelector('body').classList.add('iv-Badge');
        document.querySelectorAll('.amw-page-pdp__availability span[test-id="message-in-stock"] > span')[1].insertAdjacentHTML('afterend',`<span class="badgeGreen">Selling Fast!
        </span>`);
        
    }
}

// Run script when body exists
var checkCondition = setInterval(function () {
    if (document.querySelector('body')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 500);