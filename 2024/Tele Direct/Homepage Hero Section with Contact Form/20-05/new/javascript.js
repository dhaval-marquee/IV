function loadTestCode() {
    // Body class
    if (!document.querySelector('body').classList.contains('homepage_iv')) {
        document.querySelector('body').classList.add('homepage_iv');
        
        jQuery('#gform_21').closest('.panel-grid-cell').addClass('formWrapper');
        jQuery('body #pgc-5-0-1').wrapInner( '<div class="rightPart_inner"></div>');
        jQuery('.homepage_iv .rightPart_inner').append(jQuery('.formWrapper > div'));

        document.body.classList.add('stickyFooter');
        function handleScroll() {
            var scrollY = window.scrollY || window.pageYOffset;
            var targetScroll = document.querySelector('#pg-5-0').offsetHeight
        
            if (scrollY > targetScroll) {
                document.body.classList.remove('stickyFooter');
                jQuery('.homepage_iv .formWrapper').append(jQuery('.homepage_iv .rightPart_inner > div'));
            } else {
                document.body.classList.add('stickyFooter');
                jQuery('.homepage_iv .rightPart_inner').append(jQuery('.formWrapper > div'));
            }
        }
        
        window.addEventListener('scroll', handleScroll);
    }
}
loadTestCode();