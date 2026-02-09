function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-classesPage')) {
        document.querySelector('body').classList.add('iv-classesPage');

        document.querySelector('.iv-classesPage .banner-module').after(document.querySelector('.iv-classesPage .testimonial-module-2'));

    }
}

loadTestCode();