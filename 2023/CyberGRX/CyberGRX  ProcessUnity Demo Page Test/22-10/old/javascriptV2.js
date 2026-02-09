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
                        <h3>Don't compromise on the safety of your organization; <br>
                        book your free demo to get:</h3>
                        <ul>
                            <li>A personalized walk-through tailored to your unique challenges, showing you how to seamlessly manage third-party and cybersecurity risks all in one place.</li>
                            <li>Insightful strategies to accelerate vendor onboarding while reducing your third-party risks.</li>
                            <li>An opportunity to connect directly with a cybersecurity specialist—someone who gets it and is ready to answer any questions you might have.</li>
                        </ul>
                        <h3>Clarity and understanding are the foundation of great decisions—book your demo today.</h3>
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
            document.querySelector('#Phone').closest('.mktoFormCol').remove()
            document.querySelector('#Title').closest('.mktoFormCol').remove()
            document.querySelector('#Email').closest('.mktoFormCol').after(document.querySelector('#Company').closest('.mktoFormCol'))
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