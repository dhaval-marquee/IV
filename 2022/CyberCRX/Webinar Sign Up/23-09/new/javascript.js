function IVTestCode() {
    if (!$('body').hasClass('cybergrx_iv')) {
        $('body').addClass('cybergrx_iv');

        // Put your test code here
        $('.cybergrx_iv .img-canvas').before($('.cybergrx_iv .box-f-landing'));
        $('.cybergrx_iv .mod-banner.mod-banner-l .content-banner h2 strong').html('The <span>Four Pillars</span> of a Scalable Third-Party Cyber Risk Management Program');
        $('.cybergrx_iv .mod-banner.mod-banner-l .content-banner h2 + h2').html('September 20th, 2022 @ 2pm MST');
        $('.cybergrx_iv .mod-banner.mod-banner-l .content-banner h2 + h2').after('<p>Only 16% of organizations say they effectively manage third-party risks.</p>');
        $('.cybergrx_iv .content-banner  h2 + p').after($('.f-landing-right .style-ul-check div:nth-child(2)'));
        $('.cybergrx_iv .mod-banner.mod-banner-l .content-banner div p').html('Join us to learn:');
        $('.cybergrx_iv .mod-banner.mod-banner-l .content-banner div ul li:nth-child(1)').html('How to implement an effective and scalable TPCRM program');
        $('.cybergrx_iv .mod-banner.mod-banner-l .content-banner div ul li:nth-child(2)').html('Strategies to determine governance of your TPCRM program for maximum success');
        $('.cybergrx_iv .mod-banner.mod-banner-l .content-banner div ul li:nth-child(3)').html('How to overcome common challenges and internal roadblocks when building your program');
        $('.cybergrx_iv .mod-banner.mod-banner-l .content-banner h2 strong').html('The <span>Four Pillars</span> of a Scalable Third-Party Cyber Risk Management Program');
        $('.cybergrx_iv .mod-banner.mod-banner-l .content-banner').after(`<div class="speakers_section">
            <h3><strong>Speakers</strong></h3>
            <ul>
                <li>
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1663180227/CyberGRX/Webinar_Sign_Up/Gideon.png" alt="Gideon Ramussen">
                    <h4><strong>Gideon Ramussen</strong></h4>
                    <p>Virtual CSO,LLC</p>
                </li>
                <li>
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1663180208/CyberGRX/Webinar_Sign_Up/Shay_Colson.png" alt="Shay Colson">
                    <h4><strong>Shay Colson</strong></h4>
                    <p>Managing partner <br>Cyber Diligence</p>
                </li>
                <li>
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1663180223/CyberGRX/Webinar_Sign_Up/Gary_Phipps.png" alt="Gary Phipps">
                    <h4><strong>Gary Phipps</strong></h4>
                    <p>VP of Solutions Architecture <br>CyberGRX</p>
                </li>
            </ul>
        </div>`);
    }
}

function initCode() {
    try {
        // PG Cookies Add
        var cookieName = 'cybergrx_iv';
        var cookieValue = '1';
        var myDate = new Date();
        myDate.setDate(myDate.getDate() + 30);
        document.cookie = cookieName +"=" + cookieValue + ";expires=" + myDate;
        // END PG Cookies Add

        IVTestCode();

    } catch(ex) {

    } finally {}
}


// Load code just for desktop 
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
// Load code just for desktop over