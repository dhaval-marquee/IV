function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('test_related_class')) {
        bodyEle.classList.add('test_related_class');
        
        // Put your test code here






        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }
    setTimeout(() => {
        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }, 3000);
}
loadTestCode();