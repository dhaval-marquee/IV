function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('m1_hero_test')) {
        bodyEle.classList.add('m1_hero_test');
        
        // Put your test code here
        $('.m1_hero_test .hero-section .inner-content h2:first-child').before($('.hero-section .inner-content h1').html('Mitchell <span>1</span>'));
        $('.m1_hero_test .hero-section .inner-content h2').html('Complete Solution');
        $('.m1_hero_test .hero-section .inner-content h2').before(`<h2 class="auto_Shop">Auto Shop Management</h2>`);
        $('.hero-section .inner-content ul li')[0].innerHTML= "Auto Repair Software";
        $('.m1_hero_test .keys h2').html('Working Together to Simplify Your Business');
    }
}

loadTestCode();