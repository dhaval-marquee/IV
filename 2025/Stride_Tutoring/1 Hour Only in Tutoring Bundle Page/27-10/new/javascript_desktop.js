// Time difference calculation
let Time1 = new Date().getTime()/1000;
console.log('VWO code fired >' + Time1);
// Time difference calculation over

function loadTestCode() {    
    
    if (!document.querySelector('body').classList.contains('iv-1-hour-option-in-tutoring')) {
        document.querySelector('body').classList.add('iv-1-hour-option-in-tutoring');
    }

    if (!document.getElementById('iv-style')) {
        const styleTag = document.createElement("style");
        styleTag.id = 'iv-style';
        styleTag.innerHTML = `
            .iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) > button:not(:first-child),
            .iv-1-hour-option-in-tutoring main > div:first-child > img {
                display: none;
            }
            .iv-1-hour-option-in-tutoring main .ulItems li + li:not(:last-child) {
                position: relative;
            }
            .iv-1-hour-option-in-tutoring .ulItems .hereIcon {
                position: absolute;
                left: -120px;
                font-size: 16px;
                font-weight: 700;
                display: flex;
                align-items: center;
                gap: 13px;
            }
            .iv-1-hour-option-in-tutoring .ulItems .hereIcon img {
                width: 33px;
                height: 30px;
            }
            .iv-1-hour-option-in-tutoring main div > div > div:has(div.flex-wrap) > div:first-child h2 {
                font-size: 32px;
            }
            .iv-1-hour-option-in-tutoring main div > div > div:has(div.flex-wrap) > div:first-child p {
                text-align: center;
                font-size: 14px;
            }
            .iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) {
                width: 100%;
                justify-content: space-between;
                align-items: center;
            }
            .iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) > div {
                width: 50%;
            }
            .iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) ol li > div + div {
                text-align: start;
            }
            .iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) div > button:first-child {
                width: 100%;
                max-width: 744px;
                box-shadow: 0 3px 10px rgb(0,0,0,.5);
                gap: 12px;
                padding: 10px 24px;
                margin-bottom: 16px;
            }
            .iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) div > button:first-child > div {
                gap: 12px;
            }
            .iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) div > button:first-child > div span {
                font-size: 30px;
                padding: 5px 30px;
                height: 55px;
                align-items: center;
                display: flex;
            }
            .iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) div > button:first-child > div > p {
                display: none;
            }
            .iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) div > button:first-child > div h3:first-of-type {
                font-size: 28px;
                line-height: normal;
            }
            .iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) div > button:first-child > span {
                max-width: 300px;
                margin: auto;
                padding: 10px 12px;
                width: 100%;
                font-weight: 500;
                font-size: 16px;
            }
            .iv-1-hour-option-in-tutoring .ulItems .listCheck {
                background-color: #0035f0;
            }
            .iv-1-hour-option-in-tutoring .check.icon {
                color: #ffffff;
                position: absolute;
                margin-left: 4px;
                margin-top: -6px;
                width: 36px;
                height: 18px;
                border-bottom: solid 6px currentColor;
                border-left: solid 6px currentColor;
                -webkit-transform: rotate(-45deg);
                transform: rotate(-45deg);
            }
            .iv-1-hour-option-in-tutoring button:first-child > div .lineThroughWrapper {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            .iv-1-hour-option-in-tutoring main .buttonWrapper h4 {
                margin-bottom: 0;
            }
            @media (min-width: 1024px) {
                .iv-1-hour-option-in-tutoring main > div + div.text-white > div > div:last-child {
                    margin-left: -50px;
                }
            }
            @media (max-width: 1199.98px) {
                .iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) {
                    justify-content: center;
                }
                .iv-1-hour-option-in-tutoring .ulItems li > div:not(:last-child) {
                    width: 40px;
                    height: 40px;
                }
                .iv-1-hour-option-in-tutoring .check.icon {
                    margin-left: 0px;
                    margin-top: -2px;
                    width: 22px;
                    height: 12px;
                }
                .iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) > div {
                    width: 40%;
                }
            }
            @media (max-width: 767.98px) {
                .iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) {
                    flex-direction: column;
                }
                .iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) > div {
                    width: 100%;
                }
            }
            @media (max-width: 639px) {
                .iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) div > button:first-child {
                    max-width: 100%;
                    padding: 15px 24px;
                }
                .iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) div > button:first-child > div h3:first-of-type {
                    font-size: 18px;
                    line-height: 22px;
                }
                .iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) div > button:first-child > div {
                    gap: 8px;
                }
                .iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) div > button:first-child > span {
                    max-width: 100%;
                }
                .iv-1-hour-option-in-tutoring .ulItems li > div:not(:last-child) {
                    width: 32px;
                    height: 32px;
                }
                .iv-1-hour-option-in-tutoring .ulItems li > div:not(:last-child) span {
                    font-size: 18px;
                }
                .iv-1-hour-option-in-tutoring .check.icon {
                    margin-left: 0px;
                    margin-top: -2px;
                    width: 15px;
                    height: 8px;
                    border-bottom: solid 3px currentColor;
                    border-left: solid 3px currentColor;
                }
                .iv-1-hour-option-in-tutoring .ulItems {
                    padding-left: 80px;
                }
                .iv-1-hour-option-in-tutoring .ulItems li h3,
                .iv-1-hour-option-in-tutoring .ulItems li p {
                    font-size: 14px;
                }
            }
            @media (max-width: 599.98px) {
                .iv-1-hour-option-in-tutoring .ulItems .hereIcon {
                    left: -90px;
                    font-size: 14px;
                    gap: 6px;
                }
                .iv-1-hour-option-in-tutoring .ulItems .hereIcon img {
                    width: 24px;
                    height: 24px;
                }
            }
        `;
        document.body.appendChild(styleTag);
    }
    

    const mainPlan = document.querySelector(`.iv-1-hour-option-in-tutoring main`);
    if(mainPlan){
        const headingSub = mainPlan.querySelector('div > div > div:has(div.flex-wrap) > div:first-child');
        if (headingSub && !headingSub.dataset.updated) {
            const heading = headingSub.querySelector('h2');
            const paragraph = headingSub.querySelector('p');

            if (heading) {
                heading.innerHTML = 'Let’s find the perfect tutor for your child today!';
            }

            if (paragraph) {
                paragraph.innerHTML = '1-on-1 online tutoring that’s flexible, personalized, and led by certified teachers who care.';
            }
            headingSub.dataset.updated = 'true';
        }


        const target = mainPlan.querySelector('div.flex-wrap:has(.shadow-aesthetic) > button:first-child');
        if (target) {
            // Create new div for the plan wrapper
            let wrapper = target.closest('.buttonWrapper');
            if (!wrapper) {
                wrapper = document.createElement('div');
                wrapper.className = 'buttonWrapper';
                target.parentNode.insertBefore(wrapper, target);
                wrapper.appendChild(target);
            }
            
            const oneHour = document.querySelector('.buttonWrapper');
            if(oneHour && mainPlan){
                // CTA text updates
                const hourButtonSpan = oneHour.querySelector('button > span');
                if (hourButtonSpan && !hourButtonSpan.dataset.updated) {
                    hourButtonSpan.innerHTML = 'Try it Out';
                    hourButtonSpan.dataset.updated = 'true';
                }

                // Create new div for the price
                const buttonDiv = oneHour.querySelector('button > div');
                if (buttonDiv && !buttonDiv.querySelector('.lineThroughWrapper')) {
                    buttonDiv.insertAdjacentHTML('beforeend', '<div class="lineThroughWrapper"></div>');
                    
                    const lineThrough = oneHour.querySelector('h3.line-through');
                    const nextH3 = lineThrough?.nextElementSibling;
                    const wrapper = oneHour.querySelector('.lineThroughWrapper');

                    if (lineThrough && wrapper) {
                        wrapper.appendChild(lineThrough);
                        if (nextH3 && nextH3.tagName === 'H3') {
                            wrapper.appendChild(nextH3);
                        }
                    }
                }


                // Terms and conditions move below the plan
                if(!document.querySelector('.buttonWrapper > h4')){
                    oneHour.querySelector('button').after(mainPlan.querySelector('div.flex-wrap:has(.shadow-aesthetic) + h4'));
                }

                // Added step html code 
                if(!document.querySelector('.iv-left-box')){
                    oneHour.insertAdjacentHTML('beforebegin',`<div class="iv-left-box space-y-6 max-w-96">
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
                                <p class='hereIcon'>You are <br>here! <img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/StrideTutoring/blueIcon.png" decoding="async" ></p>
                                <div class="flex size-16 shrink-0 items-center justify-center rounded-full bg-accent-4">
                                    <span class="text-2xl font-bold">2</span>
                                </div>
                                <div class="space-y-[6px]">
                                    <h3 class="text-lg font-bold leading-[26px]">Buy your first 1-hour session</h3>
                                    <p>Perfect for trying us out and meeting your first tutor.</p>
                                </div>
                            </li>
                            <li class="flex items-center gap-3">
                                <div class="flex size-16 shrink-0 items-center justify-center rounded-full bg-accent-4">
                                    <span class="text-2xl font-bold">3</span>
                                </div>
                                <div class="space-y-[6px]">
                                    <h3 class="text-lg font-bold leading-[26px]">Book a session</h3>
                                    <p>Pick your subject, pick your time. We'll handle the rest.</p>
                                </div>
                            </li>
                        </ol>
                    </div>`);

                    // Visibility show
                    if (!document.body.dataset.visibilitySet) {
                        document.body.style.visibility = "";
                        document.body.dataset.visibilitySet = "true";
                    }

                    let Time2 = new Date().getTime()/1000;
                    console.log('VWO code loaded > ' + Time2);
                    
                    let timeDifference = Time2 - Time1;
                    console.log('VWO code execution > ' + timeDifference + ' seconds');
                }
            }
            
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

const checkReadyElm = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(checkReadyElm);
        var targetElement = document.querySelector('body');
        document.body.style.visibility = "hidden";
        observerElm(targetElement, function(mutationsList, observer) {
            loadTestCode();
        });
    }
    setTimeout(() => {
        // Visibility show
        if (!document.body.dataset.visibilitySet) {
            document.body.style.visibility = "";
            document.body.dataset.visibilitySet = "true";
        }
    }, 5000);
}, 150);
