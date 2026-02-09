function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('dummies_test')) {
        bodyEle.classList.add('dummies_test');
        
        $('.dummies_test .mod-banner.mod-banner-l h1').html('Take the Risk out of Third-Party <span>Cyber Risk Management</span>');

        var formInterval = setInterval(function () {
            if ($(".dummies_test .hbspt-form .hs-form").length > 0) {
                clearInterval(formInterval);
                $('.dummies_test .hbspt-form .hs-form .hs-main-font-element h4').css("display", "none");
                $('.dummies_test .hbspt-form .hs-form .hs-main-font-element p').html('Download The <span>Exclusive</span> Third-Party Risk Management For Dummies eBook');
                $('.dummies_test .hbspt-form .hs-form .hs-submit input').attr('value', 'Download My Copy');
            }
        }, 200);

        $('.dummies_test .f-landing-right .content p')[0].innerHTML="Your company might be vulnerable and at-risk if you haven't updated your TPRM processes in the last year.";
        $('.dummies_test .f-landing-right .content p')[3].innerHTML= "Download Our Exclusive & Practical Guide to Learn:";
        $('.dummies_test .f-landing-right .content ul li')[0].innerHTML= "Why your current approach to third-party cyber risk management may not work.";
        $('.dummies_test .f-landing-right .content ul li')[1].innerHTML= "How to effectively & efficiently collaborate with stakeholders to achieve your TPRM goals.";
        $('.dummies_test .f-landing-right .content ul li')[2].innerHTML= "What exactly is required to have an up-to-date TPRM program that successfully mitigates 3rd party risk.";

        $('.mod-banner.mod-banner-l .content-banner h1').after($('.f-landing-right .cont-r-landing'));
        $('.mod-banner-l .col-right-chart .img-canvas').after($('#hs_cos_wrapper_widget_31128385958 .box-f-landing'));
        
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