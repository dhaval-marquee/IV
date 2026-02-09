function ivCode() {
    if (!$('body').hasClass('header_iv')) {
        $('body').addClass('header_iv');
        
        // Put your test code here
        $('.header_iv header .header-ul > li:first-child a').after('<a href="tel:2089991111">(208) 999-1111</a>');
        $('.header_iv .desktop header .menu').append('<a href="javascript:;" class="button orange-background uppercase fancybox" rel="noopener noreferrer">Try For Free</a>')

        $(document).on('click', '.header_iv .desktop header .menu>a.button', function(){
            $('.banner-buttons a[href="#lets-do-this"].button').trigger('click');
        });

        document.getElementsByTagName("header")[0].style.visibility = "visible";
    }
}


try {
    // PG Cookies Add
    var cookieName = 'iv_redesign';
    var cookieValue = '1';
    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 30);
    document.cookie = cookieName +"=" + cookieValue + ";expires=" + myDate;
    // END PG Cookies Add

    if (window.matchMedia("(min-width: 1024px)").matches) {

        ivCode();

        window.addEventListener('resize', function(event) {
            if (window.matchMedia("(max-width: 1023.95px)").matches) {
                location.reload();
            }
        }, true);
    } else {
        window.addEventListener('resize', function(event) {
            if (window.matchMedia("(min-width: 1024px)").matches) {
                location.reload();
            }
        }, true);
    }
} catch(ex) {

} finally {
    document.getElementsByTagName("header")[0].style.visibility = "visible";
}