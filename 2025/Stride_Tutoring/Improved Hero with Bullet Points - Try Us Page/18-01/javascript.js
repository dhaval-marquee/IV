function loadTestCode() {
    if (!jQuery('body').hasClass('hero_iv')) {
        jQuery('body').addClass('hero_iv');


        const url = window.location.href;

        const $mainContent = jQuery('.main-content');
        const $heroSec = $mainContent.find('.first-section').addClass('hero-sec');
        $heroSec.find('.wpb_wrapper').addClass('hero-content');
        $heroSec.find('.dark .vc_col-sm-6').addClass('col-12');

        // Update h1 and h2 content
        const updatedText = `
            Start Your Child’s Path to 
            <em class="animated hero-desktop">Academic Excellence
                <svg class="nectar-scribble basic-underline" viewBox="-400 -55 730 60" preserveAspectRatio="none">
                    <path style="animation-duration: 1.8s;" d="m -383.25 -6 c 55.25 -22 130.75 -33.5 293.25 -38 c 54.5 -0.5 195 -2.5 401 15" stroke="#fd762b" pathLength="1" stroke-width="20" fill="none"></path>
                </svg>
            </em>
            <em class="animated hero-mobile">Academic 
                <svg class="nectar-scribble basic-underline" viewBox="-400 -55 730 60" preserveAspectRatio="none">
                    <path style="animation-duration: 1.8s;" d="m -383.25 -6 c 55.25 -22 130.75 -33.5 293.25 -38 c 54.5 -0.5 195 -2.5 401 15" stroke="#fd762b" pathLength="1" stroke-width="20" fill="none"></path>
                </svg>
            </em>
            <em class="animated hero-mobile">Excellence
                <svg class="nectar-scribble basic-underline" viewBox="-400 -55 730 60" preserveAspectRatio="none">
                    <path style="animation-duration: 1.8s;" d="m -383.25 -6 c 55.25 -22 130.75 -33.5 293.25 -38 c 54.5 -0.5 195 -2.5 401 15" stroke="#fd762b" pathLength="1" stroke-width="20" fill="none"></path>
                </svg>
            </em>
            Today`;

        if($mainContent && $heroSec){
            if(url.includes('/try-us-mobile') || url.includes('/try-us-mobile/')){
                const mobileH1 = $heroSec.find('.nectar-highlighted-text h1');
                if(mobileH1){
                    mobileH1.html(updatedText);
                }
            }
            const desktopH1 =  $heroSec.find('.nectar-highlighted-text h2');
            if(desktopH1){
                desktopH1.html(updatedText);
            }
    
            // Update paragraph content
            $heroSec.find('.nectar-responsive-text p').text(
                'Discover a learning experience tailored to your child’s needs, with access to top-tier tutors from the comfort of home.'
            );
    
            // Append new div with ul
            $heroSec.find('.nectar-responsive-text').after(`
                <div class="additional-info">
                    <ul>
                        <li>Tailored lessons for your child’s learning pace and style.</li>
                        <li>Boost grades and knowledge with structured support.</li>
                        <li>Work with certified, vetted teachers for quality and safety.</li>
                    </ul>
                </div>
            `);
        }
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0 && jQuery('.main-content .first-section .wpb_wrapper').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 500);