function loadTestCode() {
    // Body class
    const tag = 'homepage-improvement';
    if (!document.querySelector('body').classList.contains(tag)) {
        document.querySelector('body').classList.add(tag);

        // Hero section
        const heroSectionHtml = `<div class="hero-section">
            <div class="hero-container">
                <h1 class="ct-headline atomic-primary-heading hero-heading">Reclaim Your Confidence With Our Non-Surgical Weight Loss Solutions</h1>
                <a class="ct-link-button" href="https://trueyouweightloss.com/services/">Request A Free Consultation</a>
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

        // For other
        const newsSection = document.querySelector(`.${tag} .oxy-dynamic-list`);
        if(newsSection && !document.querySelector(`.${tag}-new-sec`)){
            newsSection.parentElement.style.display = 'none';
            newsSection.parentElement.classList.add(`${tag}-new-sec`);
            document.querySelector(`.${tag}-new-sec`).previousElementSibling.classList.add('about-section')
        }

        document.querySelector(`.${tag} #section-587-103`).remove();

        const sectionTitle = document.querySelector('h2');
        if (sectionTitle && sectionTitle.textContent.includes('Success Stories')) {
        sectionTitle.closest('div').classList.add('fffff');
        }

    }
}
loadTestCode();