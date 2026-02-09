function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('hero_iv')) {
        bodyEle.classList.add('hero_iv');

        var heroImage = document.querySelectorAll('.hero_iv .slideshow__image');
        heroImage.forEach((source)=> {
            source.setAttribute('src','https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/EZMobileData/homepage-hero-banner.jpg');
            source.setAttribute('srcset','');
        });

        document.querySelector('.hero_iv .slideshow__slide .heading').innerHTML = 'High-Speed Unlimited Internet Anytime, Anywhere';

        document.querySelector('.hero_iv .slideshow__slide .heading').insertAdjacentHTML('afterend','<p>Only EZ Mobile Data gives you the fastest and most reliable Internet, wherever you find yourself.</p>');
    }
}
loadTestCode();