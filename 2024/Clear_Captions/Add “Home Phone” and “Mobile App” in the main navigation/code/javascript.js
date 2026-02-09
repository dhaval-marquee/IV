function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-navigation')) {
        document.querySelector('body').classList.add('iv-navigation');
        
        const newMenu = `
            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-arrow-none"><a href="/how-it-works/home-phone/">Home Phone</a></li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-arrow-none"><a href="/how-it-works/mobile-app/">Mobile App</a></li>
        `;

        document.querySelector('.iv-navigation header .header-nav .menu').insertAdjacentHTML('beforeend', newMenu);
        document.querySelector('.iv-navigation header #menu-mobile-menu').insertAdjacentHTML('beforeend', newMenu);

    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);