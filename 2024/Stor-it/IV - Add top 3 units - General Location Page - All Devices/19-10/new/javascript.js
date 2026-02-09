// Observer
function observerElm(target, callbackFn) {
    const config = {
        childList: true,
        attributes: true,
        subtree: true,
    };
    const observer = new MutationObserver((mutationsList, observer) => {
        callbackFn(mutationsList, observer);
    });
    observer.observe(target, config);
}

function initializeDynamicSection() {
    const buttons = setInterval(() => {
        const highlightAdd = document.querySelector('.iv-top-item #facilities .highlightAdd');
        if (highlightAdd) {
            clearInterval(buttons);
            document.querySelectorAll('.iv-top-item #facilities .highlightAdd .candee_location_buttons a').forEach(link => {

                // Get URL href
                const linkHref = link.href;

                const closestSec = link.closest('.iv-top-item .candee-row');
                const existingNewItem = closestSec.querySelector('.iv-new-item');
                const viewBtn = closestSec.querySelector('.iv-view-btn');

                // Only add a new section if it doesn't already exist
                if (!existingNewItem) {
                    closestSec.insertAdjacentHTML('beforeend', `<div class="iv-new-item"></div>`);
                }
                if (!viewBtn && existingNewItem) {
                    existingNewItem.insertAdjacentHTML('afterend', `<a href='${linkHref}' class="iv-view-btn">VIEW ALL UNITS AT THIS LOCATION</a>`);
                }
                const newItem = closestSec.querySelector('.iv-new-item');

                // Check current children count
                if (newItem.children.length < 3) {
                    fetch(linkHref)
                        .then(response => {
                            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                            return response.text();
                        })
                        .then(htmlString => {
                            const parser = new DOMParser();
                            const doc = parser.parseFromString(htmlString, 'text/html');
                            const data = doc.querySelector('.rental-list > div');

                            if (data) {
                                const itemsToAdd = Array.from(data.children).slice(0, 3 - newItem.children.length);
                                itemsToAdd.forEach(item => {
                                    newItem.insertAdjacentElement('beforeend', item);
                                });
                            }
                        })
                        .catch(error => {
                            console.error('Request failed', error);
                        });

                    const anchorTags = document.querySelectorAll('.iv-top-item .iv-new-item .unitsTable .unitCellRightGroup .unitSelectOptions .minToggle-1.min a');

                    // Loop through each anchor tag
                    anchorTags.forEach(anchorTag => {
                        const newAnchorTag = anchorTag.cloneNode(true);
                        anchorTag.parentNode.replaceChild(newAnchorTag, anchorTag);

                        newAnchorTag.addEventListener('click', function (event) {
                            event.preventDefault();

                            window.location.href = newAnchorTag.getAttribute('href');
                        });
                    });
                }
            });
        }
    }, 2000);
}

function loadTestCode() {
    if (!document.body.classList.contains('iv-top-item')) {
        document.body.classList.add('iv-top-item');

        const targetElement = document.querySelector('.iv-top-item #facilities');
        observerElm(targetElement, () => {
            initializeDynamicSection();
        });
    }
}

const checkCondition = setInterval(() => {
    if (!document.body.classList.contains('iv-top-item')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
