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

        const badgesListLi = `<li class="d-flex amw-page-pdp__icon-container-inner">
            <img class="js-lozad" src="/medias/SaferChoice.svg?context=bWFzdGVyfHJvb3R8MzYxN3xpbWFnZS9zdmcreG1sfGhmMi9oZTkvODkxNDYyMDk0MDMxOC5zdmd8MTU5NzlhZjI5OTIyZDQ0MTY1MWVhNmY0YjQ3MDZjOTliMjAyZTYyY2NkZGY3OGRjYjE0MDY5MjZlYTk0ZmQ4OA" height="60">
            <span class="amw-page-pdp__icon-title">Safer Choice</span>
        </li>
        <li class="d-flex amw-page-pdp__icon-container-inner">
            <img class="js-lozad" src="/medias/Biodegradable.svg?context=bWFzdGVyfHJvb3R8MzYwMXxpbWFnZS9zdmcreG1sfGhiZi9oZDAvODkxNDYyMTEzNjkyNi5zdmd8NGZmZjg4MTAzNmU5ZTlkMGJjNjdkMmExNjJkOGNlMjJkMGIxYWJiNWY2YTFjMmUxMWE1YzU4ODY2OWMzOGJjNQ" height="60">
            <span class="amw-page-pdp__icon-title">Biodegradable Formula</span>
        </li>
        <li class="d-flex amw-page-pdp__icon-container-inner">
            <img class="js-lozad" src="/medias/DermatologistTested.svg?context=bWFzdGVyfHJvb3R8NTY3OHxpbWFnZS9zdmcreG1sfGgwNi9oMTMvOTMxMTk2NTQ0NjE3NC5zdmd8MjIwMTQwMDdmZTM2Y2JmNzY5MTcxZjYyMzM3MzhjYjVkNzk0MmQxZDNkMjdiZGZkNDBhM2Q3ODE4OTk3YTMwOQ" height="60">
            <span class="amw-page-pdp__icon-title">Dermatologist Tested</span>
        </li>
        <li class="d-flex amw-page-pdp__icon-container-inner">
            <img class="js-lozad" src="/medias/AllergyTested.svg?context=bWFzdGVyfHJvb3R8NjI5N3xpbWFnZS9zdmcreG1sfGg4Zi9oM2MvOTMxMTk2NTExODQ5NC5zdmd8Mzg5ZGRmY2M0ZGMzZmQ0OTZlZTYzZmI5MWJmNmM3ZjUzZGFjZWQ0MmZiYWNhMTU5OTUxM2UwOGE4MWVjOGY3MQ" height="60">
            <span class="amw-page-pdp__icon-title">Allergy Tested</span>
        </li>`;

        if(!document.querySelector('.iv-badges-list')){
            document.querySelector('.iv-crat-button + ul').classList.add('iv-badges-list');
            document.querySelector('.iv-badges-list').insertAdjacentHTML('afterbegin', badgesListLi);
        }
    

    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);