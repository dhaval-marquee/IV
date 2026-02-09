function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-instant-quote')) {
        document.querySelector('body').classList.add('iv-instant-quote');

         // Observer function
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

        var targetElement = document.querySelector('#online-booking');

        observerElm(targetElement, function(mutationsList, observer) {
            updateCode();
        });

        function updateCode() {
            const stepTitle = document.querySelector('.iv-instant-quote .ob-quote__appointment-box > h2');
            if (!stepTitle) {
                return; 
            }

            const stepTitleText = stepTitle.innerText;
            if (stepTitleText === 'Schedule an Appointment') {

                stepTitle.innerText = 'Schedule a No-Obligation Assessment To Get a Free & Precise Moving Quote';

                const ivQuoteSudheadline = document.querySelector('.iv-instant-quote .ob-bg .ob-quote__appointment-box .ob-quote__paragraph');
                if (ivQuoteSudheadline) {
                    ivQuoteSudheadline.innerText = 'Simply select your preferred date and time below!';
                }

                const ivQuoteCTA = document.querySelector('.iv-instant-quote .ob-bg .ob-quote__appointment-box button.ob-btn');
                if (ivQuoteCTA) {
                    ivQuoteCTA.innerText = 'Book My Free Appointment';
                }
            }
        }

    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);