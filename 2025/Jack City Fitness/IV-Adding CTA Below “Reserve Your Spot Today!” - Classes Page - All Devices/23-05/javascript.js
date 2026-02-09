function loadTestCode() {
    if (!jQuery('body').hasClass('home_iv')) {
        jQuery('body').addClass('home_iv');

    
       // Get the current page URL without query parameters or hash
        var currentPage = window.location.href.split('?')[0].split('#')[0];

        // Function to insert the consultation button
        function insertConsultationButton(selector) {
            jQuery(selector).after(`
                <a href="#free-fitness-consultation" class="button orange-border fancybox fitness-btn" rel="noopener noreferrer">
                    FREE FITNESS CONSULTATION
                </a>
            `);
        }

        // Conditional logic based on the current page
        if (currentPage === 'https://jackcityfitness.com/class/complete-recovery/') {
            insertConsultationButton('#section-1 .fourteen-hundred .page-right br').eq(1);
            document.querySelector('#comparisonTable').classList.add('product-1');
        } else if (currentPage === 'https://jackcityfitness.com/class/faith-and-fitness/') {
            insertConsultationButton('#section-1 .fourteen-hundred .page-right p + div');
        } else {
            insertConsultationButton('#section-1 .fourteen-hundred .page-right p:nth-of-type(2)');
        }

	
        // Update button text
        jQuery("#section-1 .fourteen-hundred .page-right").each(function () {
            var $section = jQuery(this);
            var titleText = $section.find("h1").text().trim();
            var firstThreeWords = titleText.split(/\s+/).slice(0, 3).join(" ");

            $section.find(".fitness-btn").each(function () {
                var $btn = jQuery(this);
                if ($btn.text().trim().toUpperCase() === "FREE FITNESS CONSULTATION") {
                    $btn.text("Try " + firstThreeWords + " For Free");
                }
            });

            // Remove colons from button text
            jQuery(".fitness-btn").each(function () {
                var $btn = jQuery(this);
                $btn.text($btn.text().replace(":", ""));
            });
        });
    
        // Append Fancybox modal before the footer
        if (jQuery('#free-fitness-consultation').length === 0) {
            jQuery('footer').before(`
                <div class="fancybox-overlay fancybox-overlay-fixed" style="width: auto; height: auto; display: block;">
                    <div class="fancybox-wrap fancybox-desktop fancybox-type-inline" tabindex="-1" style="">
                        <div class="fancybox-skin" style="padding: 0px; width: auto; height: auto;">
                            <div class="fancybox-outer">
                                <div class="fancybox-inner" style="overflow: auto; width: 815px; height: 495px;">
                                    <div id="free-fitness-consultation" class="fancypop">
                                        <h1 class="center cabin uppercase extra-bold">Schedule a Free Fitness Consultation</h1>
                                        <p class="center">Tell us the goals you’d like to achieve. We’ll design a program to get you to where you want to be.</p>
                                        <div class="form">
                                            <iframe src="https://calendly.com/jackcityfitness/fitness-consultation?embed_domain=jackcityfitness.com&amp;embed_type=Inline&amp;primary_color=fe5000" width="100%" height="100%" frameborder="0" title="Select a Date &amp; Time - Calendly"></iframe>
                                        </div>
                                    </div>
                                </div>
                                <a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>
                                <a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>
                            </div>
                            <a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>
                        </div>
                    </div>
                </div>
            `);
        }

        // Handle opening modal on click
        jQuery(document).on("click", 'a[href="#free-fitness-consultation"]', function (e) {
            e.preventDefault();
        
            const $overlay = jQuery(".fancybox-overlay");
        
            // Add class to show modal
            $overlay.addClass("fancybox-opened").fadeIn();
        
            // Optionally close when clicking the close button
            $overlay.on("click", ".fancybox-close", function () {
                $overlay.removeClass("fancybox-opened").fadeOut();
            });
        });
    }
}

loadTestCode();