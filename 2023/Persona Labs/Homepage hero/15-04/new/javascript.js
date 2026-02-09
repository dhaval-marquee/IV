function loadTestCode() {
	var bodyEle = document.querySelector('body');
	if (!bodyEle.classList.contains('hero_iv')) {
		bodyEle.classList.add('hero_iv');
		
		// home hero add classes
		jQuery('.hero_iv .elementor-section-wrap > .personalabs-promos + section,.hero_iv .elementor-section-wrap > .personalabs-promos + section + section').addClass('hero_iv_bannerwrap');

		function getElementsByText(tagName, searchTxt) {
			var allTags = document.getElementsByTagName(tagName);
			var foundEle;

			for (var i = 0; i < allTags.length; i++) {
				if(allTags[i].textContent == searchTxt) {
					foundEle = allTags[i];
					break;
				}
			}
			return foundEle;
		}
		var LabTests = jQuery('div.elementor-slide-heading:contains("Get the lab tests, medications, and answers you want, when you want them.")').addClass('hero_iv_slideone_title');
		jQuery('.hero_iv .hero_iv_slideone_title').parent().addClass('hero_iv_slideone_wrap')

		// home hero task changes
		jQuery('.hero_iv .hero_iv_slideone_title').text('Fast, Affordable & Confidential Lab Testing')
		jQuery('.hero_iv .hero_iv_slideone_title').wrapInner('<h1></h1>');

		jQuery('.hero_iv .hero_iv_slideone_title').append(
			`<h2>No doctor's visit or insurance required</h2>
			<ul>
				<li>Over 4,000 labs nationwide</li>
				<li>We provide everything you need, including a doctor’s order</li>
				<li>Results sent directly to you in 24 to 72 hours</li>
			</ul>`
		);

		jQuery('.hero_iv_slideone_wrap .elementor-slide-description').contents().filter(function () {
				return this.nodeType === 3;
		}).remove();

		jQuery('.hero_iv .hero_iv_bannerwrap .hero_iv_slideone_wrap').parent().parent().addClass('hero_iv_slideone_sm_bg')
	}
}
loadTestCode();