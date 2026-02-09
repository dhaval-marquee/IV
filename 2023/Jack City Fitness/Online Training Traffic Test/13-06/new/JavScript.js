function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('menu_iv')) {
        bodyEle.classList.add('menu_iv');

        var HomeMenu = document.querySelector('.menu_iv #menu-main-menu #menu-item-11');
        HomeMenu.classList.add('mobile');
        HomeMenu.insertAdjacentElement('afterend', document.querySelector('.menu_iv #menu-main-menu #menu-item-8701'));

        var AboutSubMenu = document.querySelector('.menu_iv #menu-main-menu #menu-item-7754 .sub-menu');
        AboutSubMenu.insertAdjacentElement('afterbegin',document.querySelector('.menu_iv #menu-main-menu #menu-item-484'));
        AboutSubMenu.insertAdjacentElement('afterbegin', document.querySelector('.menu_iv #menu-main-menu #menu-item-483'));

        var ServicesMenu = document.querySelector('.menu_iv #menu-main-menu #menu-item-7755');
        ServicesMenu.insertAdjacentElement('afterend', document.querySelector('.menu_iv #menu-main-menu #menu-item-7754'));

        if(document.querySelectorAll('.menu_iv #menu-item-7754 .current-menu-item').length > 0) {
            document.querySelector('.menu_iv #menu-item-7754 .current-menu-item')?.closest('ul').closest('li').classList.add('current-menu-ancestor','current-menu-parent', 'current_page_parent', 'current_page_ancestor')
        }
    }
}
loadTestCode();