function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('test_related_class')) {
        bodyEle.classList.add('test_related_class');
        
        // Put your test code here






        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }
}


try {
    // PG Cookies Add
    var cookieName = 'TestName';
    var cookieValue = '1';
    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 30);
    document.cookie = cookieName +"=" + cookieValue + ";expires=" + myDate;
    // END PG Cookies Add

    loadTestCode();

} catch(ex) {

} finally {
    setTimeout(() => {
        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }, 3000);
}