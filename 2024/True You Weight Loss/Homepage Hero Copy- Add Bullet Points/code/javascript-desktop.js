var jQisLoaded = setInterval(() => {
    if (typeof jQuery != 'undefined' && jQuery('h1.hero-heading').length > 0 && !jQuery('body').hasClass('homepage_iv')) {
        clearInterval(jQisLoaded);

        jQuery('body').addClass('homepage_iv');
        jQuery('body.homepage_iv').closest('html').addClass('noOverflow');
        jQuery('h1.hero-heading').after(`<h6>Same-day procedures, lifelong results!</h6>
        <ul>
            <li>Our procedures have a 97% success rate.</li>
            <li>Transparent pricing with financing options available.</li>
            <li>Tailored solutions for various health conditions.</li>
        </ul>`);
    }
}, 100);