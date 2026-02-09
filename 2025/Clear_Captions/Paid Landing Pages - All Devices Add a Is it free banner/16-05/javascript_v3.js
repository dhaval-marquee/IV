function modal() {
    if(!$('body').hasClass('mq_test')) {
        $('body').addClass('mq_test');
    
        // Modal content
        $('.mq_test').prepend(`<div class="mq_modal">
            <div class="mq_modal_inner">
                <div class="mq_modal_block">
                    <div class="mq_modal_header">
                        <a href="javascript:;" class="mq_close"></a>    
                    </div>
                    <div class="mq_modal_content">
                        <h2 class="fusion-title-heading title-heading-left fusion-responsive-typography-calculated" style="margin:0;--fontSize:36;--minFontSize:36;line-height:1.11;">ClearCaptions is <span style="color: #ff4a00; font-style: italic;"><br>
                        free for customers</span></h2>
                        <p>In 1990, President George H.W. Bush signed the Americans with Disabilities Act. The bill helps protect accessibility in communication, including telecommunications.</p>
                        <p>The bill requires the Federal Communications Commission (FCC) to ensure access to Telecommunications Relay Services (TRS). These services help people who are deaf, hard of hearing, deafblind, or have speech disabilities to communicate by phone in a manner functionally equivalent to telephone services used by people without disabilities. As part of this federal mandate, the TRS Fund was established.</p>
                        <p>Funded by interstate telecommunications carriers and Voice over Internet Protocol (VoIP) providers, the TRS Fund covers the costs of providing call captioning services to qualified individuals.</p>
                    </div>
                    <a href="javascript:;" class="mq_close close-btn">Close</a>    
                </div>
            </div>
        </div>`);
        
        // Modal Open & Close
        // $('.mq_test .openModal').on('click', function(){
            // });
            $('.mq_test .mq_modal').addClass('fade').show();
            $('.mq_test').addClass('mq_modal_open');
            setTimeout(() => {
                $('.mq_test .mq_modal').addClass('open');
            }, 75);

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