function loadTestCode() {
    if (!document.querySelector('body').classList.contains('products_iv')) {
        document.querySelector('body').classList.add('products_iv');

      // Select all elements with the product grid container
        document.querySelectorAll('.productgrid--items').forEach((row) => {
            row.classList.remove('products-per-row-4');
            row.classList.add('products-per-row-3');
        });

        document.querySelectorAll('.productgrid--items .productitem--description').forEach((button) => {
            const seeClone = document.querySelector('.productgrid--items .productitem--info .see').cloneNode(true);
            seeClone.querySelector('a').textContent = "View Details";
            button.before(seeClone);
        });
    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);