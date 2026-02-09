function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('homepage_Category')) {
        bodyEle.classList.add('homepage_Category');

        // Put your test code here
        
        $('.homepage_Category .nav-secondary__logo-texts').after($('.nav-primary__search-form'));
        
        $('.homepage_Category #navigation-more').after($('#navigation-email'));
        $('.homepage_Category #navigation-email').after($('#navigation-upgrades'));
        $('.homepage_Category #navigation-upgrades').after($('#navigation-specials'));

        $('.nav-secondary__lower ul.nav-secondary__lower-links').append($('#navigation-account')).append($('#navigation-support')).append($('#navigation-chat'));


        
    }
}
    
loadTestCode();