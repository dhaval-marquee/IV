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
            
        }

    }
}

// Check condition and initialize the code
const checkCondition = setInterval(() => {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 500);