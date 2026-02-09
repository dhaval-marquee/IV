function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('newsLetter_Test_sw') && !bodyEle.classList.contains('newsLetter_Test')) {
        bodyEle.classList.add('newsLetter_Test_sw');
        
        // Put your test code here
        var icon = $('.newsLetter_Test_sw #navigation-email a > span').detach()
        $('.newsLetter_Test_sw #navigation-email a').text('Exclusive Access');
        $('.newsLetter_Test_sw #navigation-email a').prepend(icon);

        var icon1 = $('.newsLetter_Test_sw #navigation-mobile-upgrades a > span').detach()
        $('.newsLetter_Test_sw #navigation-mobile-upgrades a').text('Exclusive Access');
        $('.newsLetter_Test_sw #navigation-mobile-upgrades a').prepend(icon1);
    }
}
loadTestCode();