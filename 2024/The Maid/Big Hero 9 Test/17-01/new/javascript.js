var loadTest = setInterval(() => {
    if(document.querySelectorAll('body').length > 0 && !document.querySelector('body').classList.contains('bigHero_iv')) {
        clearInterval(loadTest);

        document.querySelector('body').classList.add('bigHero_iv');
        document.querySelector('.bigHero_iv h1.location-header-title').textContent = 'House Cleaning Services In Austin, TX';
        document.querySelector('.bigHero_iv p.location-header-copy').insertAdjacentHTML('afterend',`<p data-aos="fade-right">With The Maids proprietary 22-Step Cleaning Process, you can trust you'll get the cleanest home possible, every time.</p>`);
        document.querySelector('.bigHero_iv p.location-header-title').insertAdjacentHTML('afterend',`<div class="reviewWrapper">
            <p data-aos="fade-right">Trusted by our customers</p>
            <div class="imgWrapper" data-aos="fade-left"><span>4.9/5</span><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/mobileIVnurses/five-star.png" alt="five-star"><a class="google_logo" data-test-id="posted-to" href="https://www.google.com/maps?cid=12931093866688831900" rel="ugc" target="_blank" tabindex="0"><img alt="google logo image for a google review." src="https://rtx-source-icons.s3.amazonaws.com/logos/google.png" class="SourceLogo-sc-k592p4-0 hXtbUx"></a></div>
        </div>`);

        document.querySelector('#gform_submit_button_9').setAttribute('value','Get Your Free Online Quote');
        document.addEventListener('click', function (e) {
            if (e.target.tagName === 'IMG' && e.target.getAttribute('alt') === 'five-star') {
                e.preventDefault();
        
                var reviewSectionTop = document.querySelector('#review-section').offsetTop;
                var headerHeight = document.querySelector('#masthead').offsetHeight;
                
                window.scrollTo({
                    top: reviewSectionTop + headerHeight -75,
                    behavior: 'smooth'
                });
            }
        });        
    }
}, 100);


