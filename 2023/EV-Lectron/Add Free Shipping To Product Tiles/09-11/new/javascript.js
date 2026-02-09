$('.productgrid--wrapper li .price__current .money').each(function(){
    var currentPrice = $(this).html().replace('$','');
    currentPrice = parseInt(currentPrice);
    if(currentPrice > 35) {
        $(this).after('<span class="free-shipping-iv">With <i><u>Free Shipping</u></i></span>');
    }
});