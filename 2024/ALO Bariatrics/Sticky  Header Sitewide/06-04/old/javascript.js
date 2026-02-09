function loadTestCode() {
    if(!jQuery('body').hasClass('stickyHeader_iv')) {
        jQuery('body').addClass('stickyHeader_iv');

        // Load New Form
        // jQuery('iframe[id*=frame-one]').before('<a name="form1434638130" id="formAnchor1434638130"></a>');
        // jQuery('<script src="https://fs22.formsite.com/include/form/embedManager.js?1434638130"></script>').appendTo('head');
        // EmbedManager.embed({
        //     key: "https://fs22.formsite.com/res/showFormEmbed?EParam=m_OmK8apOTAr4W0_05YWBIpEHaDzsK4N6i5F2Wdvk90&1434638130",
        //     width: "100%"
        // });

        // Hide old form
        // jQuery('#formAnchor1434638130').nextAll().remove();

        // if(jQuery('#contact').length == 0) {
        //     jQuery('iframe[id*=frame-one]').parent().attr('id','contact');
        // }

        // jQuery('a[href="#formAnchor1924798660"]').each(function(){
        //     jQuery(this).attr('href','#contact');
        // });

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

        jQuery('header section > div').eq(2).append(`
        <ul class="mobile_manu">
            <li>
                <a href="/">
                <img width="150" height="150" alt="" data-srcset="https://www.alobariatrics.com/wp-content/uploads/2023/06/original-150x150.png.webp 150w, https://www.alobariatrics.com/wp-content/uploads/2023/06/original.png 200w" data-src="https://www.alobariatrics.com/wp-content/uploads/2023/06/original-150x150.png" data-sizes="(max-width: 150px) 100vw, 150px" class="attachment-thumbnail size-thumbnail wp-image-156 lazyloaded" src="https://www.alobariatrics.com/wp-content/uploads/2023/06/original-150x150.png" sizes="(max-width: 150px) 100vw, 150px" srcset="https://www.alobariatrics.com/wp-content/uploads/2023/06/original-150x150.png.webp 150w, https://www.alobariatrics.com/wp-content/uploads/2023/06/original.png 200w">
                </a>
            </li>
            <li>
                <a href="/" class="phoneImg">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1712324864/alobariatrics/phone_icon.png" alt="phone icon">
                </a>
            </li>
            <li>
                <a href="#form_section" class="hfe-menu-item nav-btn">Request a consultation</a>
            </li>
        </ul>
    `);
    
        
    }
}

loadTestCode();
// var formLoaded = setInterval(() => {
//     if (jQuery('iframe[id*=frame-one]').length > 0) {
//         clearInterval(formLoaded);
//     }
// }, 100);