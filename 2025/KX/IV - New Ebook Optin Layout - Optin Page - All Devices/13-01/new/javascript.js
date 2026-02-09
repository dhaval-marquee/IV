function loadTestCode() {
    if (!jQuery('body').hasClass('optinPage_iv')) {
        jQuery('body').addClass('optinPage_iv');
        
        // Put your test code here
		jQuery('.optinPage_iv .text_split_form2 .container').prepend(jQuery('.optinPage_iv .text_split_form2 .container h1'));
		jQuery('.optinPage_iv .text_split_form2 .container .justify-content-between > div > div > p').eq(0).before('<img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1736747666/KX/New-Ebook-Optin-Layout/KX-Ebook.png" alt="Ebook">');
        
        jQuery('#submit-yellow').attr('value', 'Access Ebook');

        // v1, v3 only
		jQuery('optinPage_iv .form_content2 .wpcf7').before('<h2>Get Your Free Ebook</h2>');
        
        // v2, v4 only
        jQuery('.optinPage_iv .text_split_form2 .container .justify-content-between > div').eq(1).prepend('<h2>Get Your Free Ebook</h2>');

    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);