function loadTest() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('tprm_iv')) {
        bodyEle.classList.add('tprm_iv');
        document.querySelector('.tprm_iv .hero .hero__media').insertAdjacentHTML('beforeend',`<div class="form_wrapper">
            <h2 class="form_title">Demo the Industry's Most Comprehensive TPRM Platform</h2>
        </div>`);
        document.querySelector('.tprm_iv .pu-form-container').insertAdjacentHTML('afterend',`<section class="form_section">
            <div class="container">
                <div class="part_wrapper">
                    <div class="left_part">
                        <h2>Learn Why We're The Most Trusted TPRM Solution With a Quick Demo</h2>
                        <h3>Don't leave your company at risk, book your free demo to get:</h3>
                        <ul>
                            <li>A custom built, interactive demo, that provides rapid insights into cyber risk exposure across your ecosystem</li>
                            <li>A customized blueprint for how to move from assessment chasing to proactive risk mediation strategies</li>
                            <li>All of your questions answered by one of our cyber security experts</li>
                        </ul>
                    </div>
                    <div class="right_part"></div>  
                </div>
            </div>
        </section>`);
        document.querySelector('.tprm_iv .form_title').after(document.querySelector('#mktoForm_1410').parentNode);
        MktoForms2.whenReady(function (form) {
            document.querySelector('.mktoForm .mktoButtonWrap.mktoSimple .mktoButton').innerHTML = document.querySelector('.mktoForm .mktoButtonWrap.mktoSimple .mktoButton').innerHTML.replace('Submit Request', 'Book a Quick No-Obligation Demo');
        });

        window.addEventListener('scroll', function() {
            var featuresSection = document.getElementById('features');
            var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollPosition > featuresSection.offsetTop) {
                var formSection = document.querySelector('.tprm_iv .form_section .right_part');
                var formWrapper = document.querySelector('.tprm_iv .form_wrapper');

                if (!formSection.querySelector('.form_wrapper')) {
                    formSection.appendChild(formWrapper);
                }
            } else {
                var heroMedia = document.querySelector('.tprm_iv .hero .hero__media');
                var formWrapper = document.querySelector('.tprm_iv .form_wrapper');

                if (!heroMedia.querySelector('.form_wrapper')) {
                    heroMedia.appendChild(formWrapper);
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