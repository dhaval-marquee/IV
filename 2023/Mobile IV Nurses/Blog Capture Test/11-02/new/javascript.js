function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('blogCapture_Test')) {
        bodyEle.classList.add('blogCapture_Test');
        
        // Put your test code here
        document.querySelector('.blogCapture_Test .section.section-post-about .clearfix .author-box').insertAdjacentHTML('beforebegin',`<a href="https://mobileivnurses.com" class="technique_deliver">An IV is the fastest way to deliver vitamins and replace fluids. Learn how we use this technique to deliver rapid relief.</a>`);

    }
}
loadTestCode();