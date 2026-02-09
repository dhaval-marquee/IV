if (!document.querySelector('body').classList.contains('urgencyMessaging_iv')) {
	document.querySelector('body').classList.add('urgencyMessaging_iv');

	var pageList = [
		"https://www.shoesforcrews.com/product/50-crewguard-slip-resistant-overshoes",
		"https://www.shoesforcrews.com/product/38140-freestyle-ii",
		"https://www.shoesforcrews.com/product/37255-liberty",
		"https://www.shoesforcrews.com/product/61582-radium",
		"https://www.shoesforcrews.com/product/22146-everlight",
		"https://www.shoesforcrews.com/product/22149-everlight",
		"https://www.shoesforcrews.com/product/30359-pembroke-canvas",
		"https://www.shoesforcrews.com/product/22107-falcon-iii",
		"https://www.shoesforcrews.com/product/22201-gia",
		"https://www.shoesforcrews.com/product/22106-condor-ii",
		"https://www.shoesforcrews.com/product/72387-dewalt-6-inch-flex-moc-nano-composite-toe",
		"https://www.shoesforcrews.com/product/22325-brakly",
		"https://www.shoesforcrews.com/product/22359-brakly",
		"https://www.shoesforcrews.com/product/22155-new-balance-fresh-foam-x-kaiha-road",
		"https://www.shoesforcrews.com/product/22305-gia",
		"https://www.shoesforcrews.com/product/27769-bridgetown",
		"https://www.shoesforcrews.com/product/22227-new-balance-510-v5",
		"https://www.shoesforcrews.com/product/22101-tigon-ii",
		"https://www.shoesforcrews.com/product/42153-cole-haan-malorie-leather-wingtip-oxford",
		"https://www.shoesforcrews.com/product/22210-gia",
		"https://www.shoesforcrews.com/product/52203-cole-haan-cassie-bootie",
		"https://www.shoesforcrews.com/product/52302-cole-haan-chester-chukka",
		"https://www.shoesforcrews.com/product/22752-tigon",
		"https://www.shoesforcrews.com/product/72413-roan-mountain-8-inch-nano-composite-toe-waterproof",
		"https://www.shoesforcrews.com/product/72200-ace-arrow-6-inch-nano-composite-toe-waterproof",
		"https://www.shoesforcrews.com/product/72397-rainier-6-inch-nano-composite-toe",
		"https://www.shoesforcrews.com/product/72212-puma-safety-airtwist-low-composite-toe"
	];

	function textChange() {
		var url = window.location.href;
		url = url.split( '?' )[0];
		url = url.split( '#' )[0];

		if ((url == "https://www.shoesforcrews.com/product/50-crewguard-slip-resistant-overshoes") ||
			(url == "https://www.shoesforcrews.com/product/38140-freestyle-ii") ||
			(url == "https://www.shoesforcrews.com/product/37255-liberty") ||
			(url == "https://www.shoesforcrews.com/product/61582-radium") ||
			(url == "https://www.shoesforcrews.com/product/22146-everlight") ||
			(url == "https://www.shoesforcrews.com/product/22149-everlight") ||
			(url == "https://www.shoesforcrews.com/product/30359-pembroke-canvas") ||
			(url == "https://www.shoesforcrews.com/product/22107-falcon-iii") ||
			(url == "https://www.shoesforcrews.com/product/22201-gia") ||
			(url == "https://www.shoesforcrews.com/product/22106-condor-ii")){  

			document.querySelectorAll('.urgencyMessaging_iv .highlightText')?.forEach(function(text){
				text.textContent = '1000+ sold in the last 24 hours';
			});

		} else if ((url == "https://www.shoesforcrews.com/product/72387-dewalt-6-inch-flex-moc-nano-composite-toe") ||
			(url == "https://www.shoesforcrews.com/product/22325-brakly") ||
			(url == "https://www.shoesforcrews.com/product/22359-brakly") ||
			(url == "https://www.shoesforcrews.com/product/22155-new-balance-fresh-foam-x-kaiha-road") ||
			(url == "https://www.shoesforcrews.com/product/22305-gia")) {
			
			document.querySelectorAll('.urgencyMessaging_iv .highlightText')?.forEach(function(text){
				text.textContent = 'Selling out quick';
			});

		} else if ((url == "https://www.shoesforcrews.com/product/27769-bridgetown") ||
			(url == "https://www.shoesforcrews.com/product/22227-new-balance-510-v5") ||
			(url == "https://www.shoesforcrews.com/product/22101-tigon-ii") ||
			(url == "https://www.shoesforcrews.com/product/42153-cole-haan-malorie-leather-wingtip-oxford")) {

			document.querySelectorAll('.urgencyMessaging_iv .highlightText')?.forEach(function(text){
				text.textContent = 'Almost gone';
			});

		} else if ((url == "https://www.shoesforcrews.com/product/22210-gia") ||
			(url == "https://www.shoesforcrews.com/product/52203-cole-haan-cassie-bootie") ||
			(url == "https://www.shoesforcrews.com/product/52302-cole-haan-chester-chukka")) {

			document.querySelectorAll('.urgencyMessaging_iv .highlightText')?.forEach(function(text){
				text.textContent = 'Back in stock';
			});

		}else if ((url == "https://www.shoesforcrews.com/product/22752-tigon") ||
			(url == "https://www.shoesforcrews.com/product/72413-roan-mountain-8-inch-nano-composite-toe-waterproof") ||
			(url == "https://www.shoesforcrews.com/product/72200-ace-arrow-6-inch-nano-composite-toe-waterproof") ||
			(url == "https://www.shoesforcrews.com/product/72397-rainier-6-inch-nano-composite-toe") ||
			(url == "https://www.shoesforcrews.com/product/72212-puma-safety-airtwist-low-composite-toe")) {

			document.querySelectorAll('.urgencyMessaging_iv .highlightText')?.forEach(function(text){
				text.textContent = 'Trending';
			});

		} else {
			document.querySelectorAll('.urgencyMessaging_iv .highlightText')?.forEach(function(text){
				text.textContent = '';
			});
		}
	}

	function loadTestCode() {
		if(document.querySelectorAll('div[class*=CoreAttributes_priceDisplay] + .highlightText').length == 0) {
			document.querySelector('div[class*=CoreAttributes_priceDisplay]')?.insertAdjacentHTML('afterend', `<div class="highlightText"></div>`);
		}
		if(document.querySelectorAll('div[class*=PDP_DefaultLayout_priceDisplay] + .highlightText').length == 0) {
			document.querySelector('div[class*=PDP_DefaultLayout_priceDisplay]')?.insertAdjacentHTML('afterend', `<div class="highlightText"></div>`);
		}
		textChange();
	}

	var running = false;
	var target = document.querySelector('main');

	const config = { childList: true, characterData: true, subtree: true, attributes: true, };
	const callback = function(mutationsList, observer) {
		var page = window.location.href.split("?")[0].split("#")[0];
		if(running == false && pageList.indexOf(page) > -1) {
			loadTestCode();

			running = true;
			setTimeout(function() { running = false }, 600);
		}
	};
	const observer = new MutationObserver(callback);
	observer.observe(target, config);

	function runtest() {
		var page = window.location.href.split("?")[0].split("#")[0];    
		if(pageList.indexOf(page) > -1 && document.querySelectorAll('main').length > 0) {
			loadTestCode();
		} else {
			document.querySelectorAll('.urgencyMessaging_iv .highlightText')?.forEach(function(text){
				text.textContent = '';
			});
		}
	}

	// Set Initial URL
	var initialURL = window.location.href;
	window.addEventListener('click', function(e){
		console.log('clickeddd')
		setTimeout(() => {
			if(initialURL !== window.location.href){
				initialURL = window.location.href;
				runtest();
			}
		}, 500);
	});
	// window.addEventListener('popstate', runtest);
	window.addEventListener('popstate', function() {
		setTimeout(function() {
			runtest();
		}, 500);
	});
	runtest();
}