function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-prominent')) {
        document.querySelector('body').classList.add('iv-prominent');
        
        const banner = document.querySelector(".home-banner");
        const testimonials = document.querySelector("#testimonials");

        if (banner && testimonials) {
            banner.insertAdjacentElement("afterend", testimonials);
        }
     
        function applyReviewClamp() {
            const isMobile = window.innerWidth <= 768;
            const maxLines = isMobile ? 5 : 3;

            document.querySelectorAll(".testimonials-content p").forEach(function (para) {

                para.style.webkitLineClamp = "";
                para.style.display = "";
                para.style.webkitBoxOrient = "";
                para.style.overflow = "";

                const oldBtn = para.parentElement.querySelector(".read-more-btn");
                if (oldBtn) oldBtn.remove();

                para.style.display = "-webkit-box";
                para.style.webkitBoxOrient = "vertical";
                para.style.webkitLineClamp = maxLines;
                para.style.overflow = "hidden";

                if (para.scrollHeight > para.clientHeight) {

                    const btn = document.createElement("span");
                    btn.textContent = " Read more";
                    btn.className = "read-more-btn";

                    btn.addEventListener("click", function () {
                        para.style.webkitLineClamp = "unset";
                        para.style.display = "block";
                        btn.remove();
                    });

                    para.parentElement.appendChild(btn);
                }
            });
        }

    applyReviewClamp();
    window.addEventListener("resize", applyReviewClamp);
    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);