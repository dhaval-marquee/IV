// document.querySelector('body').style.visibility = "hidden";

// setTimeout(() => {
//     if (!document.querySelector('body').dataset.visibilitySet) {
//         document.querySelector('body').style.visibility = "";
//         document.querySelector('body').dataset.visibilitySet = "true";
//     }
// }, 5000);

function loadTestCode() {
    const body = document.body;
    if (!body) return;

    // Mark page once
    if (!body.classList.contains('iv-1-hour-option-in-tutoring')) {
        body.classList.add('iv-1-hour-option-in-tutoring');
    }

  // ---- STYLE (no :has used) ----
    if (!document.getElementById('iv-style')) {
        const styleTag = document.createElement('style');
        styleTag.id = 'iv-style';
        styleTag.textContent = `
        /* replaces: main div.flex-wrap:has(.shadow-aesthetic) ... */
        .iv-1-hour-option-in-tutoring .iv-target-flexwrap > button:not(:first-child),
        .iv-1-hour-option-in-tutoring main > div:first-child > img {
            display: none;
        }

        .iv-1-hour-option-in-tutoring main .ulItems li + li:not(:last-child) { position: relative; }
        .iv-1-hour-option-in-tutoring .ulItems .hereIcon {
            position: absolute; left: -120px; font-size: 16px; font-weight: 700;
            display: flex; align-items: center; gap: 13px;
        }
        .iv-1-hour-option-in-tutoring .ulItems .hereIcon img { width: 33px; height: 30px; }

        /* replaces: main div > div > div:has(div.flex-wrap) > div:first-child ... */
        .iv-1-hour-option-in-tutoring .iv-heading-sub h2 { font-size: 32px; }
        .iv-1-hour-option-in-tutoring .iv-heading-sub p { text-align: center; font-size: 14px; }

        .iv-1-hour-option-in-tutoring .iv-target-flexwrap {
            width: 100%; justify-content: space-between; align-items: center;
        }
        .iv-1-hour-option-in-tutoring .iv-target-flexwrap > div { width: 50%; }
        .iv-1-hour-option-in-tutoring .iv-target-flexwrap ol li > div + div { text-align: start; }

        .iv-1-hour-option-in-tutoring .iv-target-flexwrap div > button:first-child {
            width: 100%; max-width: 744px; box-shadow: 0 3px 10px rgb(0 0 0 / 50%);
            gap: 12px; padding: 10px 24px; margin-bottom: 16px;
        }
        .iv-1-hour-option-in-tutoring .iv-target-flexwrap div > button:first-child > div { gap: 12px; }
        .iv-1-hour-option-in-tutoring .iv-target-flexwrap div > button:first-child > div span {
            font-size: 30px; padding: 5px 30px; height: 55px; align-items: center; display: flex;
        }
        .iv-1-hour-option-in-tutoring .iv-target-flexwrap div > button:first-child > div > p { display: none; }
        .iv-1-hour-option-in-tutoring .iv-target-flexwrap div > button:first-child > div h3:first-of-type {
            font-size: 28px; line-height: normal;
        }
        .iv-1-hour-option-in-tutoring .iv-target-flexwrap div > button:first-child > span {
            max-width: 300px; margin: auto; padding: 10px 12px; width: 100%;
            font-weight: 500; font-size: 16px;
        }

        .iv-1-hour-option-in-tutoring .ulItems .listCheck { background-color: #0035f0; }
        .iv-1-hour-option-in-tutoring .check.icon {
            color: #fff; position: absolute; margin-left: 4px; margin-top: -6px;
            width: 36px; height: 18px; border-bottom: solid 6px currentColor; border-left: solid 6px currentColor;
            transform: rotate(-45deg);
        }
        .iv-1-hour-option-in-tutoring button:first-child > div .lineThroughWrapper {
            display: flex; align-items: center; gap: 10px;
        }
        .iv-1-hour-option-in-tutoring main .buttonWrapper h4 { margin-bottom: 0; }

        .iv-1-hour-option-in-tutoring .iv-target-flexwrap > div.iv-heading-sub + .buttonWrapper{display: block;}
        .iv-1-hour-option-in-tutoring .iv-target-flexwrap > div.buttonWrapper {
        display: none;}
        @media (min-width: 1024px) {
            .iv-1-hour-option-in-tutoring main > div + div.text-white > div > div:last-child { margin-left: -50px; }
        }
        @media (max-width: 1199.98px) {
            .iv-1-hour-option-in-tutoring .iv-target-flexwrap { justify-content: center; }
            .iv-1-hour-option-in-tutoring .ulItems li > div:not(:last-child) { width: 40px; height: 40px; }
            .iv-1-hour-option-in-tutoring .check.icon { margin-left: 0; margin-top: -2px; width: 22px; height: 12px; }
            .iv-1-hour-option-in-tutoring .iv-target-flexwrap > div { width: 40%; }
        }
        @media (max-width: 767.98px) {
            .iv-1-hour-option-in-tutoring .iv-target-flexwrap { flex-direction: column; }
            .iv-1-hour-option-in-tutoring .iv-target-flexwrap > div { width: 100%; }
        }
        @media (max-width: 639px) {
            .iv-1-hour-option-in-tutoring .iv-target-flexwrap div > button:first-child { max-width: 100%; padding: 15px 24px; }
            .iv-1-hour-option-in-tutoring .iv-target-flexwrap div > button:first-child > div h3:first-of-type { font-size: 18px; line-height: 22px; }
            .iv-1-hour-option-in-tutoring .iv-target-flexwrap div > button:first-child > div { gap: 8px; }
            .iv-1-hour-option-in-tutoring .iv-target-flexwrap div > button:first-child > span { max-width: 100%; }
            .iv-1-hour-option-in-tutoring .ulItems li > div:not(:last-child) { width: 32px; height: 32px; }
            .iv-1-hour-option-in-tutoring .ulItems li > div:not(:last-child) span { font-size: 18px; }
            .iv-1-hour-option-in-tutoring .check.icon {
            margin-left: 0; margin-top: -2px; width: 15px; height: 8px;
            border-bottom: solid 3px currentColor; border-left: solid 3px currentColor;
            }
            .iv-1-hour-option-in-tutoring .ulItems { padding-left: 80px; }
            .iv-1-hour-option-in-tutoring .ulItems li h3, .iv-1-hour-option-in-tutoring .ulItems li p { font-size: 14px; }
        }
        @media (max-width: 599.98px) {
            .iv-1-hour-option-in-tutoring .ulItems .hereIcon { left: -90px; font-size: 14px; gap: 6px; }
            .iv-1-hour-option-in-tutoring .ulItems .hereIcon img { width: 24px; height: 24px; }
        }
        `;
        (document.head || body).appendChild(styleTag);
    }

    // ---- DOM wiring (no :has used) ----
    const mainPlan = document.querySelector('main');
    if (!mainPlan) return;

    // Find the .flex-wrap that contains .shadow-aesthetic
    const shadowEl = mainPlan.querySelector('.flex-wrap .shadow-aesthetic');
    const flexWrap = shadowEl ? shadowEl.closest('.flex-wrap') : null;
    if (flexWrap && !flexWrap.classList.contains('iv-target-flexwrap')) {
        flexWrap.classList.add('iv-target-flexwrap');
    }

    // Heading container that (structurally) wraps the flexWrap; target its first child
    let headingSub = null;
    if (flexWrap) {
        // climb a few wrappers safely and take the first element child
        const containerA = flexWrap.closest('div');
        const containerB = containerA ? containerA.closest('div') : null;
        const containerC = containerB ? containerB.closest('div') : null;
        const headingContainer = containerC || containerB || containerA;
        if (headingContainer && headingContainer.firstElementChild) {
        headingSub = headingContainer.firstElementChild;
        headingSub.classList.add('iv-heading-sub');
        }
    }

    if (headingSub && !headingSub.dataset.updated) {
        const heading = headingSub.querySelector('h2');
        const paragraph = headingSub.querySelector('p');
        if (heading) heading.textContent = 'Let’s find the perfect tutor for your child today!';
        if (paragraph) paragraph.textContent = '1-on-1 online tutoring that’s flexible, personalized, and led by certified teachers who care.';
        headingSub.dataset.updated = 'true';
    }

    // First button that is a direct child of flexWrap
    let target = null;
    if (flexWrap) {
        target = Array.from(flexWrap.children).find(el => el.tagName === 'BUTTON') || null;
    }
    if (!target) return;

    // Ensure buttonWrapper exists
    let wrapper = target.closest('.buttonWrapper');
    if (!wrapper) {
        wrapper = document.createElement('div');
        wrapper.className = 'buttonWrapper';
        target.parentNode && target.parentNode.insertBefore(wrapper, target);
        wrapper.appendChild(target);
    }

    const oneHour = wrapper;

    // CTA
    const hourButtonSpan = oneHour.querySelector('button > span');
    if (hourButtonSpan && !hourButtonSpan.dataset.updated) {
        hourButtonSpan.textContent = 'Try it Out';
        hourButtonSpan.dataset.updated = 'true';
    }

    // Price wrapper
    const buttonDiv = oneHour.querySelector('button > div');
    if (buttonDiv && !buttonDiv.querySelector('.lineThroughWrapper')) {
        buttonDiv.insertAdjacentHTML('beforeend', '<div class="lineThroughWrapper"></div>');
        const lineThrough = oneHour.querySelector('h3.line-through');
        const nextH3 = lineThrough ? lineThrough.nextElementSibling : null;
        const lineWrapper = oneHour.querySelector('.lineThroughWrapper');
        if (lineThrough && lineWrapper) {
        lineWrapper.appendChild(lineThrough);
        if (nextH3 && nextH3.tagName === 'H3') lineWrapper.appendChild(nextH3);
        }
    }

    // T&C: the next sibling after flexWrap if it's an H4
    const tnc = flexWrap ? flexWrap.nextElementSibling : null;
    if (tnc && tnc.tagName === 'H4' && !oneHour.querySelector('h4')) {
        const btn = oneHour.querySelector('button');
        if (btn) btn.after(tnc);
    }

  // Steps block
    if (!document.querySelector('.iv-left-box')) {
        oneHour.insertAdjacentHTML(
        'beforebegin',
        `<div class="iv-left-box space-y-6 max-w-96">
            <h2 class="text-center text-[36px] font-bold">Hiring a tutor is quick &amp; easy</h2>
            <ol class="space-y-6 ulItems">
            <li class="flex items-center gap-3">
                <div class="flex size-16 shrink-0 items-center justify-center rounded-full bg-accent-4 listCheck">
                <div class="check icon"></div>
                </div>
                <div class="space-y-[6px]">
                <h3 class="text-lg font-bold leading-[26px]">Register your account</h3>
                <p>You've already done this. Great start!</p>
                </div>
            </li>
            <li class="flex items-center gap-3">
                <p class='hereIcon'>You are <br>here! <img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/StrideTutoring/blueIcon.png" decoding="async"></p>
                <div class="flex size-16 shrink-0 items-center justify-center rounded-full bg-accent-4">
                <span class="text-2xl font-bold">2</span>
                </div>
                <div class="space-y-[6px]">
                <h3 class="text-lg font-bold leading-[26px]">Buy your first 1-hour session</h3>
                <p>Perfect for trying us out and finding the right tutor.</p>
                </div>
            </li>
            <li class="flex items-center gap-3">
                <div class="flex size-16 shrink-0 items-center justify-center rounded-full bg-accent-4">
                <span class="text-2xl font-bold">3</span>
                </div>
                <div class="space-y-[6px]">
                <h3 class="text-lg font-bold leading-[26px]">Book a session</h3>
                <p>Pick the course, pick the time. Watch your child grow!</p>
                </div>
            </li>
            </ol>
        </div>`
        );
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
    if(document.querySelector('body') && !document.querySelector('body').classList.contains('iv-1-hour-option-in-tutoring')) {
        setTimeout(() => {
            runObserver();
        }, 10);
        i++;
        if(i > 10000) {
            clearInterval(checkIntervalForObserver);
        }
    }
}, 10);
