function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('homepageCleanup_test')) {
        bodyEle.classList.add('homepageCleanup_test');
        
        // Put your test code here

        jQuery('.homepageCleanup_test .mcb-wrap-inner .column.mcb-column.column_button a[href="/schedule-online/"]').attr('style', '');
  
    }
}
loadTestCode();