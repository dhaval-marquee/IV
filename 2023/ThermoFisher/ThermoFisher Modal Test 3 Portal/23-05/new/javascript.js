var bodyEle = document.querySelector('body');
if (!bodyEle.classList.contains('hero_iv')) {
    bodyEle.classList.add('hero_iv');

    $('.hero_iv button[data-bs-target="#getTestedIntroModal"]').each(function() {
        $(this).replaceWith($('<a class="' +  $(this).attr('class') + ' text-nowrap openModal" href="javascript:;">' + this.innerHTML + '</a>'));
    })

    $('.hero_iv .cmp-button a[href="/allergy/us/en/get-tested.html"]').attr('href', 'javascript:;').addClass('openModal');

    $('.hero_iv').append(`<div class="iv_modal" id="ivModal">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <div type="button" class="close fal fa-times fa-2x" data-bs-dismiss="modal" aria-label="Close" aria-hidden="true"></div>
                </div>
                <div class="modal-body">
                    <h2>Get answers with a specific IgE blood&nbsp;test</h2>
                    <div class="modal_left">
                        <h3 class="text-center">Purchase a test</h3>
                        <p>Directly purchase your specific IgE blood test from a lab. No doctor referral is needed and you can make your purchase with or without Insurance. </p>
                        <ul>
                            <li>
                                <a href="#" class="flex-row">
                                    <h4>Purchase from</h4>
                                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/ThermoFisher/ThermoFisher_Modal/Labcorp.png" alt="Labcorp Logo" width="140">
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex-row">
                                    <h4>Purchase from</h4>
                                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/ThermoFisher/ThermoFisher_Modal/Quest-logo.png" alt="Quest Logo Logo" width="100">
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="modal_right">
                        <h3 class="text-center">Speak with a medical professional</h3>
                        <p>Have questions about a specific IgE blood test? An appointment with a medical professional can provide the answers. Schedule your appointment today.</p>
                        <ul>
                            <li>
                                <a href="#">
                                    <img class="mb-10" src="https://res.cloudinary.com/ignite-visibility/image/upload/v1684840814/ThermoFisher/ThermoFisher_Modal/CVS-MinuteClinic-Logo.png" alt="Labcorp Logo" width="150px">
                                    <p>MinuteClinic at CVS is available in person and virtually 7 days a week and accept most insurance plans.</p>
                                    <p><b>Find a MinuteClinic Near You</b></p>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.thermofisher.com/allergy/us/en/get-tested.html">
                                    <h4>Prepare for your appointment</h4>
                                    <p>FiII out our symptom tracker, which will generate a comprehensive summary about your symptoms that you can review with your healthcare provider.</p>
                                    <p><b>Get Started</b></p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-backdrop"></div>
    </div>`);

    function getScrollbarWidth() {
        var div = jQuery('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');
        jQuery('body').append(div);
        var w1 = jQuery('div', div).innerWidth();
        div.css('overflow-y', 'scroll');
        var w2 = jQuery('div', div).innerWidth();
        jQuery(div).remove();
        return (w1 - w2);
    }

    $(document).on('click', '.hero_iv .openModal', function() {
        $('.hero_iv').addClass('modalOpen').css('padding-right',getScrollbarWidth());
        $('.hero_iv .iv_modal, .hero_iv .modal-backdrop').addClass('show');
    });

    $(document).on('click', '.hero_iv .iv_modal .close, .hero_iv .iv_modal .modal-backdrop', function() {
        $('.hero_iv').removeClass('modalOpen').css('padding-right','inherit');
        $('.hero_iv .iv_modal, .hero_iv .modal-backdrop').removeClass('show');
    });

}