function loadTestCode() {
    const tagClass = 'blue-plan';
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains(tagClass)) {
        bodyEle.classList.add(tagClass);
        // Hero section
        var heroTitle = document.querySelector(`.${tagClass} .hero_image_content h1`);
        var heroSubTitle = `<span class="hero-sub-title">Unlimited Internet</span><h3>Only EZ Mobile Data gives you the fastest and most reliable Internet, wherever you find yourself.</h3>`;
        heroTitle.innerHTML = "Blue Plan Canadian";
        document.querySelector(`.${tagClass} .hero_image_content`).insertAdjacentHTML('beforeend', heroSubTitle);

        document.addEventListener("DOMContentLoaded", function() {
            // Consolidate Information
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

            // Highlight phrases
            var reviewText = document.querySelector(`.blue-plan .star-gold + p`);
            var originalText = reviewText.innerHTML;
            var newText = originalText.replace("the support was extremely friendly and service is excellent", "<strong>the support was extremely friendly and service is excellent</strong>");
            reviewText.innerHTML = newText;
        });

    }
}
loadTestCode();