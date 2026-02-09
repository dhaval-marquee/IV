function loadTestCode() {
  if (!jQuery("body").hasClass("iv_section")) {
      jQuery("body").addClass("iv_section");

      // Add See Plans button
      jQuery(".hero-section .hero-btn a.orange-btn").after(`
        <a href="/pricing/" class="block-btn">See Plans & Pricing</a>
      `);

      // Load form from another page
      var contentPage = "/contact-us/request-free-trial/";
      jQuery.get(contentPage, function (data) {
        var trialForm = jQuery(data).find(".trial-section .trial-wrapper .trial-form");

        // Append form to target
        jQuery(".hero-section .wrap.cf").append(trialForm);

        // Fields to hide initially
        const fieldsToHide = [".hero-section .gfield--type-email", ".hero-section .gfield--type-checkbox"];
        const hiddenFields = [];

        // Hide submit button (gform_button in footer)
        jQuery('.hero-section .gform-footer .gform_button, .hero-section .only-desktop').hide();

        // Hide form fields and store them
        fieldsToHide.forEach((selector) => {
          const field = jQuery(selector).closest("li");
          if (field.length) {
            field.hide();
            hiddenFields.push(field);
          }
        });

        // Add Continue button as an <a> tag (styled like a button)
        const continueLink = jQuery(`
          <li class="continue-wraper">
            <a href="javascript:void(0)" id="continue-btn" class="gform_button button">Continue</a>
          </li>
        `);
        

        // Append after last visible field
        jQuery(".hero-section .wrap.cf .trial-form form .gform_body ul li:visible")
          .last()
          .after(continueLink);

        // On click, show hidden fields + submit button
        jQuery("#continue-btn").on("click", function (e) {
          e.preventDefault();
          hiddenFields.forEach((field) => field.slideDown());
          jQuery('.gform-footer .gform_button, .only-desktop').slideDown();
          jQuery(".continue-wraper").remove();
        });
      });
  }
}

var checkCondition = setInterval(function () {
  if (typeof jQuery !== "undefined" && jQuery("body").length > 0) {
    clearInterval(checkCondition);
    loadTestCode();
  }
}, 100);
