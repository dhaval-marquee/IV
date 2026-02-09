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
        if(jQuery('.hfe-nav-menu__layout-horizontal > ul > li a').eq(0).find('.hfe-menu-toggle')){
            // var getArrow = jQuery('.hfe-nav-menu__layout-horizontal > ul > li a').eq(0).find('.hfe-menu-toggle').detach();
            jQuery('.hfe-nav-menu__layout-horizontal > ul > li a').eq(0).html('Learn More');
            // jQuery('.hfe-nav-menu__layout-horizontal > ul > li a').eq(0).append(getArrow);
        }
        if(jQuery('.hfe-flyout-content.push ul li a').eq(0).find('.hfe-menu-toggle')){
            // var getArrow = jQuery('.hfe-flyout-content.push ul li a').eq(0).find('.hfe-menu-toggle').detach();
            jQuery('.hfe-flyout-content.push ul li a').eq(0).html('Learn More');
            // jQuery('.hfe-flyout-content.push ul li a').eq(0).append(getArrow);
        }
        jQuery('.hfe-nav-menu__layout-horizontal > ul > li').eq(7).remove();
        jQuery('.hfe-flyout-content.push ul.hfe-nav-menu > li').eq(7).remove();
        jQuery('.hfe-nav-menu__layout-horizontal > ul > li:last-child').after(`<li class="menu-item">
            <a href="https://www.alobariatrics.com/contact/" class="hfe-menu-item nav-btn">Request a Consultation</a>
        </li>`);
        jQuery('header .elementor-element .elementor-widget-container').eq(1).addClass('nav-menuWrapper')
        jQuery('header section .elementor-widget-image img').after(`<img alt="alobariatrics logo" class="blacklogo" src="https://www.alobariatrics.com/wp-content/uploads/2023/06/original-1.png">`);
        var mobileHTML = `<div class="mobile_logo">
            <a href="/">
                <img  alt="alobariatrics logo" src="https://www.alobariatrics.com/wp-content/uploads/2023/06/original-1.png">
            </a>
            </div>
            <div class="mobile_right">
                <a href="/call-us/" class="phoneImg">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1712324864/alobariatrics/phone_icon.png" alt="phone icon">
                </a>
                <a href="https://www.alobariatrics.com/contact/" class="hfe-menu-item nav-btn">Request a Consultation</a>
            </div>`;
        jQuery('header section > div.elementor-container > div').eq(2).after(mobileHTML);
        jQuery('header section > div.elementor-container > div').eq(2).removeClass('elementor-col-25');
        jQuery('header section[data-id="266b65b6"] .elementor-container > div').eq(0).after(mobileHTML);
        jQuery('header section[data-id="266b65b6"] .elementor-container > div').eq(0).removeClass('elementor-col-50');

        if(window.location.href.split('?')[0].split('#')[0] == 'https://www.alobariatrics.com/weight-loss-surgery-mexico/'){
            jQuery('.stickyHeader_iv header .nav-btn').attr('href','#form_section');
        }
    
        setTimeout(() => {
            if(jQuery('#form_section').length == 0) {
                jQuery('iframe[id*=frame-one]').closest('section').attr('id','form_section');
            }
        }, 2000);
    }
}

var jQisLoaded = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQisLoaded);
        loadTestCode();
    }
}, 100);