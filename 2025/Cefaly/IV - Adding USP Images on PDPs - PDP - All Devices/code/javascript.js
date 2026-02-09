function loadTestCode() {
    if (!document.body.classList.contains('iv-usp-images')) {
        document.body.classList.add('iv-usp-images');
console.log('Testing 2');

      unslickSliders();

            setTimeout(() => {
                insertNewImages();
                setTimeout(() => {
                    reInitSlick();
                 }, 600);
            }, 300);
        try {
            unslickSliders();
        } catch (error) {
            console.error('Error during unslicking sliders:', error);
        }

        try {
            insertNewImages();
        } catch (error) {
            console.error('Error inserting new images:', error);
        }

        try {
            reInitSlick();
        } catch (error) {
            console.error('Error reinitializing slick sliders:', error);
        }
    }
}

function unslickSliders() {
    document.querySelectorAll('.product-content-desktop, .product-content-tablet').forEach(container => {
        const $sliderMainImage = $(container).find('.main-image-view');
        if ($sliderMainImage.hasClass('slick-initialized')) {
            $sliderMainImage.slick('unslick');
        }

        const $sliderThumbnail = $(container).find('.slickerizeMe');
        if ($sliderThumbnail.hasClass('slick-initialized')) {
            $sliderThumbnail.slick('unslick');
        }
    });
}

function insertNewImages() {
    const newImages = [
        "https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/Cefaly/cefalyProduct_1.png",
        "https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/Cefaly/cefalyProduct_2.png"
    ];

    document.querySelectorAll('.product-content-desktop, .product-content-tablet')
        .forEach(container => {
            const thumbContainer = container.querySelector('.slickerizeMe');
            const mainContainer = container.querySelector('.main-image-view');

            if (!thumbContainer || !mainContainer) return;

            if (mainContainer.querySelector('img[src*="cefalyProduct_1.png"]')) return;

            newImages.forEach((img, idx) => {
                const newDivThumb = document.createElement("div");
                newDivThumb.className = "prod-thumb-slide";
                newDivThumb.setAttribute("tabindex", "0");

                const newImgThumb = document.createElement("img");
                newImgThumb.src = img;
                newImgThumb.className = "img-responsive cursor-pointer";
                newImgThumb.setAttribute("data-gallery_src", img);
                newImgThumb.alt = `New Cefaly product image ${idx + 1}`;

                newDivThumb.appendChild(newImgThumb);

                const insertPosThumb = thumbContainer.children[idx + 1];
                thumbContainer.insertBefore(newDivThumb, insertPosThumb);

                const newDivMain = document.createElement("div");
                newDivMain.setAttribute("tabindex", "0");

                const newImgMain = document.createElement("img");
                newImgMain.src = img;
                newImgMain.className = "img-responsive cursor-pointer";
                newImgMain.setAttribute("data-gallery_src", img);
                newImgMain.alt = `New Cefaly product image ${idx + 1}`;

                newDivMain.appendChild(newImgMain);

                const insertPosMain = mainContainer.children[idx + 1];
                mainContainer.insertBefore(newDivMain, insertPosMain);
            });
        });
}

function reInitSlick() {
    document.querySelectorAll('.product-content-desktop, .product-content-tablet')
        .forEach(container => {
            const $main = $(container).find('.main-image-view');
            const $thumb = $(container).find('.slickerizeMe');
            const $prev = $(container).find('.prev_prod_thumb');
            const $next = $(container).find('.next_prod_thumb');

            if ($main.length && !$main.hasClass('slick-initialized')) {
                $main.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: false,
                    asNavFor: $thumb
                });
            }

            if ($thumb.length && !$thumb.hasClass('slick-initialized')) {
                $thumb.slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    asNavFor: $main,
                    dots: false,
                    centerMode: false,
                    focusOnSelect: true,
                    prevArrow: $prev.length ? $prev : undefined,
                    nextArrow: $next.length ? $next : undefined
                });
            }
        });
}

// Run once safely
var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0 && document.querySelectorAll('.product-content-desktop, .product-content-tablet').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 200);