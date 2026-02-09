function loadTestCode() {
    const tagClass = 'blue-plan';
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains(tagClass)) {
        bodyEle.classList.add(tagClass);
        // Cloud URL
        const cloud = `//res.cloudinary.com/ignite-visibility/image/upload/f_auto`;
        // Hero section
        var heroTitle = document.querySelector(`.${tagClass} .hero_image_content h1`);
        var heroSubTitle = `<span class="hero-sub-title">Unlimited Internet</span><h3>Only EZ Mobile Data gives you the fastest and most reliable Internet, wherever you find yourself.</h3>`;
        heroTitle.innerHTML = "Canada Plan";
        document.querySelector(`.${tagClass} .hero_image_content`).insertAdjacentHTML('beforeend', heroSubTitle);
        // document.addEventListener("DOMContentLoaded", function () {
            // Benefits Content
            var benefitsContent = document.querySelector('.benefits_main .benefits_left.benefits_content p')
            benefitsContent.innerHTML = `<p>Heading to Canada long term, or are you a Canadian citizen seeking unlimited data in Canada? We got you covered!</p>
            <p>Our Canada Plan comes with <b>UNLIMITED DATA & NO SPEED CAPS,</b> perfect for RVers, rural homes, and individuals on the go that need a reliable and fast data connection no matter where their adventures may take them!</p>
            <p>Coverage runs primarily on Rogers <a href="https://www.rogers.com/mobility/network-coverage-map">(Coverage Map)</a>, or can be changed to the preferred network to your area. Bell <a href="https://www.bell.ca/Mobility/Our_network_coverage">(Coverage Map)</a> or Telus <a href="https://www.telus.com/en/mobility/network/coverage-map">(Coverage Map)</a> coverage available.</p>`
            
            // Terms and Conditions
            var TermsandConditions = document.querySelector(`.${tagClass} .benefits_main .benefits_right.benefits_content p`);
            TermsandConditions.innerText = `*Service is unthrottled, with no speed caps. Service is comparable to current cellular technology. Although service isn’t throttled or slowed for any reason, the respective carrier may reprioritize your data in times of congestion. Deprioritization is done by carriers to avoid service degradation for all customers, regardless of location. This generally does not impact your speed or quality of service, but please keep in mind that cellular data speeds are variable.`
            // Star are gold
            var starReview = `<ul class="star-gold">
                <li><i class="stamped-fa stamped-fa-star" aria-hidden="true"></i></li>
                <li><i class="stamped-fa stamped-fa-star" aria-hidden="true"></i></li>
                <li><i class="stamped-fa stamped-fa-star" aria-hidden="true"></i></li>
                <li><i class="stamped-fa stamped-fa-star" aria-hidden="true"></i></li>
                <li><i class="stamped-fa stamped-fa-star" aria-hidden="true"></i></li>
            </ul>`
            document.querySelector(`.${tagClass} .plan_review .review_content .ratings`).insertAdjacentHTML('afterend', starReview);
            // Choose Fast or Ultra Fast
            const coverageImgDesk = document.querySelector(`.${tagClass} .three_image_section .image_main_wrapper .main_img.desktop`);
            const coverageImgMob = document.querySelector(`.${tagClass} .three_image_section .image_main_wrapper .main_img.mobile`);
            coverageImgDesk.setAttribute('src', `${cloud}` + `/EZMobileData/Landing%20Page%20Test/choose-fast-or-ultra-fast-img.png`);
            coverageImgMob.setAttribute('src', `${cloud}` + `/EZMobileData/Landing%20Page%20Test/choose-fast-or-ultra-fast-mobile-img.png`);
            const deviceLink = document.querySelector('.three_image_section .image_main_wrapper a.image_main_link');
            deviceLink.remove();
            // Flag
            const flagImg = document.querySelector(`.${tagClass} .author_location .country-flag`);
            flagImg.setAttribute('src', `${cloud}` + `/EZMobileData/Landing%20Page%20Test/Canada_flag.png`);
            flagImg.setAttribute('width', '47px');
            // Truck Image
            const truckImg = document.querySelector(`.${tagClass} .plan_review .plan_review_main .left_content .center_img_wrapper > img`);
            truckImg.setAttribute('src', `${cloud}` + `/EZMobileData/Landing%20Page%20Test/Fast-and-Flexible.jpg`);
            
            // Canada Map
            const mapList = `.${tagClass} .plan_review .plan_review_main .right_content .coverage_map_wrapper` 
            const canadaMap = document.querySelector(`${mapList} .right_img_wrapper .coverage`);
            canadaMap.setAttribute('src', `${cloud}` + `/EZMobileData/Landing%20Page%20Test/canada-map-black.png`);
            const coverageTitle = document.querySelector(`${mapList} h4`);
            if (coverageTitle) {
                coverageTitle.textContent = "Best Canadian Coverage";
            }
            const elementsToRemove = document.querySelectorAll(`${mapList} p`);
            elementsToRemove.forEach(function(element) {
                element.remove();
            });
            const coverageContect = `<ul class='list-view'>
                <li>Canada 's best unlimited mobile internet</li>
                <li>Unlimited Data</li>
                <li>Unlimited Internet</li>
                <li>Unlimited Internet for home, RV, and Trucks</li>
            </ul>
            <span class="simple-cta">Start Your 14 Day Trial Today</span>`
            console.log(coverageContect);
            if (mapList) {
                document.querySelector(mapList).insertAdjacentHTML('beforeend', coverageContect);
            }
            // Review Sec CTA 
            const ctaNew = `<a class="subscribe_cta" href="javascript:;">ADD SUBSCRIPTION TO CART</a>`;
            const cta = document.querySelector(`.${tagClass} .plan_review .plan_review_main .right_content`);
            cta.insertAdjacentHTML('beforeend', ctaNew);
            const ctaTriger = document.querySelector(`.${tagClass} .plan_review .plan_review_main .right_content .subscribe_cta`);
            ctaTriger.addEventListener('click', function () {
                document.querySelector('.sub_content .product__info .product-form__buy-buttons #AddToCart').click();
            });            
            // Highlight phrases
            var reviewText = document.querySelector(`.blue-plan .star-gold + p`);
            var originalText = reviewText.innerHTML;
            var newText = originalText.replace("the support was extremely friendly and service is excellent", "<strong>the support was extremely friendly and service is excellent</strong>");
            reviewText.innerHTML = newText;
        // });
    }
}
loadTestCode();
