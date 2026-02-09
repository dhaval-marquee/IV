var pageList = [
    "https://www.shoesforcrews.com/cart"
];

function runtest() {
	var page = window.location.href.split("?")[0].split("#")[0];
	if(pageList.indexOf(page) > -1) {
        document.querySelector('body').classList.add('cart_copy');
		runCode();
	} else {
		document.querySelector('body').classList.remove('cart_copy');
	}
}

function runCode() {
    console.log('loaded');
    var selector = document.querySelector('.cart_copy .merce-cart-container div[class*="DefaultCartView_summary"] div[class*="DefaultCartView_summary"]')
    if(!selector) {
        window.setTimeout(runCode,500);
        return
    }

    if(document.querySelectorAll('#guaranteeText').length == 0) {
        document.querySelector('.cart_copy .merce-cart-container div[class*="DefaultCartView_summary"] div[class*="DefaultCartView_summary"]').insertAdjacentHTML('beforeend','<p id="guaranteeText" style="font-size: 14px;line-height: normal;text-align: center;margin-top: 5px;"><span class="primaryColorFont"> 100% Satisfaction Guarantee:</span> Exchange your shoes for <b>free</b> or return them for a full refund within 30 days</p>');
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