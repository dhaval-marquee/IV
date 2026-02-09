function loadTestCode() {
    if (!jQuery('body').hasClass('form_iv')) {
        jQuery('body').addClass('form_iv');
        
        // Put your test code here
        console.log('code loaded');

        window.addEventListener('message', event => {
            if(event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormReady') {

                if(jQuery('#newSelect_iv').length === 0) {
                    console.log('form loaded');
                    jQuery('.hbspt-form ul.inputs-list li.hs-form-radio').eq(0).closest('.hs-form-field').addClass('newSelectBox');

                    jQuery('.newSelectBox label > span:first-child').text('Preferred Language');
                    jQuery('select[name="procedure"] option[value="Undecided"]').attr('selected','selected').trigger('change');

                    jQuery('.newSelectBox').find('.input').before(`<div class="input">
                        <select id="newSelect_iv" class="hs-input is-placeholder" required="required" data-gtm-form-interact-field-id="0">
                            <option value="" disabled selected>Please Select</option>
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                        </select>
                    </div>`);
                    jQuery('select[name="procedure"]').closest('fieldset').prepend(jQuery('.newSelectBox'));

                    // hide unwanted items
                    jQuery('select[name="procedure"]').closest('fieldset').find('.hs_procedure').hide();
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
            }
        });
    }
}
loadTestCode();