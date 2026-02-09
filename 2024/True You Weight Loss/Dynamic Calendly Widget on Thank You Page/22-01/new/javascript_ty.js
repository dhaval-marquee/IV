var $ = jQuery;
function loadTestCode() {

    var getIframe = setInterval(() => {
        if($('#calendly-embed iframe').length > 0) {
            clearInterval(getIframe);
            // $('h3.true-title').next().hide();
            var getIFrameURL = $('#calendly-embed iframe').attr('src');
            var getQueryParam = getIFrameURL.split("?")[getIFrameURL.split("?").length - 1];
            if(localStorage.getItem('locationCary')) {
                $('#calendly-embed iframe').attr('src','https://calendly.com/cary-consultation-schedule/true-you-weight-loss-consultation?month=2024-01?'+getQueryParam);
            }
            // $('#calendly-embed').parent().show().css('text-align','center');
        }
    }, 10);

    // // Assuming you have an iframe with id "myFrame"
    // var iframe = document.querySelector('#calendly-embed iframe');
    // var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    // var h1Element = iframeDocument.querySelectorAll('h1')[0];
    // h1Element.textContent = 'Quick Discovery Call';
}
loadTestCode();