function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-quiz-form')) {
        document.querySelector('body').classList.add('iv-quiz-form');

        // Storage box section
        const storageBoxSection = `<div class="storage-section">
            <h4 class="storage-heading">What storage solution are you looking for?</h4>
            <div class="storage-items">
                <div class="storage-item">
                    <label class="storage-box">
                        <input type="radio" name="storage-box" value="Self Storage Solutions" class="selector-value">
                        <div class="storage-box-icon">
                            <svg role="presentation">
                                <use href="/Assets/sprite/icons.svg#self-storage"></use>
                            </svg>
                        </div>
                        <span>Self Storage Solutions</span>
                    </label>
                </div>
                <div class="storage-item">
                    <label class="storage-box">
                        <input type="radio" name="storage-box" value="Business Storage Solutions" class="selector-value">
                        <div class="storage-box-icon">
                            <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/PriceSelfStorage/StoragePickerQuiz/Business-Storage.png" />
                        </div>
                        <span>Business Storage Solutions</span>
                    </label>
                </div>
                <div class="storage-item">
                    <label class="storage-box">
                        <input type="radio" name="storage-box" value="Vehicle, RV & Boat Storage" class="selector-value">
                        <div class="storage-box-icon">
                            <svg role="presentation">
                                <use href="/Assets/sprite/icons.svg#vehicles"></use>
                            </svg>
                        </div>
                        <span>Vehicle, RV & Boat Storage</span>
                    </label>
                </div>
                <p class="select-error">*Please select any one.</p>
                <button class="next-cta">Next</button>
            </div>
        </div>`;

        if (!document.querySelector('.storage-section') && document.querySelector('.iv-quiz-form #content-area .post-content')) {
            const postContent = document.querySelector('#content-area .post-content');
            const children = postContent.children;

            // Add to the midpoint
            // if (children[midpoint] && window.location.href !== 'https://www.priceselfstorage.com/blog/') {
            //     children[midpoint].insertAdjacentHTML('beforebegin', storageBoxSection);
            // }
            const headings = document.querySelectorAll('.post-content h2');
            const headingsH3 = document.querySelectorAll('.post-content h3');
            if (headings.length >= 4 && window.location.href !== 'https://www.priceselfstorage.com/blog/') {
                headings[3].insertAdjacentHTML('beforebegin', storageBoxSection);
            } else if (headingsH3.length >= 4 && window.location.href !== 'https://www.priceselfstorage.com/blog/') {
                headingsH3[3].insertAdjacentHTML('beforebegin', storageBoxSection);
            }

            // Add to the last element
            const lastChild = children[children.length - 1];
            if (lastChild && window.location.href !== 'https://www.priceselfstorage.com/blog/') {
                lastChild.insertAdjacentHTML('afterend', storageBoxSection);
            }
        }


        const mediumCopy = `Our medium 10x10* storage unit is the go-to unit size for slightly larger personal or business storage needs. This unit is ideal for storage while you are undergoing a move, remodel, or transitioning a loved one and their belongings and furniture to a new place. The 10x10* unit is also perfect for those that need extra space for their business such as a place for business storage files and office furniture.`;

        // Quiz Modals
        const stepTitle = ` <div class="storage-title">
                                    <div class="storage-icon">

                                    </div>
                                    <span class="storage-name"></span>
                                </div>`;

        const quizModals = `<div class="quiz-model">
            <div class="model-wrapper">
                <div class="model-container">
                    <div class="model-content">
                        <div class="model-head">
                            <a href="javascript:;" class="model-previous-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="98" height="38" viewBox="0 0 98 38" fill="none">
                                    <path d="M1.23223 17.2322C0.25592 18.2085 0.25592 19.7915 1.23223 20.7678L17.1421 36.6777C18.1184 37.654 19.7014 37.654 20.6777 36.6777C21.654 35.7014 21.654 34.1184 20.6777 33.1421L6.53554 19L20.6777 4.85786C21.654 3.88155 21.654 2.29864 20.6777 1.32233C19.7014 0.34602 18.1184 0.34602 17.1421 1.32233L1.23223 17.2322ZM98 16.5L3 16.5V21.5L98 21.5V16.5Z" fill="#A0A0A0"></path>
                                </svg>
                                <span>Previous Step</span>
                            </a>
                            <div class="right-button">
                                <a class="closed-button" href="javascript:;"><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/PriceSelfStorage/StoragePickerQuiz/closed.png" alt="" /></a>
                                <span>1 of 2</span>
                            </div>
                        </div>
                        ${stepTitle}
                        <div class="step step-1">
                            <div class="model-body">
                                <div class="quiz-question">What storage solution are you looking for?</div>

                                <div class="row">
                                    <div class="col-12">
                                        <label class="storage-box">
                                            <input type="radio" name="storage-box-model" value="Self Storage Solutions" class="selector-value">
                                            <div class="storage-box-icon">
                                                <svg role="presentation">
                                                    <use href="/Assets/sprite/icons.svg#self-storage"></use>
                                                </svg>
                                            </div>
                                            <span>Self Storage Solutions</span>
                                        </label>
                                    </div>
                                    <div class="col-12">
                                        <label class="storage-box">
                                            <input type="radio" name="storage-box-model" value="Business Storage Solutions" class="selector-value">
                                            <div class="storage-box-icon">
                                                <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/PriceSelfStorage/StoragePickerQuiz/Business-Storage.png" />
                                            </div>
                                            <span>Business Storage Solutions</span>
                                        </label>
                                    </div>
                                    <div class="col-12">
                                        <label class="storage-box">
                                            <input type="radio" name="storage-box-model" value="Vehicle, RV & Boat Storage" class="selector-value">
                                            <div class="storage-box-icon">
                                                <svg role="presentation">
                                                    <use href="/Assets/sprite/icons.svg#vehicles"></use>
                                                </svg>
                                            </div>
                                            <span>Vehicle, RV & Boat Storage</span>
                                        </label>
                                    </div>
                                    <div class="col-12">
                                        <button class="next-btn quiz-cta">Next</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="step step-2">
                            <div class="model-body">
                                <div class="quiz-question">How much storage <br/> space do you need?</div>

                                <div class="quiz-storage">
                                    <div id="small" class="tab-content">
                                        <div class="tab-content-box">
                                            <div class="tab-content-img">
                                                <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1732180738/PriceSelfStorage/StoragePickerQuiz/small-storage.png" />
                                            </div>
                                            <p>Small</p>
                                        </div>
                                    </div>
                                    <div id="medium" class="tab-content">
                                        <div class="tab-content-box most-popular">
                                            <span class="popular-tag">MOST POPULAR</span>
                                            <div class="tab-content-img">
                                                <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1732166720/PriceSelfStorage/StoragePickerQuiz/Medium-Storage.png" />
                                            </div>
                                            <p>Medium</p>
                                        </div>
                                    </div>
                                    <div id="large" class="tab-content">
                                        <div class="tab-content-box">
                                            <div class="tab-content-img">
                                                <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1732605774/PriceSelfStorage/StoragePickerQuiz/Locker-Storage-large.png" />
                                            </div>
                                            <p>Large</p>
                                        </div>
                                    </div>
                                    
                                    <div class="tabs">
                                        <div class="tab" data-tab="small">Small</div>
                                        <div class="tab" data-tab="medium">Medium</div>
                                        <div class="tab" data-tab="large">Large</div>
                                    </div>
                                </div>

                                <div class="toggle-section">
                                    <div class="toggle-header" id="toggleButton">
                                        <span class="size-guide">SIZE GUIDE</span>
                                        <span class="arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="19" viewBox="0 0 30 19" fill="none">
                                            <path d="M17.1458 17.8038C15.9688 19.0084 14.0312 19.0084 12.8542 17.8038L0.927052 5.59655C-0.929073 3.69684 0.416893 0.5 3.07285 0.5L26.9271 0.5C29.5831 0.5 30.9291 3.69684 29.0729 5.59656L17.1458 17.8038Z" fill="#D9D9D9"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div class="toggle-content" id="toggleContent">
                                        <p><strong>Small:</strong> <span></span></p>
                                        <p><strong>Medium:</strong> <span></span></p>
                                        <p><strong>Large:</strong> <span></span></p>
                                    </div>
                                </div>

                                <div class="location-search">
                                    <h3 class="location-title">Where do you need it?</h3>
                                    <div class="location-box">
                                        <div class="location-icon"><img src="//res.cloudinary.com/ignite-visibility/image/upload/v1732166719/PriceSelfStorage/StoragePickerQuiz/Location.png" alt="" /></div>
                                        <input type="text" class="location-input" placeholder="Enter your location"/>
                                    </div>
                                    <p class="error-location"> <b> Location is Required * </b></p>
                                    <button class="quiz-cta find-cta">Find My Perfect Unit!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

        if (!document.querySelector('.quiz-model')) {
            document.body.insertAdjacentHTML('beforeend', quizModals);

            document.querySelectorAll('.storage-box').forEach(box => {
                box.addEventListener('click', function() {

                    document.body.classList.add('open-model');

                    const input = this.querySelector('input[type="radio"]');
                    if (input) {
                        input.checked = true;
                        localStorage.setItem('model-title', input.value);
                    }

                    updateSizeGuideContent();


                    input.checked = true;

                    const quizModel = document.querySelector('.quiz-model');
                    if (quizModel) {
                        quizModel.style.display = 'block';
                    }
                    const step1 = document.querySelector('.step-1')
                    const previousButton = document.querySelector('.model-previous-button');
                    if (step1) {
                        step1.classList.add('step-active');
                        if (step1.classList.contains('step-active')) {
                            previousButton.classList.add('previous-none');
                        }
                    }
                    const modelBoxes = document.querySelectorAll('.model-body .storage-box');
                    modelBoxes.forEach(modelBox => {
                        const modelInput = modelBox.querySelector('input[type="radio"]');
                        modelBox.classList.remove('active-box');
                        if (modelInput.value === input.value) {
                            modelBox.classList.add('active-box');
                        }
                    });

                    localStorage.setItem("model-title", input.value);

                    const modelTitle = localStorage.getItem('model-title');
                    const toggleContent = document.getElementById('toggleContent');
                    const updateText = (textMap) => {
                        toggleContent.querySelectorAll('p strong').forEach(size => {
                            const key = size.innerText.replace(':', '');
                            if (textMap[key]) {
                                size.nextElementSibling.innerText = textMap[key];
                            }
                        });
                    };

                    const toggleClass = (add) => {
                        const mediumBox = document.querySelector('#medium .tab-content-box');
                        if (mediumBox) {
                            mediumBox.classList.toggle('most-popular', add);
                        }
                    };

                    if (modelTitle === 'Self Storage Solutions') {
                        localStorage.setItem('model-title', 'Self Storage');

                        updateText({
                            Small: `Our small storage units are the perfect size for anyone that needs self storage for seasonal items, sports equipment, small furniture, or several large boxes of miscellaneous stuff. If you don't have enough room in your home or apartment to store some of your personal items, consider extending your storage space with our 5x5 storage unit or our 5x10 storage unit.`,
                            Medium: `${mediumCopy}`,
                            Large: `Our large storage units are the perfect unit sizes for those that need to store their family's belongings during a big move or simply have a ton of larger items that need to be stored. Store major appliances, mattress sets, large furniture, extra patio furniture, and more! Rent a large unit today if you need to store the contents of multiple rooms. Our large units come in 10x15, 10x20, and 10x30 sizes.`
                        });

                        toggleClass(false);

                    } else if (modelTitle === 'Business Storage Solutions') {
                        localStorage.setItem('model-title', 'All');

                        updateText({
                            Small: `Small storage units are perfect for home-based online businesses to store products you sell (inventory) before shipment. It could also store seasonal items, like clothing, shoes, or office supplies for small businesses.`,
                            Medium: `Medium units are great for offices, small businesses, contractors, and creatives needing space to store inventory, tools, or seasonal goods like product stock, office supplies, and equipment.`,
                            Large: `Large units are deal for businesses storing bulk inventory, office furniture, or heavy equipment. Perfect for wholesalers, construction companies, and event planners to store items like furniture, machinery, tools, or large products before shipment.`
                        });

                        toggleClass(true);
                    } else if (modelTitle === 'Vehicle, RV & Boat Storage') {
                        localStorage.setItem('model-title', 'Vehicle');

                        updateText({
                            Small: `Small storage units are perfect for home-based online businesses to store products you sell (inventory) before shipment. It could also store seasonal items, like clothing, shoes, or office supplies for small businesses.`,
                            Medium: `Medium units are great for offices, small businesses, contractors, and creatives needing space to store inventory, tools, or seasonal goods like product stock, office supplies, and equipment.`,
                            Large: `Large units are deal for businesses storing bulk inventory, office furniture, or heavy equipment. Perfect for wholesalers, construction companies, and event planners to store items like furniture, machinery, tools, or large products before shipment.`
                        });
                        toggleClass(false);
                    }

                    const svgStore = document.querySelector('.active-box .storage-box-icon');
                    const valueStore = document.querySelector('.active-box span').innerText;

                    if (svgStore) {
                        const clonedSvg = svgStore.cloneNode(true);
                        const targetElement = document.querySelector('.storage-icon');
                        if (targetElement) {
                            targetElement.innerHTML = '';
                            targetElement.appendChild(clonedSvg);
                        }
                    }
                    document.querySelector('.storage-name').innerText = valueStore;
                });
            });

            document.querySelector('.closed-button').addEventListener('click', function() {
                const quizModel = document.querySelector('.quiz-model');
                const radioButtons = document.querySelectorAll('input[type="radio"]');

                radioButtons.forEach(radio => radio.checked = false);
                if (document.querySelector('.select-error')) {
                    const selectErrors = document.querySelectorAll('.select-error');

                    // Loop through each .select-error element
                    selectErrors.forEach(function(selectError) {
                        // Check if the display style is set to 'block'
                        if (selectError.style.display === "block") {
                            selectError.style.display = "none"; // Hide the error
                        }
                    });
                }

                if (quizModel) {
                    quizModel.style.display = '';
                }
                if (document.body.classList.contains('open-model')) {
                    document.body.classList.remove('open-model');
                }
                document.querySelector('.right-button span').innerText = "1 of 2";
                document.querySelectorAll('.step').forEach(function(step) {
                    if (step.classList.contains('step-active')) {
                        step.classList.remove('step-active');
                    }
                });
            });
            if (document.querySelector('.next-cta') && document.querySelector('.select-error')) {
                const nextButtons = document.querySelectorAll('.next-cta');

                nextButtons.forEach(function(nextButton) {
                    nextButton.addEventListener('click', function() {
                        const selectedOption = document.querySelector('input[type="radio"]:checked');
                        const quizModel = document.querySelector('.quiz-model');

                        if (selectedOption) {
                            quizModel.style.display = 'block'; // Show the modal
                            nextButton.previousElementSibling.style.display = 'none';
                        } else {
                            quizModel.style.display = 'none'; // Hide the modal
                            nextButton.previousElementSibling.style.display = 'block';
                        }
                    });
                });
            }
            //step-active
            const previousButton = document.querySelector('.model-previous-button');

            function togglePreviousButton() {
                const step1 = document.querySelector('.step-1');
                const step2 = document.querySelector('.step-2');

                if (step1 && step1.classList.contains('step-active')) {
                    previousButton.classList.add('previous-none');
                } else if (step2 && step2.classList.contains('step-active')) {
                    previousButton.classList.remove('previous-none');
                }
            }

            const nextButton = document.querySelector('.next-btn');
            nextButton.addEventListener('click', () => {
                document.querySelector('.step-1').classList.remove('step-active');
                document.querySelector('.step-2').classList.add('step-active');
                togglePreviousButton();
                document.querySelector('.tabs .tab:first-child').click();
                document.querySelector('.right-button span').innerText = "2 of 2";
            });

            previousButton.addEventListener('click', () => {
                document.querySelector('.step-2').classList.remove('step-active');
                document.querySelector('.step-1').classList.add('step-active');
                document.querySelector('.right-button span').innerText = "1 of 2";
                togglePreviousButton();
            });
            togglePreviousButton();


            // Tab switching
            const tabs = document.querySelectorAll('.tab');
            const contents = document.querySelectorAll('.tab-content');

            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    tabs.forEach(t => t.classList.remove('active'));
                    contents.forEach(content => content.classList.remove('active'));
                    tab.classList.add('active');
                    document.getElementById(tab.dataset.tab).classList.add('active');
                    updateTabText();
                });
            });

            // Save active tab text to localStorage
            function updateTabText() {
                if (document.querySelector('.tab.active')) {
                    const tabText = document.querySelector('.tab.active').innerText;
                    localStorage.setItem('tabText', tabText);
                    sessionStorage.setItem('tabText', tabText);
                }
            }
            updateTabText();

            function updateSizeGuideContent() {
                const modelTitle = localStorage.getItem('model-title');
                const activeTab = document.querySelector('.tab.active');

                // Default text for Medium tab
                const defaultMediumText = `${mediumCopy}`;

                const mediumTextElement = document.querySelector('#toggleContent p:nth-child(2) span');

                if (mediumTextElement) {
                    if (activeTab && activeTab.dataset.tab === 'medium' && modelTitle === 'Self Storage') {
                        mediumTextElement.innerText = `Our medium storage units are the go-to for slightly larger personal needs. This unit is ideal for storage while you are undergoing a move, remodel, or transitioning a loved one and their belongings and furniture to a new place.`;
                    } else {
                        mediumTextElement.innerText = defaultMediumText;
                    }
                }
            }

            document.querySelectorAll('.tab').forEach(tab => {
                tab.addEventListener('click', () => {
                    updateSizeGuideContent();
                });
            });

            // Toggle Button
            const toggleButton = document.getElementById('toggleButton');
            const toggleContent = document.getElementById('toggleContent');

            toggleButton.addEventListener('click', () => {
                toggleButton.classList.toggle('active');
                toggleContent.classList.toggle('active');

                updateSizeGuideContent();
            });

            document.querySelector('.location-search input').addEventListener('input', function() {

                const errorMessage = document.querySelector('.error-location');
                errorMessage.style.display = 'none';
            });
            document.querySelector('.find-cta').addEventListener('click', function(event) {
                const inputField = document.querySelector('.location-search input');
                const errorMessage = document.querySelector('.error-location');
                const locationInput = document.querySelector('.location-input').value.trim();

                if (locationInput) {
                    localStorage.setItem('userLocation', locationInput);
                }

                if (inputField.value.trim() === '') {
                    errorMessage.style.display = 'block';
                } else {
                    errorMessage.style.display = 'none';
                    window.open("https://www.priceselfstorage.com/locations/", "_self");

                    let modelTitle = localStorage.getItem('model-title');
                    if (modelTitle === 'Vehicle') {
                        localStorage.setItem('tabText', '');
                    }
                }
            });

            if (window.location.pathname == '/locations/') {
                const locationKey = 'userLocation';
                const inputField = document.querySelector('#txtLocationsSearch');
                const searchButton = document.querySelector('#MainContent_btnSearch');

                if (!searchButton.classList.contains('clicked')) {
                    const userLocation = localStorage.getItem(locationKey);
                    if (userLocation) {
                        inputField.value = userLocation;
                        searchButton.click();

                        searchButton.classList.add('clicked');

                        localStorage.removeItem(locationKey);
                    }
                }
            }


        }

        // location page click
        const modelTitle = localStorage.getItem('model-title');
        const tabText = localStorage.getItem('tabText');
        if (document.querySelectorAll('.pss-expand-filters__row label')) {
            const labels = document.querySelectorAll('.pss-expand-filters__row label');

            labels.forEach(label => {
                if (label.innerText === modelTitle || label.innerText === tabText) {
                    const input = label.previousElementSibling;

                    if (input && input.tagName === 'INPUT') {
                        input.click()
                    }
                }
            });
        }

        // Click on tab base on the quiz
        function triggerSpecificTabsBasedOnSessionStorage(key, containerSelector) {
            const tabText = sessionStorage.getItem(key);
        
            if (tabText) {
                const container = document.querySelector(containerSelector);
                if (container) {
                    const buttons = container.querySelectorAll("button");
                    const validTabs = ["Small", "Medium", "Large"];
                    if (validTabs.includes(tabText)) {
                        buttons.forEach(button => {
                            const buttonText = button.textContent.trim();
                            if (buttonText === tabText) {
                                const isActive = button.classList.contains('active') || button.getAttribute('aria-selected') === 'true';
                                if (!isActive) {
                                    button.click();
                                }
                                sessionStorage.removeItem(key);
                            }
                        });
                    }
                }
            }
        }
        
        const waitForSpecificTabs = setInterval(() => {
            const filtersRow = document.querySelector(".locationContent .pss-filters-row__advanced-filters");
            if (filtersRow) {
                clearInterval(waitForSpecificTabs);
                triggerSpecificTabsBasedOnSessionStorage("tabText", ".locationContent .pss-filters-row");
            }
        }, 500);

    }
}

// Check condition and initialize the code
const checkCondition = setInterval(() => {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
