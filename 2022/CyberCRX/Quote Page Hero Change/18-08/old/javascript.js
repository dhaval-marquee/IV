function loadcode() {
    
    // PG Cookies Add
    var cookieName = 'htb_iv';
    var cookieValue = '1';
    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 30);
    document.cookie = cookieName +"=" + cookieValue + ";expires=" + myDate;
    // END PG Cookies Add

    if (!$('body').hasClass('htb_iv')) {
        $('body').addClass('htb_iv');
        
        // Put your test code here
        $('.htb_iv .mod-banner-home .container').html(`<div class="hero_inner">
            <div class="hero_left">
                <h1>Get a Fully Customized Quote For Your Business</h1>
                <h4>The vendor security you need at a price you can afford; request your quote today.</h4>
            </div>
            <div class="hero_right"></div>
        </div>`);

        var bottomForm = $('.htb_iv .group-form');
        $('.hero_right').append(bottomForm);
        $('.hero_inner .hero_right .cont-form').remove();

        var formInterval = setInterval(function() {
            if($('.htb_iv .hero_inner .box-form .hs_submit input').length > 0) {
                clearInterval(formInterval);
                $('.htb_iv .hero_inner .box-form .hs_submit input').wrap('<div class="buttonText"></div>');
            }
        }, 100);
        
        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }
}

// Initialize code after $/jQuery is define
function initCode() {
    var jQisLoaded = setInterval(function () {
        if (typeof jQuery != 'undefined') {
            clearInterval(jQisLoaded);
            loadcode();
        } else {
            var jsElm = document.createElement("script");
            jsElm.type = "application/javascript";
            jsElm.src = '//cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js';
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
// Initialize code over

initCode();