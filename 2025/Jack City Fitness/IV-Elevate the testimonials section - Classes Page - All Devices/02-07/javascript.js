function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-classesPage')) {
        document.querySelector('body').classList.add('iv-classesPage');

        document.querySelector('.iv-classesPage .banner-module').after(document.querySelector('.iv-classesPage .testimonial-module-2'));

        document.querySelector('.iv-classesPage section.testimonial-module-2 > div').insertAdjacentHTML('afterbegin',`<h2 class="h2 cabin extra-bold uppercase white aos-init aos-animate">WHAT OUR CLIENTS ARE SAYING ABOUT&nbsp;US</h2>`);

    }
}

loadTestCode();
