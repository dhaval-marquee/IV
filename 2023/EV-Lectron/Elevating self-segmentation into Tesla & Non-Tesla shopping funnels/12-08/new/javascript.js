function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('hero_iv')) {
        bodyEle.classList.add('hero_iv');

        document.querySelectorAll('.hero_iv #site-main > div')[0].after(document.querySelectorAll('.hero_iv #site-main > div')[6]); 

    }
}
loadTestCode();