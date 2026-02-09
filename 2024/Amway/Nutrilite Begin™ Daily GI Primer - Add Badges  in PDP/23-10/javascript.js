function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-badges-points')) {
        document.querySelector('body').classList.add('iv-badges-points');

        if(!document.querySelector('.iv-crat-button')){
            document.querySelector('.AddToCart-AddToCartAction').closest('[class*="productDetailsPageRightPanelSlot"]').classList.add('iv-crat-button')
        }
        if(!document.querySelector('.iv-crat-button + ul')){
            const badgesPoints = document.querySelector('#detailsBody > div:nth-child(2) .amw-page-pdp__tab-details').innerHTML;
            document.querySelector('.iv-crat-button').insertAdjacentHTML('afterend', badgesPoints);
        }
        if(!document.querySelector('.iv-badges-list')){
            document.querySelector('.iv-crat-button + ul').classList.add('iv-badges-list');
        }

        document.querySelectorAll('.iv-badges-list span').forEach(function(badgesName) {
            if (badgesName.innerText.trim() === 'Vegetarian') {  
                badgesName.closest('.amw-page-pdp__icon-container-inner').setAttribute('style', 'display:none !important');
            }
            if (badgesName.innerText.trim() === 'Gluten Free') {  
                badgesName.closest('.amw-page-pdp__icon-container-inner').setAttribute('style', 'display:none !important');
            }
        });
        

    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);