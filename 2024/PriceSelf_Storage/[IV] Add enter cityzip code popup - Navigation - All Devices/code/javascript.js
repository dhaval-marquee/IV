function loadTestCode() {

	if (!document.querySelector('body').classList.contains('zipcode-iv')) {

		document.querySelector('body').classList.add('zipcode-iv');

		const getPricing = document.querySelector('.zipcode-iv header nav .navbar-nav a[href="/locations/"]');
	
		if (getPricing && !document.querySelector(`.zipcode-iv-box`)) {
	
			// Zipcode Popup
			getPricing.classList.add('zipcode-iv-cta');
			document.querySelector('.zipcode-iv header nav .navbar-nav a[href="/locations/"]').setAttribute('href', 'javascript:;');
			getPricing.insertAdjacentHTML('afterend', `<div class="zipcode-iv-box">
				<a class="close_button" href="javascript:;">Close</a>
				<div class="zipcode-iv-box-inner">
					<h3 class="title">Enter your City or ZIP Code</h3>
					<div class="pss-search-form">
						
					</div>
				</div>
			</div>`);


			// Dekstop 
			var elementToMove = document.querySelector('#navbarSupportedContent .form-inline.pss-form');
    
			var targetElement = document.querySelector('.zipcode-iv-box-inner > .pss-search-form');
			
			if (elementToMove && targetElement) {
				targetElement.appendChild(elementToMove);
			}


			// Mobile 
			function moveElement() {
				var elementToMove = document.querySelector('#nav .form-inline.pss-form.pss-invisible-mobile-only2');
				var targetElement = document.querySelector('#navbarSupportedContent.pss-navbar__navmenu .navbar-nav');
				var originalParent = document.querySelector('#nav .pss-navbar__action-btn');
				
				if (elementToMove && targetElement && originalParent) {
					if (window.innerWidth < 1200) {
						targetElement.parentNode.insertBefore(elementToMove, targetElement);
					} else {
						originalParent.parentNode.insertBefore(elementToMove, originalParent);
					}
				}
			}
			moveElement();
			
			window.addEventListener('resize', moveElement);

	
			// Hide and show
			document.querySelector('.zipcode-iv-cta').addEventListener('click', function() {
				if (!document.querySelector('.zipcode-iv-box').classList.contains('show'))
					document.querySelector('.zipcode-iv-box').classList.add('show')
			});
	
			document.querySelector('.zipcode-iv .zipcode-iv-box .close_button').addEventListener('click', function() {
				if (document.querySelector('.zipcode-iv-box').classList.contains('show')) {
					document.querySelector('.zipcode-iv-box').classList.remove('show')
				}
			});
	
			// Hide popup on scroll 
			function removeClass() {
				if (window.screen.width > 1200) {
					window.addEventListener('scroll', function() {
						const scrollTop = window.pageYOffset;
						const zipcodeBox = document.querySelector('.zipcode-iv-box');
						if (scrollTop > 10) {
							zipcodeBox.classList.remove('show');
						}
					});
				}
			}
			removeClass();
			window.onresize = function() {
				removeClass();
			}
		}

	}

}
loadTestCode();