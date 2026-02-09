console.log('code loaded');
function loadcode() {
	console.log('code exacuted');
	$("body").addClass("shirtspace-cart");
	
	$('#cart-actions').before($('aside.prepare-checkout > .cart-summary__promo-code'));

	$('#cart-contents').after($('.cart-summary__promo-code'));
	$('#cart-contents').after($('.cart-summary__totals'));


    $(document).on('click', '.shirtspace-cart .cart-summary__promo-code > p', function() {
        $(".shirtspace-cart .cart-summary__promo-code form.simple_form" ).toggle("slow", function() {});
    });
}

var jQisLoaded = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQisLoaded);
        loadcode();
    }
}, 100);