function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-amenities')) {
        document.querySelector('body').classList.add('iv-amenities');

        // Header Amenities Menu added
        var amenitiesMenu = `<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-amenities"><a href="/fitness-equipment-and-gym-amenities/">Amenities</a></li>`;
        const desktopHomeMenu = document.querySelector(".menu-item-home");
        const mobileHomeMenu = document.querySelector("#menu-mobile-menu .menu-item-home");

        if(desktopHomeMenu){
            desktopHomeMenu.insertAdjacentHTML('afterend', amenitiesMenu);
        }
        if(mobileHomeMenu) {
            mobileHomeMenu.insertAdjacentHTML('afterend', amenitiesMenu);
        }

    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);