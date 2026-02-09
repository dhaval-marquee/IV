function loadTestCode() {
    document.querySelector('body').classList.add('sticky_bar_iv');
    
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
        
    const ivAvailabilityDay = document.querySelectorAll('.sticky_bar_iv section #filter-form section div button[type="button"].peer');
    if (ivAvailabilityDay) {
        ivAvailabilityDay.forEach((days) => {
            days.closest('div').classList.add('iv-availability-day');
        })
    }    

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

    const tutorCountEl = document.querySelector('.sticky_bar_iv section .iv-mob-filter-section > div h2 span');
    if (tutorCountEl) {
        const text = tutorCountEl.textContent;
        const updatedHTML = text.replace(/\(\d+\)/, match => `<strong>${match}</strong>`);
        tutorCountEl.innerHTML = updatedHTML;
    }


    window.addEventListener('scroll', function () {
        const newFilterSection = document.querySelector('.iv-mob-filter-section');
        if (!newFilterSection) return;
    
        const newHeaderHeight = document.querySelector('header')?.clientHeight || 0;
        const newTimeHeight = document.querySelector('.top-header-height-mobile-sticky')?.clientHeight || 0;
        const newTotalOffset = newFilterSection.offsetTop - (newHeaderHeight + newTimeHeight - 5);
    
        if (window.scrollY >= newTotalOffset) {
            document.body.classList.add('filter-sticky');
            // newFilterSection.style.top = newTotalOffset + 'px';
        } else {
            document.body.classList.remove('filter-sticky');
            // newFilterSection.style.top = '0px';

        }
    });
    

    var filterSection = document.querySelector('.iv-mob-filter-section');
	function getHeightsAndStickyOffset() {
	    var headerHeights = document.querySelector('header').clientHeight;
	    var timeHeights = document.querySelector('.top-header-height-mobile-sticky').clientHeight;
	    var storeHeights = headerHeights + timeHeights - 5;
	    var stickyOffset = filterSection.offsetTop - storeHeights;
	    return { storeHeights, stickyOffset};
	}
	
	let { storeHeights, stickyOffset } = getHeightsAndStickyOffset();
    function handleSticky() {
        if (window.pageYOffset > stickyOffset) {
            // filterSection.style.top = storeHeights + 'px';
            // filterSection.style.boxShadow = '0px 2px 7px rgba(0, 0, 0, 0.1)';
            // filterSection.style.padding = '5px';
        } else {
            filterSection.classList.remove('sticky');
            // filterSection.style.boxShadow = '';
        }
    }    
    
	window.addEventListener('scroll', handleSticky);
	
	function updateStickyValues() {
        const values = getHeightsAndStickyOffset();
        storeHeights = values.storeHeights;
        stickyOffset = values.stickyOffset;
        handleSticky();
    }
    
    window.addEventListener('resize', updateStickyValues);
    window.addEventListener('load', updateStickyValues);

}

let styleTag = document.createElement("style");
    styleTag.innerHTML = `          
        @media (min-width: 768px) {
            .sticky_bar_iv .iv-mob-filter-text{
                display: none;
            }
        }

        @media (max-width:767px) {
            .iv-sidebar-filtter {
                position: sticky;
                top: 100px;
                height: 100%;
            }
            .sticky_bar_iv section #filter-form .filter-accordion,
            .sticky_bar_iv section #filter-form section{
                padding: 5px 16px;
            }
            .sticky_bar_iv section #filter-form > div:first-child {
                padding: 5px;
            }
            .sticky_bar_iv section #filter-form > div:first-child h3 button {
                padding: 0;
            }
            .sticky_bar_iv section #filter-form > label {
                padding-bottom: 5px;
            }
            .iv-availability-day {
                margin: 4px 10px 4px 0;
            }

            .iv-mob-filter-text {
                font-size: 13px;
                display: inline-block;
                color: #001e6a;
            }
            .sticky_bar_iv section .iv-mob-filter-section > div h2 span {
                font-weight: 400;
                font-size: 13px;
                text-align: center;
                display: inline-block;
            }
            .iv-mob-filter-inner{
                width: min-content;
                text-align: center;
            }
            .iv-mob-filter-inner button {
                padding: 5px 13px;
                min-height: auto !important;
            }
            .sticky_bar_iv section .iv-mob-filter-section div button[aria-label="Sort By"] {
                width: 180px;
            }
            .iv-mob-filter-section{
                position: sticky;
                top: 120px;
                left: 0;
                z-index: 9;
                background-color: #fff;
                // box-shadow: 0px 2px 7px rgba(0, 0, 0, .1);
            }
            .sticky_bar_iv > div[data-state="open"][data-aria-hidden="true"][aria-hidden="true"].fixed.inset-0 {
                z-index: 9999;
            }
            .sticky_bar_iv > div[data-state="open"][role="dialog"].pt-header-height-mobile {
                z-index: 99999;
            }
            .sticky_bar_iv > div[data-state="open"][role="dialog"].fixed {
                z-index: 9999;
            }
            .filter-sticky .iv-mob-filter-section {
                margin: 0 -16px;
                width: calc(100% + 32px);
                box-shadow : 0px 2px 7px rgba(0, 0, 0, 0.1);
                padding: 5px 16px;
                transition-property: all;
                transition-timing-function: cubic-bezier(.4,0,.2,1);
                transition-duration: .15s;
            }
        }
        @media (max-width:639px) {
            .iv-mob-filter-section{
                top: 99px;
            }
        }
    `;
    document.head.appendChild(styleTag);

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
        }, 2500);

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
