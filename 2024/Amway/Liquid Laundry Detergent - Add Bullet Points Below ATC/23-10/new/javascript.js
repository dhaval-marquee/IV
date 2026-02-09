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

        const badgesListLi = ` 
            <li>Powerful stain removal</li>
            <li>Eco-friendly formula</li>
            <li>Safe for sensitive skin</li>`;

        if(!document.querySelector('.iv-check-list')){
            document.querySelector('.iv-crat-button + ul').classList.add('iv-check-list');
            document.querySelector('.iv-check-list').insertAdjacentHTML('afterbegin', badgesListLi);
        }
    

    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
