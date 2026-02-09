function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-faq-tab')) {
        document.querySelector('body').classList.add('iv-faq-tab');

        const ifFaq = document.querySelector('#MainContent_DataListFaq');

        if (ifFaq) {
            // Add FAQ tab
            const faqTab = `<li class="nav-item" role="tab">
                                <a class="nav-link" id="faq-tab" data-toggle="tab" href="#faq" role="tab" aria-controls="faq-tab" aria-selected="false" aria-label="faq-tab">FAQ</a>
                            </li>`;
            const secondTab = document.querySelector('.pss-navigation-tabs .nav-tabs li:nth-child(2)');
            if (secondTab) {
                secondTab.insertAdjacentHTML('afterend', faqTab);
            }
    
            // Add FAQ tab content
            const faqTabContent = `<div id="faq" class="tab-pane fade" role="tabpanel" aria-label="faq-tab" bis_skin_checked="1">
                                        <div class="row"></div>
                                    </div>`;
            const featuresTab = document.querySelector('#features');
            if (featuresTab) {
                featuresTab.insertAdjacentHTML('afterend', faqTabContent);
            }
    
            // Current FAQ section
            const currentFaq = document.querySelector('#MainContent_DataListFaq').parentElement;
            if (currentFaq && !document.querySelector('.iv-datalist-faq')) {
                currentFaq.classList.add('iv-datalist-faq');
            }

            // Transfer current FAQ section
            const transfer = document.querySelector('.iv-datalist-faq');
            document.querySelector('.pss-facility__content .col-lg-8').insertAdjacentElement('beforeend' , transfer);

            // Clone FAQ section instead of moving it
            const faqContainer = document.querySelector('#faq > .row');
            if (faqContainer && !document.querySelector('.iv-datalist-faq-clone')) {
                const clonedFaq = currentFaq.cloneNode(true);
                clonedFaq.classList.add('iv-datalist-faq-clone');
                clonedFaq.classList.replace('col-lg-8', 'col-lg-12');
                faqContainer.appendChild(clonedFaq);
            }

            // Tabs to toggle original FAQ hide
            const faqTabLink = document.querySelector('#faq-tab');
            const tabLinks = document.querySelectorAll('.pss-navigation-tabs .nav-tabs a[data-toggle="tab"]');
            tabLinks.forEach(tab => {
                tab.addEventListener('click', (event) => {
                    if (event.target === faqTabLink) {
                        currentFaq.style.display = 'none';
                    } else {
                        currentFaq.style.display = 'block';
                    }
                }); 
            });
        }
    }
}

// Check condition and initialize the code
const checkCondition = setInterval(() => {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
