function loadTestCode() {
    if (!jQuery('body').hasClass('iv-Homepage')) {
        jQuery('body').addClass('iv-Homepage');

        // Put your test code here
        jQuery('.iv-Homepage main .banner-content .banner-btn').after(`<div class="banner-btn iv-btnWrapper wow fadeInUp">
            <a href="https://www.mapcommunications.com/contact-us/request-information/" class="requestMoreInfoBtn">Request More Info</a>
            <a href="https://www.mapcommunications.com/pricing/" class="SeePricingBtn">See Pricing</a>
        </div>`);

        jQuery('.iv-Homepage .banner-brand-logos img').each(function () {
            const alt = jQuery(this).attr('alt')?.toLowerCase();

            if (alt === 'pci dss') {
                jQuery(this)
                    .attr('src', 'https://res.cloudinary.com/ignite-visibility/image/upload/v1722416616/mapcommunications/Logo/pci_dss.png')
                    .attr('data-src', 'https://res.cloudinary.com/ignite-visibility/image/upload/v1722416616/mapcommunications/Logo/pci_dss.png');
            }

            if (alt === 'hipaa') {
                jQuery(this)
                    .attr('src', 'https://res.cloudinary.com/ignite-visibility/image/upload/v1722416618/mapcommunications/Logo/hipaa.png')
                    .attr('data-src', 'https://res.cloudinary.com/ignite-visibility/image/upload/v1722416618/mapcommunications/Logo/hipaa.png');
            }

            if (alt === 'soc') {
                jQuery(this)
                    .attr('src', 'https://res.cloudinary.com/ignite-visibility/image/upload/v1769089784/mapcommunications/Logo/SOC_logo.png')
                    .attr('data-src', 'https://res.cloudinary.com/ignite-visibility/image/upload/v1769089784/mapcommunications/Logo/SOC_logo.png');
            }

            if (alt === 'hitrust') {
                jQuery(this)
                    .attr('src', 'https://res.cloudinary.com/ignite-visibility/image/upload/v1722416616/mapcommunications/Logo/hitrust.png')
                    .attr('data-src', 'https://res.cloudinary.com/ignite-visibility/image/upload/v1722416616/mapcommunications/Logo/hitrust.png');
            }
        });

    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);