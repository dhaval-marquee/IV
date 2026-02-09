function loadTest() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('homeForm_iv')) {
        bodyEle.classList.add('homeForm_iv');

        // Put your test code here
        document.querySelectorAll('.homeForm_iv main#main-content > section:last-child')[0].classList.add('mod-banner','hero_section');
        document.querySelectorAll('.homeForm_iv main#main-content > section:last-child .image')[0].insertAdjacentHTML('afterbegin',`<div class="box box-f-landing form-hubspot"><div class="hbspt-form"></div></div>`);

        document.querySelector('.homeForm_iv main#main-content > section:last-child .image .form-hubspot').insertAdjacentHTML('afterbegin',`<h2>Demo the <strong><span style="color: #ff602e;">World's First and Largest</span> Third-Party Exchange</strong></h2>`);

        var jsElm = document.createElement("script");
            jsElm.type = "application/javascript";
            jsElm.src = '//js.hsforms.net/forms/embed/v2.js';
            document.body.appendChild(jsElm);

        setTimeout(() => {
            hbspt.forms.create({
                region: "na1",
                portalId: "2378677",
                formId: "ea3f9397-dcff-4b5b-83b9-91defde1a2fb",
                target: '.form-hubspot .hbspt-form',
            });
        }, 1000);
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
