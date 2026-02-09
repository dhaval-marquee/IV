function loadTestCode() {
    document.querySelector('body').classList.add('benefit-iv');
    
    // Put your test code here
    if(document.querySelectorAll('.benefit-list').length === 0) {
        document.querySelector('#root > div:last-child:not(:first-child)').insertAdjacentHTML('beforebegin',`<ul class="benefit-list list-none mx-auto space-y-32">
            <li>
                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/GenerationTux/icon1.png">
                Hassle-free Home Try-On
            </li>
            <li>
                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/GenerationTux/icon2.png">
                Free Swatches
            </li>
            <li>
                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/GenerationTux/icon3.png">
                Free Shipping
            </li>
        </ul>`);
    }
    // console.log('total block is ========================================================================================================================================================================================================================================================================================  ' + document.querySelectorAll('.benefit-list').length);
}

let selector = '#root';

// Function to wait for an element to appear
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

// Function to execute the test code
function executeTest() {
    waitForElement(selector)
        .then((element) => {
            if (element) {
                // Your code here when the element is available
                loadTestCode();
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

// Function to remove test logic when leaving the targeted URLs
function removeTest() {
    // console.log('remove block fired ========================================================================================================================================================================================================================================================================================  ');
    document.querySelector('body').classList.remove('benefit-iv');
    if(document.querySelector('.benefit-list')) {
        document.querySelector('.benefit-list').remove();
    }
}

// **List of multiple target URLs**
const targetUrls = [
    "https://app.generationtux.com/signup/email",
    "https://app.generationtux.com/signup/password",
    "https://app.generationtux.com/signup/occasion",
    "https://app.generationtux.com/signup/date",
    "https://app.generationtux.com/signup/name",
    "https://app.generationtux.com/signup/phone",
    "https://app.generationtux.com/signup/referral-survey",
    "https://app.generationtux.com/signup/preferences",
    "https://app.generationtux.com/signup/role",
];

let previousUrl = "";

// Observer to detect URL changes in single-page applications
const observer = new MutationObserver(function (mutations) {
    setTimeout(() => {
        if (location.href !== previousUrl) {
            previousUrl = location.href;
    
            // Check if the new URL matches any target URLs
            removeTest();
            if (targetUrls.some(url => location.href.includes(url))) {
                executeTest();
            } else {
                removeTest();
            }
        }
    }, 100);
});

// Start observing the DOM for URL changes
const config = {
    subtree: true,
    childList: true
};
observer.observe(document, config);