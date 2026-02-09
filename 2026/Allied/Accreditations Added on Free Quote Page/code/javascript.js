function accreditationIV() {
    if (!jQuery('body').hasClass('accreditation-iv')) {
        jQuery('body').addClass('accreditation-iv');
        
        // Put your test code here
        jQuery('.free-quote').wrapInner('<div class="container"><div class="accreditation-form"></div></div>');
        jQuery('.free-quote .container').prepend(`<div class="accreditation-section">
            <h1>Industry Recognized Moving Experts</h1>
            <p>Accredited, certified and recommended by leading industry organizations.</p>
            <div class="accreditation-iv-logos">
                <img src="https://avlnavlblob.blob.core.windows.net/allied-com/images/default-source/default-album/bbb-seal-vertical-blue.jpg?sfvrsn=bfa777fb_0" alt="BBB 100" />
                <img src="https://avlnavlblob.blob.core.windows.net/allied-com/images/default-source/design/wca-seal-cr-2015-2026.png?sfvrsn=d8085ffb_1" alt="Women's Choice Award logo" />
                <img src="https://avlnavlblob.blob.core.windows.net/allied-com/images/default-source/default-album/allied_promover_100ppi_transparent.png?sfvrsn=41a877fb_2" alt="Allied Pro Mover" />
            </div>
        </div>`);
    }
}

var checkJquery = setInterval(() => {
    if (typeof jQuery !== 'undefined') {
        clearInterval(checkJquery);
        console.log('jQuery is loaded, executing test code.');
        accreditationIV();
    }
}, 100);