function loadTestCode() {
    if (!jQuery('body').hasClass('heroLogo')) {
        jQuery('body').addClass('heroLogo');
        
        // Put your test code here
        var ImageURL = '//res.cloudinary.com/ignite-visibility/image/upload/mapcommunications/Logo/';
        jQuery('.top-banner-list').after(`
            <ul class="clientLogo">
                <li><img src="${ImageURL}hitrust.png" alt="Hitrust Logo"></li>
                <li><img src="${ImageURL}hipaa.png" alt="HIPAA Logo"></li>
                <li><img src="${ImageURL}pci_dss.png" alt="PCI DSS Logo"></li>
            </ul>
        `);
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);