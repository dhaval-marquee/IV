function wrapInner(parent, wrapper) {
    if (typeof wrapper === "string")
        wrapper = document.createElement(wrapper);
        wrapper.classList.add('zipcode_modal_wrapper','icon--truck')
    var div = parent.appendChild(wrapper);
    while(parent.firstChild !== wrapper)
        wrapper.appendChild(parent.firstChild);
}
if(document.querySelectorAll('.zipcode_modal_wrapper').length == 0) {
    var getZipCode = setInterval(() => {
        if(document.querySelectorAll('.cart-summary__shipping-zip-code--initial').length > 0) {
            clearInterval(getZipCode);
            
            wrapInner(document.querySelector('.cart-summary__shipping-zip-code--initial'), "div");
            document.querySelector('.zipcode_modal_wrapper').insertAdjacentHTML('beforeend',`<button onclick="history.back()" class="goBack">Continue Shopping</button>`);
            document.querySelector('.zipcode_modal_wrapper .cart-summary__shipping-zip-code-description').textContent = 'Enter your shipping zip code to get your delivery date and shipping details.'
            document.querySelector('.zipcode_modal_wrapper form .buttons-container input').setAttribute('value','SUBMIT');
        }
    }, 100);
}