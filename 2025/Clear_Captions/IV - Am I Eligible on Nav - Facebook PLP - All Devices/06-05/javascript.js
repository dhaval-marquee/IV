function headerNumber() {
    if (!jQuery("body").hasClass("header-menu")) {
        jQuery("body").addClass("header-menu");

        document.querySelector("#form + div").id = "eligible"; 

        document.querySelectorAll(".fusion-builder-row ul li")[0].insertAdjacentHTML("beforebegin", `<li class="menu-item menu-item-type-custom menu-item-object-custom awb-menu__li awb-menu__main-li awb-menu__main-li_regular eligible-list">
            <a href="#" class="eligible">
                <span>Am I Eligible?</span>
            </a>
        </li>`);

        document.addEventListener('click', function(e) {
            // Check if the clicked element (or its parent) is the "Am I Eligible?" menu item
            const menuItem = e.target.closest('.fusion-builder-row ul li.eligible-list a');
        
            if (menuItem) {
                e.preventDefault();
        
                const targetSection = document.querySelector('#eligible');
                if (!targetSection) return;
        
                const header = document.querySelector('.header-menu .fusion-tb-header');
                const headerHeight = header ? header.offsetHeight : 0;
        
                // Calculate position of the target section
                let scrollToPosition = targetSection.offsetTop;
        
                // Adjust for fixed header on wider screens
                if (window.matchMedia("(min-width: 1025px)").matches) {
                    scrollToPosition -= headerHeight;
                }  else if (window.matchMedia("(max-width: 1024.98px)").matches) {
                    scrollToPosition -= headerHeight + 260;
                }  else if (window.matchMedia("(max-width: 767.98px)").matches) {
                    scrollToPosition -= headerHeight + 210;
                }
        
                // Scroll smoothly to the calculated position
                window.scrollTo({
                    top: scrollToPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
}

headerNumber();