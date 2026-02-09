console.log('TEST > 1');
let Time1 = new Date().getTime()/1000;
console.log('Time 1 > ' + Time1);

function loadTestCode() {
        if (!document.querySelector('body').classList.contains('iv-1-hour-option-in-tutoring')) {
            document.querySelector('body').classList.add('iv-1-hour-option-in-tutoring');



            const hourButtonSpan = document.querySelector('.iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) > button:first-child > span');
            if (hourButtonSpan) {
                hourButtonSpan.innerHTML = 'Try it Out';
            }

            var getClassInterval1 = setInterval(function(){
            if(document.querySelectorAll('.iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) div > button:first-child').length > 0){
                clearInterval(getClassInterval1);
                
                const target1 = document.querySelector(
                '.iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) div > button:first-child > div .line-through'
                );

                if (target1) {
                // Create wrapper div
                const wrapper = document.createElement('div');
                wrapper.className = 'lineThroughWrapper';

                // Insert wrapper before target1
                target1.parentNode.insertBefore(wrapper, target1);

                // Move target1 inside the wrapper
                wrapper.appendChild(target1);
                }
                document.querySelector('.iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) div > button:first-child > div .line-through').after(document.querySelector('.iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) div > button:first-child > div .lineThroughWrapper + h3'));

                document.querySelector('.iv-1-hour-option-in-tutoring main .buttonWrapper button').after(document.querySelector('.iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) + h4'));
            }
            },500);

            const target = document.querySelector('.iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) > button:first-child');

            if (target) {
            // Create wrapper div
            const wrapper = document.createElement('div');
            wrapper.className = 'buttonWrapper';

            // Insert wrapper before target
            target.parentNode.insertBefore(wrapper, target);
            
            // Move target inside wrapper
            wrapper.appendChild(target);
            }

            var getClassInterval = setInterval(function () {
            var foundButtons = document.querySelectorAll(
                'button:has(h3.line-through):nth-child(-n+2)'
            );

            if (foundButtons.length > 0) {
                clearInterval(getClassInterval);

                var heading = document.querySelector(
                '.iv-1-hour-option-in-tutoring main div > div > div:has(div.flex-wrap) > div:first-child h2'
                );
                var paragraph = document.querySelector(
                '.iv-1-hour-option-in-tutoring main div > div > div:has(div.flex-wrap) > div:first-child p'
                );

                if (heading) {
                heading.innerHTML = 'Let’s find the perfect tutor for your child today!';
                }
                if (paragraph) {
                paragraph.innerHTML =
                    '1-on-1 online tutoring that’s flexible, personalized, and led by certified teachers who care.';
                }
            }
            }, 500);
            document.querySelector('.iv-1-hour-option-in-tutoring main .buttonWrapper').insertAdjacentHTML('beforebegin',`<div class="space-y-6 max-w-96">
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
                <p class='hereIcon'>You are <br>here! <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1761314822/StrideTutoring/blueIcon.png" decoding="async" ></p>
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

            const styleTag = document.createElement("style");
            styleTag.innerHTML = `
            .iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) > button:not(:first-child),
            .iv-1-hour-option-in-tutoring main > div:first-child > img {
                display: none;
            }
            main .ulItems li + li:not(:last-child) {
                position: relative;
            }
            .ulItems .hereIcon {
                position: absolute;
                left: -120px;
                font-size: 16px;
                font-weight: 700;
                display: flex;
                align-items: center;
                gap: 13px;
            }
            .ulItems .hereIcon img {
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
            .check.icon {
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
                .check.icon {
                    margin-left: 0px;
                    margin-top: -2px;
                    width: 22px;
                    height: 12px;
                }
                .iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) > div {
                    width: 40%;
                }
                main .ulItems li:has(div.listNumber) + li:not(:last-child)::before {
                    width: 100px;
                    height: 40px;
                    left: -30%;
                }
            }
            @media (max-width: 1023.98px) {
                main .ulItems li:has(div.listNumber) + li:not(:last-child)::before {
                    left: -40%;
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
                .iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) div> button:first-child {
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
                    width: 24px;
                    height: 24px;
                }
                .iv-1-hour-option-in-tutoring .ulItems li > div:not(:last-child) {
                    width: 32px;
                    height: 32px;
                }
                .iv-1-hour-option-in-tutoring .ulItems li > div:not(:last-child) span {
                    font-size: 18px;
                }
                .check.icon {
                    margin-left: 0px;
                    margin-top: -2px;
                    width: 15px;
                    height: 8px;
                    border-bottom: solid 3px currentColor;
                    border-left: solid 3px currentColor;
                }
                .ulItems {
                    padding-left: 80px;
                }
                .ulItems li h3,
                .ulItems li p {
                    font-size: 14px;
                }
                main .ulItems li:has(div.listNumber) + li:not(:last-child)::before {
                        width: 70px;
                        height: 34px;
                    }
                }
                @media (max-width: 599.98px) {
                
                .ulItems .hereIcon {
                       position: absolute;
    left: -90px;
    font-size: 14px;
    font-weight: 700;
    display: flex
;
    align-items: center;
    gap: 6px;
                }
                .ulItems .hereIcon img {
                    width: 24px;
                    height: 24px;
                }
                }
                @media (max-width: 375px) {
                    width: 82px;
                        height: 30px;
                        left: -38%;
                    }
            }`;
            document.head.appendChild(styleTag);

            let Time2 = new Date().getTime()/1000;
console.log('Time 2 > ' + Time2);

             let timeDifference = Time2 - Time1;
                console.log('Time difference > ' + timeDifference + ' seconds');
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