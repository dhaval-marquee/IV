function loadTestCode() {
    document.querySelector('body').classList.add('sticky_bar_iv');
    
    // Add filter-accordion class to the first div
    const accordionDivs = document.querySelectorAll('.sticky_bar_iv section #filter-form > div');
    if (accordionDivs.length > 0) {
        accordionDivs[0].classList.add('filter-accordion');
    }

    // Click buttons in all .filter-accordion elements EXCEPT the first one
    const allFilterAccordions = document.querySelectorAll('.filter-accordion');
    if (allFilterAccordions.length > 1) {
        for (let i = 1; i < allFilterAccordions.length; i++) {
            let buttons = allFilterAccordions[i].querySelectorAll("button");
            buttons.forEach((button) => button.click());
        }
    }

    document.querySelectorAll('section header').forEach((head) => {
        if (head.innerText === 'Filters' && !document.querySelector('.iv-sidebar-filtter')) {
            head.closest('section').classList.add('iv-sidebar-filtter');
        }
    });
    
    const ivmMobFilter = document.querySelector('.sticky_bar_iv section div button[aria-label="Open Filters"]');
    if (ivmMobFilter) {
        ivmMobFilter.parentElement.classList.add('iv-mob-filter-section');
    }

    const ivMobFilterinner = `<div class="iv-mob-filter-inner">
                                    <span class="iv-mob-filter-text">Filters</span>
                            </div>`;

    if (ivmMobFilter && !document.querySelector('.iv-mob-filter-inner')) {
        ivmMobFilter.insertAdjacentHTML('beforebegin', ivMobFilterinner);
        var newDiv = document.querySelector('.iv-mob-filter-inner');
        newDiv.appendChild(ivmMobFilter);
    }

    var section = document.querySelector('.iv-mob-filter-section');
    var stickyOffset = section.offsetTop;

    window.onscroll = function() {
        if (window.pageYOffset > stickyOffset) {
            section.classList.add('sticky');
        } else {
            section.classList.remove('sticky');
        }
    };  
    
    let styleTag = document.createElement("style");
    styleTag.innerHTML = `
        @media (min-width: 768px) {
            .iv-sidebar-filtter {
                position: sticky;
                top: 140px;
                height: 100%;
            }
            .sticky_bar_iv.sticky_bar_iv .iv-sidebar-filtter {
                top: 140px;
            }
            .sticky_bar_iv section #filter-form .filter-accordion:not(:first-child),
            .sticky_bar_iv section #filter-form section {
                padding: 5px 16px;
            }
            .sticky_bar_iv section #filter-form section {
                padding: 0;
            }
            .sticky_bar_iv section #filter-form>label {
                padding-bottom: 5px;
            }
            .sticky_bar_iv.sticky_bar_iv .iv-sidebar-filtter > div {
                overflow: auto;
                max-height: calc(100vh - 150px);
                height: 100%;
            }
        }
    `;
    document.head.appendChild(styleTag);
}

// Check condition and initialize the code
function isBaseUrlMatch() {
    const currentUrl = window.location.origin + window.location.pathname;
    const baseUrl = 'https://book.tutoring.k12.com';

    return currentUrl.replace(/\/$/, '') === baseUrl.replace(/\/$/, '');
}

function onLocationChange() {
    if (isBaseUrlMatch()) {
        
        const checkCondition = setInterval(() => {
            if (document.querySelector('body')) {
                clearInterval(checkCondition);
                loadTestCode();
            }
        }, 2100);

    }
}

function overrideHistoryMethod(method) {
    const original = history[method];
    history[method] = function (...args) {
        const result = original.apply(this, args);
        window.dispatchEvent(new Event('locationchange'));
        return result;
    };
}

overrideHistoryMethod('pushState');
overrideHistoryMethod('replaceState');

window.addEventListener('popstate', onLocationChange);
window.addEventListener('locationchange', onLocationChange);

document.addEventListener('DOMContentLoaded', onLocationChange);

onLocationChange();
