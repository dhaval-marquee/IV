var jQisLoaded = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQisLoaded);
        
        if(!jQuery('body').hasClass('mq_test')) {
            jQuery('body').addClass('mq_test');
        
            // Modal content
            jQuery('.mq_test').prepend(`<div class="mq_modal">
                <div class="mq_modal_overlay"></div>
                <div class="mq_modal_content">
                    <div class="modal_header">
                        <div class="mq_close">X</div>
                    </div>
                    <iframe src="https://u7zprnbtybs.typeform.com/to/pMCvfGTs">
                </div>
            </div>`);
        
            jQuery('.mq_test .mq_modal_overlay, .mq_test .mq_close').on('click', function(){
                jQuery('.mq_test').removeClass('mq_modal_open');
                jQuery('.mq_test .mq_modal').removeClass('open');
                jQuery('.mq_modal').remove();
            });
        
            setTimeout(() => {
                jQuery('.mq_test').addClass('mq_modal_open');
                jQuery('.mq_test .mq_modal').addClass('open');
            }, 8000);
        }
    }
}, 100);
