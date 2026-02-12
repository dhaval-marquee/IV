function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-veinServicesPage')) {
        document.querySelector('body').classList.add('iv-veinServicesPage');

        const header = document.querySelector('.subpage-img .entry-header');
        if (!header) return;

        // Remove & Add class
        header.classList.remove('col-md-8', 'col-lg-6');
        header.classList.add('col-12');

        // Change heading text
        const heading = header.querySelector('h1');
        if (heading) {
        heading.textContent = 'Relief From Vein Pain, Swelling, and Visible Veins';
        }

        // Hide subtext
        const subtext = header.querySelector('.subtext');
        if (subtext) {
        subtext.classList.add('d-none');
        }

        // Add Bullet Points + CTA
        header.insertAdjacentHTML('beforeend', `
        <ul class="my-4 wow animate fadeInUp">
            <li>Improve circulation and leg comfort</li>
            <li>Diminish visible varicose veins</li>
            <li>Restore confidence in your legs</li>
        </ul>

        <a href="/book-online/" title="Book free Consultation" class="btn btn-primary wow animate fadeInUp">Book Free Consultation</a>
        `);
    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0 && document.querySelectorAll('.subpage-img .entry-header').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);