document.querySelectorAll('.add-to-cart-wrap button, #book-now-top span, #book-now-bottom span').forEach(function(cartText){
    cartText.innerHTML  = cartText.innerHTML.replace('Book this now','Add To Cart');
    cartText.innerHTML  = cartText.innerHTML.replace('Order Now','Add To Cart');
});