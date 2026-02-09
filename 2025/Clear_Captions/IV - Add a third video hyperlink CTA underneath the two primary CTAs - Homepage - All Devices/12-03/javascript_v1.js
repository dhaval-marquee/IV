function loadTestCode() {
    if (!jQuery("body").hasClass("popup_iv")) {
        jQuery("body").addClass("popup_iv");

        jQuery(document).ready(function() {
            // Delay the addition of the video button by 2 seconds
            jQuery(".home .fusion-builder-row-1 .fusion-builder-column-0 .fusion-column-wrapper .fusion-builder-row").after(
                "<div class='video_btn'><a id='play_video' href='#'>Watch our demo video <i class='fas fa-play-circle'></i></a></div>"
            );

            // Add an empty div for dynamic content immediately
            jQuery(".post-content .fusion-builder-row-1").after(
                '<div class="fusion-builder-row-1" id="dynamicContent"></div>'
            );

            // Load content dynamically
            var contentPage = "https://clearcaptions.com/how-it-works/";
            jQuery("#dynamicContent").load(
                contentPage + " .fusion-builder-row-1 .fusion-builder-column-1",
                function(response, status) {
                    if (status === "success") {
                        // Ensure the click event for #play_video is set after the button is added
                        window.addEventListener("load", function () {
                            jQuery(document).on("click", "#play_video", function(e) {
                                e.preventDefault();
                                jQuery("#lightbox-see-clearcaptions-in-action")[0].click();
                            });
                        });       
                    }
                }
            );
        });


           // Modal content
           $('.popup_iv').prepend(`<a href="javascript:;" class="openModal" style="position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 99999999;color: #fff;background-color: green;padding: 20px 40px;cursor: pointer;text-decoration: none;font-size: 24px;line-height: normal;border: none;">OPEN_MODAL_BUTTON</a>
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
            $('.popup_iv .openModal').on('click', function(){
                $('.popup_iv .mq_modal').addClass('fade').show();
                $('.popup_iv').addClass('mq_modal_open');
                setTimeout(() => {
                    $('.popup_iv .mq_modal').addClass('open');
                }, 75);
            });
            $('.popup_iv .mq_modal_overlay, .popup_iv .mq_close').on('click', function(){
                $('.popup_iv').removeClass('mq_modal_open');
                $('.popup_iv .mq_modal').removeClass('open');
                setTimeout(() => {
                    $('.popup_iv .mq_modal').hide();
                }, 75);
            });
    }
}
// Check if jQuery is available and body exists, then execute script
var checkCondition = setInterval(function () {
    if (typeof jQuery !== "undefined" && jQuery("body").length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);

function modal() {
    if(!$('body').hasClass('popup_iv')) {
        $('body').addClass('popup_iv');
    
     
    }
}
modal();