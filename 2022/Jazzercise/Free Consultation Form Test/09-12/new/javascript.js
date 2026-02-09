if (!$('body').hasClass('iv_fitness')) {
    $('body').addClass('iv_fitness');
    $( document ).ready(function() {
    	 $('.iv_fitness a[href="#free-fitness-consultation"]').on('click', function(){
    		$('.iv_fitness .fancybox-outer h1').html('FITNESS CONSULTATION <br><span><del class="font_red">$50 </del> Free</span>');
    		$('.iv_fitness .fancybox-inner .form form .gform_footer .gform_button').attr('value','Book Your Consultant');
    	 });
       element = jQuery('.iv_fitness #free-fitness-consultation p.center').detach();
       jQuery(element).insertAfter(".iv_fitness #field_8_3");
    });
};