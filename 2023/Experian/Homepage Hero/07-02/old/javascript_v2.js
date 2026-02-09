// Varinat 2
var jQisLoaded = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQisLoaded);
        console.log('dhaval code working v2');
        if (!$('body').hasClass('iv_healthcare')) {
            $('body').addClass('iv_healthcare');
            $('.iv_healthcare #smart-hero').carousel({
                interval: false,
                wrap: true,
                ride: true
            });
            $(".iv_healthcare .hoverBoxes .par-comp-meta .h2").text("Simplifying Healthcare For All");
            $(".iv_healthcare .hoverBoxes .par-comp-meta .experian-description").text("For over 25 years Experian Health has worked closely with over 500,000 providers, helping them make smarter business decisions and improve patient experiences");
        };
    }
}, 100);