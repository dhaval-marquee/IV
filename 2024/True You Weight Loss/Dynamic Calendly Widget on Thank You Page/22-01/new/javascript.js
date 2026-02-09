var $ = jQuery;
function loadTestCode() {
    if (!$('body').hasClass('calendly_iv')) {
        $('body').addClass('calendly_iv');

        window.addEventListener('message', function (event) {
            if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
                if($('select[name="tywl_preferred_procedure_location"]').val() == 'Cary, NC') {
                    localStorage.setItem('locationCary','true');
                } else {
                    localStorage.removeItem('locationCary');
                }
            }
        });
    }
}
loadTestCode();