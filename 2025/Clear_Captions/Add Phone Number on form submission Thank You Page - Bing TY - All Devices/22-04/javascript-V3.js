function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-thanks-number')) {
        document.querySelector('body').classList.add('iv-thanks-number');

        document.querySelectorAll('p').forEach(function(e) {
            if (e.textContent.includes('We will be calling you shortly') && !document.querySelector('.iv-phone-number')) {
                e.classList.add('iv-phone-number');
                e.style.display = 'none';
            }
        });

        var ivDesktopNumber = document.querySelector('.iv-thanks-number header .header-nav .header-nav-call-now span');
        var ivMobileNumber = document.querySelector('.iv-thanks-number header .header-nav-mobile-menu .header-nav-mobile-menu-phone a');
        var ivMobileNumberNav = document.querySelector('.iv-quick-navigation .header-cc-logo a.iv-nav-call');
        if(ivDesktopNumber) {
            ivDesktopNumber.innerText = '(866) 992-1955';
            ivDesktopNumber.setAttribute('href', 'tel:(866) 992-1955');
        }
        if(ivMobileNumber && ivMobileNumberNav) {
            ivMobileNumber.innerText = '(866) 992-2159';
            ivMobileNumber.setAttribute('href', 'tel:(866) 992-2159');
            ivMobileNumberNav.setAttribute('href', 'tel:(866) 992-2159');
        }

        var htmlCode = `<div class="iv-number-new iv-number-new-v3">
            <p> 
                A sales support representative should be calling you within the next 15-30 minutes (7AM to 7PM Pacific). If you would like to get in touch sooner, please call the number below.
                <a class="iv-phone-desktop" href="tel:(866) 992-1955">Call Now: (866) 992-1955</a> 
                <a class="iv-phone-mobile" href="tel:(866) 992-2159">Call Now: (866) 992-2159</a> 
            </p>
            <p class="iv-connecting-expect">
                We look forward to connecting with you to get you signed up for ClearCaptions. Here's what you can expect on our call:
            </p>
        </div>`;
        
        const phoneNumberC = document.querySelector('.iv-phone-number');
        if(phoneNumberC && !document.querySelector('.iv-number-new')){
            phoneNumberC.insertAdjacentHTML('afterend', htmlCode);
        }

        if (phoneNumberC && !document.querySelector('.iv-number-new-section')) {
            phoneNumberC.closest('div').classList.add('iv-number-new-section');
        }        

    }
}


var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
