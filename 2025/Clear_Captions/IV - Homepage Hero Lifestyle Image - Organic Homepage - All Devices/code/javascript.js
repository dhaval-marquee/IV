function loadTestCode() {
    if (!document.body.classList.contains("iv-HomepageHero")) {
        document.body.classList.add("iv-HomepageHero");

        document.querySelector('.post-content > div:first-child > div > div .fusion-imageframe img').insertAdjacentHTML('beforebegin' , '<img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1759815631/ClearCaptions/homepageHeroImage.png" alt="Homepage Hero Image"></img>')
    }
}

loadTestCode();