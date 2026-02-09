function loadTestCode() {
  if (!jQuery("body").hasClass("popup_iv")) {
    jQuery("body").addClass("popup_iv");

    
    jQuery(".home .fusion-builder-row-1 .fusion-builder-column-0 .fusion-column-wrapper .fusion-builder-row").after(
      "<div class='video_btn'><a id='play_video' href='#'>Watch our demo video <i class='fas fa-play-circle'></i></a></div>"
    );
        
    jQuery(".post-content .fusion-builder-row-1").after(
      '<div class="fusion-builder-row-1" id="dynamicContent"></div>'
    );

    var contentPage = "https://clearcaptions.com/how-it-works/";
    jQuery("#dynamicContent").load(
      contentPage + " .fusion-builder-row-1 .fusion-builder-column-1",
      function (response, status) {
        if (status === "success") {

          // document.addEventListener('DOMContentLoaded', function() {
          //   jQuery("#play_video").off("click").on("click", function (e) {
          //     e.preventDefault();
          //     jQuery("#lightbox-see-clearcaptions-in-action")[0].click();
          //   });
          // });
          
          jQuery(document).ready(function($) {
            jQuery("#play_video").off("click").on("click", function(e) {
                e.preventDefault();
                jQuery("#lightbox-see-clearcaptions-in-action").trigger("click");
            });
        });
        

        }
      }
    );
  }
}

// Check if jQuery is available and body exists, then execute script
var checkCondition = setInterval(function () {
  if (typeof jQuery !== "undefined" && jQuery("body").length > 0) {
      clearInterval(checkCondition);
      loadTestCode();
  }
}, 100);