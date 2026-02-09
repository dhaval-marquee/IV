function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('hero_review_iv')) {
        bodyEle.classList.add('hero_review_iv');
        
        var getHTML = setInterval(() => {
            if(document.querySelectorAll('#reviews #ratings-summary').length > 0) {
                clearInterval(getHTML);

                var getNumber = document.querySelectorAll('div[data-bv-show="rating_summary"]')[0].getAttribute('data-bv-product-id');

                document.querySelectorAll('p[class*="ProductTitle"]').forEach(function(addHere) {
                    addHere.insertAdjacentHTML('afterend','<div class="hero_review"></div>');
                    addHere.parentNode.classList.add('review_wrapper');
                });

                document.querySelectorAll('.hero_review').forEach(function(reviewCount){
                    reviewCount.insertAdjacentHTML('beforeend','<div data-bv-show="rating_summary" data-bv-product-id="'+getNumber+'">&nbsp;</div>');
                });

                // Scroll events
                const isTouchDevice = () => {
                    return (('ontouchstart' in window) ||
                        (navigator.maxTouchPoints > 0) ||
                        (navigator.msMaxTouchPoints > 0));
                }

                var anchorLink = document.querySelector(".hero_review"),
                    target = document.querySelectorAll("#reviews")[0],
                    body = document.querySelector("body");
                console.log("test run");
                anchorLink.addEventListener("click", function (e) {
                    if (body.scrollTo) {
                        e.preventDefault();
                        if (isTouchDevice()) {
                            body.scrollTo({
                                "behavior": "smooth",
                                "top": target.offsetTop
                            });
                        } else {
                            window.scrollTo({
                                "behavior": "smooth",
                                "top": target.offsetTop
                            });
                        }
                    }
                });
            }
        }, 100);
    }
}
loadTestCode();