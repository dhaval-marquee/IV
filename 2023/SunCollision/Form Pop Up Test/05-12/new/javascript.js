
function loadTestCode() {
    if(!$('body').hasClass('iv-home')) {
        $('body').addClass('iv-home');
        // Modal Link
        $('.iv-home a[href="/demo-request/"]').attr("href", "javascript:void(0);").addClass('iv-modal-link');
        // Modal
        $('.iv-home .site-container').after('<div class="iv-modal">'+
            '<div class="iv-modal-overlay"></div>'+
            '<div class="iv-modal-content">'+
                '<div class="formbox">'+
                    '<h3>Book a customized Demo Today</h3>'+
                    '<span class="formintro">Find out if SUN Collision is right for you and get 3&nbsp;MONTHS FREE!*</span>'+
                    '<span class="demoform"></span>'+
                    '<span class="smallprint">*Limited time offer.  3 Months Free applies with a 27-month subscription.  SUN will never rent or sell your personal information.</span>'+
                '</div>'+
            '</div>'+
        '</div>');
        // HubSpot form load
        $.getScript('//js.hsforms.net/forms/embed/v2.js', function(){
            hbspt.forms.create({
                region: "na1",
                portalId: "7934115",
                formId: "85c9fe0d-6a5c-423a-90b6-e4d4128de6b0",
                target: ".demoform"
            });
        });
        // Modal Open & Close
        $('.iv-home .iv-modal-link').on('click', function(){
            $('body').addClass('iv-modal-open');
            $('.iv-home .iv-modal').addClass('open');
        });
        $('.iv-home .iv-modal-overlay').on('click', function(){
            $('body').removeClass('iv-modal-open');
            $('.iv-home .iv-modal').removeClass('open');
        });
    }
}

function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(function() {
    loadTestCode();
});