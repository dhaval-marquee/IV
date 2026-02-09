function initCode() {
    if (!jQuery('body').hasClass('iv_homepage')) {
        jQuery('body').addClass('iv_homepage');
        
        // Put your test code here
        console.log('iv_homepage');

        jQuery('.iv_homepage #Top_bar .menu_wrapper').after(`
            <div class="call_text_header">
                <div>
                    <p class="text-center"><b>Call or Text</b></p>
                    <p><b>Arizona:</b> <span class="dummy_link">(602) 677-6058</span></p>
                    <p><b>Florida:</b> <span class="dummy_link">(305) 458-5118</span></p>
                </div>
                <a href="https://mobileivnurses.com/schedule-online/" class="header_button">Schedule Now</a>
            </div>
        `);

        jQuery('.sections_group').before(`<div class="hero_section">
            <div class="container">
                <div class="hero_content">
                    <div class="hero_left">
                        <h1>Feel Better <span>Faster</span></h1>
                        <p>Fast and easy Mobile IV therapy when you&nbsp;need it, where you need it</p>
                        <a href="https://mobileivnurses.com/schedule-online/">Schedule Now</a>
                    </div>
                    <div class="hero_right">
                        <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1657802446/mobileIVnurses/home-page/Healthy_Couple_1228-Edit_HR_2x.jpg" alt="Doctor with patient family">
                    </div>
                </div>
            </div>
        </div>`);

        jQuery('.iv_homepage .entry-content > div > div:nth-child(2) + div').addClass('work_section');

         var count = 0;
        jQuery('.iv_homepage .work_section .mcb-wrap-inner .column_how_it_works').each(function(){

            count++;

            if (count == 3) {
                jQuery(this).find('h4').text('Feel Better Faster');
                jQuery(this).find('.desc').html('You\'ll feel rejuvenated and revived <br> almost instantly!');
            }
            if (count == 4) {
                jQuery(this).remove();
            }

            jQuery(this).addClass('one-third').removeClass('one-fourth');
            
        });
    }
}


try {
    // PG Cookies Add
    var cookieName = 'iv_homepage';
    var cookieValue = '1';
    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 30);
    document.cookie = cookieName +"=" + cookieValue + ";expires=" + myDate;
    // END PG Cookies Add

    // Load code just for Desktop 
    if (window.matchMedia("(min-width: 992px)").matches) {

        initCode();

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

} catch(ex) {

} finally {
    document.getElementsByTagName("body")[0].style.visibility = "visible";
}