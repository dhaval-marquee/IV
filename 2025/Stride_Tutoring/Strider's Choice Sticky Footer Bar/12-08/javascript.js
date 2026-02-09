function loadTestCode() {
    const body = document.querySelector('body');
    if (!body.classList.contains('iv-sticky-footer-bar')) {
        body.classList.add('iv-sticky-footer-bar');

        const styleTag = document.createElement("style");
        styleTag.innerHTML = `
            .iv-sticky-bottom-bar {
                position: fixed;
                z-index: 99;
                bottom: 0;
                width: 100%;
                background-color: #ffea2f;
                box-shadow: rgba(0, 0, 0, 1.35) 0px 5px 15px;
            }

            .iv-sticky-bottom-bar > div {
                background-color: #ffea2f;
                border-radius: 0;
                max-width: 1300px;
                padding: 7px 10px 6px;
            }

            .iv-sticky-bottom-bar > div > div > div:first-child {
                display: flex;
                color: #000;
                column-gap: 10px;
                row-gap: 0px;
                flex-wrap: wrap;
            }
            .iv-sticky-bottom-bar > div > img {
                width: 95px;
                height: auto;
            }
            .iv-sticky-bottom-bar > div > div {
                margin-left: 95px;
            }
            .iv-sticky-bottom-bar > div > div > div:first-child h5 {
                font-size: 17px;
                font-weight: 600;
                line-height: normal;
            }
            .iv-sticky-bottom-bar > div > div > div:first-child h5 > span {
                color: #0035f0;
                text-underline-offset: auto;
            }
            .iv-sticky-bottom-bar > div > div > div:last-child {
                padding: 5px 25px;
            }
            .iv-sticky-footer-bar [role="dialog"].fixed {
                z-index: 99;
            }
            .iv-sticky-bottom-bar > div > div > div:last-child span {
                font-size: 15px;
            }
            
            @media (max-width:1023px) {
                .iv-sticky-bottom-bar>div>div {
                    margin-left: 0;
                }
                .iv-sticky-bottom-bar>div {
                    padding: 8px 30px;
                }

                .iv-sticky-bottom-bar>div>div>div:first-child h5 {
                    font-size: 14px;
                }
            }
            @media (max-width: 639px) {
                .iv-sticky-bottom-bar>div>div>div:first-child h5 {
                    font-size: 13px;
                }
                .iv-sticky-bottom-bar>div>div {
                    justify-content: center;
                    gap: 6px;
                    flex-wrap: nowrap;
                }
                .iv-sticky-bottom-bar > div > div > div:last-child span {
                    font-size: 12px;
                }
                .iv-sticky-bottom-bar > div > div > div:first-child {
                    justify-content: center;
                }
                .iv-sticky-bottom-bar>div {
                    padding: 14px 5px 11px;
                }
                .iv-sticky-bottom-bar>div>div>div:first-child h5:last-child {
                    display: none;
                }
                .iv-sticky-bottom-bar > div > div > div:last-child {
                    padding: 4px 12px 2px 12px;
                }
                .iv-sticky-bottom-bar > div > div > div:last-child svg {
                    display: none;
                }
            }`;
        document.head.appendChild(styleTag);
    }

    const StriderChoice = document.querySelector('.iv-sticky-footer-bar .saturate-100 .col-span-full');
    const mainSection = document.querySelector('main');

    
    if (StriderChoice && mainSection) {
        // Ensure the class is added
        if (!StriderChoice.classList.contains('iv-sticky-bottom-bar')) {
            StriderChoice.classList.add('iv-sticky-bottom-bar');
        }
        
        // If StriderChoice is not directly inside <main>, move it
        if (StriderChoice.parentElement !== mainSection) {
            mainSection.appendChild(StriderChoice);
        }
        document.querySelector('.iv-sticky-bottom-bar > div > div > div:last-child').classList.add('stickyFooter_button');
    }
}


// Observer
function observerElm(target, callbackFn) {
    var config = {
        childList: true,
        attributes: true,
        subtree: true,
    };
    var callback = function(mutationsList, observer) {
        callbackFn(mutationsList, observer);
    };
    var observer = new MutationObserver(callback);
    observer.observe(target, config);
}

const checkReady = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(checkReady);
        loadTestCode();
        var targetElement = document.querySelector('body');
        observerElm(targetElement, function(mutationsList, observer) {
            loadTestCode();
        });
    }
}, 1000);