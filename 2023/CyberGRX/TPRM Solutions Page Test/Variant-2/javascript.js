function loadTest() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('tprm_iv')) {
        bodyEle.classList.add('tprm_iv');
        document.querySelector('.tprm_iv .hero .hero__media').insertAdjacentHTML('beforeend',`<div class="form_wrapper">
            <h2 class="form_title">Demo the Industry's Most Comprehensive TPRM Platform</h2>
        </div>`);
        document.querySelector('.tprm_iv .form_title').after(document.querySelector('#mktoForm_1410').parentNode);
        MktoForms2.whenReady(function (form) {
            var mktoButton = document.querySelector('.mktoForm .mktoButtonWrap.mktoSimple .mktoButton');
            mktoButton.innerHTML = mktoButton.innerHTML.replace('Submit Request', 'Book a Quick No-Obligation Demo');
        });

        window.addEventListener('scroll', function() {
            var featuresSection = document.getElementById('features');
            var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollPosition > featuresSection.offsetTop) {
                var formSection = document.querySelector('.tprm_iv .pu-form-container .mt-10');
                var formWrapper = document.querySelector('.tprm_iv .pu-form');

                if (!formSection.querySelector('.pu-form')) {
                    formSection.appendChild(formWrapper);
                    MktoForms2.whenReady(function (form) {
                        var mktoButton = document.querySelector('.mktoForm .mktoButtonWrap.mktoSimple .mktoButton');
                        mktoButton.innerHTML = mktoButton.innerHTML.replace('Book a Quick No-Obligation Demo', 'Submit Request');
                    });
                }
            } else {
                var heroMedia = document.querySelector('.tprm_iv .hero .hero__media .form_wrapper');
                var formWrapper = document.querySelector('.tprm_iv .pu-form');

                if (!heroMedia.querySelector('.pu-form')) {
                    heroMedia.appendChild(formWrapper);
                    MktoForms2.whenReady(function (form) {
                        var mktoButton = document.querySelector('.mktoForm .mktoButtonWrap.mktoSimple .mktoButton');
                        mktoButton.innerHTML = mktoButton.innerHTML.replace('Submit Request', 'Book a Quick No-Obligation Demo');
                    });
                }
            }
        });
    }
}
// Load code just for Desktop 
if (window.matchMedia("(min-width: 1025px)").matches) {
    loadTest();
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 1024.98px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 1025px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for Desktop over