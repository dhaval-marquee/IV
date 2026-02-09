function loadTestCode() {
    var bodyClass = '.aura_pro_x2_iv';
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('aura_pro_x2_iv')) {
        bodyEle.classList.add('aura_pro_x2_iv');
        var heroTitle = document.querySelector(bodyClass + ' .hero-bottom-lander__hide2');
        var heroHighlights = document.querySelector(bodyClass + ' .hero-bottom-lander__hide');
        heroTitle.insertAdjacentElement('afterend', heroHighlights);
        var iconListBottomLander = document.querySelector(bodyClass + ' .icon-list-bottom-lander__hide');
        var cloneMarketing = iconListBottomLander.querySelector('.clone-marketing');
        var heroHighlightsHr = heroHighlights.querySelector('.hero-highlights__hr');
        cloneMarketing.insertAdjacentElement('beforebegin', heroHighlightsHr);
        var heroBottomLander = document.querySelector(bodyClass + ' .hero-bottom-lander');
        heroBottomLander.insertAdjacentElement('afterend', iconListBottomLander);
        iconListBottomLander.querySelector('.col-12').classList.remove('col-xl-10');
        document.querySelector(bodyClass + ' .icon-capacity__padding').insertAdjacentHTML('afterend', `
        <div class="select-your-mac">
            <label for="SelectYourMac">Select Your Mac:</label>
            <div class="select-your-mac-wrap">
                <div class="owc-select">
                    <select class="owc-select__select" id="SelectYourMac">
                        <option value="macbook-pro-13-15" selected>MacBook Pro with Retina 13" & 15" (late 2013 - 2015)</option>
                        <option value="macbook-air-11-13">Mac Book Air 11" & 13" (Mid 2013 - 2017)</option>
                        <option value="mac-pro">Mac Pro (Late 2013 - 2019)</option>
                        <option value="mac-mini">Mac Mini (Late 2014)</option>
                        <option value="imac-27">iMac 27" (Late 2013 - 2019)</option>
                        <option value="imac-21.5">iMac 21.5" (Late 2013 - 2019)</option>
                    </select>
                </div>
                <button type="button" class="owc-button-full-width owc-button__height_40 product-specials__btn" id="shopNowButton">Shop Now</button>
            </div>
        </div>`);
        document.querySelector('.show-for-mobile h1').insertAdjacentHTML('afterend', `<h2>Your Mac. More Space. Twice as Fast.</h2>`);

        // Define URLs for different Mac models
        var macUrls = {
            "macbook-pro-13-15": "https://eshop.macsales.com/item/OWC/S3DAPT4MB05/",
            "macbook-air-11-13": "https://eshop.macsales.com/item/OWC/S3DAPT4MB05/",
            "mac-pro": "https://eshop.macsales.com/item/OWC/S3DAPT4MP05P/",
            "mac-mini": "https://eshop.macsales.com/item/OWC/S3DAPT4MB05/",
            "imac-27": "https://eshop.macsales.com/item/OWC/S3DAPT4MA05K/",
            "imac-21.5": "https://eshop.macsales.com/item/OWC/S3DAPT4MA05K/"
        };

        // Get the elements
        var macSelection = document.getElementById('SelectYourMac');
        var shopNowButton = document.getElementById('shopNowButton');

        // Add a click event listener to the "Shop Now" button
        shopNowButton.addEventListener('click', function () {
            // Get the selected Mac model value
            var selectedMac = macSelection.value;
            // Get the URL based on the selected Mac
            var selectedUrl = macUrls[selectedMac];
            // Navigate to the selected URL
            window.location.href = selectedUrl;
        });



        var current_pageurl = window.location.href.toLowerCase();
        if (current_pageurl.indexOf('https://eshop.macsales.com/shop/ssd/owc/aura-pro-x') >= 0) {
            document.querySelector('#pdp-options-container').insertAdjacentHTML('afterend', ` <h4 class="pdp-options__sub-title" style="margin-bottom: 0">SSD Upgrade Kit with SSD, Tools &amp; Transfer Enclosure</h4>
            <div class="pdp-options__button-container">
                <div class="pdp-options__tooltip-block">
                <a id="option_OWCS3DAPT4MB05K_1" class="pdp-options__button" data-sku="OWCS3DAPT4MB05K"
                    data-url="https://eshop.macsales.com/item/OWC/S3DAPT4MB05K/"
                    href="https://eshop.macsales.com/item/OWC/S3DAPT4MB05K/">
                    480GB
                </a>
                <div class="pdp-options__tooltip">
                    <span class="pdp-options__tooltip-caret"><img alt="arrow up"
                        src="https://media.owcnow.com/image/upload/q_auto,f_auto/pdp-options-tip-arrow-up" height="16"></span>
                    <span class="pdp-options__tooltip-top">480GB</span>
                    <span class="pdp-options__tooltip-strike-price">$144.99</span><span
                    class="pdp-options__tooltip-price">$124.99</span>
                    <span class="pdp-options__tooltip-copy"><img
                        src="https://media.owcnow.com/image/upload/PDP-check-round-green-v2" alt="in stock"
                        class="pdp-options__tooltip-icon"><span class="pdp-cart__ships-green">In Stock: Ships Same
                        Day!</span></span>
                </div>
                </div>
                <div class="pdp-options__tooltip-block">
                <a id="option_OWCS3DAPT4MB10K_1" class="pdp-options__button" data-sku="OWCS3DAPT4MB10K"
                    data-url="https://eshop.macsales.com/item/OWC/S3DAPT4MB10K/"
                    href="https://eshop.macsales.com/item/OWC/S3DAPT4MB10K/">
                    1TB
                </a>
                <div class="pdp-options__tooltip">
                    <span class="pdp-options__tooltip-caret"><img alt="arrow up"
                        src="https://media.owcnow.com/image/upload/q_auto,f_auto/pdp-options-tip-arrow-up" height="16"></span>
                    <span class="pdp-options__tooltip-top">1TB</span>
                    <span class="pdp-options__tooltip-strike-price">$184.99</span><span
                    class="pdp-options__tooltip-price">$149.99</span>
                    <span class="pdp-options__tooltip-copy"><img
                        src="https://media.owcnow.com/image/upload/PDP-check-round-green-v2" alt="in stock"
                        class="pdp-options__tooltip-icon"><span class="pdp-cart__ships-green">In Stock: Ships Same
                        Day!</span></span>
                </div>
                </div>
                <div class="pdp-options__tooltip-block">
                <a id="option_OWCS3DAPT4MB20K_1" class="pdp-options__button" data-sku="OWCS3DAPT4MB20K"
                    data-url="https://eshop.macsales.com/item/OWC/S3DAPT4MB20K/"
                    href="https://eshop.macsales.com/item/OWC/S3DAPT4MB20K/">
                    2TB
                </a>
                <div class="pdp-options__tooltip">
                    <span class="pdp-options__tooltip-caret"><img alt="arrow up"
                        src="https://media.owcnow.com/image/upload/q_auto,f_auto/pdp-options-tip-arrow-up" height="16"></span>
                    <span class="pdp-options__tooltip-top">2TB</span>
                    <span class="pdp-options__tooltip-strike-price">$269.99</span><span
                    class="pdp-options__tooltip-price">$239.99</span>
                    <span class="pdp-options__tooltip-copy"><img
                        src="https://media.owcnow.com/image/upload/PDP-check-round-green-v2" alt="in stock"
                        class="pdp-options__tooltip-icon"><span class="pdp-cart__ships-green">In Stock: Ships Same
                        Day!</span></span>
                </div>
                </div>
            </div>`);

            // document.querySelector('#pdp-options-container').innerHTML = `<h4 class="pdp-options__sub-title" style="margin-bottom: 0">SSD Upgrade Kit with SSD, Tools &amp; Transfer Enclosure</h4>
            // <div class="pdp-options__button-container">
            //   <div class="pdp-options__tooltip-block">
            //     <a id="option_OWCS3DAPT4MB05K_1" class="pdp-options__button" data-sku="OWCS3DAPT4MB05K"
            //       data-url="https://eshop.macsales.com/item/OWC/S3DAPT4MB05K/"
            //       href="https://eshop.macsales.com/item/OWC/S3DAPT4MB05K/">
            //       480GB
            //     </a>
            //     <div class="pdp-options__tooltip">
            //       <span class="pdp-options__tooltip-caret"><img alt="arrow up"
            //           src="https://media.owcnow.com/image/upload/q_auto,f_auto/pdp-options-tip-arrow-up" height="16"></span>
            //       <span class="pdp-options__tooltip-top">480GB</span>
            //       <span class="pdp-options__tooltip-strike-price">$144.99</span><span
            //         class="pdp-options__tooltip-price">$124.99</span>
            //       <span class="pdp-options__tooltip-copy"><img
            //           src="https://media.owcnow.com/image/upload/PDP-check-round-green-v2" alt="in stock"
            //           class="pdp-options__tooltip-icon"><span class="pdp-cart__ships-green">In Stock: Ships Same
            //           Day!</span></span>
            //     </div>
            //   </div>
            //   <div class="pdp-options__tooltip-block">
            //     <a id="option_OWCS3DAPT4MB10K_1" class="pdp-options__button" data-sku="OWCS3DAPT4MB10K"
            //       data-url="https://eshop.macsales.com/item/OWC/S3DAPT4MB10K/"
            //       href="https://eshop.macsales.com/item/OWC/S3DAPT4MB10K/">
            //       1TB
            //     </a>
            //     <div class="pdp-options__tooltip">
            //       <span class="pdp-options__tooltip-caret"><img alt="arrow up"
            //           src="https://media.owcnow.com/image/upload/q_auto,f_auto/pdp-options-tip-arrow-up" height="16"></span>
            //       <span class="pdp-options__tooltip-top">1TB</span>
            //       <span class="pdp-options__tooltip-strike-price">$184.99</span><span
            //         class="pdp-options__tooltip-price">$149.99</span>
            //       <span class="pdp-options__tooltip-copy"><img
            //           src="https://media.owcnow.com/image/upload/PDP-check-round-green-v2" alt="in stock"
            //           class="pdp-options__tooltip-icon"><span class="pdp-cart__ships-green">In Stock: Ships Same
            //           Day!</span></span>
            //     </div>
            //   </div>
            //   <div class="pdp-options__tooltip-block">
            //     <a id="option_OWCS3DAPT4MB20K_1" class="pdp-options__button" data-sku="OWCS3DAPT4MB20K"
            //       data-url="https://eshop.macsales.com/item/OWC/S3DAPT4MB20K/"
            //       href="https://eshop.macsales.com/item/OWC/S3DAPT4MB20K/">
            //       2TB
            //     </a>
            //     <div class="pdp-options__tooltip">
            //       <span class="pdp-options__tooltip-caret"><img alt="arrow up"
            //           src="https://media.owcnow.com/image/upload/q_auto,f_auto/pdp-options-tip-arrow-up" height="16"></span>
            //       <span class="pdp-options__tooltip-top">2TB</span>
            //       <span class="pdp-options__tooltip-strike-price">$269.99</span><span
            //         class="pdp-options__tooltip-price">$239.99</span>
            //       <span class="pdp-options__tooltip-copy"><img
            //           src="https://media.owcnow.com/image/upload/PDP-check-round-green-v2" alt="in stock"
            //           class="pdp-options__tooltip-icon"><span class="pdp-cart__ships-green">In Stock: Ships Same
            //           Day!</span></span>
            //     </div>
            //   </div>
            // </div>`;

        } else if (current_pageurl.indexOf('/lectron-level-2-tesla-charger-240v-40-amp-nema-14-50-plug-16-ft-extension-cord-portable-electric-car-charger-for-tesla-compatible-with-all-tesla-models-x-y-3-s') >= 0) {
            document.querySelector('.product__tab-content').insertAdjacentHTML('afterend', `
                <div id="specs" class="product__tab-content">
                    <dl class="dl-horizontal">
                        <dt>Compatibility:</dt>
                        <dd>XYZ</dd>
                        <dt>Rated power:</dt>
                        <dd>XYZ</dd>
                        <dt>Output:</dt>
                        <dd>XYZ</dd>
                        <dt>Current:</dt>
                        <dd>XYZ</dd>
                        <dt>Plug type:</dt>
                        <dd>XYZ</dd>
                        <dt>Cord length:</dt>
                        <dd>XYZ</dd>
                        <dt>Dimensions:</dt>
                        <dd>XYZ</dd>
                        <dt>Weight:</dt>
                        <dd>XYZ</dd>
                        <dt>Certifications:</dt>
                        <dd>XYZ</dd>
                    </dl>
                </div>
                <div id="what_you_receive" class="product__tab-content">
                    <ul>
                        <li>1 x Level 2 Tesla Charger</li>
                        <li>1 x XYZ</li>
                        <li>1 x XYZ</li>
                    </ul>
                </div>
            `);
        }


    }
}
loadTestCode();