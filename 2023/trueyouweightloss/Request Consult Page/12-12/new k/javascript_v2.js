function loadTest() {
    if (!document.querySelector('body').classList.contains('consultPage_iv')) {
        document.querySelector('body').classList.add('consultPage_iv');
        // Put your test code 
        document.querySelectorAll('section.ct-section .ct-section-inner-wrap')[3].parentNode.parentNode.parentNode.insertAdjacentHTML('afterend',`<div class="hero_section">
            <div class="oxy-header-container">
                <div class="part_wrapper">
                    <div class="left_part">
                        <h1>Learn how we can provide safe, effective, non-surgical weight loss procedures with a quick & free consultation.</h1>
                        <ul>
                            <li>0% Interest Financing Available For All Weight Loss Procedures.</li>
                            <li>Payments Start as Low as $91 per month!</li>
                            <li>Get a Pre-approval Without a Hard Credit Pull.</li>
                        </ul>
                        <h2>Fill out the short form to learn&nbsp;more!</h2>
                    </div>
                    <div class="right_part">
                        <div class="form_wrapper loader" id="form_wrapper">
                            <div class="pu-form">
                                <h2 class="form_title">Request a Free Consultation</h2>
                            </div>                         
                        </div>
                    </div>  
                </div>
            </div>
        </div>`);
        document.querySelector('.consultPage_iv .right_part h2').after(document.querySelector('section.ct-section .ct-section-inner-wrap h1+.ct-code-block'));
        document.querySelector(' section.ct-section .ct-section-inner-wrap h1').parentNode.parentNode.parentNode.parentNode.style.display = 'none';  
            var getClassInterval = setInterval(function(){
            if(document.querySelectorAll('.hbspt-form fieldset.form-columns-1').length > 0){
                clearInterval(getClassInterval);
                document.querySelector('.hbspt-form fieldset.form-columns-1 .hs_email').parentNode.classList.add('hs_emailWrapper');
                document.querySelector('.hbspt-form fieldset.form-columns-1 .hs_email').after(document.querySelector('.hbspt-form fieldset.form-columns-1 .hs_phone'));
                document.querySelector('.hbspt-form fieldset.form-columns-1 .hs_procedure').parentNode.classList.add('hs_procedureWrapper');
                document.querySelector('.hbspt-form fieldset.form-columns-1 .hs_procedure').after(document.querySelector('.hbspt-form fieldset.form-columns-1 .hs_tywl_preferred_procedure_location'));
                document.querySelector('option[value="Bypass Revision"]').before(document.querySelectorAll('option[value="Undecided"]')[0]);
                document.querySelector('option[value="Atlanta, GA"]').before(document.querySelectorAll('option[value="Undecided"]')[1]);
                document.querySelectorAll('option[value="Undecided"]')[0].innerText = "Not sure Yet - Guide me!";
                document.querySelectorAll('option[value="Undecided"]')[1].innerText = "No Preference/Not Sure Yet";
                document.querySelectorAll('.hs-fieldtype-checkbox .hs-input')[1].click();         
            }
        },500);
        var changeBtntext = setInterval(function(){
            if(document.querySelectorAll('.hs_submit .hs-button').length > 0){
                clearInterval(changeBtntext);
                document.querySelector('.hs_submit .hs-button').insertAdjacentHTML('afterend',`<a id="hsButton" class="hs-button primary large" href="javascript:void(0);">Request a Free No-Obligation Consultation!</a>`);
                document.querySelectorAll('.consultPage_iv .hs-form-field .input ul')[1].style.marginBottom = '24px';
            }
        },600);
        document.addEventListener("click", function (e) {
            if (e.target.id == "hsButton") {
                document.querySelector('.consultPage_iv .hbspt-form input.hs-button').click();
            }
        });
    }
}
loadTest();
