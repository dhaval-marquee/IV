$(document).ready(function() {
	$("body").addClass("shirtspace-cart");
	var target = $( ".prepare-checkout" )[0];
	var observer = new MutationObserver(function( mutations ) {
	   mutations.forEach(function( mutation ) {
	       var newNodes = mutation.addedNodes;
	       if( newNodes !== null ) { 
	        	setTimeout(function () {
					if($('.shipping-title').length == 0){
						$(".shirtspace-cart .prepare-checkout").prepend(`<h2 class="shipping-title">Choose Your Shipping Method</h2>`);
					}
					$(".shirtspace-cart .prepare-checkout > .cart-summary__promo-code > p").click(function() {
					  $(".shirtspace-cart .prepare-checkout > .cart-summary__promo-code form.simple_form" ).toggle("slow", function() {});
					});
					$(window).on("resize load", function () {
					  var winW = $(window).width();
					  if(winW < 767){
						 $('.shirtspace-cart .prepare-checkout').append($('.shirtspace-cart #cart-contents'));
						 $('.shirtspace-cart .shipping-title').text('Shipping Method');
					  }else{
						 $('.shirtspace-cart #cart-actions').before($('.shirtspace-cart .prepare-checkout #cart-contents'));
						 $('.shirtspace-cart .shipping-title').text('Choose Your Shipping Method');
					  }
					}).resize();
				}, 700);
	      }
	   });    
	});
	
	var config = { 
	    attributes: true, 
	    childList: true, 
	    characterData: true 
	};
	observer.observe(target, config);
});