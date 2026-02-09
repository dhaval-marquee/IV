function loadTestCode() {
  if (!jQuery("body").hasClass("popup_iv")) {
    jQuery("body").addClass("popup_iv");

      // Delay the addition of the video button by 2 seconds
      jQuery(".home .fusion-builder-row-1 .fusion-builder-column-0 .fusion-column-wrapper .fusion-builder-row").after(
        '<div class="video_btn"><a id="play_video" class="pointer-none" href="https://www.youtube-nocookie.com/embed/ZXCFWsH9Xs0?autoplay=1&enablejsapi=1&rel=0" data-rel="iLightbox">Watch our demo video <i class="fas fa-play-circle"></i></a></div>'
      );

      // Remove pointer-none class when the page has fully loaded
      jQuery(window).on("load", function() {
          setTimeout(function() {
              jQuery('#play_video').removeClass('pointer-none');
          }, 500);
      });

      // Add heartbeat animation every 8 seconds
      setInterval(function () {
        jQuery(".video_btn").addClass("heartbeat");
        setTimeout(function () {
          jQuery(".video_btn").removeClass("heartbeat");
        }, 1500);
      }, 8000);
  }
}

// Check if jQuery is available and body exists, then execute script
var checkCondition = setInterval(function () {
  if (typeof jQuery !== "undefined" && jQuery("body").length > 0) {
    clearInterval(checkCondition);
    loadTestCode();
  }
}, 100);
