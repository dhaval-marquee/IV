function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-sticky-book')) {
        document.querySelector('body').classList.add('iv-sticky-book');

        const bookName = document.querySelector('.product-section .reset-section-title').innerText;
        const categoryName = document.querySelector('.proudct-breadcrumb ul li:first-child a').innerText;

        if(bookName && categoryName){
            const stickyBook = `<div class="sticky-book-section">
                <div class="book-name">${bookName} - ${categoryName}</div>
                <a href="javascript:;" class="sticky-book-btn">Book this now & pay later</a>
            </div>`;
            document.body.insertAdjacentHTML('beforeend', stickyBook);
        }


        const triggerBtn = document.querySelector('#book-now-top');

        if (triggerBtn) {
            document.addEventListener('click', (e) => {
                if (e.target.matches('.sticky-book-btn')) {
                    triggerBtn.click();
                }
            });
        }
        
    }
}

const checkCondition = setInterval(() => {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
