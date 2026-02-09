function loadTestCode() {
  if (!jQuery("body").hasClass("popup_iv")) {
    jQuery("body").addClass("popup_iv");

    // Delay the addition of the video button by 2.5 seconds
    setTimeout(function () {
      jQuery(".home .fusion-builder-row-1 .fusion-builder-column-0 .fusion-column-wrapper .fusion-builder-row").after(
        "<div class='video_btn'><a id='play_video' href='#'>Watch our demo video <i class='fas fa-play-circle'></i></a></div>"
      );
    }, 2500);

    // Add heartbeat animation every 8 seconds
    setInterval(function () {
      jQuery(".video_btn").addClass("heartbeat");
      setTimeout(function () {
        jQuery(".video_btn").removeClass("heartbeat");
      }, 1500);
    }, 8000);

    // Add an empty div for dynamic content
    jQuery(".post-content .fusion-builder-row-1").after(
      '<div class="fusion-builder-row-1" id="dynamicContent"></div>'
    );

    var contentPage = "https://clearcaptions.com/how-it-works/";

    // Load external content dynamically
    jQuery("#dynamicContent").load(
      contentPage + " .fusion-builder-row-1 .fusion-builder-column-1",
      function (response, status) {
        if (status === "success") {
          window.addEventListener("load", function () {
            jQuery(document).on("click", "#play_video", function(e) {
                e.preventDefault();
                jQuery("#lightbox-see-clearcaptions-in-action")[0].click();
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
