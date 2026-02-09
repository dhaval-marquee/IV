function loadTestCode() {
    if (!document.querySelector('body').classList.contains('contactInfoIV')) {
        document.querySelector('body').classList.add('contactInfoIV');
        
        // Put your test code here
        document.querySelector('#divEstimatedMoveIn').insertAdjacentHTML('afterend', `<p class="disclaimerText">Please note that by clicking continue, you will begin our easy rental process, and once you have completed payment and signed the agreement, your rental agreement will commence immediately, overriding your reservation’s intended move-in date.<span class="pss-color--accent">*</span></p>`);
    }
}

loadTestCode();