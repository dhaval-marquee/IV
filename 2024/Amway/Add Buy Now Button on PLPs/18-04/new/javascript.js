function loadTestCode() {
    if (!document.body.classList.contains('btn_iv')) {
        document.body.classList.add('btn_iv');

        function addBtn() {
            var buttonAvailable = setInterval(() => {
                if(document.querySelectorAll('.amw-plp-item__add-to-cart-wrapper').length > 0) {
                    clearInterval(buttonAvailable);

                        if(document.querySelectorAll('.buy_iv_wrapper').length == 0) {
                            document.querySelectorAll('.amw-plp-item__add-to-cart-wrapper').forEach(function(atcBtn){
                                atcBtn.insertAdjacentHTML('afterend', `<div class="buy_iv_wrapper"><button class="amw-button amw-button--small amw-button--primary buy_iv">Buy now</button></div>`);
                                // Attach event listener
                                atcBtn.nextElementSibling.querySelector('.buy_iv').addEventListener('click', function() {
                                    addToCart(atcBtn);
                                });
                            });
                        }
                }
            }, 100);
        }
        addBtn();

        var stopChecking
        document.addEventListener('click', function(){
            var i = 0;
            clearInterval(stopChecking);
            stopChecking = setInterval(() => {
                addBtn();
                i++
                if(i === 50) {
                    clearInterval(stopChecking)
                }
            }, 100);
        });
    }

    function addToCart(atcBtn) {
        atcBtn.querySelector('button[type="submit"]').click();
        document.querySelector('a[test-id="cart-button"]').click();
    }
}

loadTestCode();