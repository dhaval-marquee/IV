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
    if (!body.classList.contains('iv-buy1-hour-option-in-tutoring')) {
        body.classList.add('iv-buy1-hour-option-in-tutoring');
    }

    // ---- STYLE (no :has used) ----
    if (!document.getElementById('iv-style')) {
        const styleTag = document.createElement('style');
        styleTag.id = 'iv-style';
        styleTag.textContent = `
        /* replaces: main div.flex-wrap:has(.shadow-aesthetic) ... */
        .iv-content > div > h3 + h2 {font-size: 32px;}
        .iv-content > div > h3 + h2 + div p{font-size: 14px; margin-bottom: 0;}
        .iv-buy1-hour-option-in-tutoring main .ulItems li + li:not(:last-child) { position: relative; }
        .iv-buy1-hour-option-in-tutoring .ulItems .hereIcon { position: absolute; left: -120px; font-size: 16px; font-weight: 700; display: flex; align-items: center; gap: 13px; }
        .iv-buy1-hour-option-in-tutoring .ulItems .hereIcon img { width: 33px; height: 30px; }

        /* replaces: main div > div > div:has(div.flex-wrap) > div:first-child ... */

        .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap { width: 100%; justify-content: space-between; align-items: center; }
        .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap > div { width: 50%; }
        .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap ol li > div + div { text-align: start; }

        .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap div > button {  position: relative;width: 100%; max-width: 744px; box-shadow: 0 3px 10px rgba(0, 0, 0, .5); gap: 12px; padding: 5px 5px 25px 5px; margin-bottom: 16px; }
        .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap div > button > div { gap: 0; }
        .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap div > button > div span { font-size: 28px;line-height: 28px;padding: 24px 26px;align-items: center;display: flex;top: 4px;right: 4px;background-color: #ED1F0D;border-color: #ED1F0D;color: #fff;margin-left: auto;}
        .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap div > button > div > p { display: none; }
        .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap div > button > div > img { max-width: 368px; }
        .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap div > button > div > img + div {font-size: 22px;line-height: normal;}
        .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap div > button > div > img + div > p{display: inline-block; text-decoration: underline;}
        .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap div > button > div > h3 { font-size: 35px;padding-top: 34px;}
        .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap div > button > div > h3 + div {font-size: 20px;}
        .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap div > button > span { box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; font-size: 0; max-width: 335px; margin: auto; padding: 20px; width: 100%; }
        .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap div > button > span:not([disabled])::before { content: 'Get Started!'; font-size: 28px; font-weight: 400; }
        .iv-buy1-hour-option-in-tutoring .ulItems .listCheck { background-color: #0035f0; }
        .iv-buy1-hour-option-in-tutoring .check.icon { color: #fff; position: absolute; margin-left: 4px; margin-top: -6px; width: 36px; height: 18px; border-bottom: solid 6px currentColor; border-left: solid 6px currentColor; transform: rotate(-45deg); }
        .iv-buy1-hour-option-in-tutoring button > div .lineThroughWrapper { display: flex; align-items: center; gap: 10px; padding-top: 6px}
        .iv-buy1-hour-option-in-tutoring button > div .lineThroughWrapper h3 { font-size: 24px; }
        .iv-buy1-hour-option-in-tutoring main .buttonWrapper h4 { margin-bottom: 0; }
        .iv-buy1-hour-option-in-tutoring main .buttonWrapper button::before {content: '';background-image: url(https://res.cloudinary.com/ignite-visibility/image/upload/v1763363363/StrideTutoring/K12_badgeOffer.png);background-repeat: no-repeat;background-size: contain;position: absolute;top: -12px;left: -44px;height: 100px;width: 280px;}

        @media (min-width: 1280px) {
            .iv-buy1-hour-option-in-tutoring main > div:first-child > img { display: none; }
        }
        @media (min-width: 1024px) {
            .iv-buy1-hour-option-in-tutoring main > div + div.text-white > div > div:last-child { margin-left: -50px; }
        }
        @media (max-width: 1199.98px) {
            .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap { justify-content: center; }
            .iv-buy1-hour-option-in-tutoring .ulItems li > div:not(:last-child) { width: 40px; height: 40px; }
            .iv-buy1-hour-option-in-tutoring .check.icon { margin-left: 0; margin-top: -2px; width: 22px; height: 12px; }
            .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap > div { width: 40%; }
            .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap div > button {padding: 5px 10px 20px 10px;}
            .iv-buy1-hour-option-in-tutoring main .buttonWrapper button::before {top: -8px;left: -32px;width: 200px;}
            .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap div > button > div span { font-size: 22px;line-height: 28px;padding: 22px;}
            .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap div > button > div > img { max-width: 250px; }
            .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap div > button > div > img + div {font-size: 20px;}
            .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap div > button > div > h3 {line-height: normal;}
            .iv-buy1-hour-option-in-tutoring button > div .lineThroughWrapper h3 { font-size: 20px; }
        }
        @media (max-width: 991.98px) {
            .iv-buy1-hour-option-in-tutoring main .buttonWrapper button::before{top: -7px;left: -24px;width: 156px;height: 70px;}
            .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap div > button {padding: 5px 6px 20px 6px}
            .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap div > button > div span { font-size: 16px; line-height: 27px; padding: 18px 25px; }
            .iv-buy1-hour-option-in-tutoring .iv-left-box h2,
            .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap div > button > div > h3 {font-size: 32px;line-height: normal;}
            .iv-buy1-hour-option-in-tutoring button > div .lineThroughWrapper h3 {font-size: 20px;}
            .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap div > button > div > img + div {font-size: 16px;}
            .iv-buy1-hour-option-in-tutoring button > div .lineThroughWrapper h3 {font-size: 16px;}
        }
        @media (max-width: 767.98px) {
            .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap { flex-direction: column; }
            .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap > div { width: 100%; }
            .iv-content > div > h3 + h2 {max-width: 100%;font-size: 24px;line-height: normal;}
            .iv-content > div > h3 + h2 + div p {font-size: 16px;line-height: normal;}
            .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap div > button > div span{font-size: 18px;padding: 16px 18px;}
            .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap div > button > div > img {max-width: 290px;}
            .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap div > button > div > h3 {font-size: 26px; padding-top: 12px;}
            .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap div > button > div > h3 + div { font-size: 15px;}
            .iv-buy1-hour-option-in-tutoring button > div .lineThroughWrapper h3 {font-size: 16px;}
            .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap div > button > span{max-width: 235px;padding: 10px;}
            .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap div > button > span:not([disabled])::before {font-size: 18px;}
            .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap div > button {max-width: 330px; margin: 0 auto 15px; }
            .iv-buy1-hour-option-in-tutoring .iv-target-flexwrap div > button > div > img + div {font-size: 18px;}
            .iv-buy1-hour-option-in-tutoring main .buttonWrapper button::before {top: -8px;left: -32px;width: 200px;}
        }
        @media (max-width: 639px) {
            .iv-buy1-hour-option-in-tutoring .ulItems li > div:not(:last-child) { width: 32px; height: 32px; }
            .iv-buy1-hour-option-in-tutoring .ulItems li > div:not(:last-child) span { font-size: 18px; }
            .iv-buy1-hour-option-in-tutoring .check.icon { margin-left: 0; margin-top: -2px; width: 15px; height: 8px; border-bottom: solid 3px currentColor; border-left: solid 3px currentColor; }
            .iv-buy1-hour-option-in-tutoring .ulItems { padding-left: 80px; }
            .iv-buy1-hour-option-in-tutoring .ulItems li h3, .iv-buy1-hour-option-in-tutoring .ulItems li p { font-size: 14px; }
        }
        @media (max-width: 599.98px) {
            .iv-buy1-hour-option-in-tutoring .ulItems .hereIcon { left: -90px; font-size: 14px; gap: 6px; }
            .iv-buy1-hour-option-in-tutoring .ulItems .hereIcon img { width: 24px; height: 24px;}
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
        var ivContent = document.querySelector('.iv-content');
    
        if (ivContent && parentOfPackages) {
            const headingH2 = ivContent.querySelector('div > h3 + h2');
            const headingP = ivContent.querySelector('div > h3 + h2 + div p');
    
            if (headingH2) {
                headingH2.innerHTML = "Let's find the perfect tutor for your child&nbsp;today!";
            }
            if (headingP) {
                headingP.innerHTML = "1-on-1 online tutoring that's flexible, personalized, and led by certified teachers who&nbsp;care";
            }
        }
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
                            <h3 class="text-lg font-bold leading-[26px]">Buy your first tutoring bundle</h3>
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
        const packageButtonSpan = document.querySelectorAll('.iv-packages button')[2];
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
        if (off) off.textContent = "67% Off!";
        if (title) title.textContent = "Buy 1 Tutoring Session,";
        title.insertAdjacentHTML('afterend', '<img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1763460958/StrideTutoring/K12_get_two_free.jpg"><div class="text-lg">Try <p>Three</p> 30-Minute Tutoring <br>Sessions for the Price of One!</div>');
        buttonDiv.insertAdjacentHTML('beforeend', '<div class="lineThroughWrapper"></div>');
        const lineThrough = oneHour.querySelector('h3.line-through');
        if (lineThrough) lineThrough.textContent = '$104.97';
        const nextH3 = lineThrough ? lineThrough.nextElementSibling : null;
        const lineWrapper = oneHour.querySelector('.lineThroughWrapper');
        if (lineThrough && lineWrapper) {
            lineWrapper.appendChild(lineThrough);
            if (nextH3 && nextH3.tagName === 'H3') lineWrapper.appendChild(nextH3);
            const textForeground = oneHour.querySelector('.lineThroughWrapper h3.text-foreground');
            if (textForeground) textForeground.textContent = '$34.99/3 sessions';
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
    if(document.querySelector('body') && !document.querySelector('body').classList.contains('iv-buy1-hour-option-in-tutoring')) {
        setTimeout(() => {
            runObserver();
        }, 10);
        i++;
        if(i > 10000) {
            clearInterval(checkIntervalForObserver);
        }
    }
}, 10);
