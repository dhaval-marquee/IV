// Load code just for mobile 
if (window.matchMedia("(max-width: 766.98px)").matches) {

    var paymentButton = setInterval(() => {
        if(document.querySelectorAll('div[class*=DefaultCartView_mobileExpressCheckoutButtons]').length > 0 && 
        document.querySelectorAll('div[class*=DefaultCartView_summaryContainer]').length > 0) {
            clearInterval(paymentButton);
            console.log('loaded')
            document.querySelector('div[class*=DefaultCartView_summaryContainer]').append(document.querySelector('div[class*=DefaultCartView_mobileExpressCheckoutButtons]'));
        }
    }, 100);

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 767px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 766.98px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for mobile over