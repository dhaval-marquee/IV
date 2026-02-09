function loadTestCode() {
    if (!$('body').hasClass('cybergrx_test')) {
        $('body').addClass('cybergrx_test');
      
        // Put your test code here
        $('#main-content > section:first-of-type').addClass('hero_section');
        $('.cybergrx_test #main-content .table-banner-home .last-mb-none').removeClass('text-center');
        $('.cybergrx_test #main-content .table-banner-home .last-mb-none h1').html($('#main-content .table-banner-home .last-mb-none h1').html().replace('7','6'));
        $('.cybergrx_test #main-content .table-banner-home .last-mb-none h1 + h5').after('<img src="//res.cloudinary.com/ignite-visibility/image/upload/v1663581773/CyberGRX/blog_page/Caitlin.png" alt="CAITLIN GRUENBERG">');

        $('.cybergrx_test .inner-cont-body .space-dt-70').before('<h2 class="cyber_text">CyberGRX GDPR allows you determine whether you and your third parties are compliant by identifying any potential gaps and arming you with a prioritized mitigation strategy</h2>');

        $('.inner-cont-body .content-body p:nth-child(32)').after(`<div class="access_section">
            <div class="access_inner">
                <div class="left_part">
                    <h2>Get access to over <strong>200,000</strong> company risk profiles on our exchange - FREE for 7 Days
                    </h2>
                </div>
                <div class="right_part">
                    <a href="https://get.cybergrx.com/get-a-demo-a-single-step/">Click Here <br>For Access</a>
                </div>
            </div>
        </div>`);

        $('.inner-cont-body .content-body h3 ~ h3:nth-of-type(3)').before(`<div class="input_section">
            <div class="left_part">
                <h3>Is Your Business DDPR Compliant?</h3>
                <p>Download our GDPR datasheet to learn more about how it impacts your organization and thw vendors you use</p>
                <div>
                    <form onSubmit="return false" id="custom_form">
                        <div class="input">
                            <label>Enter your email to download</label>
                            <input id="email-760448a7-d4e6-40e4-b224-2aa5217fa0eb" class="hs-input error email_input" type="email" name="email" required="" placeholder="Work Email" value="" autocomplete="email" inputmode="email">
                        </div>
                        <div class="actions">
                            <input type="submit" value="Download Now" class="btn btn-primary btn-next">
                        </div>
                    </form>
                </div>
            </div>
            <div class="right_part">
            </div>
        </div>`);

        var pdfUrl = "https://cdn2.hubspot.net/hubfs/2378677/Content-Assets/CyberGRX_GDPR_FINAL.pdf";

        $('#custom_form').on('submit', function () {
            window.open(pdfUrl, '_blank');
        });

        var refreshInterval = setInterval(function () {
           if ($(".cybergrx_test .container-social ul").length > 0) {
                clearInterval(refreshInterval);

                $(".cybergrx_test .container-social ul").after('<h3 class="resource_title">You may also like...</h3>');
                $('.cybergrx_test .resource_title').after($('.mod-related-resources .row-slide-feature'));
                $('.cybergrx_test .container-social .row-slide-feature').removeAttr('class').addClass('resource_wrapper');
                $('.resource_wrapper').after('<a href="https://get.cybergrx.com/get-a-demo-a-single-step-pf" target="_blank" class="demo_button">Book a Demo</a>');

                $('.resource_wrapper .box-item').each(function(){
                    $(this).unwrap();
                })
           }
        }, 200);
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