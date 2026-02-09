function loadTest() {
        var bodyEle = document.querySelector('body');
        if (!bodyEle.classList.contains('consultPage_iv')) {
            bodyEle.classList.add('consultPage_iv');
    
            // Put your test code 
            document.querySelectorAll('section.ct-section .ct-section-inner-wrap')[3].parentNode.parentNode.parentNode.insertAdjacentHTML('afterend',`<div class="hero_section">
                <div class="oxy-header-container">
                    <div class="part_wrapper">
                        <div class="left_part">
                            <h1>Learn how we can provide safe, effective, non-surgical outpatient
                            weight loss procedures that deliver surgical-level results with a quick
                            no-obligation consultation.</h1>
                            <ul>
                                <li>0% Interest Financing Available For All Weight Loss Procedures.</li>
                                <li>Payments Start as Low as S91 per month!</li>
                                <li>Get a Pre-approval Without a Hard Credit Pull.</li>
                            </ul>
                            <h2>Fill out the short form to learn more!</h2>
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
                    clearInterval(getClassInterval)
                    document.querySelector('.hbspt-form fieldset.form-columns-1 .hs_email').parentNode.classList.add('hs_emailWrapper');
                    document.querySelector('.hbspt-form fieldset.form-columns-1 .hs_email').after(document.querySelector('.hbspt-form fieldset.form-columns-1 .hs_phone'));
                    document.querySelector('.hbspt-form fieldset.form-columns-1 .hs_procedure').parentNode.classList.add('hs_procedureWrapper');
                    document.querySelector('.hbspt-form fieldset.form-columns-1 .hs_procedure').after(document.querySelector('.hbspt-form fieldset.form-columns-1 .hs_tywl_preferred_procedure_location'));
                }
            },500);
    

            var changeBtntext = setInterval(function(){
                if(document.querySelectorAll('.hs_submit .hs-button').length > 0){
                    clearInterval(changeBtntext);
                    document.querySelector('.hs_submit .hs-button').setAttribute('value','Request a Free No-Obligation Consultation!');
                    document.querySelectorAll('.consultPage_iv .hs-form-field .input ul')[1].style.marginBottom = '24px';

                }
            },600);
    
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
