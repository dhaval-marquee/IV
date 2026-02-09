function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-blog-cta')) {
        document.querySelector('body').classList.add('iv-blog-cta');


        window.addEventListener('scroll', function () {
            if (window.scrollY > 15) {
                document.body.classList.add('iv-scrolled');
            } else {
                document.body.classList.remove('iv-scrolled');
            }
        });
        
        const buttonBlog = `<a class="iv-blog-sticky" href="https://empirevein.com/en/book-online/">Click Here to Book a Free Consult or Just Learn More</a>`;
        document.body.insertAdjacentHTML('beforeend', buttonBlog);
    
    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 500);
