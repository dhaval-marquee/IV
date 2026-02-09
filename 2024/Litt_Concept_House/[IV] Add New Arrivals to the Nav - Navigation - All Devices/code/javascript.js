function loadTestCode() {
    if (!$('body').hasClass('navIV')) {
        $('body').addClass('navIV');
        
        // Put your test code here
        $('.header__menu.header__menu--1 .header__menu-items').prepend(`<div class="navbar-item header__item " data-navlink-handle="new-arrivals">
            <label for="mega-new-arrivals">
                <a href="/collections/whats-new" class="navbar-link header__link is-arrowless btnIV">New Arrivals</a>
            </label>
        </div>`);

        $('.mobile-menu__list').prepend(`<li class="mobile-menu__list-item" data-mobile-menu-navlink-handle="new-arrivals">
            <div class="mobile-menu__first-level has-no-submenu" data-mobile-menu-has-toggle="false">
                <input class="visually-hidden submenu__input" type="checkbox" id="mobile-submenu-new-arrivals">
                    <label class="submenu__label" for="mobile-submenu-new-arrivals">
                    <a class="mobile-menu__item btnIV" href="/collections/whats-new">New Arrivals</a>
                </label>
            </div>
        </li>`);
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && $('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);