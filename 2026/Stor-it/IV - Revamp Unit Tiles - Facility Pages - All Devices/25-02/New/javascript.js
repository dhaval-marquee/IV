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

function variant() {
    const allUnitsList = document.querySelectorAll('.unitsWrapper .rental-list .unitsList');
    if (!allUnitsList.length) return;

    allUnitsList.forEach((list) => {
        // SEE WHAT FITS IN THIS UNIT --- moved
        const seeStorage = list.querySelector('.unitsTable .unitSeeStorage');
        if (seeStorage) {
            const newParent = list.querySelector(
                '.unitsTable .unitCellRightGroup .unitsCellMid'
            );
            if (!newParent) return;

            if (seeStorage.dataset.moved === "true") return;

            newParent.appendChild(seeStorage);

            seeStorage.dataset.moved = "true";
        }

        // Minimum Insurance Policy --- moved
        const policyText = list.querySelector('.unitsTable .startingFromText');
        if (policyText) {
            const newParent = list.querySelector(
                '.unitsTable .unitCellRightGroup .unitSelectOptions'
            );
            if (!newParent) return;

            if (policyText.dataset.moved === "true") return;

            newParent.prepend(policyText);

            policyText.dataset.moved = "true";
        }

        // cardPrice --- moved
        const carPrice = list.querySelector('.unitsTable .cardPrice');
        if (carPrice) {
            const newParent = list.querySelector(
                '.unitsTable .unitCellRightGroup .content_unitBreakdown'
            );
            if (!newParent) return;

            if (carPrice.dataset.moved === "true") return;

            newParent.prepend(carPrice);

            carPrice.dataset.moved = "true";
        }

        // discountText formatting
        const discountText = list.querySelector('.unitsTable .discountText');

        if (discountText && !discountText.dataset.formatted) {

            const originalText = discountText.textContent.trim();

            if (/^WEB ONLY-/i.test(originalText)) {

                const remainingText = originalText.replace(/^WEB ONLY-/i, '');

                const formattedText = remainingText.replace('-', ', ');

                discountText.innerHTML = `<span class="web-only">WEB ONLY</span> ${formattedText}`;

                discountText.dataset.formatted = "true";

                // Create new div that contains only formattedText
                const unitsTable = list.querySelector('.unitsTable');

                if (unitsTable && !unitsTable.querySelector('.iv-discount-new')) {
                    const newDiv = document.createElement('div');
                    newDiv.className = 'iv-discount-new';
                    newDiv.textContent = formattedText;

                    unitsTable.appendChild(newDiv);
                }
            }

        }
    });
}

function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-revamp-unit')) {
        document.querySelector('body').classList.add('iv-revamp-unit');

        const targetElement = document.querySelector('body');
        observerElm(targetElement, () => {
            variant();
        });
    }
}

const checkCondition = setInterval(function () {
    if (document.querySelector('body')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);