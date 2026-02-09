var jQisLoaded = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQisLoaded);
        
        jQuery('.home .hero-panel h1').text('Grow your business. With strategies customized to your unique business goals.').css('visibility','visible');
        jQuery('.home .hero-panel h4').html('Full-service marketing solutions. Tailored to your business. So you can scale faster and up your&nbsp;ROI.').css('visibility','visible');
    } 
}, 100);
