function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('iv_teledirect')) {
        bodyEle.classList.add('iv_teledirect');
        if (window.location.href != "https://www.teledirect.com/contact-us/") {
            document.querySelector('#gform_wrapper_1').insertAdjacentHTML('beforebegin',`<div class='getAquote_wrapper'><a class="orange" href="/pricing">Get a quote</a></div>`);
            document.querySelector('#gform_wrapper_1').remove();
        }
    }
}
loadTestCode();