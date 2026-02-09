var jQisLoaded = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQisLoaded);
        
        jQuery('.home .hero-panel h1').text('ROI-driven digital marketing services').css('visibility','visible');
        jQuery('.home .hero-panel h4').text('Scale your business and up your ROI. With Ignite Visibility, the full-service agency laser-focused on results.').css('visibility','visible');
    } 
}, 100);
