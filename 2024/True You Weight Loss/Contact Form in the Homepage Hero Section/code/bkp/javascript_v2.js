function heroSection() {
    if (!document.querySelector('body').classList.contains('iv-hero-sec')) {
        document.querySelector('body').classList.add('iv-hero-sec');

        jQuery('select[name="procedure_preference"] option[value="Undecided"]').prop('selected', true).trigger('change');
        jQuery('select[name="procedure_preference"]').closest('fieldset').hide();

        var hbSptForm = setInterval(() => {
            if (jQuery(".hs_submit").length > 0) {
                
                jQuery(".hs_submit").after('<div class="hs-button primary large actionBtn" id="actionBtn">Request a Consultation or Just Learn More!</div>');
                jQuery('select[name="procedure_preference"] option[value="Undecided"]').prop('selected', true).trigger('change');
                jQuery('select[name="procedure_preference"]').closest('fieldset').hide();

                var selectField = jQuery('[id*="how_can_we_help_you_"]');
                selectField.find('option[value="i_would_like_to_speak_with_a_team_member_now"]').text('Speak with a team member now.');
                selectField.find('option[value="i_would_like_to_schedule_a_conversation_with_an_advisor"]').text('Schedule a call with an advisor.');

                jQuery('.hbspt-form ul.inputs-list li.hs-form-radio').eq(0).closest('.hs-form-field').addClass('newSelectBox');
                jQuery('.newSelectBox label > span:first-child').text('Preferred Language');
                jQuery('.newSelectBox').find('.input').before(`<div class="input">
                    <select id="newSelect_iv" class="hs-input is-placeholder" required="required" data-gtm-form-interact-field-id="0">
                        <option value="English" selected>English</option>
                        <option value="Spanish">Spanish</option>
                    </select>
                </div>`);

                jQuery('select[name="procedure"]').closest('fieldset').prepend(jQuery('.newSelectBox'));
                // hide unwanted items
                // jQuery('.newSelectBox legend.hs-field-desc').hide();
                // jQuery('.newSelectBox .input + .input').hide();
                jQuery('#newSelect_iv').on('change', function() {
                    var selectedValue = jQuery(this).val();
                    if (selectedValue === 'English') {
                        jQuery('input[name="primary_language"][value="Spanish"]').prop('checked', true).trigger('change');
                        jQuery('input[name="primary_language"][value="English"]').prop('checked', true);
                    } else if (selectedValue === 'Spanish') {
                        jQuery('input[name="primary_language"][value="Spanish"]').prop('checked', true).trigger('change');
                    }
                    jQuery(this).find('option[value=""]').remove();
                });
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
