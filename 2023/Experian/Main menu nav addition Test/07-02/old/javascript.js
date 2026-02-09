var bodyEle = document.querySelector('body');
if (!bodyEle.classList.contains('nav_iv')) {
    bodyEle.classList.add('nav_iv');
    
    var addOption = setInterval(() => {
        if(document.querySelectorAll('.nav_iv nav.navbar-experian .navbar-nav.main-nav .nav-item').length > 0 && document.querySelectorAll('.new_nav_iv').length == 0) {
            clearInterval(addOption)


            document.querySelectorAll('.nav_iv nav.navbar-experian .navbar-nav.main-nav .nav-item')[0].insertAdjacentHTML('beforebegin',`<li class="nav-level-1 nav-item new_nav_iv"><a class=" nav-link" href="https://www.experian.com/healthcare/products/patient-access-registration/insurance-eligibility-verification#contact" target="_self">Verify Patient Coverage</a></li>`);

        }
    }, 100);
    


    // $(document).on('load click', '#navToggle', function() {
        
    // });



}