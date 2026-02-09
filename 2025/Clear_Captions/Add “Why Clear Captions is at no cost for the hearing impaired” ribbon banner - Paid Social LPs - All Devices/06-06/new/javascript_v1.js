function loadTestCode() {
    if (!jQuery('body').hasClass('bar_iv')) {
        jQuery('body').addClass('bar_iv');

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

        function runCode() {
            var getHeightHeader = document.querySelector('.bar_iv .top-bar + div').offsetHeight;
            console.log(getHeightHeader);
            document.querySelector('.bar_iv #main').style.setProperty('padding-top', getHeightHeader + 'px', 'important');

        }

        function runCode() {
            const header = document.querySelector('.bar_iv .top-bar + div');
            const main = document.querySelector('.bar_iv #main');
            if (header && main) {
                main.style.setProperty('padding-top', header.offsetHeight + 'px', 'important');
            }
            }

            function handleResize() {
            if (window.matchMedia("(max-width: 577.98px)").matches) {
                runCode();
            } else {
                document.querySelector('.bar_iv #main')?.style.removeProperty('padding-top');
            }
        }

handleResize();
window.addEventListener('resize', handleResize);

    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
