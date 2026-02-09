function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('iv_product_page')) {
        bodyEle.classList.add('iv_product_page');
        
        // Put your test code here
        const child = document.querySelector('.iv_product_page img[alt="Air Purifier Breakdown"]');
        child.closest('section').classList.add('hide');;

    }
}


loadTestCode();