function loadTestCode() {
    if (!jQuery('body').hasClass('formIV')) {
        jQuery('body').addClass('formIV');
        
        // Put your test code here
        jQuery('#div-block-2-1>p').text('Fill out your details below and we\'ll contact you with a no-obligation price quote shortly!');
        jQuery('#lp-1 .form-inner input.button').removeAttr('disabled');
        jQuery('#lp-1 .form-inner #id_zip-code').attr('type', 'tel');
        jQuery('#lp-1 .form-inner #id_phone-number').attr('type', 'tel');


        if(jQuery('.form-error').each(function(){
            if(jQuery(this).prev('.errorlist')){
                jQuery(this).append(jQuery(this).prev('.errorlist'));
            }
        }));

    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0 && jQuery('#lp-1 .form-inner input.button').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);