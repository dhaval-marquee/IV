function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-prominent-position')) {
        document.querySelector('body').classList.add('iv-prominent-position');

         // Observer
        function observerElm(target, callbackFn) {
            var config = {
                childList: true,
                attributes: true,
                subtree: true,
            };
            var callback = function(mutationsList, observer) {
                callbackFn(mutationsList, observer);
            };
            var observer = new MutationObserver(callback);
            observer.observe(target, config);
        }
        
        var targetElement = document.body;
        observerElm(targetElement, function(mutationsList, observer) {
            updateCode();
        });

        function updateCode() {
            const heroSection = document.querySelector('.hero-carousel');
            if (heroSection && !document.querySelector('.iv-hero-section')) {
                const container = heroSection.closest('div')?.parentElement;
                container?.classList.add('iv-hero-section');
            }     
    
            const allHeading = document.querySelectorAll('h2');
            if (!allHeading) return;
    
            allHeading.forEach((text) => {
                if (text.innerText.trim() === 'How Online Renting Works') {
                    const mainParent = text.closest('[data-testid="rcwt"]'); 
                    if (mainParent && !document.querySelector('.iv-how-it-work-section')) {
                        mainParent.classList.add('iv-how-it-work-section');
                    }
                }
                if (text.textContent.trim() === 'See What Other Customers Are Saying') {
                    const wrapper = text.closest('.bg-gold-lighter');
                    if (wrapper && !wrapper.classList.contains('iv-review-section')) {
                        wrapper.classList.add('iv-review-section');
                    }
                }
            });
    
            const ivHeroSection = document.querySelector('.iv-hero-section');
            const ivHowWork = document.querySelector('.iv-how-it-work-section');
            const ivReviewSec = document.querySelector('.iv-review-section');
                
            if (ivHeroSection && ivHowWork && ivReviewSec) {
                if (ivHowWork.previousElementSibling !== ivHeroSection) {
                    ivHeroSection.after(ivHowWork);
                }
                if (ivReviewSec.previousElementSibling !== ivHowWork) {
                    ivHowWork.after(ivReviewSec);
                }
            }
        }
        // updateCode();

    }
}

const checkCondition = setInterval(function() {
    if (document.querySelector('body')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);