
function IVTestCode() {
    if (!jQuery('body').hasClass('test_iv')) {
        jQuery('body').addClass('test_iv');
        
        // Put your test code here
        var checkAllField = setInterval(() => {
            if(jQuery('.test_iv form.woocommerce-checkout #customer_details .col-1 p.form-row label').length > 11) {
                clearInterval(checkAllField);

                jQuery('.test_iv form.woocommerce-checkout #customer_details .col-1 p.form-row label').each(function () {
                    var labelText = jQuery(this).text();
                
                    jQuery(this).next().find('input').attr('placeholder', labelText);
                    jQuery(this).next().find('textarea').attr('placeholder', labelText);
                    jQuery(this).next().find('.select2-selection__placeholder').text(labelText);
                });
            }
        }, 50);
        
        
        jQuery('.test_iv .woocommerce-form-login-toggle .woocommerce-info').before(jQuery('.test_iv .woocommerce-form-login-toggle .woocommerce-info .showlogin'));
        jQuery('.test_iv .woocommerce-form-login-toggle .woocommerce-info').text('Already have an account? ');
        jQuery('.test_iv .woocommerce-form-login-toggle .woocommerce-info').append(jQuery('.test_iv .woocommerce-form-login-toggle .showlogin'));
        jQuery('.test_iv .woocommerce-form-login-toggle .showlogin').text('Login in here');
        
        jQuery('.test_iv #billing_address_1_field').append('<a href="javascript:;" id="show_add_2">Address line 2</a>');
        jQuery('.test_iv #billing_email_field').after(jQuery('.test_iv #order_comments_field').parent());
        jQuery('.test_iv #order_comments').attr('placeholder','Notes about your order, e.g. special notes for delivery.');


        var checkStateField = setInterval(() => {
            if(jQuery('.test_iv .select2-container--default .select2-selection--single .select2-selection__placeholder').length > 0) {
                clearInterval(checkStateField);

                jQuery('.test_iv .select2-container--default .select2-selection--single .select2-selection__placeholder').text('State');
            }
        }, 50);


        jQuery('.test_iv #account_password').closest('.create-account').before('<h3>Account creation</h3>');
        jQuery('.test_iv .woocommerce-additional-fields').parent().hide();
        
        jQuery('.test_iv #order_review > table').after('<div class="coupon_wrapper"></div>');
        jQuery('.test_iv .coupon_wrapper').append(jQuery('.test_iv .woocommerce-form-coupon-toggle'));
        jQuery('.test_iv .coupon_wrapper').append(jQuery('.test_iv form.checkout_coupon.woocommerce-form-coupon'));
        
        document.getElementsByTagName("body")[0].style.visibility = "visible";

        jQuery(document).on('click', '#show_add_2', function() {
            jQuery(this).hide();
            jQuery('#billing_address_2_field').attr('style', 'display: block !important');
        });

    }
}


try {

    // Load code just for mobile 
    if (window.matchMedia("(max-width: 767.98px)").matches) {

        IVTestCode();

        window.addEventListener('resize', function(event) {
            if (window.matchMedia("(min-width: 768px)").matches) {
                location.reload();
            }
        }, true);
    } else {
        window.addEventListener('resize', function(event) {
            if (window.matchMedia("(max-width: 767.98px)").matches) {
                location.reload();
            }
        }, true);
    }
    // Load code just for mobile over

} catch(ex) {

} finally {
    setTimeout(() => {
        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }, 3000);
}