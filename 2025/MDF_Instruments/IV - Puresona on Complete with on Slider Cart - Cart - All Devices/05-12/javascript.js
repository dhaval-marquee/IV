function loadTestCode() {
    document.querySelector('body').classList.add('iv-puresona-on-cart');

    const addPuresona = `
        <div class="iv-cart-drawer-item cart-drawer__complementary-products complementary-products">
            <div class="complementary-products__header complementary-products__header--align-start" bis_skin_checked="1">
                <p class="h6">Complete with <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#ed1865"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg></p>
            </div>
            <div class="horizontal-product-card iv-puresona-section">
                <a href="/products/puresona" class="horizontal-product-card__figure">
                    <img src="//mdfinstruments.com/cdn/shop/products/mdf-stethoscope-puresona-single-use-diaphragms.jpg?v=1743701112&amp;width=900"
                        alt="Puresona® Single-Use Stethoscope Diaphragms MDF Instruments Official Store Disposable Hygienic Stethoscope Cover"
                        width="900" height="900" loading="eager">
                </a>
                <div class="horizontal-product-card__info">
                    <div class="v-stack gap-1 justify-items-start">
                        <a href="/products/puresona" class="product-title h6">Puresona® Single-Use Diaphragms</a>
                        <price-list class="price-list price-list--product">
                            <sale-price class="h6 text-subdued"><span class="sr-only">Sale price</span>$13.99</sale-price>
                        </price-list>
                    </div>
                    <product-form>
                        <form method="post" action="/cart/add" class="shopify-product-form">
                            <input type="hidden" name="form_type" value="product">
                            <input type="hidden" name="utf8" value="✓">
                            <input type="hidden" name="id" value="40705026883749">
                            <input type="hidden" name="product-id" value="5567673729189">
                            <input type="hidden" name="section-id" value="sections--24211013009778__cart-drawer">
                            <button type="submit" class="@narrow:horizontal-product-card__button link">Add to cart</button>
                            <button type="submit" class="@large:horizontal-product-card__button button button--outline button--subdued">Add to cart</button>
                        </form>
                    </product-form>
                </div>
            </div>
        </div>`;

    const appendSection = document.querySelector('#cart-drawer .cart-drawer__footer');
    const puresonaSection = document.querySelector('.iv-cart-drawer-item');
    const cartDrawer = document.querySelector('#cart-drawer');

    if (appendSection && !puresonaSection && !cartDrawer?.classList.contains('iv-in-cart')) {
        appendSection.insertAdjacentHTML('beforebegin', addPuresona);
    }

    if(cartDrawer){
        const cartItems = document.querySelectorAll('.cart-drawer__items .line-item');
        let hasPuresona = false;
    
        cartItems.forEach(item => {
            const title = item.querySelector('a.h6')?.innerText?.toLowerCase();
            if (title === 'puresona® single-use diaphragms') {
                hasPuresona = true;
            }
        });
    
        if (hasPuresona) {
            puresonaSection?.remove();
            cartDrawer?.classList.add('iv-in-cart');
        } else {
            cartDrawer?.classList.remove('iv-in-cart');
        }
    
        const hasOtherComplementary = document.querySelector('.iv-puresona-on-cart .cart-drawer__complementary-products.complementary-products:not(.iv-cart-drawer-item)');
        if (hasOtherComplementary) {
            cartDrawer?.classList.add('iv-no-complementary-products');
        } else {
            cartDrawer?.classList.remove('iv-no-complementary-products');
        }
        // Append the plus icon to the header
        const headerText = document.querySelector('.iv-puresona-on-cart .cart-drawer__complementary-products.complementary-products:not(.iv-cart-drawer-item) .complementary-products__header p');
        if (headerText && !headerText.querySelector('svg.icon-tabler-plus')) {
            headerText.insertAdjacentHTML('beforeend', `
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#ed1865"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
        `);
        }
        
        const freeCasenote = document.querySelector('.iv-puresona-on-cart .cart-drawer__free-case-note');
        const boxElement = document.querySelector('.iv-puresona-on-cart #cart-drawer scroll-carousel');

        if (freeCasenote && boxElement) {
            // Move inside scroll-carousel (at the top)
            if (!boxElement.contains(freeCasenote)) {
                boxElement.prepend(freeCasenote);
            }
        }
    }
}

function observerElm(target, callbackFn) {
    const config = {
        childList: true,
        attributes: true,
        subtree: true,
    };

    let debounceTimeout = null;
    const callback = (mutationsList, observer) => {
        const isRelevant = mutationsList.some((mutation) => {
            if (
                mutation.target?.classList?.contains('iv-cart-drawer-item') ||
                mutation.target?.classList?.contains('iv-in-cart')
            ) {
                return false;
            }
            return true;
        });

        if (isRelevant) {
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(() => {
                callbackFn(mutationsList, observer);
            }, 200);
        }
    };

    const observer = new MutationObserver(callback);
    observer.observe(target, config);
}

// Setup observer only if #cart-drawer exists
// document.addEventListener('DOMContentLoaded', function () {
    loadTestCode();

    const targetElement = document.querySelector('#cart-drawer');
    if (document.querySelector('body') && targetElement) {
        observerElm(targetElement, loadTestCode);
    }
// });