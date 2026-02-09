function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-faq-tab')) {
        document.querySelector('body').classList.add('iv-faq-tab');
     
        // Tab
        const faqtabBtn = `<button class="tablinks" onclick="openTab(event, 'tab6')">FAQ</button><br/>`;
        const tabsDiv = document.querySelector("#pinnacleMainContent .tabs");
        const faqTab = tabsDiv.querySelectorAll(".tablinks ")[0];

        faqTab.insertAdjacentHTML('afterend', faqtabBtn);
        
        const tabContent = `<div id='tab6' class="tabcontent">
                                <div class="row">
                                    <div class="six columns faq-tab-img"></div>
                                    <div class="six columns faq-tab-content">
                                    </div>
                                </div>
                            </div>`;
        document.querySelector('#pinnacleMainContent #tab5').insertAdjacentHTML('afterend', tabContent);

        const tabUserImage = document.querySelector('#tab1 .row > .six.columns').innerHTML;
        document.querySelector('#pinnacleMainContent .faq-tab-img').insertAdjacentHTML('beforeend', tabUserImage);


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