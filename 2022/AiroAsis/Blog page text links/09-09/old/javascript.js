// CSS 
const style = document.createElement('style');
style.innerHTML = `
    .blog_page_text_links {
        text-align: center;
        max-width: 350px;
        width: 100%;
        margin: 0 auto;
    }
    .blog_page_text_links a {
        text-align: center;
        display: inline-block;
        font-size: 26px;
        line-height: 40px;
        font-weight: 600;
        color: #62ABE0 !important;
        text-decoration: underline !important;
    }
`;
document.head.appendChild(style);


// Javascript start from here
var currentPageURL = window.location.href.split('?')[0];
if(currentPageURL == 'https://www.airoasis.com/blogs/articles/what-happens-when-you-inhale-black-mold-spores') {
    if(document.querySelectorAll('.blog_page_text_links').length == 0) {
        var addBeforeThis = document.querySelector('.main-article__article-content > blockquote:last-child');
        var newItem = document.createElement('div');
        newItem.className = "blog_page_text_links";
        newItem.innerHTML = '<a href="https://www.airoasis.com/products/iadaptair">iAdapt Air eliminates 99% of mold spores without harsh chemicals</a>';
        addBeforeThis.parentNode.insertBefore(newItem,addBeforeThis);
    }
} else if(currentPageURL == 'https://www.airoasis.com/blogs/articles/do-air-purifiers-help-with-bad-smells') {
    if(document.querySelectorAll('.blog_page_text_links').length == 0) {
        var addBeforeThis = document.querySelector('.main-article__article-content');
        var newItem = document.createElement('div');
        newItem.className = "blog_page_text_links";
        newItem.innerHTML = '<a href="https://www.airoasis.com/products/iadaptair">iAdapt Air is your chemical-free solution to fighting household odors</a>';
        // addBeforeThis.parentNode.insertBefore(newItem,addBeforeThis);
        addBeforeThis.appendChild(newItem);
    }
}  else if(currentPageURL == 'https://www.airoasis.com/blogs/articles/how-to-test-for-airborne-black-mold') {
    if(document.querySelectorAll('.blog_page_text_links').length == 0) {
        var addBeforeThis = document.querySelector('.main-article__article-content > blockquote:last-child');
        var newItem = document.createElement('div');
        newItem.className = "blog_page_text_links";
        newItem.innerHTML = '<a href="https://www.airoasis.com/products/iadaptair">Eliminate 99% of mold spores without harsh chemicals with the iAdapt Air</a>';
        addBeforeThis.parentNode.insertBefore(newItem,addBeforeThis);
    }
}  else if(currentPageURL == 'https://www.airoasis.com/blogs/articles/air-purifiers-for-black-mold') {
    if(document.querySelectorAll('.blog_page_text_links').length == 0) {
        var addBeforeThis = document.querySelector('.main-article__article-content > blockquote:last-child');
        var newItem = document.createElement('div');
        newItem.className = "blog_page_text_links";
        newItem.innerHTML = '<a href="https://www.airoasis.com/products/iadaptair">iAdapt Air eliminate 99% of mold spores quickly, allowing you to breathe easier</a>';
        addBeforeThis.parentNode.insertBefore(newItem,addBeforeThis);
    }
}