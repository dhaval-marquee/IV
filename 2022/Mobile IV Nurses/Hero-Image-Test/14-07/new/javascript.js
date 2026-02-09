function SPZTestCode() {
    if (!jQuery('body').hasClass('iv_homepage')) {
        jQuery('body').addClass('iv_homepage');
        
        // Put your test code here
        console.log('iv_homepage');

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

    SPZTestCode();

} catch(ex) {

} finally {
    document.getElementsByTagName("body")[0].style.visibility = "visible";
}