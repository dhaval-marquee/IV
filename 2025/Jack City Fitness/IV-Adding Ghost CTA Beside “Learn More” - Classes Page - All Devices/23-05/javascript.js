function loadTestCode() {
    if (!jQuery('body').hasClass('home_iv')) {
        jQuery('body').addClass('home_iv');

			// ADD BUTTON
			jQuery("#section-1 ul.classes-loop li .inner").each(function () {
				var $inner = jQuery(this);
		
				// Check if `.button` exists inside this `.inner`
				var $insertAfter = $inner.find(".button");
				if ($insertAfter.length === 0) {
				$insertAfter = $inner.find(".copy");
				}
		
				// Add the new fitness button
				$insertAfter.after(`
				<a href="#free-fitness-consultation" class="button fitness-btn orange-border fancybox" rel="noopener noreferrer">
						FREE FITNESS CONSULTATION
					</a>
				`);
			});

        // GET TITLE # WORDS IN BUTTON
			jQuery("ul.classes-loop li .inner").each(function () {
			var titleText = jQuery(this).find("h2").text().trim();
			// Get first 3 words from titleText
			var firstThreeWords = titleText.split(/\s+/).slice(0, 3).join(" ");
		
			jQuery(this)
				.find(".fitness-btn")
				.each(function () {
				var $btn = jQuery(this);
				if (
					$btn.text().trim().toUpperCase() === "FREE FITNESS CONSULTATION"
				) {
					$btn.text("Try " + firstThreeWords + " For Free");
				}
				});
				
				jQuery(".fitness-btn").each(function () {
						var $btn = jQuery(this);
						var text = $btn.text();
						$btn.text(text.replace(":", ""));
					});
			});
		
			// POPUP OPEN
			if (typeof jQuery.fancybox === "function") {
			jQuery(".fancybox").fancybox({
				padding: 0,
				maxWidth: 800,
				nextEffect: "fade",
				prevEffect: "fade",
			});
			}
    }
}

var checkCondition = setInterval(function () {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
