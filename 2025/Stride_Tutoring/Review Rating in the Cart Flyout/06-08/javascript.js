function observerElm(target, callbackFn) {
    var config = {
        childList: true,
        attributes: true,
        subtree: true,
    };
    var observer = new MutationObserver(function(mutationsList, observer) {
        callbackFn(mutationsList, observer);
    });
    observer.observe(target, config);
}

function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-ReviewRating')) {
        document.querySelector('body').classList.add('iv-ReviewRating');

        function Cart() {
            const target = document.querySelector('body div[role="dialog"] div[data-radix-scroll-area-viewport] div > ul li a[data-discover="true"] + div');
            const source = document.querySelector('h1 + div .ruk_rating_snippet');

            if (target && source && !document.querySelector('.iv-rating-snippet')) {
                const cloned = source.cloneNode(true);
                cloned.classList.add('iv-rating-snippet');
                target.insertAdjacentElement('afterend', cloned);
            }
        }
        const targetElement = document.querySelector('body');
        observerElm(targetElement, function(mutationsList, observer) {
            Cart();
        });
        Cart();
    }
}

const checkCondition = setInterval(() => {
    if (document.querySelectorAll('body').length > 0) {
        loadTestCode();
        clearInterval(checkCondition);
    }
}, 2000);