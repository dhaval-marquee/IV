function loadTestCode() {
    if(!jQuery('body').hasClass('stickyHeader_iv')) {
        jQuery('body').addClass('stickyHeader_iv');


        jQuery(window).scroll(function () {
            if (jQuery(window).scrollTop() >= 50) {
                jQuery('header').addClass('sticky');
            } else {
                jQuery('header').removeClass('sticky');
            }
        });
        jQuery('.hfe-nav-menu__layout-horizontal > ul > li a').eq(0).html('Learn More');
        jQuery('.hfe-flyout-content.push ul li a').eq(0).html('Learn More');
        jQuery('.hfe-nav-menu__layout-horizontal > ul > li').eq(7).remove();
        jQuery('.hfe-flyout-content.push ul.hfe-nav-menu > li').eq(7).remove();
        jQuery('.hfe-nav-menu__layout-horizontal > ul > li:last-child').after(`<li class="menu-item">
            <a href="#form_section" class="hfe-menu-item nav-btn">Request a consultation</a>
        </li>`);

        jQuery('header .elementor-element .elementor-widget-container').eq(1).addClass('nav-menuWrapper')

        jQuery('header section .elementor-widget-image img').after(`<img alt="alobariatrics logo" class="blacklogo" src="https://www.alobariatrics.com/wp-content/uploads/2023/06/original-1.png">`);

        jQuery('header section > div.elementor-container > div').eq(2).after(`<div class="mobile_logo">
        <a href="/">
            <img  alt="alobariatrics logo" src="https://www.alobariatrics.com/wp-content/uploads/2023/06/original-1.png">
        </a>
        </div>
        <div class="mobile_right">
            <a href="/call-us/" class="phoneImg">
                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1712324864/alobariatrics/phone_icon.png"
                    alt="phone icon">
            </a>
            <a href="#form_section" class="hfe-menu-item nav-btn">Request a consultation</a>
        </div>
        `);
        jQuery('header section > div.elementor-container > div').eq(2).removeClass('elementor-col-25')
    
        
    }
}

loadTestCode();