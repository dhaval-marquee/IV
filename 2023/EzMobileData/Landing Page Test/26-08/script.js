function loadTestCode() {
    const tagClass = 'blue-plan';
    var bodyEle = document.querySelector('body');

    if (!bodyEle.classList.contains(tagClass)) {
        bodyEle.classList.add(tagClass);

        // Hero section
        var heroTitle = document.querySelector(`.${tagClass} .hero_image_content h1`);
        var heroSubTitle = `<span class="hero-sub-title">Unlimited Internet</span><h3>Only EZ Mobile Data gives you the fastest and most reliable Internet, wherever you find yourself.</h3>`;
        heroTitle.innerHTML = "Blue Plan Canadian";
        document.querySelector(`.${tagClass} .hero_image_content`).insertAdjacentHTML('beforeend', heroSubTitle);

        // Purchase Section
    }
}

loadTestCode();