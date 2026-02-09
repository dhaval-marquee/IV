
var bodyEle = document.querySelector('body');
bodyEle.classList.add('homeForm_iv');

// Put your test code here
document.querySelectorAll('.homeForm_iv main#main-content > section:last-child')[0].classList.add('mod-banner','hero_section');
document.querySelectorAll('.homeForm_iv main#main-content > section:last-child .image')[0].insertAdjacentHTML('afterbegin',`<div class="box box-f-landing form-hubspot"><div class="hbspt-form"></div></div>`);

function getScript(source, callback) {
    var el = document.createElement("script");
    el.onload = callback;
    el.src = source;
    document.body.appendChild(el);
}
getScript('//js.hsforms.net/forms/embed/v2.js', function(){
    hbspt.forms.create({
        region: "na1",
        portalId: "2378677",
        formId: "5b45d95d-2153-4c2c-94ef-acfe7c60f5b8",
        target: '.form-hubspot .hbspt-form',
    });
});