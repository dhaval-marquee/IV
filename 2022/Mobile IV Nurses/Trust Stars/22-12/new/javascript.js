function SPZTestCode() {
    if (!jQuery('body').hasClass('google-review')) {
        jQuery('body').addClass('google-review');
        
        // Put your test code here

        jQuery('.feel-better-faster-section .column_button:last-child').after('<div class="google-review-wrap"><span class="rating-number">5.0</span><span class="rating-star"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1671630942/mobileIVnurses/five-star.png" width="100" height="23"></span><span class="rating-count">1,074 Reviews</span></div>');

        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }
}


try {
    // PG Cookies Add
    var cookieName = 'google_review_Cookie';
    var cookieValue = '1';
    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 30);
    document.cookie = cookieName +"=" + cookieValue + ";expires=" + myDate;
    // END PG Cookies Add

    SPZTestCode();

} catch(ex) {

} finally {
    setTimeout(() => {
        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }, 3000);
}