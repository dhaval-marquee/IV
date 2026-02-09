function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('hero_iv')) {
        bodyEle.classList.add('hero_iv');
        var heroImage = document.querySelectorAll('.hero_iv .slideshow__image');
        heroImage.forEach((source)=> {
            source.setAttribute('src','https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/EZMobileData/homepage-banner-bg.png');
            source.setAttribute('srcset','');
        });
        document.querySelector('.hero_iv .slideshow__slide .heading').innerHTML = 'Reliable High-Speed Internet Anytime, Anywhere';
        document.querySelector('.hero_iv .slideshow__slide .heading').insertAdjacentHTML('afterend','<p>Only EZ Mobile Data gives you the fastest and most reliable Internet wherever you find yourself.</p>');
        document.querySelector('.hero_iv .slideshow__slide .button').innerText = 'Shop Plans';
    }
}
loadTestCode();
