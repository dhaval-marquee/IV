function loadTestCode() {
    if (!document.body.classList.contains('hero_iv')) {
        document.body.classList.add('hero_iv');

        const url = window.location.href;
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            const heroSec = mainContent.querySelector('.full-width-content:first-child');
            if (heroSec) {
                heroSec.classList.add('hero-sec');
                const wpbWrapper = heroSec.querySelector('.wpb_wrapper');
                if (wpbWrapper) {
                    wpbWrapper.classList.add('hero-content');
                }

                const darkCol = heroSec.querySelector('.dark .vc_col-sm-6');
                if (darkCol) {
                    darkCol.classList.add('col-12');
                }

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

                if (url.includes('/try-us-mobile') || url.includes('/try-us-mobile/')) {
                    const mobileH1 = heroSec.querySelector('.nectar-highlighted-text h1');
                    if (mobileH1) {
                        mobileH1.innerHTML = updatedText;
                    }
                }
                const desktopH1 = heroSec.querySelector('.nectar-highlighted-text h2');
                if (desktopH1) {
                    desktopH1.innerHTML = updatedText;
                }

                // Hide paragraph content
                const paragraph = heroSec.querySelector('.nectar-responsive-text');
                if (paragraph) {
                    paragraph.style.display = 'none';
                }

                // Append new div with ul
                const additionalInfo = document.createElement('div');
                additionalInfo.classList.add('additional-info');
                additionalInfo.innerHTML = `
                    <ul>
                        <li>Tailored lessons for your child’s learning pace and style.</li>
                        <li>Boost grades and knowledge with structured support.</li>
                        <li>Work with certified, vetted teachers for quality and safety.</li>
                    </ul>
                `;
                heroSec.querySelector('.nectar-responsive-text')?.after(additionalInfo);
            }
        }
    }    
}

// Check condition and initialize the code
const checkCondition = setInterval(() => {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
