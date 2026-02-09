var jqueryInterval = setInterval(function () {
    if(typeof($) != "undefined"){

        if (window.matchMedia("(min-width: 1025px)").matches && $('body header #nav-quote-desktop').length > 0) {
            $('body header #nav-quote-desktop').next().after($('body header #nav-quote-desktop'));
        }

    }
}, 100);