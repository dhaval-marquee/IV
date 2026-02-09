function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-1-hour-option-in-tutoring')) {
        document.querySelector('body').classList.add('iv-1-hour-option-in-tutoring');

        const buttonFirst = document.querySelector(".iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) > button:first-child");
        const buttonLast = document.querySelector(".iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) > button:last-child");

        if (buttonFirst && buttonLast) {
            buttonLast.after(buttonFirst); // Moves it after the last button (outside of it)
        }



        const hourHeading = document.querySelector('.iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) > button:last-child > div h3:first-of-type');
        if (hourHeading) {
            hourHeading.innerHTML = 'Not Ready For a Bundle? No Problem!<br>Buy Just 1 Hour';
        }
        const hourButtonSpan = document.querySelector('.iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) > button:last-child > span');
        if (hourButtonSpan) {
            hourButtonSpan.innerHTML = 'Try Us Out';
        }

        const styleTag = document.createElement("style");
        styleTag.innerHTML = `
        .iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) > button:last-child {
            width: 100%;
            max-width: 744px;
            box-shadow: 0 3px 10px rgb(0,0,0,.5);
            gap: 6px;
            padding: 10px 24px;
            margin-bottom: 15px;
        }
        .iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) > button:last-child > div {
            gap: 4px;
        }
        .iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) > button:last-child > div > p {
            display: none;
        }
        .iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) > button:last-child > div h3:first-of-type {
            font-size: 22px;
            line-height: 28px;
        }
        .iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) > button:last-child > span {
            max-width: 170px;
            margin: auto;
            padding: 10px 12px;
            width: 100%;
        }
        @media (max-width: 871px) {
            .iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic)>button:last-child {
                max-width: 492px;
            }
        }
        @media (max-width: 639px) {
            .iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic)>button:last-child {
                max-width: 100%;
                padding: 15px 24px;
            }
            .iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) > button:last-child > div h3:first-of-type {
                font-size: 18px;
                line-height: 22px;
            }
            .iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) > button:last-child > div {
                gap: 8px;
            }
            .iv-1-hour-option-in-tutoring main div.flex-wrap:has(.shadow-aesthetic) > button:last-child > span {
                max-width: 100%;
            }
        }`;
        document.head.appendChild(styleTag);
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