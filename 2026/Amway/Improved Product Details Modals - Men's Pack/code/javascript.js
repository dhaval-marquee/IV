function loadTestCode() {
    if (!document.body.classList.contains('iv-pd')) {
        document.body.classList.add('iv-pd');

        const accordion = document.querySelector("#productPageAccordion");
        if (!accordion) return;
        const readmore = document.querySelector('.amw-accordion__collapse .js-tab-details .amw-button--link-btn');
        if (readmore) {
            readmore.click();
        }
        const buttonContainer = document.createElement("div");
        buttonContainer.className = "iv-button-container";

        // --- Popup Structure ---
        const popup = document.createElement("div");
        popup.className = "iv-popup";
        popup.innerHTML = `
        <div class="iv-popup-overlay"></div>
        <div class="iv-popup-box" role="dialog" aria-modal="true">
            <div class="iv-popup-header">
            <h2 class="iv-popup-title"></h2>
            <button class="iv-popup-close" aria-label="Close">&times;</button>
            </div>
            <div class="iv-popup-content"></div>
        </div>
        `;
        document.body.appendChild(popup);

        const popupOverlay = popup.querySelector(".iv-popup-overlay");
        const popupBox = popup.querySelector(".iv-popup-box");
        const popupContent = popup.querySelector(".iv-popup-content");
        const popupTitle = popup.querySelector(".iv-popup-title");
        const popupClose = popup.querySelector(".iv-popup-close");

        // --- Convert Accordion Panels to Buttons ---
        
        var getClassInterval = setInterval(function(){
            if(document.querySelectorAll('.iv-button-container button').length > 0){
                clearInterval(getClassInterval);

                document.querySelector('.iv-button-container').insertAdjacentHTML('beforebegin',`<div class="iv-buttonTitle">
                    <h2 class="title-large-style">Explore Product Information</h2>
                    <p>Click on a section below to learn&nbsp;more.</p>
                </div>`);

                var getButtons = document.querySelectorAll('.iv-button-container button');
                        if (getButtons.length >= 3) {
                        getButtons[0].id = 'details';
                        getButtons[1].id = 'ingredients';
                        getButtons[2].id = 'certifications';
                        getButtons[3].id = 'faqs';
                        getButtons[4].id = 'instructions';
                        getButtons[5].id = 'competitiveInfo';
                    }
                }
            },500);


        const panels = accordion.querySelectorAll(".panel");
        panels.forEach((panel) => {
            const titleEl = panel.querySelector(".amw-accordion__title");
            const bodyEl = panel.querySelector(".amw-accordion__collapse");
            if (!titleEl || !bodyEl) return;

            const button = document.createElement("button");
            button.className = "iv-section-btn";
            button.textContent = titleEl.textContent.trim();

            button.addEventListener("click", () => {
                popup.classList.add("iv-active");

                document.body.style.overflow = "hidden";

                // Set popup title & content
                popupTitle.textContent = titleEl.textContent.trim();
                popupContent.innerHTML = bodyEl.innerHTML;

            });

            buttonContainer.appendChild(button);
        });

        accordion.parentNode.insertBefore(buttonContainer, accordion);
        accordion.style.display = "none";


        // --- Popup Close Controls ---
        const closePopup = () => {
            popup.classList.remove("iv-active");
            document.body.style.overflow = ""; // restore scroll
        };
        popupClose.addEventListener("click", closePopup);
        popupOverlay.addEventListener("click", closePopup);
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") closePopup();
        });

        // --- Keyboard Navigation ---
        const buttons = buttonContainer.querySelectorAll(".iv-section-btn");
        let currentIndex = 0;
        document.addEventListener("keydown", (e) => {
            if (e.key === "Tab") {
                e.preventDefault();
                currentIndex = (currentIndex + 1) % buttons.length;
                buttons[currentIndex].focus();
            }
        });
        
    }
}

var checkCondition = setInterval(function() {
    if (document.body && document.querySelector('.amw-accordion')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
