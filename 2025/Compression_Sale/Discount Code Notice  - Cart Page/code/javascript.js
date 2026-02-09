function cartDiscountCode() {
    if (!document.querySelector('body').classList.contains('card-discount-iv')) {
        document.querySelector('body').classList.add('card-discount-iv');
        
        // Put your test code here
        var discountCopyCode = '<p class="discount-text">Discount codes can be applied at checkout.</p>';
        if(document.querySelector('.cartitems--list') && document.querySelectorAll('.cartitems > .discount-text').length == 0) {
            document.querySelector('.cartitems--list').insertAdjacentHTML('beforebegin', discountCopyCode);
        }

        if(document.querySelector('.cart-final-total') && document.querySelectorAll('.cart-final-total .discount-text').length == 0) {
            document.querySelector('.cart-final-total').insertAdjacentHTML('afterbegin', discountCopyCode);
        }
    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        cartDiscountCode();
    }
}, 100);