function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('checkout_test')) {
        bodyEle.classList.add('checkout_test');


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


        $('.checkout_test .ncrt_acc_wrap h1.ncrt_cm_sectitle').before($('.checkout_test .ncrt_cm_wrap .ncrt_cm_sectcont20'));

        $('#bFirstName').parents('.ncrt_cm_s_field_block_50').addClass('firstName_wrapper');
        $('#sFirstName').parents('.ncrt_cm_s_field_block_50').addClass('sfirstName_wrapper');

        $('.firstName_wrapper').wrap( '<div class="checkoutGeneralForm_inner"></div>');
        
        
        $('.form_stacked .firstName_wrapper').after($('.checkoutGeneralForm_inner+ [class*="ncrt_cm_s_field_block_"]'));

        $('#bPhone').parents('.ncrt_cm_s_field_block_20').addClass('bPhone_wrapper');
        $('#sPhone').parents('.ncrt_cm_s_field_block_20').addClass('sPhone_wrapper');

        $('.form_stacked .bPhone_wrapper').wrap( '<div class="checkoutGeneralForm_inner1"></div>');

        $('.form_stacked .bPhone_wrapper').after($('.checkoutGeneralForm_inner+.ncrt_cm_s_field_block_20'));

        $('.checkoutGeneralForm_inner1 .bPhone_wrapper').after($('.checkoutGeneralForm_inner1+.ncrt_cm_s_field_block_20'));

        $('.checkoutGeneralForm_inner').after($('.checkoutGeneralForm_inner1'));

        $('#email').parents('.ncrt_cm_s_field_block_50').addClass('email_wrapper');

        $('.checkoutGeneralForm_inner1').after($('.email_wrapper'));

        $('#bCompany').parents('.ncrt_cm_s_field_block_50').addClass('bCompany_wrapper');
        $('#sCompany').parents('.ncrt_cm_s_field_block_50').addClass('sCompany_wrapper');

        $('#bAddress1').parents('.ncrt_cm_s_field_block_50').addClass('bAddress1_wrapper');
        $('#sAddress1').parents('.ncrt_cm_s_field_block_50').addClass('sAddress1_wrapper');

        $('#bAddress2').parents('.ncrt_cm_s_field_block_50_last').addClass('bAddress2_wrapper');
        $('#sAddress2').parents('.ncrt_cm_s_field_block_50_last').addClass('sAddress2_wrapper');

        $('.bCompany_wrapper').after($('.bAddress1_wrapper'));
        $('.sCompany_wrapper').after($('.sAddress1_wrapper'));

        $('.bAddress1_wrapper').after($('.bAddress2_wrapper'));
        $('.sAddress1_wrapper').after($('.sAddress2_wrapper'));

        $('#bCountry').parents('.ncrt_cm_s_field_block_50').addClass('bCountry');

        $('#residentialFlagB').parents('.ncrt_cm_radiolabel').addClass('residentialFlagB');

        $('.residentialFlagB').before($('.bCountry'));
        $('.ncrt_cm_radiolabel').before($('.sCountry'));


        $('#sPhoneExt').parents('.ncrt_cm_s_field_block_20').addClass('sPhoneExt');

        
        $('.sPhone_wrapper').wrap( '<div class="checkoutGeneralForm_inner2"></div>');
        $('.sPhone_wrapper').after($('.sPhoneExt'));

        $('#sLastName').parents('.ncrt_cm_s_field_block_50_last').addClass('sLastName');
        $('.sLastName').after($('.checkoutGeneralForm_inner2'));
        $('.sCompany_wrapper').after($('.sAddress1_wrapper'));

        $('.sAddress1_wrapper').after($('.sAddress2_wrapper'));

        $('#altPhone').parents('.ncrt_cm_s_field_block_20').addClass('altPhone');
        $('#altPhoneExt').parents('.ncrt_cm_s_field_block_20').addClass('altPhoneExt');
        $('.checkoutGeneralForm_inner2').after($('.altPhone'));
        $('.altPhone').after($('.altPhoneExt'));
        $('.ncrt_cm_wrap .ncrt_cm_s_field_block_100 #listJoinOWCBlast').parents('.ncrt_cm_s_field_block_100').addClass('listJoinOWCBlast');


        $('.ncrt_agree').after(`<span class="ncrt_cm_sectcont20">OWC does not sell, trade, or otherwise exchange customer addresses or e-mails. <span class="cl_mobile3"></span><span class="ncrt_cc_label" id="privacy1"><a href="#ViewPrivacy">View OWC's Privacy Policy</a></span></span>`);
        
        $('#SHIPverifiedAddressBox1').before($('.ncrt_cm_wrap .button-wrap'));
        $('.button-wrap #btnSubmitUpdateBtn').addClass('payment_Type');
    
        $('#bCity').parents('.ncrt_cm_s_field_block_33').addClass('bCity');
        $('.bCompany_wrapper').before(`<a herf="javascript:void(0)" class="commercial_Address"> This is a Business/Commercial Address</a>`);
        $('.bCity').before(`<a herf="javascript:void(0)" class="apt_Suite"> Add Apt#, Suite, Floor (optional)</a>`).wrap( '<div class="checkoutGeneralForm_inner3"></div>');
        $('.bCity').after($('#b_US1'));
        $('#b_US1').after($('#b_INT1+.ncrt_cm_s_field_block_20'));
        $('.checkout_test .ncrt_acc_bil [for="bPhoneExt"]').before(`<a herf="javascript:void(0)" class="ext"> ext</a>`);

        $(".bCompany_wrapper").css("display", "none");
        $(".bAddress1_wrapper").css("display", "none");
        $(".bAddress2_wrapper").css("display", "none");  

        $(document).ready(function(){
            $(".commercial_Address").click(function(){
              $(".bCompany_wrapper").toggle();
              $(".bAddress1_wrapper").toggle();
              $(".bAddress2_wrapper").toggle();
            });
        });

        $(".bCity").css("display", "none");
        $("#b_US1").css("display", "none");
        $(".checkout_test .form_stacked #b_INT1+.ncrt_cm_s_field_block_20").css("display", "none");
        $(".bCountry").css("display", "none");

        $(document).ready(function(){
            $(".apt_Suite").click(function(){
              $(".bCity").toggle();
              $("#b_US1").toggle();
              $(".checkout_test .form_stacked #b_INT1+.ncrt_cm_s_field_block_20").toggle();
              $(".bCountry").toggle();
            });
          });

          $("#bPhoneExt").css("display", "none");
          $('#checkoutGeneralForm span .ncrt_cm_fieldlabel[for="bPhoneExt"]').css("display", "none");
          $(document).ready(function(){
            $(".ext").click(function(){
              $("#bPhoneExt").toggle();
              $('#checkoutGeneralForm span .ncrt_cm_fieldlabel[for="bPhoneExt"]').toggle();

            });
          });

          
          $('.apt_Suite,.commercial_Address,.ext').addClass('plus');
          $('.apt_Suite,.commercial_Address,.ext').click(function() {
            if($(this).hasClass('plus')) {       
                $(this).removeClass('plus').addClass('minus');
            }
            else{
                $(this).removeClass('minus').addClass('plus');
            }
        });
        
        $('#checkoutBraintreePaymentForm').wrapInner(`<div class="main_part"><div class="left_part"></div><div class="right_part"></div></div>`);

        $('.right_part').append($('.ot_bkg .ncrt_c_head_sm+.ncrt_cm_wrap'));
        $('.right_part').append($('.ot_bkg .ncrt_c_head_sm+.cl_line+.ncrt_cm_wrap'));
        $('.right_part').append($('#insurOriginalValue+.ncrt_cm_s_field_block_33_last'));

        $('.checkout_test .main_part .right_part .ncrt_shi_total span.ncrt_cm_s_field_block_40:nth-child(1) .ncrt_cm_sectitle').before('<span class="ncrt_cm_Summary"><strong>Order Summary</strong></span>');
        
        $('.checkout_test .main_part .left_part #owc-chk-payment-cc-main .ncrt_cm_s_field_block_50+.ncrt_cm_s_field_block_25').before($('.checkout_test .main_part .left_part #owc-chk-payment-cc-main .ncrt_cm_s_field_block_40+.ncrt_cm_s_field_block_25'));

        $('.checkout_test .main_part').after($('#intDutiesBox'));

        $('#intDutiesBox .ncrt_agree').after($('.cl+.cl+.ncrt_cm_fieldlabel'));
        $('.ncrt_agree+.ncrt_cm_fieldlabel').after($('.cl+.cl+.ncrt_cm_desc_n'));
        $('#intDutiesBox .ncrt_agree+.ncrt_cm_fieldlabel +.ncrt_cm_desc_n').after($('.cl+.cl+.ncrt_cm_desc_n'));
        $('#intDutiesBox .ncrt_agree+.ncrt_cm_fieldlabel +.ncrt_cm_desc_n+.ncrt_cm_desc_n').after($('.cl+.cl+.ncrt_agree'));
        $('#validationBox').parents('.ncrt_cm_wrap').addClass('alidationBox');

        var refreshInterval = setInterval(function () {
            if ($('input[name="payment_method_nonce"]').length > 0) {
                clearInterval(refreshInterval);
                $('input[name="payment_method_nonce"]').after($('.alidationBox'));
            }
         }, 100);



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