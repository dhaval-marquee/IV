function loadTestCode() {
    const tag = 'mobile-cart';
    if (!document.querySelector('body').classList.contains(tag)) {
        document.querySelector('body').classList.add(tag);
        var targetElement = document.querySelector('body');

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
        observerElm(targetElement, function(mutationsList, observer) {
            cartMobile();
        });

        function cartMobile() {
            const defaultCartViewSummary = document.querySelector(`.${tag} div[class*="DefaultCartView_summaryAndHeader"]`);
            if (defaultCartViewSummary) {
                const recommendationsWrapper = document.querySelector('.merce-row + [class*="Recommendations_recommendationWrapper"]');
                if (!recommendationsWrapper) {
                    var likeProducts = setInterval(() => {
                        if(document.querySelector(`.${tag} div[class*="Recommendations_recommendationWrapper"]`)){
                            clearInterval(likeProducts)
                            const recommendationsWrapperElement = document.querySelector(`.${tag} div[class*="Recommendations_recommendationWrapper"]`);
                            if (recommendationsWrapperElement) {
                                recommendationsWrapperElement.after(defaultCartViewSummary);
                            }
                        }
                    }, 200);
                }
            }

            const defaultCartViewCartCta = document.querySelector(`.${tag} div[class*="DefaultCartView_cartButtonsWrapper"]`)
            if (defaultCartViewCartCta) {
                const footerCartButtonsWrapper = document.querySelector(`.${tag} footer + div[class*="DefaultCartView_cartButtonsWrapper"]`);
                if (!footerCartButtonsWrapper) {
                    const footerElement = document.querySelector(`.${tag} footer`);
                    if (footerElement) {
                        footerElement.after(defaultCartViewCartCta);
                    }
                }
            }
        }
    }
}

// Load code just for mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {

    loadTestCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 768px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for mobile over