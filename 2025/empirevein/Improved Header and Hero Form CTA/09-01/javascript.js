function loadTestCode() {
    if (!jQuery('body').hasClass('empireVein_iv')) {
        jQuery('body').addClass('empireVein_iv');
        
        // Put your test code here
        btnText = 'Book a Free Consult or Just Learn&nbsp;More';
        jQuery('header div > .bookfree-link > .nav-link').html(btnText);
        jQuery('#wrapper-homepage a.update-btn-link').html(btnText);
        
        
        var textChange = setInterval(function(){
            if(document.querySelectorAll('.subpage-img').length > 0){
                clearInterval(textChange)
                var pathName = window.location.pathname;
                if (pathName.includes('/en/book-online/')) {
                    jQuery('.subpage-img header h1').html(btnText);
                }
            }
        },500);
        
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' &&  jQuery('header div > .bookfree-link > .nav-link').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
