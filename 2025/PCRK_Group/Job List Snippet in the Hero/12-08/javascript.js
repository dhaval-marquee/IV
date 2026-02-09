function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-snippet-hero', 'iv-snippet-hero-v2')) {
        document.querySelector('body').classList.add('iv-snippet-hero', 'iv-snippet-hero-v2');

        const ivRightContent = `<div class="iv-right-hero">
            <a href="https://recruiting.paylocity.com/recruiting/jobs/All/82c2cc31-fe87-4023-ac2b-e0967073cc6b/PCRK-Group"><img class="iv-hero-dsktop-img" src="https://res.cloudinary.com/ignite-visibility/image/upload/v1754980173/PCRK-Group/PCRK-Homepage.gif" alt="PCRK job list snippet"></a>
            <a href="https://recruiting.paylocity.com/recruiting/jobs/All/82c2cc31-fe87-4023-ac2b-e0967073cc6b/PCRK-Group"><img class="iv-hero-mobile-img" src="https://res.cloudinary.com/ignite-visibility/image/upload/v1752472980/PCRK-Group/PCRK_mobile.png" alt="PCRK mobile"></a>    
        </div>`;
        const heroSection = document.querySelector('#section-hero');
        if (!heroSection) return;

        if (!document.querySelector('.iv-hero-section')) {
            const firstChildDiv = heroSection.querySelector('div'); 
            if (firstChildDiv) {
                firstChildDiv.classList.add('iv-hero-section');
            }
        }

        const heroTitle = document.querySelector('#section-hero h1');
        if (!document.querySelector('.iv-left-hero')) {
            heroTitle.closest('.gb-inside-container').classList.add('iv-left-hero'); 
        }

        const ivLeftHero = document.querySelector('.iv-left-hero');
        if (ivLeftHero && !document.querySelector('.iv-hero-content')) {
            ivLeftHero.closest('div.gb-container').classList.add('iv-hero-content');
        }

        const ivHeroContent = document.querySelector('.iv-hero-content');
        if (ivHeroContent && !document.querySelector('.iv-right-hero')) {
            ivHeroContent.insertAdjacentHTML('beforeend', ivRightContent)
        } 
    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
