function modal() {
    if(!$('body').hasClass('mq_test')) {
        $('body').addClass('mq_test');
    
        // Modal content
        $('.mq_test').prepend(`<a href="javascript:;" class="openModal" style="position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 99999999;color: #fff;background-color: green;padding: 20px 40px;cursor: pointer;text-decoration: none;font-size: 24px;line-height: normal;border: none;">OPEN_MODAL_BUTTON</a>
        <div class="mq_modal">
            <div class="mq_modal_inner">
                <div class="mq_modal_block">
                    <div class="mq_modal_header">
                        <a href="javascript:;" class="mq_close"></a>    
                    </div>
                    <div class="mq_modal_content">
                        <iframe 
                            src="https://www.youtube.com/embed/ZXCFWsH9Xs0?autoplay=1&mute=1" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allow="autoplay" 
                            allowfullscreen>
                        </iframe>

                    </div>
                </div>
            </div>
        </div>`);
    
        // Modal Open & Close
        $('.mq_test .openModal').on('click', function(){
            $('.mq_test .mq_modal').addClass('fade').show();
            $('.mq_test').addClass('mq_modal_open');
            setTimeout(() => {
                $('.mq_test .mq_modal').addClass('open');
            }, 75);
        });
        $('.mq_test .mq_modal_overlay, .mq_test .mq_close').on('click', function(){
            $('.mq_test').removeClass('mq_modal_open');
            $('.mq_test .mq_modal').removeClass('open');
            setTimeout(() => {
                $('.mq_test .mq_modal').hide();
            }, 75);
        });
    }
}
modal();