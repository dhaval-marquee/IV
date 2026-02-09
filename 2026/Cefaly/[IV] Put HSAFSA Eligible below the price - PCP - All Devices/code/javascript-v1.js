function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-put-HSAFSA')) {
        document.querySelector('body').classList.add('iv-put-HSAFSA');

        const ivNewDiv = `<p class="iv-HSA-FSA-div iv-black">HSA/FSA Eligible</p>`;
        
        const itemPrice = document.querySelectorAll('.product-list-section .items-container .item-card .lower .price');
        if(itemPrice.length) {
            itemPrice.forEach((items)=> {
                items.insertAdjacentHTML('afterend', ivNewDiv)
            })
        }
    }
}

loadTestCode();