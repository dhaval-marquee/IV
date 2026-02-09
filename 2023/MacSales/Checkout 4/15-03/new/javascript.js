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

        $('.checkout_test .ncrt_acc_bil, .checkout_test .ncrt_acc_shi').addClass('form_wrapper');

        $('.checkout_test.steps_1 .form_wrapper.ncrt_acc_bil').before(`<span class="main_OrderType">
        <span>
            <h3>Order Type:*</h3>
            <input type="radio" id="personalPurchase" name="fav_language" value="personalPurchase">
            <label for="personalPurchase">Personal purchase</label>
            <input type="radio" id="businesspurchase" name="fav_language" value="businesspurchase">
            <label for="businesspurchase">Business purchase</label>
            </span>
        </span>`);

        // Billing Form
        $('.checkout_test .form_wrapper #email').parent().next().hide();
        $('.checkout_test #bLastName').parent().after($('.checkout_test .form_wrapper #bAddress1').parent());
        $('.checkout_test #bAddress1').parent().after($('.checkout_test .form_wrapper #bAddress2').parent());
        $('.checkout_test #bAddress2').parent().after($('.checkout_test .form_wrapper #bCity').parent());
        $('.checkout_test #bCity').parent().after($('.checkout_test .form_wrapper #b_US1'));
        $('.checkout_test #bState').parent().parent().after($('.checkout_test .form_wrapper #bZip').parent());
        $('.checkout_test #bZip').parent().after($('.checkout_test .form_wrapper #bCountry').parent().parent());
        $('.checkout_test #bCountry').parent().parent().after($('.checkout_test .form_wrapper #email').parent());
        $('.checkout_test #email').parent().after($('.checkout_test .form_wrapper #bPhone').parent());
        $('.checkout_test #bAddress2').before('<label class="ncrt_cm_fieldlabel" for="bAddress2"><span class="ncrt_cm_ast"></span> Address 2</label>');
        $('.checkout_test #bPhoneExt').parent().hide().before('<span class="expand_field manage_space"><a href="javascript:;">+Add Extension</a></span>');
        $('.checkout_test #residentialFlagB').parent().hide();
        $('#btnSubmitUpdateBtn').closest('.ncrt_cm_wrap').before($('#btnSubmitUpdateBtn').parent().prev());
        $('#btnSubmitUpdateBtn').closest('.ncrt_acc_news').before($('#btnSubmitUpdateBtn').closest('.ncrt_cm_wrap'));


        // Shipping Form
        $('#sLastName').parent().after($('#sAddress1').parent().prev().nextAll());
        $('.checkout_test #sCompany, .checkout_test #sAddress1, .checkout_test #sAddress2').parent();
        $('.checkout_test #sZip').parent().after($('.checkout_test .form_wrapper #sCountry').parent().parent());
        $('.checkout_test #sPhoneExt').parent().hide().before('<span class="expand_field"><a href="javascript:;">+Add Extension</a></span>');
        $('.checkout_test #altPhoneExt').parent().hide().before('<span class="expand_field"><a href="javascript:;">+Add Extension</a></span>');
        $('.checkout_test #sAddress2').before('<label class="ncrt_cm_fieldlabel" for="sAddress2"><span class="ncrt_cm_ast"></span> Address 2</label>');
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









