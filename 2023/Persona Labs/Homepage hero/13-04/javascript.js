function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('iv-personalabs')) {
        bodyEle.classList.add('iv-personalabs');
        
		// home hero add classes
		jQuery('.iv-personalabs .elementor-section-wrap > .personalabs-promos + section,.iv-personalabs .elementor-section-wrap > .personalabs-promos + section + section').addClass('iv-personalabs-hero');

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
		var LabTests = jQuery('div.elementor-slide-heading:contains("Get the lab tests, medications, and answers you want, when you want them.")').addClass('iv-personalabs-hero-slide-one-title');
		jQuery('.iv-personalabs .iv-personalabs-hero-slide-one-title').parent().addClass('iv-personalabs-hero-slide-one-wrap')

		// home hero task changes
		jQuery('.iv-personalabs .iv-personalabs-hero-slide-one-title').text('Fast, Affordable & Confidential Lab Testing')
		jQuery('.iv-personalabs .iv-personalabs-hero-slide-one-title').wrapInner('<h1></h1>');

		jQuery('.iv-personalabs .iv-personalabs-hero-slide-one-title').append(
			`<h2>No doctor's visit or insurance required</h2>
			<ul>
				<li>Over 4,000 labs nationwide</li>
				<li>We provide everything you need, including a doctor’s order</li>
				<li>Results sent directly to you in 24 to 72 hours</li>
			</ul>`
		);

		jQuery('.iv-personalabs-hero-slide-one-wrap .elementor-slide-description').contents().filter(function () {
				return this.nodeType === 3;
		}).remove();

		jQuery('.iv-personalabs .iv-personalabs-hero .iv-personalabs-hero-slide-one-wrap').parent().parent().addClass('iv-personalabs-hero-white-bg')
	}
}
loadTestCode();