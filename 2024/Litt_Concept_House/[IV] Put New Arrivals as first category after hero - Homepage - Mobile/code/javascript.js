
if (window.matchMedia("(max-width: 767.98px)").matches) {

    var getClass = setInterval(() => {
        if(document.querySelectorAll('body .shopify-section.gallery').length > 0 &&
            document.querySelectorAll('body .featured-collection-section').length > 0 &&
            document.querySelectorAll('.featured-collection__button-container a').length > 0)
        {
            clearInterval(getClass);

            document.querySelector('.featured-collection__button-container a').textContent = 'SHOP NEW';
            document.querySelector('.featured-collection__button-container a').insertAdjacentHTML('afterend', '<p>Grab these new 1-off-1 items before others!</p>');

            const gallerySection = document.querySelector('body .shopify-section.gallery');
            const featuredCollectionSection = document.querySelector('body .featured-collection-section');
            if (gallerySection && featuredCollectionSection) {
                const prevSibling = gallerySection.previousElementSibling;
                if (prevSibling) {
                    prevSibling.parentNode.insertBefore(featuredCollectionSection, prevSibling);
                }
            }

        }
    }, 100);

    
    window.dispatchEvent(new Event('resize'));

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 768px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            location.reload();
        }
    }, true);
}
