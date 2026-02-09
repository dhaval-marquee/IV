function loadTestCode() {
    if (!jQuery('body').hasClass('home_iv')) {
        jQuery('body').addClass('home_iv');

        var currentPage = window.location.href.split('?')[0].split('#')[0];

        // Add button after target selector
        function insertConsultationButton(selector) {
            jQuery(selector).after(`
                <a href="#free-fitness-consultation" class="button orange-border fancybox fitness-btn" rel="noopener noreferrer">
                    FREE FITNESS CONSULTATION
                </a>
            `);
        }

        if (document.querySelectorAll('#section-1 .fourteen-hundred .page-right').length > 0) {
            // Page-specific logic
            if (currentPage === 'https://jackcityfitness.com/class/complete-recovery/') {
                insertConsultationButton('#section-1 .fourteen-hundred .page-right br:nth-of-type(1)');
                document.querySelector('#comparisonTable')?.classList.add('product-1');
            } else if (currentPage === 'https://jackcityfitness.com/class/faith-and-fitness/') {
                insertConsultationButton('#section-1 .fourteen-hundred .page-right p + div');
            } else {
                insertConsultationButton('#section-1 .fourteen-hundred .page-right p:nth-of-type(2)');
            }
        }

        // Update button text based on section title
        document.querySelectorAll("#section-1 .fourteen-hundred .page-right").forEach(function(section) {
            var h1 = section.querySelector("h1");
            if (!h1) return;

            var titleText = h1.textContent.trim();
            var firstThreeWords = titleText.split(/\s+/).slice(0, 3).join(" ");

            section.querySelectorAll(".fitness-btn").forEach(function(btn) {
                if (btn.textContent.trim().toUpperCase() === "FREE FITNESS CONSULTATION") {
                    btn.textContent = "Try " + firstThreeWords + " For Free";
                }
            });

            document.querySelectorAll(".fitness-btn").forEach(function(btn) {
                btn.textContent = btn.textContent.replace(":", "");
            });
        });

        document.querySelector('.banner-module + #free-fitness-consultation')?.remove();

        // If the section does not exist, inject it
        if (!document.querySelector("#free-fitness-consultation")) {
            const htmlString = `
                <div class="fancybox-overlay fancybox-overlay-fixed prashant" style="width: auto; height: auto;">
                    <div class="fancybox-wrap fancybox-desktop fancybox-type-inline" tabindex="-1">
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
            `;

        const footer = document.querySelector('footer');
        if (footer) {
            footer.insertAdjacentHTML('beforebegin', htmlString);
        }
        } else {
            document.addEventListener('click', function (e) {
                if (e.target.classList.contains('fitness-btn')) {
                    const consultation = document.querySelector('.class-page #free-fitness-consultation');
                    if (consultation) {
                        consultation.classList.toggle('fancybox-opened');
                    }
                }
            });
        }

        // Attach click handler ONCE
        document.addEventListener("click", function (e) {
            const target = e.target.closest('a[href="#free-fitness-consultation"]');
            if (target) {
                e.preventDefault();
        
                const overlay = document.querySelector(".fancybox-overlay");
        
                if (overlay) {
                    overlay.style.display = "block";
                    overlay.classList.add("fancybox-opened");
        
                    const closeBtn = overlay.querySelector(".fancybox-close");
                    if (closeBtn) {
                        closeBtn.addEventListener("click", function () {
                            overlay.classList.remove("fancybox-opened");
                            overlay.style.display = "none";
                        }, { once: true });
                    }
                }
            }
        });
    }
}

loadTestCode();