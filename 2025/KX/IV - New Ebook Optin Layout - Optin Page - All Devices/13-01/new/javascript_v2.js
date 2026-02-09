function loadTestCode() {
    if (!jQuery('body').hasClass('optinPage_iv')) {
        jQuery('body').addClass('optinPage_iv');
        jQuery('body').addClass('optinPage_v2');
        
        // Put your test code here
		jQuery('.optinPage_iv .text_split_form2 .container').prepend(jQuery('.optinPage_iv .text_split_form2 .container h1'));
		jQuery('.optinPage_iv .text_split_form2 .container .justify-content-between > div').eq(1).prepend('<h2>Get Your Free eBook</h2>');
		jQuery('.optinPage_iv .text_split_form2 .container .justify-content-between > div > div > p').eq(0).before('<img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1736747666/KX/New-Ebook-Optin-Layout/KX-Ebook.png" alt="Ebook">');

    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);