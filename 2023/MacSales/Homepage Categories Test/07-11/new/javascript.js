function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('home_cat_iv')) {
        bodyEle.classList.add('home_cat_iv');

        var categoriesSection = document.querySelector('.home_cat_iv .categories__cat-glide').closest('.margin-top-auto');
        categoriesSection.classList.add('margin-top-auto-first');
        categoriesSection.classList.remove('margin-top-auto');
        categoriesSection.querySelector('.categories__headline').style.display = 'none';
        document.querySelector('.glide-products.margin-top-auto-first').insertAdjacentElement('beforebegin', categoriesSection);
    }
}
loadTestCode();