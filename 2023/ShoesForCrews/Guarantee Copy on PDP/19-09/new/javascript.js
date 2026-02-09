console.log('AB test code working');
function loadTestCode() {
    // Put your test code here
    var getLength = setInterval(() => {
        if(document.querySelectorAll('div[class*="paypalSection"]').length && document.querySelectorAll('div[class*="ExpressCheckout_expressCheckout"]').length && document.querySelectorAll('div[class*="AccordionPanel_satisfactionGuarantee"]').length > 0) {
            clearInterval(getLength);

            if(document.querySelectorAll('.paypal_iv').length == 0) {
                document.querySelectorAll('div[class*="paypalSection"]')[0].classList.add('paypal_iv');
                document.querySelector('div[class*="ExpressCheckout_expressCheckout"]').parentElement.after(document.querySelector('.paypal_iv'));
            }

            document.querySelector('div[class*="buttonATCContainer"]').closest('.merce-row').classList.add('addToCart_CTA');
            if(document.querySelectorAll('.guarantee_text').length == 0) {
                document.querySelector('.addToCart_CTA').insertAdjacentHTML('afterend',`<div class="guarantee_text"><p><b style="color: #30499A">100% Satisfaction Guarantee:</b> If you are not 100% satisfied for any reason within 30 days of your original purchase, exchange your shoes for <b>free</b> or return them for a refund, no questions asked.</p></div>`);
            }
        }
    }, 100);
}

function SPZTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('copy_on_pdp')) {
        bodyEle.classList.add('copy_on_pdp');
        var running = false;
        var target = document.querySelectorAll('main')[0];

        const config = { childList: true, characterData: true, subtree: true, attributes: true, };
        const callback = function(mutationsList, observer) {
            var page = window.location.href.split("?")[0].split("#")[0];
            if(running == false && page.indexOf('https://www.shoesforcrews.com/product/') > -1) {
                console.log('working222');
                loadTestCode();
    
                running = true;
                setTimeout(function() { running = false }, 1000);
            }
        };
        const observer = new MutationObserver(callback);
        observer.observe(target, config);
    }
}

function runtest() {
    var page = window.location.href.split("?")[0].split("#")[0];    
    if(page.indexOf('https://www.shoesforcrews.com/product/') > -1) {
        console.log('working111');
        SPZTestCode();
    }
}

 // Set Initial URL
var initialURL = window.location.href;
window.addEventListener('click', function(e){
    if(initialURL !== window.location.href){
        initialURL = window.location.href;
        runtest();
    }
});

window.addEventListener('popstate', runtest);

runtest();