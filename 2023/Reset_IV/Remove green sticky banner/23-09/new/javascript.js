function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('banner_iv')) {
        bodyEle.classList.add('banner_iv');

        var HbBarWrap = setInterval(() => {
            if(document.querySelectorAll('.banner_iv .hb-bar-content').length > 0) {
                clearInterval(HbBarWrap);
                var HbBarContent = document.querySelectorAll('.banner_iv .hb-bar-content');
                HbBarContent.forEach(function(element) {
                    var HbBarParent = element.parentElement;
                    HbBarParent.style.setProperty('display', 'none', 'important');
                });
            }
        }, 20);
    }

    var url = window.location.href;
    url = url.split( '?' )[0];
    url = url.split( '#' )[0];

    if (!bodyEle.classList.contains('cart_iv') && ((url == "https://resetiv.com/pages/cart") || url == "https://resetiv.com/cart")) {
        bodyEle.classList.add('cart_iv');
    
        cartPageCode();
    }

    function cartPageCode() {
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
loadTestCode();