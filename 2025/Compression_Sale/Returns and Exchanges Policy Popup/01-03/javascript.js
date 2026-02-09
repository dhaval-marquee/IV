function loadTestCode() {
  if (!jQuery("body").hasClass("iv-content")) {
    jQuery("body").addClass("iv-content");

    jQuery("#shopify-section-static-product .tab-content #tab-3").append(
      '<div class="size-info"><p>Not sure which size is right for you? <br>No worries - we have a 100-day, hassle-free exchange policy!</p><a href="#" class="open-popup">Learn More</a></div>'
    );

    // Popup
    var tab3 = jQuery("#shopify-section-static-product .tab-content #tab-3");

    if (jQuery(".popup-overlay").length === 0) {
      tab3.after(`
        <div class="popup-overlay" style="display:none;">
            <div class="popup-box">
                <span class="close-popup">&times;</span>
                <h2>Returns and Exchanges</h2>
                <p>We offer a 30-day return policy and a 100-day exchange policy. You can return or exchange your items within this period if the conditions below are met. Exclusions: Final Sale items are not eligible for return or exchange. Non-compliant returns will not be accepted. View our full return policy for more info.</p>
            </div>
        </div>
    `);
    }

    tab3.on("click", function () {
      jQuery(".popup-overlay").fadeIn();
    });

    // Close popup
    jQuery(document).on("click", ".popup-overlay, .close-popup", function (e) {
      if (
        !jQuery(e.target).closest(".popup-box").length ||
        jQuery(e.target).hasClass("close-popup")
      ) {
        jQuery(".popup-overlay").fadeOut();
      }
    });
  }
}

// Wait for jQuery to load and execute loadTestCode
var checkCondition = setInterval(() => {
  if (typeof jQuery !== "undefined" && jQuery("body").length > 0) {
    clearInterval(checkCondition);
    loadTestCode();
  }
}, 100);
