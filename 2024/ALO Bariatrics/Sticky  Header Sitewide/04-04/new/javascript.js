function loadTestCode() {
    if(!jQuery('body').hasClass('contactForm')) {
        jQuery('body').addClass('contactForm');

        // Load New Form
        jQuery('#frame-one1924798660').before('<a name="form1434638130" id="formAnchor1434638130"></a>');
        jQuery('<script src="https://fs22.formsite.com/include/form/embedManager.js?1434638130"></script>').appendTo('head');
        EmbedManager.embed({
            key: "https://fs22.formsite.com/res/showFormEmbed?EParam=m_OmK8apOTAr4W0_05YWBIpEHaDzsK4N6i5F2Wdvk90&1434638130",
            width: "100%"
        });

        // Hide old form
        jQuery('#formAnchor1434638130').nextAll().remove();
    }
}

var formLoaded = setInterval(() => {
    if (jQuery('#frame-one1924798660').length > 0) {
        clearInterval(formLoaded);
        loadTestCode();
    }
}, 100);