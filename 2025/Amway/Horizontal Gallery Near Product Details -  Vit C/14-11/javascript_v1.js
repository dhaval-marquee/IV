function loadTestCode() {
    if (!document.body.classList.contains('iv-pd')) {
        document.body.classList.add('iv-pd');

        // --- Add Image Carousel Below Buttons ---
        const carousel = document.createElement("div");
        carousel.className = "iv-image-carousel";
        carousel.innerHTML = `
        <div><img src="/medias/109747-en-US-690px-01?context=bWFzdGVyfGltYWdlc3w0NTI0MDN8aW1hZ2UvcG5nfGltYWdlcy9oMWEvaGEzLzk0NDk4ODA1MTg2ODYucG5nfDhhMzQ4NmUzNWUwODM2ZGYzODQ2MDk0YWQ4ODQxMThjMmUwYTlmZDBlYWIyMzFhYzBlZDc2YmFkOTcyNzY1MGE" alt="Product image 1"></div>
        <div><img src="/medias/109747-en-US-690px-02?context=bWFzdGVyfGltYWdlc3wxMzk3NTN8aW1hZ2UvcG5nfGltYWdlcy9oMjcvaDI3Lzk0NDk4ODA0MjAzODIucG5nfDdjZWE2YTNlZGU2ZGVkOTU3ZTA4MjkzNzMzM2ViYjA2OTc1NGRhMzg5ZTk0OTI4MmM3NmEzNzE0YmY2MzJiOTM" alt="Product image 2"></div>
        <div><img src="/medias/109747-en-US-690px-03?context=bWFzdGVyfGltYWdlc3wxNjgyOTN8aW1hZ2UvcG5nfGltYWdlcy9oODMvaGYyLzk0NzU2MTE4NTI4MzAucG5nfDVhOTM5NzkxODk4YzE4NDBkMGVkMTBlZmFlZjAyYWU1MWYwNjIyNGZlYjlhYjRjMmFhZTFmZGY0ZjA4NWU0NDU" alt="Product image 3"></div>
        <div><img src="/medias/109747-en-US-690px-08?context=bWFzdGVyfGltYWdlc3wyOTA0NTF8aW1hZ2UvcG5nfHN5cy1tYXN0ZXIvaW1hZ2VzL2gwMy9oMzMvOTc1Mzg2NTM1NTI5NC8xMDk3NDctZW4tVVMtNjkwcHgtMDh8OTQxZmRhNzZhMDMwZWM3MGU1NzlkOTk5MzJjOTIwZGU2YjQ3ZWFiYWViZTNlMTM1YzA2MjkzZjA2MTM4ZGQ2NA" alt="Product image 4"></div>
        </div>
        <div><img src="/medias/109747-en-US-690px-10?context=bWFzdGVyfGltYWdlc3w3MzgzNXxpbWFnZS9qcGVnfGltYWdlcy9oNzcvaGYyLzg5ODkyODE2ODE0MzguanBnfDNiY2Y4N2RmMTFiOTk4ODhkMWExZjg2M2YwYjJmODM5YzA4Y2JlZjg2M2NlOWZiOTUxMzgwZmQ0YzgyNzRmMmM" alt="Product image 5"></div>
        `;
        document.querySelector('#productPageAccordion').insertAdjacentElement("beforebegin", carousel);

        // Wait until jQuery + Slick are loaded
        const initSlick = () => {
            if (window.jQuery && jQuery().slick) {
                jQuery('.iv-image-carousel').slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true,
                    autoplay: false,
                    autoplaySpeed: 3000,
                    prevArrow: `<button type="button" class="iv-slick-prev" aria-label="Previous">
                        <svg width="32px" height="32px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                        <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#000000"></path>
                        </svg>
                    </button>`,
                    nextArrow: `<button type="button" class="iv-slick-next" aria-label="Next">
                        <svg width="32px" height="32px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                        <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#000000"></path>
                        </svg>
                    </button>`,
                    responsive: [{
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            dots: true
                        }
                    }]
                });
            } else {
                setTimeout(initSlick, 300);
            }
        };
        initSlick();
    }
}

var checkCondition = setInterval(function() {
    if (document.body && document.querySelector('.amw-accordion')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);