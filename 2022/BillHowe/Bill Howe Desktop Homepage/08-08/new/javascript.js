function initCode() {
    function loadcode() {
        if(!jQuery('body').hasClass('desktop_redesign_test')) {
            jQuery('body').addClass('desktop_redesign_test');
            

            jQuery('header .container a.site-logo').prependTo(jQuery('header .the-navigation nav.util'));

            jQuery('section.hero .the-content a').after('<div class="review_wrapper">\
                <div class="logo_wrapper">\
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1659703082/BillHowe/Bill_Howe_Desktop_Homepage/google_g_icon_download.png" alt="Google Logo" width="75">\
                </div>\
                <div class="">\
                    <p><b>4.8</b> <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1659703082/BillHowe/Bill_Howe_Desktop_Homepage/5-stars.png" width="130"></p>\
                    <p>3,428 local reviews</p>\
                </div>\
            <div>');

            jQuery('.home nav.services-main').prepend('<h2>Our Services</h2>');
            jQuery('.desktop_redesign_test').css('visibility','visible');
        }

        setTimeout(function() {
            jQuery('.desktop_redesign_test').css('visibility','visible');
        }, 3000);
    }

    var jQisLoaded = setInterval(function () {
        if (typeof jQuery != 'undefined') {
            clearInterval(jQisLoaded);
            loadcode();
        } else {
            // DOM: Create the script element
            var jsElm = document.createElement("script");
            // set the type attribute
            jsElm.type = "application/javascript";
            // make the script element load file
            jsElm.src = '//cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js';
            // finally insert the element to the body element in order to load the script
            document.body.appendChild(jsElm);
            clearInterval(jQisLoaded);
            var jqueryInterval = setInterval(function () {
                if (typeof jQuery != 'undefined') {
                    clearInterval(jqueryInterval);
                    loadcode();
                }
            }, 100);
        }
    }, 100);
}


// Load code just for Desktop 
if (window.matchMedia("(min-width: 1025px)").matches) {

    initCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 1024.98px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 1025px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for Desktop over