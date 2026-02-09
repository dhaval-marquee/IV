function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-sticky-bar')) {
        document.querySelector('body').classList.add('iv-sticky-bar');

        const sourceLink = document.querySelector('header div.bookfree-link > a');
        const targetHref = sourceLink ? sourceLink.href : '#';
        const buttonBlog = `<a class="iv-footer-bar" href="${targetHref}">Click Here to Book a Free Consult or Just Learn More</a>`;
        document.body.insertAdjacentHTML('beforeend', buttonBlog);
    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 500);
