function loadTestCode() {
    if(!jQuery('body').hasClass('form_iv')) {
        jQuery('body').addClass('form_iv');
    
        // Modal content
        jQuery('#g1-preheader .hs-cta-trigger-button').each(function(){
            jQuery(this).eq(0).before('<div class="preheader-btn-mh hs-cta-trigger-button openModal">Book Your Free Demo</div>');
        })

        jQuery('body').append(`<div class="modal-form">
            <div class="modal-form-inner">
                <div class="modal-form-block">
                    <div class="modal-form-header">
                        <h2>BOOK A FREE DEMO TODAY!</h2>
                        <p>Find out if Mitchell 1 is right for you and get 3 MONTHS FREE!*</p>
                        <a href="javascript:;" class="modal-form-close"></a>    
                    </div>
                    <div class="modal-form-content"></div>
                    <div class="modal-form-footer">
                        <p>* Limited time offer. Applies to most Mitchell 1 products with a 27-month subscription. Mitchell1 will never rent or sell your personal information.</p>
                    </div>
                </div>
            </div>
        </div>`);

        jQuery.getScript('//js.hsforms.net/forms/v2.js', function(){
            hbspt.forms.create({
                region: "na1",
                portalId: "7934115",
                formId: "f90089a1-d5e2-4370-8932-38bb5e14a251",
                target: ".modal-form-content",
            });
        });
    
        // Modal Open & Close
        jQuery('body .openModal').on('click', function(){
            jQuery('body .modal-form').addClass('fade').show();
            jQuery('html').addClass('modal-form-open');
            setTimeout(() => {
                jQuery('body .modal-form').addClass('open');
            }, 75);
        });
        jQuery('body .modal-form-overlay, body .modal-form-close').on('click', function(){
            jQuery('html').removeClass('modal-form-open');
            jQuery('body .modal-form').removeClass('open');
            setTimeout(() => {
                jQuery('body .modal-form').hide();
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
