function loadTestCode() {
    const body = document.body;
    if (!body) return;

    // Mark page once
    if (!body.classList.contains('iv-register')) {
        body.classList.add('iv-register');
    }

    // ---- STYLE (no :has used) ----
    if (!document.getElementById('iv-style')) {
        const styleTag = document.createElement('style');
        styleTag.id = 'iv-style';
        styleTag.textContent = `
        .iv-register :focus-visible {
            outline: none;
        }
        .iv-register .mainHeading {
            color: var(--primary-7);
        }
        .iv-register .highlightedText {
            position: relative;
        }
        .iv-register .highlightedText svg {
            width: 100%;
            height: 30%;
            top: auto;
            bottom: -17%;
            position: absolute;
            left: 0;
            z-index: 0;
            clip-path: inset(0 100% 0 0);
            animation: reveal 1.3s ease-in-out 0.3s forwards;
        }
        @keyframes reveal {
            0% {
                clip-path: inset(0 100% 0 0);
            }
            100% {
                clip-path: inset(0 0 0 0);
            }
        }
        .iv-register main form button[type="submit"]:not([disabled]) {
            font-size: 0;
        }
        .iv-register main form button[type="submit"]:not([disabled])::before {
            content: 'Get Your Free Tutoring Hour!';
            font-size: var(--font-size-lg);
        }
        `;
        (document.head || body).appendChild(styleTag);
    }

    // ---- DOM wiring (no :has used) ----
    const mainPlan = document.querySelector('main');
    if (!mainPlan) return;

    // Heading
    if (mainPlan.querySelectorAll('.mainHeading').length == 0) {
        const mainHeading = mainPlan.querySelectorAll('h2')[0];
        mainHeading.classList.add('hidden');
        mainHeading.insertAdjacentHTML('afterend','<h2 class="px-4 text-center text-4xl font-bold leading-9 md:p-0 mainHeading">Get a<span class="inline-block ml-2 mb-2 max-w-fit -rotate-6 rounded-[0.6rem] border-4 border-primary-9 bg-accent-4 px-2 py-1 uppercase text-primary-9 md:mx-2.5 md:my-0 md:text-2xl">FREE</span><br class="block md:hidden">Hour of Tutoring!</h2>');
    }

    // Number 2 bullet
    if (mainPlan.querySelectorAll('.bulletList').length == 0) {
        const bulletList = mainPlan.querySelectorAll('ol li:nth-child(2) > div')[1];
        bulletList.classList.add('hidden');
        bulletList.insertAdjacentHTML('afterend','<div class="space-y-[6px] bulletList"><h3 class="text-lg font-bold leading-[26px]">Get a <span class="highlightedText">FREE<svg viewBox="-400 -55 730 60" preserveAspectRatio="none"><path style="animation-duration: 1.8s;" d="m -383.25 -6 c 55.25 -22 130.75 -33.5 293.25 -38 c 54.5 -0.5 195 -2.5 401 15" stroke="#ef6100" pathLength="1" stroke-width="20" fill="none"></path></svg></span> 1 hour session</h3><p class="text-md">Try us out and see progress from the very first session</p></div>');
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
    if(document.querySelector('body') && !document.querySelector('body').classList.contains('iv-register')) {
        setTimeout(() => {
            runObserver();
        }, 10);
        i++;
        if(i > 10000) {
            clearInterval(checkIntervalForObserver);
        }
    }
}, 10);