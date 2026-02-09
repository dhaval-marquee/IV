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
                padding: 8px 25px 5px;
            }
            .iv-sticky-footer-bar [role="dialog"].fixed {
                z-index: 99;
            }
            .iv-sticky-bottom-bar > div > div > div:last-child span {
                font-size: 15px;
            }
            .iv-sticky-footer-bar .saturate-100 a[href="/tutor/striders-choice"] {
                display: none;
            }
            
            @media (max-width:1023px) {
                .iv-sticky-bottom-bar>div>div {
                    margin-left: 0;
                    justify-content: center;
                }
                .iv-sticky-bottom-bar>div>div>div:first-child h5 {
                    font-size: 14px;
                }
            }
            @media (max-width: 800px) {
                .iv-sticky-bottom-bar>div>div>div:first-child h5 {
                    font-size: 13px;
                }
                .iv-sticky-bottom-bar>div>div {
                    justify-content: center;
                    gap: 6px;
                    flex-wrap: nowrap;
                }
                .iv-sticky-bottom-bar > div > div > div:first-child {
                    justify-content: center;
                }
                .iv-sticky-bottom-bar > div > div > div:last-child {
                    padding: 4px 12px 2px 12px;
                }
                .iv-sticky-bottom-bar > div > div > div:last-child svg {
                    display: none;
                }
                .iv-sticky-bottom-bar > div > div > div:first-child {
                    column-gap: 5px;
                }
                .iv-sticky-bottom-bar > div > div > div:last-child span {
                    font-size: 14px;
                }    
            }
            @media (max-width: 767px) {
                .iv-sticky-bottom-bar > div {
                    padding: 8px 10px;
                }
                .iv-sticky-bottom-bar>div>div>div:first-child h5:last-child {
                    display: none;
                }
                .iv-sticky-bottom-bar > div > div > div:last-child {
                    background: none;
                    padding: 0;
                    border-radius: 0;
                    text-decoration: underline;
                }
                .iv-sticky-bottom-bar>div>div>div:first-child h5,
                .iv-sticky-bottom-bar > div > div > div:last-child span {
                    font-size: 14px;
                }
            }
            @media (max-width: 430px) {
                .iv-sticky-bottom-bar>div>div>div:first-child h5,
                .iv-sticky-bottom-bar > div > div > div:last-child span {
                    font-size: 13px;
                }
                .iv-sticky-bottom-bar > div {
                    padding: 8px 3px;
                }
            }`;
        document.head.appendChild(styleTag);
    }

    const StriderChoice = document.querySelector('.iv-sticky-footer-bar .saturate-100 a[href="/tutor/striders-choice"]');
    const mainSection = document.querySelector('main');

    if (StriderChoice && mainSection) {
        // Check if already cloned
        if (!mainSection.querySelector('.iv-sticky-bottom-bar.cloned')) {
            const clonedElement = StriderChoice.cloneNode(true);
            clonedElement.classList.add('iv-sticky-bottom-bar', 'cloned');
            clonedElement.querySelector('div > div > div:last-child')?.classList.add('stickyFooter_button');
            mainSection.appendChild(clonedElement);
        }
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
        observerElm(targetElement, function() {
            loadTestCode();
        });
    }
}, 1000);
