// Functions
function observerElm(target, callbackFn) {
    const config = {
        childList: true,
        subtree: true,
    };
    const observer = new MutationObserver(callbackFn);
    observer.observe(target, config);
}

// Inject Custom LI + Re-bind chat button
const targetElement = document.querySelector('.product-grid-container');
observerElm(targetElement, function () {
    const ul = document.querySelector('.product-grid-container #product-grid');
    if (!ul) return;

    // Get only original product <li> items (exclude previously added ones)
    const productItems = Array.from(ul.querySelectorAll('li')).filter(li => !li.classList.contains('iv-custom-product'));

    const adsProductHTML = `
        <li class="grid__item scroll-trigger animate--slide-in iv-custom-product" onclick="tidioChatApi.display(true);tidioChatApi.open();tidioChatApi.track('PSF_Activate')" data-cascade style="--animation-order: 4;">
            <h2>Not sure which of our fly traps is <span>right for you?</span></h2>
            <a href="javascript:;" class="button button--primary yellow-btn">FLY TRAP SOLUTION FINDER</a>
        </li>`;

    // Add after 1st item (2nd position)
    if (!ul.querySelector('.iv-custom-product.iv-pos-2') && productItems.length >= 1) {
        const firstClone = document.createElement('div');
        firstClone.innerHTML = adsProductHTML;
        const li1 = firstClone.firstElementChild;
        li1.classList.add('iv-pos-2');

        productItems[0].insertAdjacentElement('afterend', li1);
    }

    // Add after 3rd item (4th position)
    if (!ul.querySelector('.iv-custom-product.iv-pos-4') && productItems.length >= 3) {
        const secondClone = document.createElement('div');
        secondClone.innerHTML = adsProductHTML;
        const li2 = secondClone.firstElementChild;
        li2.classList.add('iv-pos-4');

        productItems[2].insertAdjacentElement('afterend', li2);
    }
});
