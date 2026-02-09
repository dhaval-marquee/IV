function loadTestCode() {
    if (!$('body').hasClass('dummies_test')) {
        $('body').addClass('dummies_test');
        
        // Put your test code here    
        $('.mod-banner.mod-banner-l .content-banner h1').after($('.f-landing-right .cont-r-landing'));
        $('.mod-banner-l .col-right-chart .img-canvas').after($('#hs_cos_wrapper_widget_31128385958 .box-f-landing'));

        $('.dummies_test .mod-banner.mod-banner-l h1').html('Take the Risk out of Third-Party <span>Cyber Risk Management</span>');

        var formInterval = setInterval(function () {
            if ($(".dummies_test .hbspt-form .hs-form").length > 0) {
                clearInterval(formInterval);
                $('.dummies_test .hbspt-form .hs-form .hs-main-font-element h4').css("display", "none");
                $('.dummies_test .hbspt-form .hs-form .hs-main-font-element p').html('Download Your <span>FREE</span> Third-Party Cyber Risk Management For Dummies eBook');
                $('.dummies_test .hbspt-form .hs-form .hs-submit input').attr('value', 'Download My Copy');
            }
        }, 200);

        $('.dummies_test .mod-banner-l .content ul').after('<p>And much more!</p>');
        $('.dummies_test .mod-banner-l .cont-r-landing p')[0].innerHTML="The traditional way of approaching third-party risk management (TPRM) is outdated and full of inefficiencies and missed opportunities that leave your organization vulnerable to cyber risk.";
        $('.dummies_test .mod-banner-l .cont-r-landing p')[3].innerHTML= "Download our free guide to learn:";
        $('.dummies_test .mod-banner-l .cont-r-landing ul li')[0].innerHTML= "How traditional CRMs cannot effectively protect your critical systems from quickly evolving threats";
        $('.dummies_test .mod-banner-l .cont-r-landing ul li')[1].innerHTML= "What is needed to have a successful (and effective) TPRM program that works across all departments";
        $('.dummies_test .mod-banner-l .cont-r-landing ul li')[2].innerHTML= "How to communicate and collaborate with internal stakeholders to achieve TPRM success";
        
    }
}



// Load code just for Desktop 
if (window.matchMedia("(min-width: 1025px)").matches) {

    loadTestCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 1024.98px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 1025px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for Desktop over