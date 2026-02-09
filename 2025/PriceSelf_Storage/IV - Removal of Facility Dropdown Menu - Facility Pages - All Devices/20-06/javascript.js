function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-location-dropdown')) {
        document.querySelector('body').classList.add('iv-location-dropdown');
        
		  const ratingElement = document.querySelector(".iv-location-dropdown .pss-rating.pss-invisible-mobile-only");
		  const titleElement = document.querySelector(".iv-location-dropdown .pss-facility__main-title .pss-facility__main-title-header #MainContent_lblFacilityName");
		
		  if (ratingElement && titleElement) {
		    titleElement.parentNode.insertBefore(ratingElement, titleElement.nextSibling);
		  }
        
    }
}
const checkCondition = setInterval(() => {
    if (document.querySelectorAll('body').length > 0) {
        loadTestCode();
        clearInterval(checkCondition);
    }
}, 50);