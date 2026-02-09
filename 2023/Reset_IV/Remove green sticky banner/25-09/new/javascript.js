function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('banner_iv')) {
        bodyEle.classList.add('banner_iv');

        var HbBarWrap = setInterval(() => {
            if(document.querySelectorAll('.banner_iv .hb-bar-content').length > 0) {
                clearInterval(HbBarWrap);
                var HbBarContent = document.querySelectorAll('.banner_iv .hb-bar-content');
                HbBarContent.forEach(function(element) {
                    var HbBarParent = element.parentElement;
                    HbBarParent.style.setProperty('display', 'none', 'important');
                });
            }
        }, 20);
    }
}
loadTestCode();