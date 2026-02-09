function runTest() {
	var page = window.location.href.split("?")[0].split("#")[0];
	if(page.includes('https://www.shoesforcrews.com/product/')) {

		var getButton = setInterval(() => {
			if($('button.merce-PDP-addcart-button').length > 0 && $('#currentUsersWrapper').length == 0) {
				clearInterval(getButton);
		
				$('button.merce-PDP-addcart-button').closest('div[class*="PDP_DefaultLayout_size"]').before('<div id="currentUsersWrapper"><img src="//res.cloudinary.com/ignite-visibility/image/upload/shoesforcrews/eye_icon.png"> <span id="currentUsers">10</span> others are currently viewing this product.</div>');
		
				document.getElementById("currentUsers").innerHTML = Math.floor(Math.random() * (30 - 7 + 1)) + 7;
				setInterval(() => {
					document.getElementById("currentUsers").innerHTML = Math.floor(Math.random() * (30 - 7 + 1)) + 7;
				}, 15000);
			} else if ($('#currentUsersWrapper').length > 0) {
				clearInterval(getButton);
			}
		}, 500);
	}
}

function nextPrev() {
	runTest();
	if($('#currentUsersWrapper').length > 0) {
		document.getElementById("currentUsers").innerHTML = Math.floor(Math.random() * (30 - 7 + 1)) + 7;
	}
}

window.addEventListener('popstate', nextPrev);
window.addEventListener('load', function () {
	runTest();
});