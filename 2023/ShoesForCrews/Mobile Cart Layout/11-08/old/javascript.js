// Load code just for mobile 
if (window.matchMedia("(max-width: 766.98px)").matches) {

    var paymentButton = setInterval(() => {
        if(document.querySelectorAll('div[class*=DefaultCartView_mobileExpressCheckoutButtons]').length > 0 && 
        document.querySelectorAll('div[class*=DefaultCartView_summaryContainer]').length > 0) {
            clearInterval(paymentButton);
            // console.log('loaded');

            // debugger
            document.querySelector('div[class*=DefaultCartView_cartButtonsWrapper]').after(document.querySelector('div[class*=DefaultCartView_mobileExpressCheckoutButtons]'));

            document.querySelectorAll('div[class*=CartItems_cart] div[class*=Item_cartItemRow] div[class*=Item_total]').forEach(function(totalPrice) {
                var itemAttributesContainer = totalPrice.previousElementSibling.querySelector('div[class*=Item_cartItemRow] div[class*=Item_itemInfo] div[class*=Item_itemAttributesContainer] > div[class*=Item_subAttributeItem]:last-child');
                if (itemAttributesContainer && !totalPrice.classList.contains('qty_moved')) {
                    // console.log('Qty. moved');
                    
                    
                    var price = itemAttributesContainer.outerHTML
                    // console.log(price)


                    totalPrice.insertAdjacentHTML('beforeend',price);

                    totalPrice.classList.add('qty_moved');
                }
            });
        }
    }, 100);

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 767px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 766.98px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for mobile over