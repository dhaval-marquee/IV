function loadTestCode() {
    if (!jQuery("body").hasClass("iv_text")) {
        jQuery("body").addClass("iv_text");
        
        jQuery(".container header.entry-header").removeClass("col-lg-6").addClass("col-lg-12");

        // Append a section to the target element
        jQuery(".container header.entry-header").append(`
        <div class="content">
            <h2>The New Alternative to Knee Replacement Surgery Get significant pain relief in as little as 2 weeks!</h2>
            <div class="bookfree-link">
                <a href="/en/book-online/" class="nav-link">
                    Free Consultation<span class="d-none d-xl-inline">&nbsp;or Just Learn More</span>
                </a>
            </div>
        </div>
        <div class="img-text">
            <img src="/wp-content/uploads/evvs_insurances.png" style="max-width: 500px; opacity: 0.6">
            <p class="small wow animate fadeIn" style="visibility: visible; animation-name: fadeIn;">Most insurances accepted!</p>
        </div>`);
    }
}

// Wait until jQuery and body are available, then call loadTestCode
var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition); 
        loadTestCode(); 
    }
}, 100);
