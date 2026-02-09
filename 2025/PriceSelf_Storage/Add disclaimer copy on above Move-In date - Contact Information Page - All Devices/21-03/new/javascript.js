function loadTestCode() {
    if (!document.querySelector('body').classList.contains('contactInfoIV')) {
        document.querySelector('body').classList.add('contactInfoIV');
        
        // Put your test code here
        document.querySelector('#divEstimatedMoveIn').insertAdjacentHTML('beforebegin', `<p class="disclaimerText">Please note that by clicking continue, you will begin our easy rental process, and once you have completed payment and signed the agreement, your rental agreement will commence immediately, overriding your reservation’s intended move-in date.<span class="pss-color--accent">*</span></p>`);
    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0 && 
        document.querySelectorAll('#divEstimatedMoveIn').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);