function heroSection() {
    if (!jQuery('body').hasClass('iv-hero-sec')) {
        jQuery('body').addClass('iv-hero-sec');
        

        const innerSect = jQuery('h1').closest('.iv-hero-sec .e-con-inner');
        const heroSec = jQuery('[data-elementor-type="wp-page"] > div:first-child');
        heroSec.addClass('hero_sec')
        innerSect.addClass('innerPart');
        innerSect.append('<div class="hero-form"><div class="hbspt-form"></div></div>');

        hbspt.forms.create({
            region: "na1",
            portalId: "46516295",
            formId: "3ca1ea04-5a08-4492-95ed-1cb349fdc2cb",
            target: ".hero-form .hbspt-form"
        });

        function heroFormMove() {
            var hbSptForm = setInterval(() => {
                if (jQuery('.hs_submit').length > 0) {
                    jQuery('.hs_submit').after('<div class="hs-button primary large action-button" id="action-button">Request a Consult or Just Learn More!</div>');
                    clearInterval(hbSptForm);
                }
            }, 100);
        
            document.addEventListener('click', function(e) {
                if (e.target.id === 'action-button') {
                    document.querySelector('.hs_submit .actions .hs-button').click();
                }
            });
    
        }
        heroFormMove();
        
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        heroSection();
    }
}, 100);
