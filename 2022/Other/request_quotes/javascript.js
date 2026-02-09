// request quotes

if (!$('body').hasClass('iv_request_quote')) {
    $('body').addClass('iv_request_quote');

    var socialLinks = $('.iv_request_quote .Main-content .sqs-layout .socialaccountlinks-v2-block');
    var target = $('.iv_request_quote .Main-content .sqs-layout');
    socialLinks.appendTo(target);

    $('.iv_request_quote .Main-content .sqs-layout .sqs-col-12').addClass('sqs-col-6').removeClass('sqs-col-12');
    $('.iv_request_quote .Main-content .sqs-layout .sqs-col-6').before('<div class="col span-12 sqs-col-6">'+
        '<div class="sqs-block code-block sqs-block-code">'+
            '<div class="demo-block">'+
                '<div class="demo-content">'+
                    '<div class="shogun-heading-component">'+
                        '<h2>Get Your Free <br> Personalized Quote</h2>'+
                    '</div>'+
                    '<h3 class="mobile_hide">Fill out and submit the quote form and we will:</h3>'+
                    '<h3 class="mobile_show">Complete and submit below and we will respond within 24 hours to provide you with a customized quote built around your needs and uses cases.</h3>'+
                    '<ul class="mobile_hide">'+
                        '<li>Respond to your request within 1 hour <span class="no-wrap">(9 a.m. - 5 p.m. EST)</span></li>'+
                        '<li>Provide you with a customized quote based around your needs'+
                    '</ul>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>');
    
    $('.iv_request_quote .Main-content .socialaccountlinks-v2-block').remove();
    $('.iv_request_quote .accountLinks').remove();
    
    $('.iv_request_quote .Main-content .sqs-layout').append('<div class="row sqs-row">'+
    '<div class="col span-12 sqs-col-12">'+
        '<div class="demo-client-logos">'+
            '<h3>Industry Recognized Performance</h3>'+
            '<div class="image-wrapper">'+
                '<img src="https://i.shgcdn.com/692a08c3-9a3d-4cd7-ac7d-c054ba66fe19/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="client-logos" class="shogun-image"></div>'+
        '</div>'+
    '</div>'+
'</div>');

    // Form Part
    $('.fsSectionHeader p span').text('Request Your Quote Now');

    // add label
    $('#fsForm4101246 input.fsField[title]').each(function(){
        var labelText = $(this).attr('title');
        $(this).before('<label class="fsSupporting">' + labelText + '</label>');
    });

     // Rearrange Email and Phone fields 
     $('input[title="Email"]').closest('.fsFirst.fsLast.fsFieldCell').removeClass('fsLast fsSpan100').addClass('fsSpan50');
     $('input[title="Phone"]').closest('.fsFirst.fsLast.fsFieldCell').removeClass('fsLast fsSpan100').addClass('fsSpan50');
     $('div[fs-field-type="email"]').after($('input[title="Phone"]').closest('.fsRowBody'));
     $('input[title="Phone"]').siblings('label').text('Phone number');

    // Country field
    $('select[aria-label="Country"]').wrap('<div class="fsRow fsFieldRow mt_10"><div class="fsRowBody fsCell fsFieldCell fsFirst fsLabelVertical fsSpan50" lang="en"></div></div>');
    $('select[aria-label="Country"]').before($('select[aria-label="Country"]').parent().parent().next('label').text('Region'));
    $('input[title="Company / Organization"]').closest('.fsFieldCell').after($('select[aria-label="Country"]').removeClass('fsSpan50').closest('.fsFieldRow'));

    // State field
    $('input[aria-label="State/Province"]').closest('.fsSubField').addClass('fsRowBody fsCell fsFieldCell fsLast fsLabelVertical fsSpan50');
    $('.fsFieldState input').before($('.fsFieldState label'));
    $('select[aria-label="Country"]').closest('.fsFieldCell').after($('.fsFieldState[aria-label="State/Province"]').closest('.fsSubField'));
    $('.fsFieldState').parent('.fsFieldCell').after('<div class="fs-clear"></div>');
    
   

    // Change label place
    $('input[aria-label="Address Line 1"]').closest('.fsFieldCell').addClass('bottom_field');
    $('input[aria-label="Address Line 1"]').before($('input[aria-label="Address Line 1"]').next('label'));
    $('input[aria-label="Address Line 2"]').before($('input[aria-label="Address Line 2"]').next('label'));
    $('input[aria-label="City"]').before($('input[aria-label="City"]').next('label'));
    $('input[aria-label="ZIP / Postal"]').before($('input[aria-label="ZIP / Postal"]').next('label').text('ZIP / Postal Code'));

    // other Changes
    $('.iv_request_quote .fsBody label.fsSupporting').each(function(){
        var labelText = $(this).text();
        $(this).closest('.fsBody .fsRowBody').attr('fs-field-validation-name',labelText)
    });

    $('.bottom_field').attr('fs-field-validation-name','Address');
    $('select option[value="United States"]').attr('selected','selected');
    $('input[title="Phone"], input[aria-label="ZIP / Postal"]').attr('onkeypress','return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57');
    $('.iv_request_quote .fsBody label.fsSupporting').append('<span class="required_field">*</span>');
    $('.fsSubmitButton').attr('value','Submit');

    $('iv_request_quote').css('visibility', 'visible');
};