jQuery('body').addClass('footerForm_iv');
var getElement = setInterval(() => {
    if(jQuery('.footerForm_iv #section-69-89').length > 0) {
        clearInterval(getElement);
        jQuery('.footerForm_iv #section-69-89').before(`<div class="hero_section">
            <div class="oxy-header-container">
                <div class="part_wrapper">
                    <div class="left_part">
                        <h2>Learn more about our non-surgical weight loss solutions with a quick consultation.</h2>
                        <ul>
                            <li>0% interest financing available.</li>
                            <li>Discover which solution is right for you.</li>
                            <li>Go over pricing & payment options.</li>
                        </ul>
                        <h3>Fill out the short form to learn&nbsp;more!</h3>
                    </div>
                    <div class="right_part">
                        <h3 class="form_title">Request a Free Consultation</h3>
                        <div class="modal-get-form"></div>
                    </div>
                </div>
            </div>
        </div>`);
            // For Load From
            function getScript(source, callback) {
                var el = document.createElement("script");
                el.onload = callback;
                el.src = source;
                document.body.appendChild(el);
            }
            getScript("//js.hsforms.net/forms/v2.js", function () {
                hbspt.forms.create({
                    region: "na1",
                    portalId: "20758113",
                    formId: "6f3cd9fb-3171-4963-9eda-4b73c77b4a82",
                    target: '.modal-get-form',
                    onBeforeFormSubmit: function ($form) {
                        if (jQuery('select[name="tywl_preferred_procedure_location"]').val() == 'Cary, NC') {
                            localStorage.setItem('preferredLocation', 'cary');
                        } else {
                            localStorage.removeItem('preferredLocation');
                        }
                    }
                });
            });
    }
}, 100);
