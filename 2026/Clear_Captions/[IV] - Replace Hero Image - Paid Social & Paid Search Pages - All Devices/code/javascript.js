function createSlider() {
    const sliderHTML = `
        <div class="iv-slider-wrapper" style="max-width:500px;margin:0 auto;">
            <div class="iv-slider">
                <div>
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1770891050/PriceSelfStorage/ivPaidSocial1.png" />
                </div>
                <div>
                    <img src="https://newclearcapstg.wpenginepowered.com/wp-content/uploads/2025/01/22bd15ae-925f-4f0a-b65d-9598bc28d925.png" />
                </div>
                <div>
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1770891049/PriceSelfStorage/ivPaidSocial3.png" />
                </div>
            </div>
        </div>
    `;

    document.querySelector('.fusion-container-anchor .fusion-builder-column-3 .fusion-column-wrapper .fusion-image-element').insertAdjacentHTML('beforeend', sliderHTML);
}

function initSlick() {
    jQuery('.iv-slider').slick({
        dots: true,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 500,
        adaptiveHeight: true
    });
}

function loadTestCode() {
    if (!document.body.classList.contains('iv-paid-social')) {
        document.body.classList.add('iv-paid-social');
            createSlider();
            initSlick();
    }
}

loadTestCode();
