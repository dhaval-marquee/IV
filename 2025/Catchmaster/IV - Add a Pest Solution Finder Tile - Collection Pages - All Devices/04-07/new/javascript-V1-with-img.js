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
const targetElement = document.body;
observerElm(targetElement, function () {
    const ul = document.querySelector('.product-grid-container #product-grid');
    if (!ul) return;

    const productItems = Array.from(ul.querySelectorAll('li')).filter(li => !li.classList.contains('iv-custom-product'));

    const adsProductHTML = `
        <li class="grid__item scroll-trigger animate--slide-in iv-custom-product" onclick="tidioChatApi.display(true);tidioChatApi.open();tidioChatApi.track('PSF_Activate')" data-cascade style="--animation-order: 4;"></li>`;

    // Insert after 1st item (2nd position)
    if (!ul.querySelector('.iv-custom-product.iv-pos-2')) {
        const firstClone = document.createElement('div');
        firstClone.innerHTML = adsProductHTML;
        const li1 = firstClone.firstElementChild;
        li1.classList.add('iv-pos-2');

        if (productItems.length >= 1) {
            productItems[0].insertAdjacentElement('afterend', li1);
        } else {
            ul.appendChild(li1);
        }
    }

    // Insert after 3rd item or at the end
    if (!ul.querySelector('.iv-custom-product.iv-pos-4')) {
        const secondClone = document.createElement('div');
        secondClone.innerHTML = adsProductHTML;
        const li2 = secondClone.firstElementChild;
        li2.classList.add('iv-pos-4');

        if (productItems.length >= 3) {
            productItems[2].insertAdjacentElement('afterend', li2);
        } else {
            ul.appendChild(li2);
        }
    }
});
