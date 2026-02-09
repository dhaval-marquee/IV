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
            // Read More button
            var benefitsText = document.querySelector(`.${tagClass} .benefits_main .benefits_left.benefits_content p`);
            var lineHeight = 21;
            var linesToShow = 4;
            var maxHeight = lineHeight * linesToShow;
            if (benefitsText.clientHeight > maxHeight) {
                benefitsText.style.height = maxHeight + "px";
                var readMoreButton = document.createElement("button");
                readMoreButton.innerHTML = "Read More";
                readMoreButton.className = "read-more-button";
                benefitsText.style.overflow = 'hidden';
                benefitsText.style.display = '-webkit-box';
                readMoreButton.onclick = function () {
                    if (benefitsText.style.height === "auto") {
                        benefitsText.style.height = maxHeight + "px";
                        benefitsText.style.overflow = 'hidden';
                        readMoreButton.innerHTML = "Read More";
                        benefitsText.style.display = '-webkit-box';
                    } else {
                        benefitsText.style.height = "auto";
                        readMoreButton.innerHTML = "Read Less";
                        benefitsText.style.overflow = 'visible';
                        benefitsText.style.display = 'block';
                    }
                };
                benefitsText.parentNode.appendChild(readMoreButton);
            }

            // Bullet point list
            var bulletList = document.querySelector(`.${tagClass} .benefits_main .benefits_right.benefits_content p`);
            var text = bulletList.innerHTML;
            var bulletPoints = text.split('. ');
            var ul = document.createElement("ul");
            bulletPoints.forEach(function (point) {
                var li = document.createElement("li");
                li.appendChild(document.createTextNode(point));
                ul.appendChild(li);
            });
            bulletList.parentNode.replaceChild(ul, bulletList);

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
            coverageImgDesk.setAttribute('src', `${cloud}` + `/EZMobileData/Landing%20Page%20Test/choose-fast-or-ultra-fast-img.png`)
            coverageImgMob.setAttribute('src', `${cloud}` + `/EZMobileData/Landing%20Page%20Test/choose-fast-or-ultra-fast-mobile-img.png`)

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