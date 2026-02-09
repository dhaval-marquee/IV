function loadTestCode() {
    const body = document.body;
    if (!body) return;

    // Mark page once
    if (!body.classList.contains('iv-header-cta')) {
        body.classList.add('iv-header-cta');
    }

    // ---- STYLE (no :has used) ----
    if (!document.getElementById('iv-style')) {
        const styleTag = document.createElement('style');
        styleTag.id = 'iv-style';
        styleTag.textContent = `
        @media(max-width: 768.98px) {
            .iv-header-cta .getStartedCTA,
            .iv-header-cta #slide-out-widget-area.slide-out-from-right-hover .inner-wrap > .inner .off-canvas-menu-container .menu-item-23 > a {
                background-color: #0035F0;
                border: 2px solid #0035F0;
                border-radius: 100px;
                display: block;
                color: #fff;
                font-family: inherit;
                font-size: 16px;
                font-weight: inherit;
                line-height: 1;
                padding: 13px 16px;
                text-align: center;
                transition: background-color ease 0.3s, color ease 0.3s;
            }
            .iv-header-cta .getStartedCTA:hover,
            .iv-header-cta #slide-out-widget-area.slide-out-from-right-hover .inner-wrap > .inner .off-canvas-menu-container .menu-item-23 > a:hover {
                background-color: transparent;
                color: #0035F0;
            }
            .iv-header-cta .getStartedCTA {
                margin-right: 10px;
            }
        }
        @media(max-width: 400.98px) {
            .iv-header-cta #top #logo {
                width: calc(100% - 20px - 176px);
            }
            .iv-header-cta #top #logo img {
                max-width: 100%;
            }
        }
        `;
        (document.head || body).appendChild(styleTag);
    }

    // ---- DOM wiring (no :has used) ----
    const headerPlan = document.querySelector('header');
    if (!headerPlan) return;

    // Get Started
    if (headerPlan.querySelectorAll('.getStartedCTA').length == 0) {
        const getStartedCTA = headerPlan.querySelector('.mobile-icon');
        getStartedCTA.insertAdjacentHTML('beforebegin','<div class="mobile-view-only"><a href="https://book.tutoring.k12.com/account/register?freeSession=true" class="getStartedCTA">Get Started</a></div>');
    }
}

function runObserver() {
    const bodySelector = 'body';
    function waitForElement(bodySelector, timeout = 10000) {
        return new Promise((resolve, reject) => {
            const element = document.querySelector(bodySelector);
            if (element) {
                resolve(element);
                return;
            }

            const interval = setInterval(() => {
                const element = document.querySelector(bodySelector);
                if (element) {
                    clearInterval(interval);
                    resolve(element);
                }
            }, 100);

            setTimeout(() => {
                clearInterval(interval);
                reject(new Error(`Element not found: ${bodySelector}`));
            }, timeout);
        });
    }

    function executeTest() {
        waitForElement(bodySelector)
            .then((element) => {
                if (element) {
                    loadTestCode();
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const observer = new MutationObserver(function (mutations) {
        executeTest();
    });
    const config = {
        subtree: true,
        childList: true
    };
    observer.observe(document, config);
}
runObserver();

var i = 0;
var checkIntervalForObserver = setInterval(() => {
    if(document.querySelector('body') && !document.querySelector('body').classList.contains('iv-header-cta')) {
        setTimeout(() => {
            runObserver();
        }, 10);
        i++;
        if(i > 10000) {
            clearInterval(checkIntervalForObserver);
        }
    }
}, 10);
