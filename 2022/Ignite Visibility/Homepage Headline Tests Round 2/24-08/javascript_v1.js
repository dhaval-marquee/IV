var jQisLoaded = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQisLoaded);
        
        jQuery('.home .hero-panel h1').text('Expert-led digital marketing services').css('visibility','visible');
        jQuery('.home .hero-panel h4').text('Get a custom marketing strategy designed by top experts in each field. From SEO and PPC. To social media, web design, and more.').css('visibility','visible');
    } 
}, 100);
