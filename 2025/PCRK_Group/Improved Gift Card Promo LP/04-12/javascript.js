function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-form-membership')) {
        document.querySelector('body').classList.add('iv-form-membership');
        document.querySelector('body').classList.add('iv2-form-membership');

        const heroContainerLeft = document.querySelector('.iv-form-membership .hero-container .zpelem-col:nth-child(2)');
        if (heroContainerLeft) {
            heroContainerLeft.classList.replace('zpcol-md-7', 'zpcol-md-6');
        }
        const heroContainerRight = document.querySelector('.iv-form-membership .hero-container .zpelem-col:nth-child(3)');
        if (heroContainerRight) {
            heroContainerRight.classList.replace('zpcol-md-5', 'zpcol-md-6');
        }

        const VerificationLabel = document.querySelector(".iv-form-membership .hero-container .zpelem-lpform form ul.zpform-outer li:has(.zpform-verification-group) label");
        if (VerificationLabel) {
            VerificationLabel.innerHTML = "Verification Code";
        }

        const locationLabel = document.querySelector(".iv-form-membership .hero-container .zpelem-lpform form ul.zpform-outer li:nth-child(6) label");
        if (locationLabel) {
            locationLabel.textContent = "Location";
        }

        var spanEl = document.querySelector('.zpdark-section h1 > span');
        if (spanEl) {
            spanEl.innerHTML = spanEl.innerHTML.replace(
                'Free',
                '<img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1764842623/PCRK-Group/PCRK_free.png" alt="PCRK free img" class="pcrk-free-img">'
            );
        }
    }
}
loadTestCode();