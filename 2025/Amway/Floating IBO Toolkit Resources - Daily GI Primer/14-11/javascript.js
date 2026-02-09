function loadTestCode() {
  if (!jQuery("body").hasClass("iv_tag")) {
    jQuery("body").addClass("iv_tag");

    // Add Button
    jQuery("body").append(`<div class="ibo-sticky-tool">
			<img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1763105294/amway/AmwayIBOToolkit.png" alt="IBO Toolkit">
		</div>`);

    // Popup
    jQuery("body").append(`
		<div class="ibo-popup-box">
			<span class="ibo-popup-close">&times;</span>
			<h2 class="amw-page-pdp__product-title">Your IBO Toolkit</h2>
			<a href="#sellingSupport" class="box-btn">
				Review Selling Support
			</a>
		</div>
	`);

    // Open/Close popup on click
    jQuery(document).on(
      "click",
      ".ibo-sticky-tool, .ibo-popup-close",
		function () {
			jQuery(".ibo-popup-box").fadeToggle(200);
		}
    );

    // Smooth Scroll
    jQuery(document).on("click", 'a[href="#sellingSupport"]', function (e) {
      e.preventDefault();

      let target = jQuery("#sellingSupport");

      if (target.length) {
        jQuery("html, body").animate(
          {
            scrollTop: target.offset().top - 120,
          },
          600
        );
      }

      jQuery(".ibo-popup-box").fadeOut(200);
    });

    jQuery("#sellingSupport .amw-accordion__title").append(`<img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1765794515/amway/Toolkit.png" alt="Toolkit">`);
  }
}

var checkCondition = setInterval(function () {
  if (typeof jQuery !== "undefined" && jQuery("body").length > 0) {
    clearInterval(checkCondition);
    loadTestCode();
  }
}, 100);
