function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('cart_iv')) {
        bodyEle.classList.add('cart_iv');
        
        // Put your test code here
        var HbBarWrap = setInterval(() => {
            if(document.querySelectorAll('#headline').length > 0) {
                clearInterval(HbBarWrap);
                document.querySelector('#headline').parentNode.parentNode.parentNode.classList.add('hb-bar_wrap');   
            }
        }, 20);
        var getField = setInterval(() => {
            if(document.querySelectorAll('.site-footer__newsletter .checkpostcodeform label[for="cpostcode_input"]').length > 0) {
                clearInterval(getField);

                document.querySelector('.site-footer__newsletter .checkpostcodeform label[for="cpostcode_input"]').textContent = 'Where would you like us to come for your service?'
                document.querySelector('#checkout').setAttribute('value','Continue To Billing Details');

                var asapInterval = setInterval(() => {
                    if(document.querySelectorAll('.optionClicked').length == 0) {
                        clearInterval(asapInterval);

                        console.log('option clicked');
                        document.querySelector('#checkout_attributes_asap').click();
                        document.querySelector('#checkout_attributes_asap').classList.add('optionClicked');
                    }
                    
                }, 100);
            }
        }, 20);
    }
}

if (window.matchMedia("(max-width: 767.98px)").matches) {

    loadTestCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 768px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            location.reload();
        }
    }, true);
}