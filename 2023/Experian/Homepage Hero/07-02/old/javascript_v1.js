
// Variant 1
var jQisLoaded = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQisLoaded);
        console.log('dhaval code working v1');
        if (!$('body').hasClass('iv_healthcare')) {
            $('body').addClass('iv_healthcare');
            $('.iv_healthcare #smart-hero').carousel({
                interval: false,
                wrap: true,
                ride: true
            });
            $(".iv_healthcare .hoverBoxes .par-comp-meta .h2").text("Comprehensive Healthcare Revenue Cycle Management");
            $(".iv_healthcare .hoverBoxes .par-comp-meta .experian-description").text("Experian Health’s data-driven insights give you the power to streamline operations, increase revenue, and improve patient experience - simplifying healthcare for all");
        }
    }
}, 100);
