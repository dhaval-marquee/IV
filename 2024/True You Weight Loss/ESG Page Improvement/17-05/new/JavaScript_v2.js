function loadTestCode() {
    if (!jQuery('body').hasClass('esg_iv')) {
        jQuery('body').addClass('esg_iv');
        var refreshInterval = setInterval(function () {
            if (jQuery('.esg_iv #section-1312-540').length > 0) {
                clearInterval(refreshInterval);

                jQuery('#image-1251-540').attr('src',jQuery('#image-1251-540').attr('data-lazy-src'));
                jQuery('#image-1319-540').attr('src',jQuery('#image-1319-540').attr('data-lazy-src'));
                jQuery('#image-1321-540').attr('src',jQuery('#image-1321-540').attr('data-lazy-src'));

                jQuery('#section-1139-540').after(jQuery('#section-1243-540'));
                jQuery('#text_block-1247-540').html(`<p>ESG is currently the most effective non-surgical weight loss procedure available, producing an average of 23.1% total body weight loss at 1 year.</p>
                <p>Though results may vary for each individual undergoing ESG, most patients will lose 70% of their excess weight, or more.</p>`);
                jQuery('#text_block-1253-540').after(`<a class="ct-link-button scrollToForm" href="javascript:;">Request a Free Consultation</a>`);
                jQuery('#section-1254-540').after(jQuery('#section-1312-540'));
                jQuery('#section-1279-540').after(jQuery('#section-1149-540')).before(jQuery('#section-73-6'));

                // add Scroll down class
                jQuery('section a[href="https://trueyouweightloss.com/request-a-consultation/"]').eq(0).attr('href','javascript:;').addClass('scrollToForm');
                jQuery('.ct-link-button[href="#section-1857-540"]').addClass('scrollToForm');
                // Scroll down click events
                jQuery(document).on('click', '.scrollToForm', function(e){
                    e.preventDefault();
                    console.log('scroll to form');
                    jQuery('html, body').animate({
                        scrollTop: jQuery("section form.hs-form").closest('section').offset().top - jQuery('header').height()
                    }, 500);
                });
            }
        }, 200);
    }
}

function formRedesign() {
    if (!jQuery('body').hasClass('form_iv')) {
        jQuery('body').addClass('form_iv');
        
        // Put your test code here
        var loadForm = setInterval(() => {        
            if(jQuery('section .hbspt-form .hs-button').length > 0 && 
                jQuery('input[name="language_preference"][value="English"]').length > 0 &&
                jQuery('#newSelect_iv').length === 0) {
                clearInterval(loadForm);
                // PreSelect Value
                jQuery('input[name="language_preference"][value="Spanish"]').prop('checked', true).trigger('change');
                jQuery('input[name="language_preference"][value="English"]').prop('checked', true);
                jQuery('.hbspt-form ul.inputs-list li.hs-form-radio').eq(0).closest('.hs-form-field').addClass('newSelectBox');
                jQuery('.newSelectBox label > span:first-child').text('Preferred Language');
                jQuery('select[name="procedure"] option[value="ESG"]').attr('selected','selected').trigger('change');
                jQuery('.newSelectBox').find('.input').before(`<div class="input">
                    <select id="newSelect_iv" class="hs-input is-placeholder" required="required" data-gtm-form-interact-field-id="0">
                        <option value="" disabled>Please Select</option>
                        <option value="English" selected>English</option>
                        <option value="Spanish">Spanish</option>
                    </select>
                </div>`);
                jQuery('select[name="procedure"]').closest('fieldset').prepend(jQuery('.newSelectBox'));
                jQuery('select[name="procedure"]').closest('fieldset').append(jQuery('select[name="procedure"]').closest('.hs_procedure').css('width','100%'));
                // hide unwanted items
                jQuery('.newSelectBox legend.hs-field-desc').hide();
                jQuery('.newSelectBox .input + .input').hide();
                jQuery('#newSelect_iv').on('change', function() {
                    var selectedValue = jQuery(this).val();
                    if (selectedValue === 'English') {
                        jQuery('input[name="language_preference"][value="Spanish"]').prop('checked', true).trigger('change');
                        jQuery('input[name="language_preference"][value="English"]').prop('checked', true);
                    } else if (selectedValue === 'Spanish') {
                        jQuery('input[name="language_preference"][value="Spanish"]').prop('checked', true).trigger('change');
                    }
                    jQuery(this).find('option[value=""]').remove();
                });
            }
        }, 100);
    }
}

var loadTest = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(loadTest);
        loadTestCode();
        formRedesign();
    } 
}, 100);