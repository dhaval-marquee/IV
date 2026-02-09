function stickyFilter() {
    if (!document.querySelector('body').classList.contains('filter-iv')) {
        document.querySelector('body').classList.add('filter-iv');
        // Put your test code here

        document.querySelectorAll('.filter-iv h2')[0].classList.add('filter-title');
        document.querySelector('.filter-title').parentElement.parentElement.classList.add('filter-wrapper');

        if(document.querySelectorAll('.filter-wrapper').length > 0) {
            window.addEventListener('resize', function() {
                if (window.matchMedia("(max-width: 575px)").matches) {
                    document.querySelector('#item-list').before(document.querySelector('.filter-wrapper'));
                } else {
                    document.querySelector('#item-list').parentElement.previousElementSibling.appendChild(document.querySelector('.filter-wrapper'));
                }

                setTimeout(() => {
                    var getHeaderHeight = document.querySelector('header').closest('.sticky').clientHeight + 40;
                    document.querySelector('.filter-wrapper').style.maxHeight = 'calc(100vh - '+ getHeaderHeight +'px)';
                }, 1000);
            }, true);

            window.onscroll = function () { myFunction() };
            function myFunction() {
                var headerHeight = document.querySelector('header').closest('.sticky').clientHeight;

                if (window.matchMedia("(max-width: 575px)").matches) {
                    document.querySelector('.filter-wrapper').style.top = headerHeight + 'px';
                } else {
                    document.querySelector('.filter-wrapper').style.top = headerHeight + 20 + 'px';
                }
            }

            window.dispatchEvent(new Event('resize'));

            document.addEventListener('click', function (e) {
                if (e.target.closest('.filter-title')) {
                    e.target.closest('.filter-wrapper').classList.toggle('active');
                } else {
                    document.querySelector('.filter-wrapper').classList.remove('active');
                }
            });
        }
    }
}

let selector = '#item-list';
function waitForElement(selector, timeout = 10000) {
    return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
            const element = document.querySelector(selector);
            if (element) {
                clearInterval(interval);
                resolve(element);
            }
        }, 100);

        setTimeout(() => {
            clearInterval(interval);
            reject(new Error(`Element not found: ${selector}`));
        }, timeout);
    });
}

function executeTest() {
    waitForElement(selector)
        .then((element) => {
            if (element) {
                //your code here when element is available
                stickyFilter();
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

//Single page app URL change logic cover
const targetUrl = "https://generationtux.com/collection/";
let previousUrl = "";
const observer = new MutationObserver(function (mutations) {
    if (location.href !== previousUrl) {
        previousUrl = location.href;
        if (location.href.includes(targetUrl)) {
            executeTest();
        } else {
            removeTest();
        }
    }
});
const config = {
    subtree: true,
    childList: true
};
observer.observe(document, config);