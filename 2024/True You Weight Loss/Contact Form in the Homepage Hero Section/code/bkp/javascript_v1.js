function heroSection() {
    if (!document.querySelector('body').classList.contains('iv-hero-sec')) {
        document.querySelector('body').classList.add('iv-hero-sec');

        jQuery('select[name="procedure_preference"] option[value="Undecided"]').prop('selected', true).trigger('change');
        jQuery('select[name="procedure_preference"]').closest('fieldset').hide();

        jQuery('input[name="primary_language"][value="Spanish"]').prop('checked', true)
        jQuery('input[name="primary_language"][value="English"]').prop('checked', true).trigger('change');
        
        var hbSptForm = setInterval(() => {
            if (jQuery(".hs_submit").length > 0) {
                
                jQuery(".hs_submit").after('<div class="hs-button primary large actionBtn" id="actionBtn">Request a Consultation or Just Learn More!</div>');
                jQuery('select[name="procedure_preference"] option[value="Undecided"]').prop('selected', true).trigger('change');
                jQuery('select[name="procedure_preference"]').closest('fieldset').hide();
        
                clearInterval(hbSptForm);
            }
        }, 100);
        
        document.addEventListener("click", function(e) {
            if (e.target.id === "actionBtn") {
                document.querySelector(".hs_submit .actions .hs-button").click();
        
                setTimeout(() => {
                    if (jQuery('.hs_procedure_preference > .hs-error-msgs').length > 0) {
                        jQuery('.hs_procedure_preference > .hs-error-msgs').remove();
                        jQuery('select[name="procedure_preference"]').closest('fieldset').show();
                    }
                }, 1000);
            }
        });
        
        const innerSect = jQuery('h1').closest('.iv-hero-sec .e-con-inner');
        const heroSec = jQuery('[data-elementor-type="wp-page"] > div:first-child');
        heroSec.addClass('hero_sec')
        innerSect.addClass('innerPart');
        innerSect.append('<div class="hero-form"></div>');

        jQuery('.hbspt-form select option[value="speak_with_a_team_member_now"]').text('I would like to Speak with a team member now');
        jQuery('.hbspt-form select option[value="schedule_a_conversation_with_an_advisor"]').text('I would like to Schedule a conversation with an advisor');


        jQuery('h2').each(function() {
            if (jQuery(this).text() === "REQUEST A FREE CONSULTATION") {
                jQuery(this).closest('.e-con-boxed').addClass('requset-form-section');
            }
        });

        // Function to check if the .hero_sec is in the viewport
        function isHeroInView() {
            var $heroSec = jQuery('.hero_sec');
            if ($heroSec.length) {
                var windowHeight = jQuery(window).height();
                var scrollTop = jQuery(window).scrollTop();
                var heroTop = $heroSec.offset().top;
                var heroBottom = heroTop + $heroSec.outerHeight();

                return (scrollTop < heroBottom && scrollTop + windowHeight > heroTop);
            }
            return false;
        }

        // Function to move the form based on hero visibility
        function moveForm() {
            if (isHeroInView()) {
                // Move form to .hero-form if not already inside
                if (!jQuery('.hero-form').find('.hbspt-form').length) {
                    jQuery('.hero-form').append(jQuery('.requset-form-section .hbspt-form'));
                }
            } else {
                // Move form back to original location if it's inside .hero-form
                if (!jQuery('.requset-form-section').find('.hbspt-form').length) {
                    jQuery('.requset-form-section .elementor-widget-html .elementor-widget-container').append(jQuery('.hero-form .hbspt-form'));
                }
            }
        }

        moveForm();

        jQuery(window).on('scroll', function() {
            moveForm();
        });

        jQuery(window).on('resize', function() {
            moveForm();
        });
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        heroSection();
    }
}, 100);