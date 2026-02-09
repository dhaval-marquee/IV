$(document).ready(function() {
	$("body").addClass("shirtspace-cart");
    $(document).on('click', '.shirtspace-cart .prepare-checkout > .cart-summary__promo-code > p', function() {
        $(".shirtspace-cart .prepare-checkout > .cart-summary__promo-code form.simple_form" ).toggle("slow", function() {});
    });
	// var target = $( ".prepare-checkout" )[0];
	// var observer = new MutationObserver(function( mutations ) {
	//    mutations.forEach(function( mutation ) {
	//        var newNodes = mutation.addedNodes;
	//        if( newNodes !== null ) { 
	//         	setTimeout(function () {
					$(window).on("resize load", function () {
					  var winW = $(window).width();
					  if(winW < 767){
						 $('.shirtspace-cart .prepare-checkout').append($('.shirtspace-cart #cart-contents'));
					  }else{
						 $('.shirtspace-cart #cart-actions').before($('.shirtspace-cart .prepare-checkout #cart-contents'));
					  }
					}).resize();
	// 			}, 700);
	//       }
	//    });    
	// });
	
	// var config = { 
	//     attributes: true, 
	//     childList: true, 
	//     characterData: true 
	// };
	// observer.observe(target, config);

    
});