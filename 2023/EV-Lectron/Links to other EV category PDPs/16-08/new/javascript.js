var TeslaChargerPage = [
    "lectron-level-2-charger-16a-32a-with-modular-plug-nema-5-15-14-50-portable-charger-compatible-with-tesla-model-s-model-x-model-3-and-model-y-1",
    "lectron-v-box-48a-home-charging-station-for-tesla-level-2-tesla-charger-with-nema-14-50-plug-hardwired",
    "lectron-level-1-tesla-charger-110v-15-amp-nema-5-15-plug-16-ft-extension-cord-portable-electric-car-charger-for-tesla",
    "lectron-level-2-tesla-charger-240v-40-amp-nema-14-50-plug-16-ft-extension-cord-portable-electric-car-charger-for-tesla-compatible-with-all-tesla-models-x-y-3-s",
];

var NonTeslaChargerPage = [
    "lectron-level-1-ev-charger-with-nema-5-15-plug-15-amp-j1772-electric-car-charger",
    "lectron-portable-electric-car-charger-16a",
    "lectron-level-1-level-2-portable-j1772-ev-charger-16-amp-32-amp-with-dual-charging-plugs-nema-5-15-14-50-compatible-with-all-j1772-evs-white",
    "lectron-level-1-level-2-ev-charger-12-amp-40-amp-with-dual-charging-plugs-nema-5-15-14-50-portable-electric-car-charger-compatible-with-all-j1772-evs-black",
    "lectron-nema-14-50-level-2-ev-charger-240v-40-amp-j1772-charger-for-j1772-evs",
    "lectron-240v-48a-electric-vehicle-ev-charging-station",
    "lectron-portable-electric-car-charger-40a",
    "lectron-portable-electric-car-charger-32a",
    "lectron-nema-14-50-level-2-ev-charger-240v-32-amp-with-18-ft-extension-cord-j1772-cable-for-j1772-evs",
    "lectron-32-amp-level-2-ev-charging-station"
];

var page = window.location.href.split("?")[0].split("#")[0];

function loadTestCode() {
    var bodyEle = document.querySelector('body');
    // if (!bodyEle.classList.contains('evCategoryTest')) {
    //     bodyEle.classList.add('evCategoryTest');
        
        
        // if (page.contains(TeslaChargerPage) > -1) {
        if (TeslaChargerPage.some(url => page.includes(url))) {
            console.log('teslaaaaaa')
            document.querySelector('.product-main .product-details > div.product-block--description').insertAdjacentHTML('beforebegin','<p class= "evCategory_link"> Were you looking for a Non-Tesla charger? <a href="https://ev-lectron.com/collections/ev-chargers">See Non-Tesla Chargers <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg> </a></p>');

        }
        // if (page.contains(NonTeslaChargerPage) > -1) {
        if (NonTeslaChargerPage.some(url => page.includes(url))) {
            console.log('non teslaaaaaa')

            document.querySelector('.product-main .product-details > div.product-block--description').insertAdjacentHTML('beforebegin','<p class= "evCategory_link"> Were you looking for a Tesla charger? <a href="https://ev-lectron.com/collections/tesla-chargers">See Tesla Chargers <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg> </a></p>');
        }
    // }
}
loadTestCode();