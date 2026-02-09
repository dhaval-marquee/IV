function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-horizontal-scroll')) {
        document.querySelector('body').classList.add('iv-horizontal-scroll');
        document.querySelectorAll('.row .col-xs-12 .simpleimagecomponent:first-child .js-content-component-element > div')
            .forEach(container => {
                const innerDivs = Array.from(container.querySelectorAll(':scope > .amw-content-component__tile-wrapper'));

                if (innerDivs.length > 1 && !container.querySelector('.slick-wrapper')) {
                    const wrapper = document.createElement('div');
                    wrapper.classList.add('slick-wrapper');

                    innerDivs.forEach(div => wrapper.appendChild(div));

                    container.innerHTML = '';

                    container.appendChild(wrapper);

                    $(wrapper).slick({
                        dots: true,
                        arrows: true,
                        infinite: false,
                        adaptiveHeight: true,
                        swipe: false, 
                        draggable: false, 
                        touchMove: false,
                        autoplay: false, 
                        prevArrow: `<button type="button" class="slick-prev custom-arrow">
                            <svg width="50px" height="50px" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31 36L19 24L31 12" stroke="#38539A" stroke-width="5.6" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>`,
                        nextArrow: `<button type="button" class="slick-next custom-arrow">
                            <svg width="50px" height="50px" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12L31 24L19 36" stroke="#38539A" stroke-width="5.6" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>`
                    });
                }
            });

    }
}

var checkCondition = setInterval(() => {
    if (document.querySelectorAll('.row .col-xs-12 .simpleimagecomponent:first-child .js-content-component-element > div').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);