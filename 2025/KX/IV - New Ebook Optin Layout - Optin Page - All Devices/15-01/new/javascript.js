function loadTestCode() {
    if (!jQuery('body').hasClass('optinPage_iv')) {
        jQuery('body').addClass('optinPage_iv');
        
        // Put your test code here
		jQuery('.optinPage_iv .text_split_form2 .container').prepend(jQuery('.optinPage_iv .text_split_form2 .container h1'));
		jQuery('.optinPage_iv .text_split_form2 .container .justify-content-between > div > div > p').eq(0).before('<img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1736921365/KX/New-Ebook-Optin-Layout/EbookCover.jpg" alt="Ebook Cover">');
        jQuery('.optinPage_iv #submit-yellow').attr('value', 'Access Ebook');
		jQuery('.optinPage_iv .form_content2 .wpcf7').before('<h2>Get Your Free Ebook</h2>');
        
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);