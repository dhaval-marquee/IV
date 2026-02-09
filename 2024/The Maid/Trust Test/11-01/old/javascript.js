var loadTest = setInterval(() => {
    var bodyEle = document.querySelectorAll('body');
    if(bodyEle.length > 0 && !bodyEle[0].classList.contains('bigHero_iv')) {
        clearInterval(loadTest);

        bodyEle[0].classList.add('bigHero_iv');

        document.querySelector('.bigHero_iv p.location-header-copy ').insertAdjacentHTML('afterend',`<p>With The Maids proprietary 22-Step Cleaning Process, you can trust you'll get the cleanest home possible, every time.</p><p>Bonded. Insured. Satisfaction Guaranteed.</p>`);
        document.querySelector('.bigHero_iv p.location-header-title').insertAdjacentHTML('afterend',`<div class="reviewWrapper">
            <p>Trusted by our customers</p>
            <div class="imgWrapper"><span>4.9</span><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/mobileIVnurses/five-star.png" alt="five-star"></div>
        </div>`);

        document.querySelector('#gform_submit_button_9').setAttribute('value','Get Your Free Online Quote')
        

    }
}, 100);

