const isDesktop = window.matchMedia("(min-width: 768px)").matches;

window.addEventListener("resize", () => {
    if (isDesktop !== window.matchMedia("(min-width: 768px)").matches) {
        location.reload();
    }
});

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
        .iv-1-hour-option-in-tutoring main .ulItems li + li:not(:last-child) { position: relative; }
        .iv-1-hour-option-in-tutoring .ulItems .hereIcon { position: absolute; left: -120px; font-size: 16px; font-weight: 700; display: flex; align-items: center; gap: 13px; }
        .iv-1-hour-option-in-tutoring .ulItems .hereIcon img { width: 33px; height: 30px; }

        /* replaces: main div > div > div:has(div.flex-wrap) > div:first-child ... */

        .iv-1-hour-option-in-tutoring .iv-target-flexwrap { width: 100%; justify-content: space-between; align-items: center; }
        .iv-1-hour-option-in-tutoring .iv-target-flexwrap > div { width: 50%; }
        .iv-1-hour-option-in-tutoring .iv-target-flexwrap ol li > div + div { text-align: start; }

        .iv-1-hour-option-in-tutoring .iv-target-flexwrap div > button { width: 100%; max-width: 744px; box-shadow: 0 3px 10px rgba(0, 0, 0, .5); gap: 12px; padding: 5px 5px 15px 5px; margin-bottom: 16px; }
        .iv-1-hour-option-in-tutoring .iv-target-flexwrap div > button > div { gap: 12px; }
        .iv-1-hour-option-in-tutoring .iv-target-flexwrap div > button > div span { font-size: 20px; line-height: 27px; padding: 20px 30px; align-items: center; display: flex; top: 4px; right: 4px; background-color: #ED1F0D; border-color: #ED1F0D; color: #fff; margin-left: auto;  }
        .iv-1-hour-option-in-tutoring .iv-target-flexwrap div > button > div > p { display: none; }
        .iv-1-hour-option-in-tutoring .iv-target-flexwrap div > button > div > img { max-width: 160px; }
        .iv-1-hour-option-in-tutoring .iv-target-flexwrap div > button > span { box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; font-size: 0; max-width: 250px; margin: auto; padding: 10px 12px; width: 100%; }
        .iv-1-hour-option-in-tutoring .iv-target-flexwrap div > button > span:not([disabled])::before { content: 'Get Started!'; font-size: 18px; font-weight: 300; }

        .iv-1-hour-option-in-tutoring .ulItems .listCheck { background-color: #0035f0; }
        .iv-1-hour-option-in-tutoring .check.icon { color: #fff; position: absolute; margin-left: 4px; margin-top: -6px; width: 36px; height: 18px; border-bottom: solid 6px currentColor; border-left: solid 6px currentColor; transform: rotate(-45deg); }
        .iv-1-hour-option-in-tutoring button > div .lineThroughWrapper { display: flex; align-items: center; gap: 10px; }
        .iv-1-hour-option-in-tutoring button > div .lineThroughWrapper h3 { font-size: 20px; }
        .iv-1-hour-option-in-tutoring main .buttonWrapper h4 { margin-bottom: 0; }

        .iv-1-hour-option-in-tutoring main .buttonWrapper button { position: relative; }
        .iv-1-hour-option-in-tutoring main .buttonWrapper button::before { content: ''; background-image: url('https://res.cloudinary.com/ignite-visibility/image/upload/v1763363363/StrideTutoring/K12_badgeOffer.png'); background-repeat: no-repeat; background-size: contain; position: absolute; top: -10px; left: -34px; height: 74px; width: 220px; }

        @media (min-width: 1280px) {
            .iv-1-hour-option-in-tutoring main > div:first-child > img { display: none; }
        }
        @media (min-width: 1024px) {
            .iv-1-hour-option-in-tutoring main > div + div.text-white > div > div:last-child { margin-left: -50px; }
        }
        @media (max-width: 1199.98px) {
            .iv-1-hour-option-in-tutoring .iv-target-flexwrap { justify-content: center; }
            .iv-1-hour-option-in-tutoring .ulItems li > div:not(:last-child) { width: 40px; height: 40px; }
            .iv-1-hour-option-in-tutoring .check.icon { margin-left: 0; margin-top: -2px; width: 22px; height: 12px; }
            .iv-1-hour-option-in-tutoring .iv-target-flexwrap > div { width: 40%; }
        }
        @media (max-width: 991.98px) {
            .iv-1-hour-option-in-tutoring main .buttonWrapper button::before { top: -5px; left: -20px; width: 140px; }
            .iv-1-hour-option-in-tutoring .iv-target-flexwrap div > button > div span { font-size: 16px; line-height: 27px; padding: 18px 25px; }
        }
        @media (max-width: 767.98px) {
            .iv-1-hour-option-in-tutoring .iv-target-flexwrap { flex-direction: column; }
            .iv-1-hour-option-in-tutoring .iv-target-flexwrap > div { width: 100%; }
        }
        @media (max-width: 639px) {
            .iv-1-hour-option-in-tutoring .iv-target-flexwrap div > button { max-width: 100%; }
            .iv-1-hour-option-in-tutoring .iv-target-flexwrap div > button > div h3:first-of-type { font-size: 18px; line-height: 22px; }
            .iv-1-hour-option-in-tutoring .iv-target-flexwrap div > button > div { gap: 8px; }
            .iv-1-hour-option-in-tutoring .ulItems li > div:not(:last-child) { width: 32px; height: 32px; }
            .iv-1-hour-option-in-tutoring .ulItems li > div:not(:last-child) span { font-size: 18px; }
            .iv-1-hour-option-in-tutoring .check.icon { margin-left: 0; margin-top: -2px; width: 15px; height: 8px; border-bottom: solid 3px currentColor; border-left: solid 3px currentColor; }
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
    if (flexWrap && !flexWrap.classList.contains('iv-packages')) {
        flexWrap.classList.add('iv-packages', 'hidden');
    }
    const parentOfPackages = flexWrap.parentElement;
    if (parentOfPackages && !parentOfPackages.classList.contains('iv-content')) {
        parentOfPackages.classList.add('iv-content');
    }

    

    // Steps block
    if (!document.querySelector('.iv-left-box')) {
        document.querySelector('.iv-packages').insertAdjacentHTML(
        'afterend',
        `<div class="mt-6 flex flex-wrap justify-center gap-3 gap-y-8 iv-target-flexwrap">
            <div class="iv-left-box space-y-6 max-w-96">
                <h2 class="text-center text-[36px] font-bold">Hiring a tutor is quick & easy</h2>
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
            </div>
            <div class="buttonWrapper"></div>
        </div>`
        );
    }

    const packageButton = document.querySelectorAll('.buttonWrapper button');
    if (!packageButton.length > 0) {
        const packageButtonSpan = document.querySelectorAll('.iv-packages button')[0];
        const packageButtonTarget = document.querySelector('.buttonWrapper');
        if (packageButtonSpan && packageButtonTarget) {
            packageButtonTarget.appendChild(packageButtonSpan);
        }
    }

    // document.querySelector('.buttonWrapper button > div span').textContent = "40% Off!";

    // Price wrapper
    const oneHour = document.querySelector('.buttonWrapper');
    const buttonDiv = oneHour.querySelector('button > div');
    if (buttonDiv && !buttonDiv.querySelector('.lineThroughWrapper')) {
        const off = buttonDiv.querySelector(':scope > span');
        const title = buttonDiv.querySelector(':scope > h3');
        if (off) off.textContent = "40% Off!";
        if (title) title.textContent = "Tutoring Sessions";
        title.insertAdjacentHTML('beforebegin', '<img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1763035954/StrideTutoring/K12_two.png">');
        title.insertAdjacentHTML('afterend', '<div class="text-lg">Try Two 30-Minute <br>Tutoring Sessions for Only $39!</div>');
        buttonDiv.insertAdjacentHTML('beforeend', '<div class="lineThroughWrapper"></div>');
        const lineThrough = oneHour.querySelector('h3.line-through');
        if (lineThrough) lineThrough.textContent = '$32.49';
        const nextH3 = lineThrough ? lineThrough.nextElementSibling : null;
        const lineWrapper = oneHour.querySelector('.lineThroughWrapper');
        if (lineThrough && lineWrapper) {
            lineWrapper.appendChild(lineThrough);
            if (nextH3 && nextH3.tagName === 'H3') lineWrapper.appendChild(nextH3);
            const textForeground = oneHour.querySelector('.lineThroughWrapper h3.text-foreground');
            if (textForeground) textForeground.textContent = '$19.50/session';
        }
    }

    // T&C: the next sibling after flexWrap if it's an H4
    const targetFlexWrap = document.querySelector('.iv-target-flexwrap');
    const buttonWrapper = document.querySelector('.buttonWrapper');
    if (targetFlexWrap && buttonWrapper) {
        const tnc = targetFlexWrap.nextElementSibling;
        if (tnc && tnc.tagName === 'H4' && !buttonWrapper.querySelector('h4')) {
            const btn = buttonWrapper.querySelector('button');
            if (btn) btn.after(tnc);
        }
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
