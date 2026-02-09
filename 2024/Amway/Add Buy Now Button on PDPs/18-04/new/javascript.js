function productPageCode() {
    if (!document.body.classList.contains('product_btn_iv')) {
        document.body.classList.add('product_btn_iv');

        function addBtn() {
            var buttonAvailable = setInterval(() => {
                if(document.querySelectorAll('.AddToCart-AddToCartAction .add_to_cart_form.js-add-to-cart-product-form').length > 0) {
                    clearInterval(buttonAvailable);

                        if(document.querySelectorAll('.buy_iv_wrapper').length == 0) {
                            document.querySelector('.AddToCart-AddToCartAction .add_to_cart_form.js-add-to-cart-product-form').insertAdjacentHTML('afterend', `<div class="buy_iv_wrapper"><button class="amw-button amw-button--large amw-button--primary buy_iv">Buy now</button></div>`);

							// Attach event listener
							document.querySelector('.buy_iv_wrapper .buy_iv').addEventListener('click', function() {
								addToCart();
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

    function addToCart() {
        document.querySelector('.AddToCart-AddToCartAction .add_to_cart_form.js-add-to-cart-product-form button').click();
        document.querySelector('a[test-id="cart-button"]').click();
    }
}

productPageCode();