function loadTestCode() {

	if (!document.querySelector('body').classList.contains('zipcode-iv')) {

		document.querySelector('body').classList.add('zipcode-iv');

		const getPricing = document.querySelector('.zipcode-iv header nav .navbar-nav a[href="/locations/"]');

		if (getPricing && !document.querySelector(`.zipcode-iv-box`)) {

			getPricing.classList.add('zipcode-iv-cta');
			document.querySelector('.zipcode-iv header nav .navbar-nav a[href="/locations/"]').setAttribute('href', 'javascript:;');
			getPricing.insertAdjacentHTML('afterend', `<div class="zipcode-iv-box">
				<a class="close_button" href="javascript:;">Close</a>
				<div class="zipcode-iv-box-inner">
					<h3 class="title">Enter your City or ZIP Code</h3>
					
				</div>
			</div>`);

			
			let elementToClone = document.querySelector('.pss-hero__search .pss-search.pss-search-form');

			let clonedElement = elementToClone.cloneNode(true);

			let targetElement = document.querySelector('.zipcode-iv-box-inner');

			targetElement.appendChild(clonedElement);


			document.querySelector('.zipcode-iv-cta').addEventListener('click', function () {
				if (!document.querySelector('.zipcode-iv-box').classList.contains('show'))
					document.querySelector('.zipcode-iv-box').classList.add('show')
			});

			document.querySelector('.zipcode-iv .zipcode-iv-box .close_button').addEventListener('click', function () {
				if (document.querySelector('.zipcode-iv-box').classList.contains('show')) {
					document.querySelector('.zipcode-iv-box').classList.remove('show')
				}
			});

			function removeClass() {
				if (window.screen.width > 1200) {
					window.addEventListener('scroll', function () {
						const scrollTop = window.pageYOffset;
						const zipcodeBox = document.querySelector('.zipcode-iv-box');
						if (scrollTop > 10) {
							zipcodeBox.classList.remove('show');
						}
					});
				}
			}
			removeClass();
			window.onresize = function () {
				removeClass();
			}
		}

	}

}
loadTestCode();
