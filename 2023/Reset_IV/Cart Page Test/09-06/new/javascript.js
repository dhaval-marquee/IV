function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('cart_iv')) {
        bodyEle.classList.add('cart_iv');
        
        // Put your test code here
        var getField = setInterval(() => {
            if(document.querySelectorAll('.site-footer__newsletter .checkpostcodeform label[for="cpostcode_input"]').length > 0) {
                clearInterval(getField);

                document.querySelector('.site-footer__newsletter .checkpostcodeform label[for="cpostcode_input"]').textContent = 'Where would you like us to come for your service?'
                document.querySelector('#checkout').setAttribute('value','Continue To Billing Address');
                document.querySelector('#checkout_attributes_asap').click();

                var couponInterval = setInterval(() => {
                    if(document.querySelectorAll('#dcodeOuterWrapper').length > 0) {
                        clearInterval(couponInterval)
                        document.querySelector('body #dcodeOuterWrapper').insertAdjacentHTML('beforebegin',`<p id="hasCoupon"><a href="javascript:;">Click here if you have a discount code</a></p>`);

                        document.querySelector("#hasCoupon a").addEventListener("click", function (e) {
                            document.querySelector("#hasCoupon").remove()
                        });
                    }
                }, 10);
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