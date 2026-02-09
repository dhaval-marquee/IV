function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('evCategoryTest')) {
        bodyEle.classList.add('evCategoryTest');

        document.querySelector('.product-main .product-details > div.product-block--description').insertAdjacentHTML('beforebegin',`<p class= "evCategory_link"> Were you looking for a Non-Tesla charger? <a href="https://ev-lectron.com/collections/tesla-chargers">See Non-Tesla Chargers > </a></p>`);

        document.querySelector('.product-main .product-details > div.product-block--description').insertAdjacentHTML('beforebegin',`<p class= "evCategory_link"> Were you looking for a Tesla charger? <a href="https://ev-lectron.com/collections/ev-chargers">See Tesla Chargers > </a></p>`);


    }
}
loadTestCode();