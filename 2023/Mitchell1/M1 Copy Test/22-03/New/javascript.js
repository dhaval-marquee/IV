function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('m1_hero_test')) {
        bodyEle.classList.add('m1_hero_test');
        
        // Put your test code here
        $('.m1_hero_test .hero-section .inner-content h2:first-child').before($('.hero-section .inner-content h1').html('The Most Powerful'));
        $('.m1_hero_test .hero-section .inner-content h2').html('Auto Repair Software');
        $('.m1_hero_test .hero-section .inner-content h2').before(`<h2 class="auto_Shop">All-in-One</h2>`);
        $('.hero-section .inner-content ul').after('<p>Accelerate your business growth with our powerful solution that lets you streamline your work-flow, manage your technicians, and get paid faster.</p>');
        $('.m1_hero_test .keys h2').html('Working Together to Simplify Your Business');
    }
}

loadTestCode();