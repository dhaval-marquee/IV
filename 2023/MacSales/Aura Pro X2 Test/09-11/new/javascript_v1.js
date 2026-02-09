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
            "macbook-pro-13-15":    "https://eshop.macsales.com/item/OWC/S3DAPT4MB05/",
            "macbook-air-11-13":    "https://eshop.macsales.com/item/OWC/S3DAPT4MB05/",
            "mac-pro":              "https://eshop.macsales.com/item/OWC/S3DAPT4MP05P/",
            "mac-mini":             "https://eshop.macsales.com/item/OWC/S3DAPT4MB05/",
            "imac-27":              "https://eshop.macsales.com/item/OWC/S3DAPT4MA05K/",
            "imac-21.5":            "https://eshop.macsales.com/item/OWC/S3DAPT4MA05K/"
        };

        // Get the elements
        var macSelection = document.getElementById('SelectYourMac');
        var shopNowButton = document.getElementById('shopNowButton');

        // Add a click event listener to the "Shop Now" button
        shopNowButton.addEventListener('click', function () {
            sessionStorage.setItem('auraProX2SubPage',macSelection.value);
            var selectedMac = macSelection.value;
            var selectedUrl = macUrls[selectedMac];
            window.location.href = selectedUrl;
        });
    }
}
loadTestCode();