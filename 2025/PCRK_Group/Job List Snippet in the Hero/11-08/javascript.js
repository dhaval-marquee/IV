function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-snippet-hero')) {
        document.querySelector('body').classList.add('iv-snippet-hero');

        const ivRightContent = `<div class="iv-right-hero">
                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/PCRK-Group/PCRK-Job-List-Snippet.png" alt="PCRK Job List Snippet">
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
