var pageList = [
    "https://www.shoesforcrews.com/checkout"
];

function runtest() {
	var page = window.location.href.split("?")[0].split("#")[0];
	if(pageList.indexOf(page) == -1) {
		document.querySelector('body').classList.remove('no_nav');
	} else {
		document.querySelector('body').classList.add('no_nav');
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