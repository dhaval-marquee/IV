function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('checkout_test')) {
        bodyEle.classList.add('checkout_test');

        if($('#checkoutGeneralForm').length > 0) {
            $('body').addClass('steps_1')
        }
        if($('#checkoutBraintreePaymentForm').length > 0) {
            $('body').addClass('steps_2')
        }
        if($('.ncrt_ch_steps_stepsection_act').parent().index() == 2) {
            $('body').addClass('edit_bill')
            $('h2.ncrt_cm_sectitle > span:first-of-type').addClass('form_wrapper');
        }

        $('#checkoutGeneralForm').before('<div class="privacy_text"></div>');
        $('.button-wrap').parent().after('<div class="privacy_text"></div>');

        $('.privacy_text').prepend($('.privacydiv1'));
        $('.privacy_text').prepend($('.ncrt_cm_sectcont20'));

        $('.checkout_test .ncrt_acc_bil, .checkout_test .ncrt_acc_shi').addClass('form_wrapper');

        // Billing Form
        $('.checkout_test .form_wrapper #email').parent().next().hide();
        $('.checkout_test #bLastName').parent().after($('.checkout_test .form_wrapper #bPhone').parent());
        $('.checkout_test #bPhone').parent().after($('.checkout_test .form_wrapper #bPhoneExt').parent());
        $('.checkout_test #bZip').parent().after($('.checkout_test .form_wrapper #bCountry').parent().parent().css('max-width','100%'));
        $('.checkout_test #bPhoneExt').parent().hide().before('<span class="expand_field"><a href="javascript:;">+ EXT</a></span>');
        $('.checkout_test #bPhoneExt').parent().after($('.checkout_test .form_wrapper #email').parent().css('max-width','100%'));
        $('.checkout_test #bCompany').parent().hide().before('<span class="expand_field manage_space"><a href="javascript:;">+ This is a Business/Commercial Address</a></span>');
        $('.checkout_test #bAddress2').before('<label class="ncrt_cm_fieldlabel" for="bAddress2"><span class="ncrt_cm_ast"></span> Address 2</label>');
        $('.checkout_test #bAddress2').parent().hide().before('<span class="expand_field manage_space"><a href="javascript:;">+ Add Apt #, Suite, Floor (optional)</a></span>');
        $('.checkout_test #residentialFlagB').parent().hide();
        $('.checkout_test #bCompany, .checkout_test #bAddress1, .checkout_test #bAddress2').parent().css('max-width','100%');
        $('.checkout_test #bZip').parent().css('max-width','30%');
        $('#btnSubmitUpdateBtn').closest('.ncrt_cm_wrap').before($('#btnSubmitUpdateBtn').parent().prev());
        $('#btnSubmitUpdateBtn').closest('.ncrt_acc_news').before($('#btnSubmitUpdateBtn').closest('.ncrt_cm_wrap'));
        // $('#btnSubmitUpdateBtn span').text(' Choose Shipping & Payment Type')


        // Shipping Form
        $('#sLastName').parent().after($('#sPhone').parent().prev().nextAll());
        $('.checkout_test #sCompany, .checkout_test #sAddress1, .checkout_test #sAddress2').parent().css('max-width','100%');
        $('.checkout_test #sZip').parent().after($('.checkout_test .form_wrapper #sCountry').parent().parent().css('max-width','100%'));
        $('.checkout_test #sZip').parent().css('max-width','30%');
        $('.checkout_test #sPhoneExt').parent().hide().before('<span class="expand_field"><a href="javascript:;">+ EXT</a></span>');
        $('.checkout_test #altPhoneExt').parent().hide().before('<span class="expand_field"><a href="javascript:;">+ EXT</a></span>');
        $('.checkout_test #sCompany').parent().hide().before('<span class="expand_field manage_space"><a href="javascript:;">+ This is a Business/Commercial Address</a></span>');
        $('.checkout_test #sAddress2').before('<label class="ncrt_cm_fieldlabel" for="sAddress2"><span class="ncrt_cm_ast"></span> Address 2</label>');
        $('.checkout_test #sAddress2').parent().hide().before('<span class="expand_field manage_space"><a href="javascript:;">+ Add Apt #, Suite, Floor (optional)</a></span>');
        $('.checkout_test #residentialFlag').parent().hide();

        function fakeFocus() {
            $("input").each(function () {
                if ($(this).val() == '' || $(this).val() == null) {
                    $(this).parent().removeClass("focused");
                } else if ($(this).val() != '' || $(this).val() != null) {
                    $(this).parent().addClass("focused");
                }
            });
            $("select").each(function () {
                if ($(this).val() == '' || $(this).val() == null) {
                    $(this).parent().parent().removeClass("focused");
                } else if ($(this).val() != '' || $(this).val() != null) {
                    $(this).parent().parent().addClass("focused");
                }
            });
        }
        fakeFocus();

        $("input").focus(function () {
            $(this).parent().addClass("focused");
        }).blur(function () {
            if ($(this).val() == '' || $(this).val() == null) {
                $(this).parent().removeClass("focused");
            } else if ($(this).val() != '' || $(this).val() != null) {
                $(this).parent().addClass("focused");
            }
        });
        $("select").focus(function () {
            $(this).parent().parent().addClass("focused");
        }).blur(function () {
            if ($(this).val() == '' || $(this).val() == null) {
                $(this).parent().parent().removeClass("focused");
            } else if ($(this).val() != '' || $(this).val() != null) {
                $(this).parent().parent().addClass("focused");
            }
        });

        $(document).on('click', '.expand_field a', function() {
            $(this).parent().hide();
            $(this).parent().next().show();
        });

        $('#privacy1 a').click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).closest('.ncrt_cm_sectcont20').next().slideToggle();
        });


        // Second Step
        $('.ncrt_shi_total').eq(0).addClass('address_wrapper');
        $('.address_wrapper').prepend('<h2>Order Summary</h2>')
        $('.address_wrapper .ncrt_cm_sectitle').eq(0).text('Billing');
        $('.address_wrapper .ncrt_cm_sectitle').eq(1).text('Shipping');
        $('.address_wrapper').append($('.ncrt_shi_item').parent());
        $('.address_wrapper .ncrt_shi_item').parent().addClass('cart_item_total');
        $('.address_wrapper').append($('.ncrt_shi_subtotal').parent().addClass('ship_total_iv'));
        $('.address_wrapper').after($('#btnSubmitOrderBtn').closest('.ncrt_cm_wrap').clone());
        $('.address_wrapper + .ncrt_cm_wrap #btnSubmitOrderBtn').closest('.ncrt_cm_wrap').addClass('btnSubmitOrderBtnWrapper');
        $('#checkoutBraintreePaymentForm #btnSubmitOrderBtn').closest('.ncrt_cm_wrap').hide();
        $('#checkoutBraintreePaymentForm #btnSubmitOrderBtn').closest('.ncrt_cm_wrap').prev('.cl_line').hide();

        $(document).on('click', '.btnSubmitOrderBtnWrapper #btnSubmitOrderBtn', function() {
            $('#checkoutBraintreePaymentForm #btnSubmitOrderBtn').trigger('click');
        });
    }
}

// Load code just for Desktop 
if (window.matchMedia("(min-width: 1025px)").matches) {

    loadTestCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 1024.98px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 1025px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for Desktop over