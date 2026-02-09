function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('checkout_test')) {
        bodyEle.classList.add('checkout_test');

        if($('#checkoutGeneralForm').length > 0) {
            $('body').addClass('steps_1')
        }
        if($('.ncrt_ch_steps_stepsection_act').parent().index() == 2) {
            $('body').addClass('edit_bill')
            $('h2.ncrt_cm_sectitle > span:first-of-type').addClass('form_wrapper');
        }

        $('.checkout_test .ncrt_acc_bil, .checkout_test .ncrt_acc_shi').addClass('form_wrapper');

        $('.checkout_test.steps_1 .form_wrapper.ncrt_acc_bil').before(`<span class="main_OrderType">
            <span>
                <h3>Order Type:*</h3>
                <div>
                    <input name="orderType" type="radio" class="orderType" id="personalPurchase" value="personalPurchase" checked>
                    <label for="personalPurchase">Personal purchase</label>
                </div>
                <div>
                    <input name="orderType" type="radio" class="orderType" id="businesspurchase" value="businesspurchase">
                    <label for="businesspurchase">Business purchase</label>
                </div>
            </span>
        </span>`);

        // Billing Form
        $('.checkout_test label[for="bAddress1"]').append(' Line 1');
        $('.checkout_test #bAddress2').before('<label class="ncrt_cm_fieldlabel" for="bAddress2"><span class="ncrt_cm_ast"></span> Address 2</label>');
        $('.checkout_test #residentialFlagB').parent().hide();
        $('.checkout_test .form_wrapper #email').parent().next().hide();
        $('.checkout_test #bLastName').parent().after($('.checkout_test .form_wrapper #bAddress1').parent());
        $('.checkout_test #bAddress1').parent().after($('.checkout_test .form_wrapper #bAddress2').parent());
        $('.checkout_test #bPhone').parent().before($('.checkout_test #email').parent());
        $('.checkout_test #bPhoneExt').parent().after($('.checkout_test #bCompany').parent());
        $('.checkout_test #bCompany, .checkout_test #sCompany').parent().hide();

        // Shipping Form
        $('.checkout_test #sLastName').parent().after($('.checkout_test #sAddress1').parent().prev().nextAll());
        $('.checkout_test #sCompany, .checkout_test #sAddress1, .checkout_test #sAddress2').parent();
        $('.checkout_test #sZip').parent().after($('.checkout_test .form_wrapper #sCountry').parent().parent());
        $('.checkout_test #sCompany').parent().addClass('CompanyRow').hide();
        $('.checkout_test #sAddress2').before('<label class="ncrt_cm_fieldlabel" for="sAddress2"><span class="ncrt_cm_ast"></span> Address 2</label>');

        // Common for billing form and shipping form
        $('.checkout_test #bCompany, .checkout_test #sCompany').prev().html('<span class="ncrt_cm_ast">*</span> Company Name');
        $('.checkout_test #residentialFlag, .checkout_test #bPhoneExt, .checkout_test #sPhoneExt, .checkout_test #altPhoneExt').parent().hide();
        $('.checkout_test #bPhone, .checkout_test #sPhone, .checkout_test #altPhone').after('<span class="expand_field manage_space"><a href="javascript:;">+Add Extension</a></span>');
        $('.checkout_test #btnSubmitUpdateBtn').closest('.ncrt_cm_wrap').before($('.checkout_test #btnSubmitUpdateBtn').parent().prev());
        $('.checkout_test #btnSubmitUpdateBtn').closest('.ncrt_acc_news').before($('.checkout_test #btnSubmitUpdateBtn').closest('.ncrt_cm_wrap'));
        $(".checkout_test #bPhone, .checkout_test #sPhone").addClass('dummy_number').val('5555555555');
        

        // To check on load
        setTimeout(() => {
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
        }, 2000);
        // To check on load over

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
        
        $('#bPhone, #sPhone').on('keyup', function() {
            console.log('clicked');
            if($(this).val() == '5555555555') {
                $(this).addClass('dummy_number')
            } else {
                $(this).removeClass('dummy_number')
            }
        });


        // Click events
        $(document).on('click', '.expand_field a', function() {
            var getId = $(this).parent().prev().attr('id')
            var selector = getId+'Ext';

            $(this).parent().hide();
            $('#'+selector).parent().show();
        });

        $(document).on('click', '.orderType', function() {
            if ($('#businesspurchase').is(':checked')) {
                $('#bCompany, #sCompany').parent().show();
                $('#bCompany').attr('required','required');
            } else {
                $('#bCompany, #sCompany').parent().hide();
                $('#bCompany').removeAttr('required');
            }
        });

        $('#privacy1 a').click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).closest('.ncrt_cm_sectcont20').next().slideToggle();
        });
        // Click events over
    }
}
loadTestCode();