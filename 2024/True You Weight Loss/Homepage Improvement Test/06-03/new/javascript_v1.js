function loadTestCode() {
    // Body class
    const tag = 'homepage-improvement';
    if (!document.querySelector('body').classList.contains(tag)) {
        document.querySelector('body').classList.add(tag);

        const heroSectionHtml = `<div class="hero-section">
            <div class="hero-container">
                <h1 class="ct-headline atomic-primary-heading hero-heading">Reclaim Your Confidence With Our Non-Surgical Weight Loss Solutions</h1>
                <a class="ct-link-button" href="https://trueyouweightloss.com/services/">Request a Consultation or Just Learn More</a>
            </div> 
        </div>`;

        const heroSection = document.querySelector(`.${tag} .oxy-carousel-builder_inner`);
        if(heroSection && !document.querySelector('.hero-slider')){
            heroSection.closest('section').classList.add(`hero-slider`);
            heroSection.closest('section').style.display = 'none';
        }
        if(!document.querySelector('.hero-section')){
            document.querySelector('.hero-slider').insertAdjacentHTML('afterend', heroSectionHtml);
        }

    }
}
loadTestCode();