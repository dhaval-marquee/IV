function loadTestCode() {
    if (!$('body').hasClass('cybergrx_test')) {
        $('body').addClass('cybergrx_test');
      
        // Put your test code here
        $('cybergrx_test .cybergrx_test .img-canvas').before($('.cybergrx_test .box-f-landing'));
        $('cybergrx_test .mod-banner.mod-banner-l .content-banner p + p').after($('.f-landing-right .style-ul-check div:nth-child(2)'));
        $('cybergrx_test .mod-banner.mod-banner-l .content-banner h2 + p').html('<strong>September 20th, 2022 @ 2pm MST</strong>');
        $('cybergrx_test .mod-banner.mod-banner-l .content-banner h2 + p + p').html('Only 16% of organizations say they effectively manage third-party risks.');
        $('cybergrx_test .mod-banner.mod-banner-l .content-banner div p').html('Join us to learn:');
        $('cybergrx_test .mod-banner.mod-banner-l .content-banner div ul li:nth-child(1)').html('How to implement an effective and scalable TPCRM program');
        $('cybergrx_test .mod-banner.mod-banner-l .content-banner div ul li:nth-child(2)').html('Strategies to determine governance of your TPCRM program for maximum success');
        $('cybergrx_test .mod-banner.mod-banner-l .content-banner div ul li:nth-child(3)').html('How to overcome common challenges and internal roadblocks when building your program');
        $('cybergrx_test .mod-banner.mod-banner-l .content-banner h2 strong').html('The <span>Four Pillars</span> of a Scalable Third-Party Cyber Risk Management Program');
        
        $('cybergrx_test #hs_cos_wrapper_widget_30745387652').after(`<div class="speakers_sectio">
            <h3><strong>Speakers</strong></h3>
            <ul>
                <li>
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1663160556/CyberGRX/Webinar_Sign_Up/Gideon.png" alt="Gideon Ramussen">
                    <div>
                        <h4><strong>Gideon Ramussen</strong></h4>
                        <p>Virtual CSO,LLC</p>
                    </div>
                </li>
                <li>
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1663160556/CyberGRX/Webinar_Sign_Up/Shay.png" alt="Shay Colson">
                    <div>
                        <h4><strong>Shay Colson</strong></h4>
                        <p>Managing partner <br> Cyber Diligence</p>
                    </div>
                </li>
                <li>
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1663160556/CyberGRX/Webinar_Sign_Up/Gary.png" alt="Gary Phipps">
                    <div>
                        <h4><strong>Gary Phipps</strong></h4>
                        <p>VP of Solutions Architecture <br>CyberGRX</p>
                    </div>
                </li>
            </ul>
        </div>`);
    }
}


try {
    // PG Cookies Add
    var cookieName = 'cybergrx_test';
    var cookieValue = '1';
    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 30);
    document.cookie = cookieName +"=" + cookieValue + ";expires=" + myDate;
    // END PG Cookies Add

    loadTestCode();

} catch(ex) {

} finally {
    document.getElementsByTagName("body")[0].style.visibility = "visible";
}

