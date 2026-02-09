function loadTestCode() {
    if (!document.querySelector("body").classList.contains("paymentPage-iv")) {
        document.querySelector("body").classList.add("paymentPage-iv");
        
        // Insert accordion structure
        const faqHTML = `<section class="accordion-section">
            <div class="accordion-wrapper">
                <h5>Frequently Asked Questions</h5>
                <div class="accordion-left">
                    <div class="accordion-item active">
                        <div class="accordion-item-title">What’s the difference between reserving and renting?</div>
                        <div class="accordion-item-description" style="display: block;">
                            <p>Reserving holds a unit for free until your move-in date, no payment or contract needed. Renting starts your agreement immediately after payment and signing.</p>
                            <div class="accordion-animation"></div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <div class="accordion-item-title">Can I move in later if I rent now?</div>
                        <div class="accordion-item-description">
                            <p>Yes, rent now and move in on your reserved date or sooner during access hours. Check in at the office upon arrival.</p>
                            <div class="accordion-animation"></div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <div class="accordion-item-title">Can I change my due date after signing?</div>
                        <div class="accordion-item-description">
                            <p>Yes, discuss options with your property manager, but billing starts once you sign and pay.</p>
                            <div class="accordion-animation"></div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <div class="accordion-item-title">Is a long-term lease required?</div>
                        <div class="accordion-item-description">
                            <p>No, rentals are month-to-month with no long-term commitment.</p>
                            <div class="accordion-animation"></div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <div class="accordion-item-title">What are your access and office hours?</div>
                        <div class="accordion-item-description">
                            <p>Access: 7 AM–7 PM daily (except holidays). Office: 8 AM–6:30 PM daily (except holidays).</p>
                            <div class="accordion-animation"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
        
        function insertFAQ() {
            const desktopTarget = document.querySelector(".pss-reserve-leftbox .pss-reserve-contentbox");
            const mobileTarget = document.querySelector(".pss-reserve-rightbox");
            const isDesktop = window.matchMedia("(min-width: 992px)").matches;
        
            // Remove existing FAQ if present
            document.querySelector(".accordion-section")?.remove();
        
            // Insert FAQ based on screen size
            if (isDesktop && desktopTarget) {
            desktopTarget.insertAdjacentHTML("afterend", faqHTML);
            } else if (!isDesktop && mobileTarget) {
            mobileTarget.insertAdjacentHTML("afterend", faqHTML);
            }
        }
        
        // Run on load
        insertFAQ();
        
        // Update on resize with debounce to avoid excessive calls
        let timeout;
        window.addEventListener("resize", () => {
            clearTimeout(timeout);
            timeout = setTimeout(insertFAQ, 200);
        });
    
        $(document).on("click", ".accordion-item-title", function () {
            var parent = $(this).parent();
            var wrapper = parent.closest(".accordion-wrapper"); // Get the closest accordion wrapper

            wrapper.find(".accordion-item").removeClass("active");
            parent.addClass("active");

            wrapper.find(".accordion-item-description").slideUp();
            parent.find(".accordion-item-description").slideDown();
        });
    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);