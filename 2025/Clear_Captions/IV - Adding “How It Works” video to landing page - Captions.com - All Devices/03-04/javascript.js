function modal() {
    if(!$('body').hasClass('mq_test')) {
        $('body').addClass('mq_test');
    
        // Modal content
        $('.app-features-container .app-features h2').text("Enjoy your independence - With ClearCaption's service, you'll get every word, every time!");

        $('.app-features-container .app-features-wrapper:nth-child(1) > div p').eq(0).html("NEW: Customize your caption speed");
        $('.app-features-container .app-features-wrapper:nth-child(1) > div p').eq(1).html("Full-color touchscreen display");
        $('.app-features-container .app-features-wrapper:nth-child(1) > div p').eq(2).html("One-Touch caption size and color adjustments");


        $('.app-features-container .app-features-wrapper:nth-child(3) > div p').eq(0).html("Answering machine or voicemail with captioned messages");
        $('.app-features-container .app-features-wrapper:nth-child(3) > div p').eq(1).html("Fast-dial Contacts and Favorites");
        $('.app-features-container .app-features-wrapper:nth-child(3) > div p').eq(2).html("Built-in speakerphone for hands-free calling");



        $('.app-features-container .app-features-image img').after(`
        <div class="app-video">
            <a href="javascript:;" class="openModal">
                <img src="https://clearcaptions.com/wp-content/uploads/2023/12/Section-1_Hero-1024x576.png" alt="image">
            </a>
        </div>`);

        $('.mq_test').prepend(`
        <div class="mq_modal">
            <div class="mq_modal_inner">
                <div class="mq_modal_block">
                    <div class="mq_modal_header">
                        <a href="javascript:;" class="mq_close"></a>    
                    </div>
                    <div class="mq_modal_content"></div>
                </div>
            </div>
        </div>`);
    
        // Modal Open & Close
        $('.mq_test .openModal').on('click', function(){
            $('.mq_modal_content').html(`<iframe 
                id="youtube-video"
                src="https://www.youtube.com/embed/ZXCFWsH9Xs0?autoplay=1&mute=1&enablejsapi=1" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allow="autoplay" 
                allowfullscreen>
            </iframe>`);
            $('.mq_test .mq_modal').addClass('fade').show();
            $('.mq_test').addClass('mq_modal_open');
            setTimeout(() => {
                $('.mq_test .mq_modal').addClass('open');
            }, 75);
            function unmuteVideo() {
                var iframe = document.getElementById("youtube-video");
                iframe.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', '*');
            }
        
            // Try unmuting after 2 seconds (adjust as needed)
            setTimeout(unmuteVideo, 2000);
        });
        $('.mq_test .mq_close').on('click', function(){
            $('.mq_test').removeClass('mq_modal_open');
            $('.mq_test .mq_modal').removeClass('open');
            setTimeout(() => {
                $('.mq_test .mq_modal').hide();
            }, 75);
            $('.mq_modal_content').find('iframe').remove();
        });

    
        $("#youtube-video").on("ended", function () {
            $('.mq_test').removeClass('mq_modal_open');
            $('.mq_test .mq_modal').removeClass('open');
            setTimeout(() => {
                $('.mq_test .mq_modal').hide();
            }, 75);
            $('.mq_modal_content').find('iframe').remove();
        });
    }
}

var checkCondition = setInterval(function() {
    if ($('body').length > 0) {
        clearInterval(checkCondition);
        modal();
    }
}, 100);