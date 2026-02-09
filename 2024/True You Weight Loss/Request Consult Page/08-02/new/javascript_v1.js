jQuery('body').addClass('consultPage_iv');
var getElement = setInterval(() => {
    if(jQuery('#div_block-31-143').length > 0) {
        clearInterval(getElement);
        jQuery('#div_block-31-143').after(`<div class="hero_section">
            <div class="oxy-header-container">
                <div class="part_wrapper">
                    <div class="left_part">
                        <h1>Learn how we can provide safe, effective, <span>non-surgical</span> outpatient weight loss procedures that deliver surgical-level results with a quick no-obligation consultation.</h1>
                        <ul>
                            <li>0% Interest Financing Available For All Weight Loss Procedures.</li>
                            <li>Payments Start as Low as $91 per month!</li>
                            <li>Get a Pre-approval Without a Hard Credit Pull.</li>
                        </ul>
                        <h2>Fill out the short form to learn more!</h2>
                    </div>
                    <div class="right_part">
                        <div class="form_wrapper loader" id="form_wrapper">
                            <div class="pu-form">
                                <h2 class="form_title">Request a Free Consultation</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`);
        jQuery('.consultPage_iv .right_part h2').after(jQuery('section.ct-section .ct-section-inner-wrap h1+.ct-code-block'));
        jQuery(' section.ct-section .ct-section-inner-wrap h1').closest('.ct-div-block').hide();
        var getForm = setInterval(function(){
            if(jQuery('.hs_submit .hs-button').length > 0){
                clearInterval(getForm);
                jQuery('.hbspt-form .hs_email').closest('fieldset').addClass('hs_emailWrapper');
                jQuery('.hbspt-form .hs_email').after(jQuery('.hbspt-form .hs_phone'));
                jQuery('.hbspt-form .hs_procedure').closest('fieldset').addClass('hs_procedureWrapper');
                jQuery('.hbspt-form .hs_procedure').after(jQuery('.hbspt-form .hs_tywl_preferred_procedure_location'));
                jQuery('.hs_submit .hs-button').after('<a id="hsButton" class="hs-button primary large" href="javascript:void(0);">Request a Free No-Obligation Consultation!</a>');
            }
        }, 100);
    }
}, 100);
jQuery(document).on('click', '#hsButton', function(){
    jQuery('.consultPage_iv .hbspt-form input.hs-button').click();
});
