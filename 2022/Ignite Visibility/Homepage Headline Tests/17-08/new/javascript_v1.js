var jQisLoaded = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQisLoaded);
        
        jQuery('.home .hero-panel h1').text('Increase traffic. Ignite sales.').css('visibility','visible');
        jQuery('.home .hero-panel h4').text('Get full-service marketing solutions from a team of experts. So you can stop wondering if your marketing is working. And start hitting your business goals.').css('visibility','visible');
    } 
}, 100);
