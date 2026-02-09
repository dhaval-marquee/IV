function changeBtnText() {
    var pageButton = setInterval(() => {
        if (jQuery('.header .elementor-mobile-align-right .elementor-button-text').length > 0) {
            clearInterval(pageButton);
            console.log('HubSpot - Page Button Text changed');

            if(window.location.href.indexOf('pricing') == -1) {
                console.log('Non pricing page');
                jQuery('a[href*="request-a-consultation"]').each(function(index) {
                    console.log('Button count: ', index);
                    jQuery(this).addClass('text_changed_' + index).text('Request a Consultation or Just Learn More!');
                });
            } else if (window.location.href.indexOf('pricing') > -1) {
                console.log('Pricing page');
                jQuery('.header .elementor-mobile-align-right .elementor-button-text, .header > .e-con-inner .elementor-button-link[href="/request-a-consultation/"] .elementor-button-text, div[data-id="297ae008"] a, div[data-id="7f8705e"] a').each(function(index) {
                    console.log('Button count: ', index);
                    jQuery(this).addClass('text_changed_' + index).text('Request a Consultation or Just Learn More!');
                });
            }

            var i = 0;
            var check = setInterval(() => {
                jQuery('.header .elementor-mobile-align-right a').html('Learn More');

                if (i == 1000) {
                    clearInterval(check);
                }
                i++;
            }, 10);
        }
    }, 100);

    var hbSptForm = setInterval(() => {
        if(jQuery(".hs_submit").length > 0) {
            clearInterval(hbSptForm);
            console.log('HubSpot - Form Button Text changed');
            jQuery(".hs_submit").after('<div class="hs-button primary large actionBtn" id="actionBtn">Request a Free Consultation or Just Learn More!</div>');

            jQuery('select[name="procedure_preference"] option[value="Undecided"]').prop('selected', true).trigger('change');
            jQuery('select[name="procedure_preference"]').closest('fieldset').hide();
        }
    }, 100);

    var unBounceForm = setInterval(() => {
        if(jQuery('.lp-pom-form button[type="submit"] .label').length > 0) {
            clearInterval(unBounceForm);
            console.log('Unbounce - Button Text changed');
            jQuery('.lp-pom-form button[type="submit"] .label').text('Request a Free Consultation or Just Learn More!');
        }
    }, 100);

    const targetPath = "/request-a-consultation/";
    if (window.location.pathname === targetPath) {
        document.body.classList.add('requestConsultation');
    }

    document.addEventListener("click", function (e) {
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
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        changeBtnText();
    }
}, 100);