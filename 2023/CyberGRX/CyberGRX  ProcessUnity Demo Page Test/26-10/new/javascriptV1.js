function loadTest() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('processUnityTest')) {
        bodyEle.classList.add('processUnityTest');
        // Put your test code here
        document.querySelector('.processUnityTest .hero').insertAdjacentHTML('afterend',`<div class="hero_section">
            <div class="container">
                <div class="part_wrapper">
                    <div class="left_part">
                        <h1>Learn Why We're The Most Trusted TPRM Solution With a Quick Demo</h1>
                        <h3>Don't leave your company at risk, book your free demo to get:</h3>
                        <ul>
                            <li>A custom built, interactive demo, that provides rapid insights into cyber risk exposure across your ecosystem</li>
                            <li>A customized blueprint for how to move from assessment chasing to proactive risk mediation strategies</li>
                            <li>All of your questions answered by one of our cyber security experts</li>
                        </ul>
                    </div>
                    <div class="right_part">
                        <div class="form_wrapper loader" id="form_wrapper">
                            <h2 class="form_title">Demo the Industry's Most Comprehensive TPRM Platform</h2>
                        </div>
                    </div>  
                </div>
            </div>
        </div>`);
         document.querySelector('.processUnityTest .right_part h2 ').after(document.querySelector('#mktoForm_1289').parentNode);
         MktoForms2.whenReady(function (form) {
            document.querySelector('.mktoForm .mktoButtonWrap.mktoSimple .mktoButton').innerHTML = document.querySelector('.mktoForm .mktoButtonWrap.mktoSimple .mktoButton').innerHTML.replace('Submit Request', 'Book a Quick No-Obligation Demo');
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
