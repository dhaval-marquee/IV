function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('checkout_test')) {
        bodyEle.classList.add('checkout_test');

        $('.checkout_test .ncrt_acc_wrap h1.ncrt_cm_sectitle').before($('.checkout_test .ncrt_cm_wrap .ncrt_cm_sectcont20'));

        $('#bFirstName').parents('.ncrt_cm_s_field_block_50').addClass('firstName_wrapper');

        $('.firstName_wrapper').wrap( '<div class="checkoutGeneralForm_inner"></div>');
        
        $('.form_stacked .firstName_wrapper').after($('.checkoutGeneralForm_inner+ [class*="ncrt_cm_s_field_block_"]'));

        $('#bPhone').parents('.ncrt_cm_s_field_block_20').addClass('bPhone_wrapper');

        $('.form_stacked .bPhone_wrapper').wrap( '<div class="checkoutGeneralForm_inner1"></div>');

        $('.form_stacked .bPhone_wrapper').after($('.checkoutGeneralForm_inner+.ncrt_cm_s_field_block_20'));

        $('.checkoutGeneralForm_inner1 .bPhone_wrapper').after($('.checkoutGeneralForm_inner1+.ncrt_cm_s_field_block_20'));

        $('.checkoutGeneralForm_inner').after($('.checkoutGeneralForm_inner1'));

        $('#email').parents('.ncrt_cm_s_field_block_50').addClass('email_wrapper');

        $('.checkoutGeneralForm_inner1').after($('.email_wrapper'));

        $('#bCompany').parents('.ncrt_cm_s_field_block_50').addClass('bCompany_wrapper');

        $('#bAddress1').parents('.ncrt_cm_s_field_block_50').addClass('bAddress1_wrapper');

        $('#bAddress2').parents('.ncrt_cm_s_field_block_50_last').addClass('bAddress2_wrapper');

        $('.bCompany_wrapper').after($('.bAddress1_wrapper'));
        $('.bAddress1_wrapper').after($('.bAddress2_wrapper'));












     
       

    }
}

loadTestCode();
