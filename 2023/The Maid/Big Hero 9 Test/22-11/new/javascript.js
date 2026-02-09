var loadTest = setInterval(() => {
    if(document.querySelectorAll('body').length > 0 && !document.querySelector('body').classList.contains('bigHero_iv')) {
        clearInterval(loadTest);

        document.querySelector('body').classList.add('bigHero_iv');
        document.querySelector('.bigHero_iv h1.location-header-title').textContent = 'The Maids in Austin';
        document.querySelector('.bigHero_iv p.location-header-copy').insertAdjacentHTML('afterend',`<p data-aos="fade-right">With The Maids proprietary 22-Step Cleaning Process, you can trust you'll get the cleanest home possible, every time.</p><p data-aos="fade-right">Bonded. Insured. 24 Hour Satisfaction Guarantee.</p>`);
        document.querySelector('.bigHero_iv p.location-header-title').insertAdjacentHTML('afterend',`<div class="reviewWrapper">
            <p data-aos="fade-right">Trusted by our customers</p>
            <div class="imgWrapper" data-aos="fade-left"><span>4.9/5</span><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/mobileIVnurses/five-star.png" alt="five-star"></div>
        </div>`);

        document.querySelector('#gform_submit_button_9').setAttribute('value','Get Your Free Online Quote');
    }
}, 100);