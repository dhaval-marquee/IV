// For a load Font family
$.getScript('//use.typekit.net/ik/k5I58jRUcwzf1RlA4tsedgwWKjrRLroc-xVXUm_pkgtfeCwIfFHN4UJLFRbh52jhWDmyZ2qDjR4qjRb3jR8qZRMawRJhZQZ8jynLMKG0jAFu-WsoShFGZAsude80ZkoRdhXCHKoyjamTiY8Djhy8ZYmC-Ao1Oco8if37OcBDOcu8OfG0SaBujW48SagyjhmDjhy8ZYmC-Ao1OcFzdP37O1iypcmkO1FUiABkZWF3jAF8OcFzdPUyjamTiY8Djhy8ZYmC-Ao1OcFzdPUyjamTiY8Djhy8ZYmC-Ao1Oco8ifUySkolZPUCdhFydeyzSabCSaBujW48SagyjhmDjhy8ZYmC-Ao1OcFzdPUajWT8SKoRdhXCihBEZWJ0SaBujW48Sagyjh90jhNlOYiaikoyjamTiY8Djhy8ZYmC-Ao1OcFzdPUaiaS0jAFu-WsoShFGZAsude80Zko0ZWbCiaiaOcBDOcu8OYiaikoDSWmyScmDSeBRZWFR-emqiAUTdcS0jhNlOYiaikoajWT8SKoRdhXCiaiaO1iypcmkO1FUiABkZWF3jAF8OcFzdPJ5dYsROA4zZeN0-PXUFD9KfWFzZc8yOWgkdkG4fVvnIMMjgfMfH6qJxKCbMg65JMJ7f6Rcz3IbMs6gJMJ7f6Riz3IbMs6fJMJ7f6RLz3IbMs62JMJ7f6RRz3IbMs6IJMJ7f6Ryz3IbMs6BJMJ7f6R8z3IbMs6eJMJ7f6Rdz3IbMs6YJMJ7f6R6z3IbMs6FJMJ7f6RZz3IbMs64JMJ7f6RKz3IbMs6VJMJ7f6RSz3IbMs6sJMHbMLaXUz3B.js', function() {
    try{Typekit.load();}catch(e){}
});


// For FAQ
$('.faq-item .faq-header').click(function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active').closest('.faq-item').find('.faq-content').slideUp(200);
    }else{
        $(this).addClass('active').closest('.faq-item').find('.faq-content').slideDown(200);
    }
});


// For sticky button
var ctaButton = $('.iv_wazer_lp .hero-content-top .orange-btn');
var ctaButtonHeight = parseFloat(ctaButton.offset().top) + parseFloat(ctaButton.outerHeight());
$(window).scroll(function(){
    if($(window).scrollTop() > ctaButtonHeight){
        $('.sticky-bottom').addClass('show');
    }else{
        $('.sticky-bottom').removeClass('show');
    }
});