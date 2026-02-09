function heroSection() {
    if (!document.querySelector('body').classList.contains('iv-hero-sec')) {
        document.querySelector('body').classList.add('iv-hero-sec');
        
        var hbSptForm = setInterval(() => {
            if (jQuery(".hs_submit").length > 0) {
                
                jQuery(".hs_submit").after('<div class="hs-button primary large actionBtn" id="actionBtn">Request a Consultation or Just Learn More!</div>');
                jQuery('select[name="procedure_preference"] option[value="Undecided"]').prop('selected', true).trigger('change');
                jQuery('select[name="procedure_preference"]').closest('fieldset').hide();
        
                clearInterval(hbSptForm);
            }
        }, 100);

        
        const innerSect = jQuery('h1').closest('.iv-hero-sec .e-con-inner');
        const heroSec = jQuery('[data-elementor-type="wp-page"] > div:first-child');
        heroSec.addClass('hero_sec')
        innerSect.addClass('innerPart');
        innerSect.append('<div class="hero-form"></div>');

    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        heroSection();
    }
}, 100);