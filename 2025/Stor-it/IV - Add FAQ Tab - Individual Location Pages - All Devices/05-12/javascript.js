function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-faq-tab')) {
        document.querySelector('body').classList.add('iv-faq-tab');

        // Tab
        const faqtabBtn = `<button class="tablinks" onclick="openTab(event, 'tab4')">FAQ</button><br/>`;
        const tabsDiv = document.querySelector("#pinnacleMainContent .tabs");
        const faqTab = tabsDiv.querySelectorAll(".tablinks")[0];

        faqTab.insertAdjacentHTML('afterend', faqtabBtn);
        
        const tabContent = `<div id='tab4' class="tabcontent">
                                <div class="row">
                                    <div class="six columns faq-tab-img"></div>
                                    <div class="six columns faq-tab-content">
                                    </div>
                                </div>
                            </div>`;
        document.querySelector('#pinnacleMainContent #tab5').insertAdjacentHTML('afterend', tabContent);

        // const tabUserImage = document.querySelector('#tab6 .row > .six.columns').innerHTML;
        // document.querySelector('#pinnacleMainContent .faq-tab-img').insertAdjacentHTML('beforeend', tabUserImage);


        // FAQ content
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {

                var parser = new DOMParser();
                var doc = parser.parseFromString(xhttp.responseText.match(/<body[^>]*>((.|[\n\r])*)<\/body>/)[0], 'text/html');
                var faqContent = doc.querySelector('#pinnacleMainContent');

                if (faqContent && document.querySelector('.faq-tab-content')) {
                    document.querySelector('.faq-tab-content').insertAdjacentElement('beforeend', faqContent);
                }

                const faqItems = document.querySelectorAll('#pinnacleMainContent .pageContent > p');
                if (faqItems) {

                    faqItems.forEach((item, index) => {
                        const question = item.querySelector('strong');
                        if (question) {
                            const answer = item.innerHTML.replace(question.outerHTML, '').trim();

                            item.innerHTML = `<div class="accordion-header"><div class="down-icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 12 8" fill="none">
                            <path d="M1 1.5L3.25 4L5.5 6.5L10.5 1.5" stroke="black" stroke-width="1.5"></path>
                            </svg></div>${question.outerHTML}</div>
                            <div class="accordion-body">${answer}</div>`;

                            const header = item.querySelector('.accordion-header');
                            const body = item.querySelector('.accordion-body');

                            if (index === 0) {
                                body.style.display = 'block';
                                header.classList.add('active');
                            } else {
                                body.style.display = 'none';
                            }

                            header.addEventListener('click', () => {

                                const allHeaders = document.querySelectorAll('.accordion-header');
                                const allBodies = document.querySelectorAll('.accordion-body');
                                allHeaders.forEach(h => h.classList.remove('active'));
                                allBodies.forEach(b => (b.style.display = 'none'));

                                body.style.display = 'block';
                                header.classList.add('active');

                            });
                        }
                    });

                    var faqAddTag = document.querySelectorAll('.iv-faq-tab .faq-tab-content p .accordion-body');
                    if (faqAddTag[2]) {
                        faqAddTag[2].innerHTML = faqAddTag[2].innerHTML.replace(
                            'Storage Calculator',
                            '<a href="https://www.stor-it.com/storage-calculator">Storage Calculator</a>'
                        );
                    }
                    if (faqAddTag[4]) {
                        faqAddTag[4].innerHTML = faqAddTag[4].innerHTML.replace(
                            'property insurance',
                            '<a href="https://www.stor-it.com/insurance/">property insurance</a>'
                        );
                    }
                    if (faqAddTag[5]) {
                        faqAddTag[5].innerHTML = faqAddTag[5].innerHTML.replace(
                            'moving supplies',
                            '<a href="https://www.stor-it.com/storage-supplies">moving supplies</a>'
                        );
                    }
                }

            }
        };

        xhttp.open("GET", "https://www.stor-it.com/faq/", true);
        xhttp.send();

    }
}

const checkCondition = setInterval(function() {
    if (document.querySelector('body')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);