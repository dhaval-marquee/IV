if(!$('body').hasClass('mq_test')) {
    $('body').addClass('mq_test');

    // Modal content
    $('.mq_test').prepend(`<div class="mq_modal">
        <div class="mq_modal_overlay"></div>
        <div class="mq_modal_content">
            <div class="modal_header">
                <div class="mq_close">X</div>
            </div>
            <iframe src="https://u7zprnbtybs.typeform.com/to/pMCvfGTs">
        </div>
    </div>`);

    $('.mq_test .mq_modal_overlay, .mq_test .mq_close').on('click', function(){
        $('.mq_test').removeClass('mq_modal_open');
        $('.mq_test .mq_modal').removeClass('open');
        $('.mq_modal').remove();
    });

    setTimeout(() => {
        $('.mq_test').addClass('mq_modal_open');
        $('.mq_test .mq_modal').addClass('open');
    }, 5000);
}