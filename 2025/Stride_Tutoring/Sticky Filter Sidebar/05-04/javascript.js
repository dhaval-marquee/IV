function loadTestCode() {
    if (!document.body.classList.contains('sticky_bar_iv')) {
        document.body.classList.add('sticky_bar_iv');

        let buttons = document.querySelectorAll(".filter-accordion button");
        if(buttons){
            buttons.forEach((button, index) => {
                button.click();
            });
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
             .iv-sidebar-filtter {
                position: sticky;
                top: 100px;
                height: 100%;
            }
            .iv-sticky-price-bar.sticky_bar_iv .iv-sidebar-filtter {
                top: 140px;
            }
            .sticky_bar_iv section #filter-form .filter-accordion,
            .sticky_bar_iv section #filter-form section{
                padding: 5px 16px;
            }
            .sticky_bar_iv section #filter-form > label {
                padding-bottom: 5px;
            }
            .iv-availability-day {
                margin: 4px 10px 4px 0;
            }
            .iv-mob-filter-text{
            	display: none;
            }

            @media screen and (max-width: 767px) {
                .iv-mob-filter-text {
                    font-size: 13px;
                    display: inline-block;
                    color: #001e6a;
                }
                .sticky_bar_iv section div h2 span {
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
                .sticky_bar_iv section div button[aria-label="Sort By"] {
                    width: 180px;
                }
                .iv-mob-filter-section.sticky {
                    position: fixed;
                    top: 65px;
                    left: 0;
                    width: 100%;
                    z-index: 1000;
                    background-color: #fff;
                    box-shadow: 0px 2px 7px rgba(0, 0, 0, .1);
                    padding: 5px 20px;
                }
            }
        `;
        document.head.appendChild(styleTag);

    }
}

var checkCondition = setInterval(function() {
    if (document.body && document.querySelector('.filter-accordion button')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 2500);
