function loadTestCode() {
    if (!document.querySelector('body').classList.contains('header-iv')) {
        document.querySelector('body').classList.add('header-iv');
       
        var header = setInterval(() => {

            if (document.querySelector('header') && !document.querySelector('.top-bar')) {
                clearInterval(header);

                // Tobbar

                const languageSelector = document.querySelector('#languageSelector')

                if(languageSelector){
                    languageSelector.closest('.amw-header__container-wrapper').classList.add('top-bar');
                }

                const topbarLeftmenu = `<ul class="topbar-menu">
                    <li><a href="/en_US/about-amway">Our Story</a></li>
                    <li><a href="/amperks">AmPerks</a></li>
                </ul>`;

                if(!document.querySelector('.topbar-menu')){
                    document.querySelector(`.amw-header__site-navigation`).insertAdjacentHTML('afterend', topbarLeftmenu);
                }

                if(!document.querySelector('.right-menu')){
                    document.querySelector('#languageSelectorForm').parentElement.parentElement.classList.add('right-menu');
                }

                const help = document.querySelector('.right-menu #helpMenu span')
                if(help.innerText=='Help'){    
                    help.innerText = 'Help Center'
                }

                const singin = document.querySelector('.right-menu #preferredUserName span')
                if(singin.innerText=='Sign In'){    
                    singin.innerText = 'Register'
                }

                var registerButton = document.querySelector('.header-iv .right-menu button.amw-sidenav__toggle');

                if (registerButton) {
                    registerButton.insertAdjacentHTML('afterend', `<a class="sign-in" href="/en_US/register"> <span>Register</span></a>`)
                }

                // Second Header

                const mainMenu = document.querySelector('.yCmsContentSlot .amw-header__navigation-item');

                if(!document.querySelector('.main-menu') && mainMenu){
                    mainMenu.parentElement.classList.add('main-menu');
                }

                const cartMenu = document.querySelector('.header-iv header [test-id="cart-button"] .icon-shopping-cart');

                if(!document.querySelector('.second_menu') && cartMenu){
                    document.querySelector('.header-iv header > div:nth-child(3)').classList.add('second_menu')
                    if(document.querySelector('.second_menu')){
                        document.querySelector('.header-iv header .amw-input__search-field').placeholder='Search product name, SKU, or brand.';
                        cartMenu.insertAdjacentHTML("afterbegin" , `<span class="cart-text">cart</span>`)

                    }
                }
                
                const singinLogo = `<div class="singin_logo"> 
                    <a href="https://www.amway.com/sso/prepare">
                        <span class="icon-users-circle user">
                            <span class="cart-text">Sign in</span>
                        </span>
                    </a>
                </div>`

                const singinMenu = document.querySelector('.header-iv header .second_menu>div>div:nth-child(2) .yCmsContentSlot > span');
                if(!document.querySelector('.singin_logo') && singinMenu){
                    singinMenu.insertAdjacentHTML('afterbegin' , singinLogo)
                }

                const searchBar = document.querySelector('.amw-input__search');
                if(searchBar){
                    searchBar.closest('.d-flex.align-items-center').classList.add('search-bar')
                }


                // Categories Bar
                const categoriesBar = `<div class="categories-bar">
                    <div class="amw-header__container ">
                        <nav>
                            <ul>
                                <li><a href="/c/010">Nutrition</a></li>
                                <li><a href="/c/040">Beauty</a></li>
                                <li><a href="/c/020">Personal Care</a></li>
                                <li><a href="/c/030">Home Goods</a></li>
                                <li><a href="/wellness-needs">Wellness Needs</a></li>
                                <li><a href="/solutions">Solution</a></li>
                                <li><a href="/en_US/special-offers">Special Offers</a></li>
                                <li><a href="/en_US/discover">Discover</a></li>
                                <li><a href="/en_US/start-a-business">Start a Business</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>`

                if(!document.querySelector('header .categories-bar')){
                    document.querySelector('header').insertAdjacentHTML("beforeend" , categoriesBar)
                }

                
                function adjustMainHeight() {
                    const headerHeight = document.querySelector('.amw-header').clientHeight;
                    const mainElement = document.querySelector('body main');
                    mainElement.style.paddingTop = `${headerHeight}px`;
                }
                window.addEventListener('resize', adjustMainHeight);
                adjustMainHeight();

            }
        }, 2000);

        var headerMobile = setInterval(() => {
            if (document.querySelector('.amw-sidenav[aria-label="Navigation menu"] .amw-sidenav__content')) {
                clearInterval(headerMobile);

                // Search text
                const searchPlac = document.querySelector('header.amw-header .amw-input__search-label input.amw-input__search-field')
                if(searchPlac){
                    document.querySelector('header.amw-header .amw-input__search-label input.amw-input__search-field').placeholder='Search product name, SKU, or brand.';
                }

                // Mobile Menu 
                const sidenavData = `<div class="amw-sidenav__content  pt-0 js-sidenav-content sidenav-mobile">
                    <ul class="sidenav-nav main-menu-mobile">
                        <li><a href="/c/010">Nutrition</a></li>
                        <li><a href="/c/040">Beauty</a></li>
                        <li><a href="/c/020">Personal Care</a></li>
                        <li><a href="/c/030">Home Goods</a></li>
                        <li><a href="/wellness-needs">Wellness Needs</a></li>
                        <li><a href="/solutions">Solution</a></li>
                        <li><a href="/en_US/special-offers">Special Offers</a></li>
                        <li><a href="/en_US/discover">Discover</a></li>
                        <li><a href="/en_US/start-a-business">Start a Business</a></li>
                    </ul>
                    <hr aria-hidden="true" class="amw-sidenav__divider">
                    <ul class="sidenav-nav second-menu-mobile">
                    <li><a href="/en_US/about-amway">Our Story</a></li>
                        <li><a href="/amperks">AmPerks</a></li>
                    </ul>
                    <hr aria-hidden="true" class="amw-sidenav__divider">
                    <ul class="sidenav-nav second-menu-mobile">
                        <li class="mobile-lang"></li>
                        <li><hr aria-hidden="true" class="amw-sidenav__divider"></li>
                        <li><a href="/en_US/support-center">Help Center</a></li>
                        <li><a href="/en_US/register">Register</a></li>
                    </ul>
                </div>`;

                const sideNav = document.querySelector('.amw-sidenav[aria-label*="Navigation menu"] .amw-sidenav__content')
                if(!document.querySelector('.sidenav-mobile') && sideNav){
                    sideNav.insertAdjacentHTML('beforebegin', sidenavData);
                }

                // Lang move
                const mobileLang = document.querySelector('.amw-sidenav[aria-label*="Navigation menu"] .amw-sidenav__content #locationSelect');
                const sideBarLang = document.querySelector('.sidenav-nav .mobile-lang');
                
                if (mobileLang && sideBarLang) {
                    sideBarLang.appendChild(mobileLang);
                }
            }
        }, 2000);

    }
}

loadTestCode();

let lastWidth = window.innerWidth;

window.addEventListener('resize', function() {
    let currentWidth = window.innerWidth;
    if ((lastWidth <= 1023 && currentWidth > 1023) || (lastWidth > 1023 && currentWidth <= 1023)) {
        location.reload();
    }
    lastWidth = currentWidth;
});
