function loadTestCode() {
    if (!jQuery('body').hasClass('submenu_iv')) {
        jQuery('body').addClass('submenu_iv');

        jQuery('.submenu_iv .header-main ul.oxy-nav-menu-list > li.menu-item-449').before(jQuery('.header-main ul.oxy-nav-menu-list ul > li.menu-item-568'));
        jQuery('.submenu_iv ul#menu-main li.menu-item-86').after(jQuery('ul li#menu-item-568'));
    }
}

var loadTest = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(loadTest);
        loadTestCode();
    } 
}, 100);
