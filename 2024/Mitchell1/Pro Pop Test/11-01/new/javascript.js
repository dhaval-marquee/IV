function modal() {
    if(!jQuery('body').hasClass('mq_test')) {
        jQuery('body').addClass('mq_test');
    
        // Modal content
        jQuery('.mq_test').prepend(`<a href="javascript:;" class="openModal" style="position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 99999999;color: #fff;background-color: green;padding: 20px 40px;cursor: pointer;text-decoration: none;font-size: 24px;line-height: normal;border: none;">OPEN_MODAL_BUTTON</a>
        <div class="mq_modal">
            <div class="mq_modal_inner">
                <div class="mq_modal_block">
                    <div class="mq_modal_header">
                        <a href="javascript:;" class="mq_close"></a>    
                    </div>
                    <div class="mq_modal_content">
                        <p>
                            <b>What is Lorem Ipsum?</b>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
        </div>`);
    
        // Modal Open & Close
        jQuery('.mq_test .openModal').on('click', function(){
            jQuery('.mq_test .mq_modal').addClass('fade').show();
            jQuery('.mq_test').addClass('mq_modal_open');
            setTimeout(() => {
                jQuery('.mq_test .mq_modal').addClass('open');
            }, 75);
        });
        jQuery('.mq_test .mq_modal_overlay, .mq_test .mq_close').on('click', function(){
            jQuery('.mq_test').removeClass('mq_modal_open');
            jQuery('.mq_test .mq_modal').removeClass('open');
            setTimeout(() => {
                jQuery('.mq_test .mq_modal').hide();
            }, 75);
        });
    }
}
modal();