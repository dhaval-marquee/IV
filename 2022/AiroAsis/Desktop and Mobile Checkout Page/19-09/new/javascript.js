var bodyEle = document.querySelector('body');
if (!bodyEle.classList.contains('coupon_iv')) {
    bodyEle.classList.add('coupon_iv');



    if(document.querySelectorAll('#order-summary .order-summary__sections .order-summary__section--discount').length > 0) {

        document.querySelectorAll('#order-summary .order-summary__sections .order-summary__section--discount')[0].classList.add('promo_code_field');
    
    
        // Add new block
        var addBeforeThis = document.querySelector('.promo_code_field');
        var newItem = document.createElement('div');
        newItem.className = "promoCodeLink";
        newItem.style.padding = "21px 0"
        newItem.innerHTML = 'Have a coupon or promo code? <a href="javascript:;" id="showCouponField">Click here</a>.';
        
        addBeforeThis.parentNode.insertBefore(newItem,addBeforeThis);
        // Add new block over
    
    
        // Click event to open box
        document.getElementById("showCouponField").addEventListener("click", myFunction1);
        function myFunction1() {
            document.querySelector('.promoCodeLink').remove();
            document.querySelector(".promo_code_field").style.display = "block";
        }
    }

}