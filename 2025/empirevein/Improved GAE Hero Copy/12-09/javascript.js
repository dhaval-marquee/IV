function loadTestCode() {
    if (!jQuery("body").hasClass("iv-GAEHero")) {
        jQuery("body").addClass("iv-GAEHero");
        
        // Append a section to the target element
        jQuery(".container header.entry-header > a").replaceWith(`<a href="javascript:;" 
            class="strong caps c-accent wow animate fadeInDown" style="visibility: visible; animation-name: fadeInDown;">Genicular Artery Embolization</a>`);

        jQuery(".container header.entry-header h1").html("The #1 Fastest Growing<br> Knee Pain Treatment in the&nbsp;U.S").after(`<p class="small wow animate fadeIn animated" style="visibility: visible; animation-name: fadeIn;">Trusted. Tested. FDA-Approved.</p>`);

    }
}

// Wait until jQuery and body are available, then call loadTestCode
var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition); 
        loadTestCode(); 
    }
}, 100);