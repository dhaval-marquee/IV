function loadTestCode() {
    if(!jQuery('body').hasClass('form_iv')) {
        jQuery('body').addClass('form_iv');
    
        // Modal content
        jQuery('.hs-cta-trigger-button').before(`<a href="javascript:;" class="openModal" style="position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 99999999;color: #fff;background-color: green;padding: 20px 40px;cursor: pointer;text-decoration: none;font-size: 24px;line-height: normal;border: none;">OPEN_MODAL_BUTTON</a>`);

        jQuery('body').append(`<div class="mq_modal">
            <div class="mq_modal_inner">
                <div class="mq_modal_block">
                    <div class="mq_modal_header">
                        <h2>BOOK A FREE DEMO TODAY!</h2>
                        <p>Find out if Mitchell 1 is right for you and get 3 MONTHS FREE!*</p>
                        <a href="javascript:;" class="mq_close"></a>    
                    </div>
                    <div class="mq_modal_content"></div>
                </div>
            </div>
        </div>`);

        jQuery.getScript('//js.hsforms.net/forms/v2.js', function(){
            hbspt.forms.create({
                region: "na1",
                portalId: "7934115",
                formId: "f90089a1-d5e2-4370-8932-38bb5e14a251",
                target: ".mq_modal_content",
            });
        });
    
        // Modal Open & Close
        jQuery('.form_iv .openModal').on('click', function(){
            jQuery('.form_iv .mq_modal').addClass('fade').show();
            jQuery('html').addClass('mq_modal_open');
            setTimeout(() => {
                jQuery('.form_iv .mq_modal').addClass('open');
            }, 75);
        });
        jQuery('.form_iv .mq_modal_overlay, .form_iv .mq_close').on('click', function(){
            jQuery('html').removeClass('mq_modal_open');
            jQuery('.form_iv .mq_modal').removeClass('open');
            setTimeout(() => {
                jQuery('.form_iv .mq_modal').hide();
            }, 75);
        });
    }
}

var loadTest = setInterval(function () {
    if (typeof jQuery === 'function') {
        clearInterval(loadTest);
        loadTestCode();
    } 
}, 100);
