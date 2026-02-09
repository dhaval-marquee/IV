function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-try-us')) {
        document.querySelector('body').classList.add('iv-try-us');

        // Get page URL's
        const url = window.location.href;

        // Desktop and Mobile pages
        const sectionClass = [
            {
                keywords: ["When You Commit to Us, We Commit to ", "Your Satisfaction, Guaranteed"],
                titleClass: 'iv-guarantee-title',
                contentClass: 'iv-guarantee-content',
                buttonClass: 'iv-guarantee-button'
            },
            {
                keywords: ["See Why Parents and Students ", "Why Families "],
                titleClass: 'iv-review-title',
                contentClass: 'iv-review-content',
                buttonClass: 'iv-review-button'
            }
        ];
        
        sectionClass.forEach(({ keywords, titleClass, contentClass, buttonClass }) => {
            document.querySelectorAll('h2').forEach(h2 => {
                if (keywords.some(keyword => h2.textContent.trim().includes(keyword))) {
                    const closestRow = h2.closest('.wpb_row');
                    if (closestRow) {
                        closestRow.classList.add(titleClass);
        
                        let content = closestRow.nextElementSibling;
                        if (content) content.classList.add(contentClass);
        
                        let button = content?.nextElementSibling;
                        if (button) button.classList.add(buttonClass);
                    }
                }
            });
        });

        const reviewButton = document.querySelector('.iv-review-button');
        const guaranteeTitle = document.querySelector('.iv-guarantee-title');
        const guaranteeContent = document.querySelector('.iv-guarantee-content');

        if (reviewButton && guaranteeTitle && guaranteeContent) {
            reviewButton.insertAdjacentElement('afterend', guaranteeTitle);
            guaranteeTitle.insertAdjacentElement('afterend', guaranteeContent);
        }


        // Mobile page only
        if (url.includes('https://tutoring.k12.com/try-us-mobile/')) {

            const sectionClassM = [
                { keyword: "Meet Our Tutors", className: "iv-meet-section" },
                { keyword: "FAQs", className: "iv-FAQs-section" },
            ];
            
            document.querySelectorAll('h2').forEach(h2 => {
                sectionClassM.forEach(({ keyword, className }) => {
                    if (h2.textContent.trim().includes(keyword)) {
                        const closestRow = h2.closest('.wpb_row');
                        if (closestRow) {
                            closestRow.classList.add(className);
                        }
                    }
                });
            });

            const faqSection = document.querySelector('.iv-FAQs-section');
            const meetSection = document.querySelector('.iv-meet-section');

            if (faqSection && meetSection) {
                faqSection.insertAdjacentElement('afterend', meetSection);
            }

            if (meetSection && reviewButton) {
                const clonedButton = reviewButton.cloneNode(true);
                meetSection.insertAdjacentElement('afterend', clonedButton);
            }

            const newReviewbox = `<div class="iv-custom-review vc_col-sm-6 vc_col-xs-12 wpb_column column_container vc_column_container col padding-2-percent top_margin_tablet_15px top_margin_phone_15px inherit_tablet inherit_phone instance-10" data-using-bg="true" data-border-radius="10px" data-shadow="medium_depth" data-padding-pos="all" data-has-bg-color="true" data-bg-color="#f2f2f2" data-bg-opacity="1" data-animation="" data-delay="0" bis_skin_checked="1">
                <div class="vc_column-inner" bis_skin_checked="1"><div class="column-bg-overlay-wrap column-bg-layer" data-bg-animation="none" bis_skin_checked="1"><div class="column-bg-overlay" style="opacity: 1; background-color: #f2f2f2;" bis_skin_checked="1"></div></div>
                    <div class="wpb_wrapper" bis_skin_checked="1">
                        <blockquote class="nectar_single_testimonial" data-color="default" data-style="small_modern"><div class="inner" data-custom-color="true" style="color: #000000;" bis_skin_checked="1"> <p><span class="open-quote">”</span>Melinda helped my 10th grade son with his Algebra & test. He would have utterly falled without her. She was great. Highly recommend</p><div data-shadow="true" class="image-icon image-icon-custom">VG</div><span class="wrap"><span>Verified Guardian</span></span></div></blockquote>
                    </div> 
                </div>
            </div>`;
            document.querySelector('.iv-review-content .row_col_wrap_12 .vc_col-sm-6:last-child').insertAdjacentHTML('beforebegin', newReviewbox);
            
        }else{
            const waitForNew = setInterval(() => {
                if (document.querySelector('.iv-review-button .nectar-cta .link_text .text')) {
                    clearInterval(waitForNew);
                    document.querySelector('.iv-review-button .nectar-cta .link_text').href ="https://book.tutoring.k12.com/?_gl=1*igvcgj*_gcl_au*NTU3MjEyMTA2LjE3MzY0MTM1ODM.*_ga*MTQ1OTcwODI1OS4xNzM2NDEzNTg0*_ga_1ME1S0PRBE*MTczODA2MTU4OC4yMS4xLjE3MzgwNjI0NzEuMzEuMC4w";
                    document.querySelector('.iv-review-button .nectar-cta[data-color="white"]').setAttribute('data-color', 'extra-color-gradient-1');
                    document.querySelector('.iv-review-button .nectar-cta .link_text .text').innerHTML = `<span class="char" style="animation-delay: 0s;">C</span><span class="char" style="animation-delay: 0.015s;">h</span><span class="char" style="animation-delay: 0.03s;">e</span><span class="char" style="animation-delay: 0.045s;">c</span><span class="char" style="animation-delay: 0.06s;">k</span> <span class="char" style="animation-delay: 0.075s;">O</span><span class="char" style="animation-delay: 0.09s;">u</span><span class="char" style="animation-delay: 0.105s;">t</span> <span class="char" style="animation-delay: 0.12s;">O</span><span class="char" style="animation-delay: 0.135s;">u</span><span class="char" style="animation-delay: 0.15s;">r</span> <span class="char" style="animation-delay: 0.165s;">T</span><span class="char" style="animation-delay: 0.18s;">u</span><span class="char" style="animation-delay: 0.195s;">t</span><span class="char" style="animation-delay: 0.21s;">o</span><span class="char" style="animation-delay: 0.225s;">r</span><span class="char" style="animation-delay: 0.24s;">s</span>`
                }
            }, 500)
        }

        document.querySelector('.iv-review-title').classList.add('fireGoal');
        trackingScript();
    }
}
function trackingScript() {
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= 56; // Fires when the element reaches the top of the viewport
    }
    
    function checkElement() {
        const element = document.querySelector(".fireGoal");
        if (element && isElementInViewport(element)) {
            console.log('goal fired');
            // Add the following snippet to trigger this event
            window.VWO = window.VWO || [];
            VWO.event = VWO.event || function () {VWO.push(["event"].concat([].slice.call(arguments)))};
    
            VWO.event("guaranteeSectionMoved");
            window.removeEventListener("scroll", checkElement); // Remove event listener after execution
        }
    }
    // Attach scroll event listener
    window.addEventListener("scroll", checkElement);
    
    // Run check initially in case the element is already in view
    checkElement();
}

// Check condition and initialize the code
const checkNewCondition = setInterval(() => {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkNewCondition);
        loadTestCode();
    }
}, 500);
