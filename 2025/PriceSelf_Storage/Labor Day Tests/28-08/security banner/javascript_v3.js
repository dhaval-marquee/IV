function observerElm(target, callbackFn) {
    var config = {
        childList: true,
        attributes: true,
        subtree: true,
    };
    var observer = new MutationObserver(function(mutationsList, observer) {
        callbackFn(mutationsList, observer);
    });
    observer.observe(target, config);
}

function loadTestCode() {
    const body = document.querySelector('body');
    if (!body || body.classList.contains('iv-security-banner')) return;

    body.classList.add('iv-security-banner');

    const bannerHTML = `
        <div class="iv-security-banner-section" role="region" aria-label="Labor Day Sale Banner">
            <div class="iv-security-banner-inner">
                <h3 class="iv-security-banner-info">
                    Labor Day Sale Up To <span class="highlight-text">50%* Off</span> Monthly Rent
                </h3>
            </div>
        </div>`;

    // Helper: insert only once after a target
    function insertBannerOnce(target) {
        if (!target) return;

        // ✅ Check if this target already has banner next to it
        if (
            target.nextElementSibling &&
            target.nextElementSibling.classList.contains('iv-security-banner-section')
        ) {
            return; // already inserted, skip
        }

        target.insertAdjacentHTML('afterend', bannerHTML);
    }

    // Observe desktop target
    observerElm(document.body, function() {
        const desktopTarget = document.querySelectorAll(
            '#locationsTabNavigation .pss-unit-list__container > div > .pss-unit-list__item'
        )[1];
        insertBannerOnce(desktopTarget);
    });

    // Observe mobile target
    observerElm(document.body, function() {
        const mobileTarget = document.querySelectorAll(
            '#locationsTabNavigation #repDataMobile_0 > div'
        )[2];
        insertBannerOnce(mobileTarget);
    });
}

// Bootstrap once body exists
const checkCondition = setInterval(function () {
    if (document.querySelector('body')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 500);
