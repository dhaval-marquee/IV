function ribbonBannerIV() {
    if (!jQuery('body').hasClass('ribbon_banner_iv')) {
        jQuery('body').addClass('ribbon_banner_iv');

        // Put your test code here
       

        jQuery('.ribbon_banner_iv').prepend(`<div class="mq_modal">
            <div class="mq_modal_inner">
                <div class="mq_modal_block">
                    <button type="button" class="mq_close mq_closes"></button>
                    <div class="mq_modal_content">
                        <h3>Sign Up Before 12/31</h3>
                        <span>For 40% OFF</span>
                        <p class="subHeader">Contact Us For Details</p>
                        <div class="btnWrapper">
                            <a href="javascript:;" id="openCalendlyModel"><strong>YES,</strong> I'll book my time to get this deal! </a>
                            <button type="button" class="mq_close mq_closeBtn"><strong>No,</strong> I don't want to save money and get healthy.</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`);

        // 👉 OPEN MODAL AFTER 60 SECONDS
        setTimeout(function () {
            jQuery('.ribbon_banner_iv .mq_modal').show();
            jQuery('.ribbon_banner_iv').addClass('mq_modal_open');

            setTimeout(function () {
                jQuery('.ribbon_banner_iv .mq_modal').addClass('open');
            }, 75);
        }, 60000); // 60 sec = 60000 ms

        jQuery('.ribbon_banner_iv .mq_close').on('click', function(){
            jQuery('.ribbon_banner_iv').removeClass('mq_modal_open');
            jQuery('.ribbon_banner_iv .mq_modal').removeClass('open');
            setTimeout(() => {
                jQuery('.ribbon_banner_iv .mq_modal').hide();
            }, 75);
        });

        jQuery('#openCalendlyModel').on('click', function(){
            jQuery('.mq_modal_open').addClass('calendlyModalOpen');
            jQuery('head').append('<script src="https://assets.calendly.com/assets/external/widget.js" async></script>');
            jQuery('.mq_modal_content').html(`<div class="calendly-inline-widget" data-url="https://calendly.com/jackcityfitness/new-years-special?hide_gdpr_banner=1&primary_color=fe5000"
                style="min-width:320px;height:700px;">
            </div>`);

        });
    }
}

// ribbonBannerIV(); 
var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        ribbonBannerIV();
    }
}, 100);