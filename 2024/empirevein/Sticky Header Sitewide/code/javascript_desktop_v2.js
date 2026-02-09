function loadTestCode() {
    if(!jQuery('body').hasClass('stickyHeader_iv')) {
        jQuery('body').addClass('stickyHeader_iv').addClass('stickyHeader_iv_v2');

        function navDesktopCode() {
            var checkElement = setInterval(() => {
                if(jQuery('#desktop-mainnav .bookfree-link a').length > 0) {
                    clearInterval(checkElement);
                    jQuery('#desktop-mainnav').prepend(`<a class="navbar-brand md d-none d-md-block" href="https://empirevein.com/en" title="Empire Vein Specialists">
                        <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/empirevein/logo_evs_1.png" alt="Empire Vein Specialists logo" alt="Empire Vein Specialists logo" class="logo md whiteLogo"></a>`);
                    jQuery('#desktop-mainnav .nav-item-974').after(jQuery('#desktop-mainnav .bookfree-link'));
                    jQuery('#desktop-mainnav .bookfree-link a').parent().html(`<div class="navaction-appt d-none d-md-block" style="display: block !important;">
                        <a href="/book-online/" class="coverlink">Book Free Appointment</a>
                        <i class="fa-solid fa-calendar-days"></i>
                    Book Appointment Now
                        <div class="small">Free 15 minute screening</div>
                    </div>`);
                }
            }, 100);
        }

        function navMobileMenu() {
            var checkElementMobile = setInterval(() => {
                if(jQuery('header #nav-main .container .header-actions').length > 0) {
                    clearInterval(checkElementMobile);
                    jQuery('header #nav-main a.d-md-none').before(jQuery('body #nav-main .menu-togglebtn'));
                    jQuery('header #nav-main .navaction-tel a').append(`<img src='//res.cloudinary.com/ignite-visibility/image/upload/f_auto/empirevein/phone_icon.png' alt="phone icon">`);
                    jQuery('header #nav-main .container .header-actions').append(` <a href="/book-online/" class="nav-btn">Get a Free Screening</a>`);
                }
            }, 100);
        }

        // Load code just for Desktop 
        if (window.matchMedia("(min-width: 992px)").matches) {
            navDesktopCode();
            window.addEventListener('resize', function(event) {
                if (window.matchMedia("(max-width: 991.98px)").matches) {
                    location.reload();
                }
            }, true);
        } else {
            window.addEventListener('resize', function(event) {
                if (window.matchMedia("(min-width: 992px)").matches) {
                    location.reload();
                }
            }, true);
        }
        // Load code just for Desktop over


        // Load code just for mobile 
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            navMobileMenu();
            window.addEventListener('resize', function(event) {
                if (window.matchMedia("(min-width: 768px)").matches) {
                    location.reload();
                }
            }, true);
        } else {
            window.addEventListener('resize', function(event) {
                if (window.matchMedia("(max-width: 767.98px)").matches) {
                    location.reload();
                }
            }, true);
        }
        // Load code just for mobile over

        jQuery(window).scroll(function () {
            if (jQuery(window).scrollTop() >= 50) {
                jQuery('header').addClass('sticky');
            } else {
                jQuery('header').removeClass('sticky');
            }
        });
    }
}

var jQisLoaded = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQisLoaded);
        loadTestCode();
    }
}, 100);
