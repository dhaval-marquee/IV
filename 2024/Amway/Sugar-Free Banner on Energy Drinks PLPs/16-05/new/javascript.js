var sugarProductNo = [127071, 126987, 126985, 126986, 126984, 127155, 127151, 127149, 127150, 127146];


function showBadge() {
    document.querySelectorAll('.js-plp-product-code').forEach(function(element) {
        var productCode = parseInt(element.textContent.trim());
        if (!sugarProductNo.includes(productCode)) {
            element.closest('.amw-plp-item__content-wrapper').classList.add('show-badge');
        }
    });
}

var stopChecking;

function runCodeOnLoad() {
    var i = 0;
    stopChecking = setInterval(() => {
        showBadge();
        i++;
        if(i === 50) {
            clearInterval(stopChecking);
        }
    }, 100);
}

runCodeOnLoad();


document.addEventListener('click', function(){
    clearInterval(stopChecking);
    runCodeOnLoad();
});