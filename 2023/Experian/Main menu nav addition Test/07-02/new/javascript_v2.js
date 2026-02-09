// Add True Control JS and CSS in Variant
var bodyEle = document.querySelector('body');
if (!bodyEle.classList.contains('nav_iv')) {
    bodyEle.classList.add('nav_iv');
    
    var addOption = setInterval(() => {
        if(document.querySelectorAll('.nav_iv nav.navbar-experian .navbar-nav.main-nav .nav-item').length > 0 && document.querySelectorAll('.new_nav_iv').length == 0) {
            clearInterval(addOption)


            document.querySelectorAll('.nav_iv nav.navbar-experian .navbar-nav.main-nav .nav-item')[0].classList.add('first_nav_items');
            document.querySelectorAll('.first_nav_items .mega-menu > li:nth-child(2)')[0].insertAdjacentHTML('beforebegin',`<li class="py-10 pr-15 mobile-menu-target-li new_nav_iv"><a aria-expanded="false" class="parent-item" href="https://www.experian.com/healthcare/products/patient-access-registration/insurance-eligibility-verification" target="_self">Insurance Eligibility Verification</a></li>`);

        }
    }, 100);
}