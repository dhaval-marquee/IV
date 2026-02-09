$(document).ready(function() {
	$("body").addClass("shirtspace-cart");
    $(document).on('click', '.shirtspace-cart .prepare-checkout > .cart-summary__promo-code > p', function() {
        $(".shirtspace-cart .prepare-checkout > .cart-summary__promo-code form.simple_form" ).toggle("slow", function() {});
    });

	$(window).on("resize load", function () {
		var winW = $(window).width();
		if(winW < 767){
			$('.shirtspace-cart .prepare-checkout').append($('.shirtspace-cart #cart-contents'));
		}else{
			$('.shirtspace-cart #cart-actions').before($('.shirtspace-cart .prepare-checkout #cart-contents'));
		}
	}).resize(); 

	$.getScript('//res.cloudinary.com/ignite-visibility/raw/upload/v1671531407/ShirtSpace/jquery-scrolltofixed.js', function () {
		$('.shirtspace-cart .prepare-checkout').scrollToFixed({
			limit: $(".checkout-footer").offset().top - $("#cart-contents").offset().top - $('.shirtspace-cart .prepare-checkout').outerHeight(true) - 30
		})
	});
});