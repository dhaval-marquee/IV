function initTest () {
    function createComplementarySection(productID) {
        const complementarySection = `
            <product-recommendations class="block" product="${productID}" intent="complementary">
                <div class="complementary-products">
                    <div class="complementary-products__header">
                        <p class="h5">Pairs well with</p>
                    </div>
                    <div class="complementary-products__product-list"></div>
                </div>
            </product-recommendations>
        `;
        jQuery('.product-info__block-item:last-child').append(complementarySection);
    }

    function createProductCard() {
        const productCard = `
            <div class="horizontal-product-card" id="puresonaIV">
                <a href="/products/puresona" class="horizontal-product-card__figure" data-instant>
                    <img src="//mdfinstruments.com/cdn/shop/products/mdf-stethoscope-puresona-single-use-diaphragms.jpg?v=1743701112&width=900" alt="Puresona® Single-Use Diaphragms" width="2480" height="2480" loading="lazy" sizes="100px" class="horizontal-product-card__image">
                </a>
                <div class="horizontal-product-card__info">
                    <div class="v-stack gap-1 justify-items-start">
                        <a href="/products/puresona" class="product-title h6" data-instant>Puresona® Single-Use Diaphragms</a>
                        <price-list class="price-list">
                            <sale-price class="h6 text-subdued">
                                <span class="sr-only">Sale price</span>
                                $13.99
                            </sale-price>
                        </price-list>
                    </div>
                    <product-form>
                        <form method="post" action="/cart/add" id="product_form_5567673729189" class="shopify-product-form" enctype="multipart/form-data">
                            <input type="hidden" name="form_type" value="product">
                            <input type="hidden" name="utf8" value="✓">
                            <input type="hidden" name="id" value="40705026883749">
                            <input type="hidden" name="quantity" value="1">
                            <input type="hidden" name="on_success" value="force_open_drawer">
                            <button type="submit" class="@narrow:horizontal-product-card__button link">Add to cart</button>
                            <button type="submit" class="@large:horizontal-product-card__button button button--outline button--subdued">Add to cart</button>
                            <input type="hidden" name="product-id" value="5567673729189">
                            <input type="hidden" name="section-id" value="template--24211013009778__main">
                        </form>
                    </product-form>
                </div>
            </div>
        `;
        jQuery('.product-info__block-item .complementary-products__product-list').append(productCard);
    }

    function pairsWellWith() {
        const $body = jQuery('body');

        if ($body.hasClass('pairs_iv')) return;
        $body.addClass('pairs_iv');

        if (jQuery('#puresonaIV').length > 0) return;

        
        // This is not working as control removes the section if it is empty always
        // const productID = window?.ShopifyAnalytics?.meta?.product?.id || "";
        // if (jQuery('.product-info__block-item .complementary-products').length === 0) {
        //     createComplementarySection(productID);
        // }

        createProductCard();
    }

    let attempts = 0;
    const maxAttempts = 50;
    const interval = setInterval(() => {
        if (typeof jQuery !== 'undefined') {
            const isReady = jQuery('.product-info__block-item .complementary-products__product-list').length > 0;
            if (isReady || attempts >= maxAttempts) {
                clearInterval(interval);
                pairsWellWith();
            }
        }
        attempts++;
    }, 100);
}

initTest();