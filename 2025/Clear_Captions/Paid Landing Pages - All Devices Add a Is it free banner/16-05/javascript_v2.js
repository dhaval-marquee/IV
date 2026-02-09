function loadTestCode() {
    if (!jQuery('body').hasClass('bar_iv')) {
        jQuery('body').addClass('bar_iv');
        
        
        var getClassInterval = setInterval(function(){
            if(document.querySelectorAll('.post-content .main .fusion-text').length > 0){
                clearInterval(getClassInterval)
                console.log('Dhaval');
                jQuery('.post-content .main .fusion-text').html(`<p>In 1990, President George H.W. Bush signed the Americans with Disabilities Act. The bill helps protect accessibility in communication, including telecommunications.</p>
                <p>The bill requires the Federal Communications Commission (FCC) to ensure access to Telecommunications Relay Services (TRS). These services help people who are deaf, hard of hearing, deafblind, or have speech disabilities to communicate by phone in a manner functionally equivalent to telephone services used by people without disabilities. As part of this federal mandate, the TRS Fund was established.</p>
                <p>Funded by interstate telecommunications carriers and Voice over Internet Protocol (VoIP) providers, the TRS Fund covers the costs of providing call captioning services to qualified individuals.</p>`);
            }
        },500);

        jQuery('.fusion-tb-header .fusion-fullwidth').prepend('<div class="top-bar sky-bg">See why our caption phone is at no cost for the hearing impaired: <a href="#its-call" class="smooth-scroll">Learn More</a></div>');

        jQuery('img').each(function() {
            if (jQuery(this).attr('title') === 'MaryJo and Delbert Forward') {
                jQuery(this).attr('id', 'its-call');
                jQuery(this).closest('div.fusion-builder-row').addClass('main');
            }
        });

        jQuery('.smooth-scroll').on('click', function(event) {
            event.preventDefault();
            var target = jQuery(this.getAttribute('href'));
            if (target.length) {
                jQuery('html, body').animate({
                    scrollTop: target.offset().top - 150 
                }, 800);
            }
        });
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);