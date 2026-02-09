var bodyEle = document.querySelector('body');
if (!bodyEle.classList.contains('hero_iv')) {
    bodyEle.classList.add('hero_iv');

    $('.hero_iv button[data-bs-target="#getTestedIntroModal"]').each(function() {
        $(this).replaceWith($('<a class="' +  $(this).attr('class') + ' text-nowrap openModal" href="javascript:;">' + this.innerHTML + '</a>'));
    })

    $('.hero_iv').append(`<div class="iv_modal" id="ivModal">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <div type="button" class="close fal fa-times fa-2x" data-bs-dismiss="modal" aria-label="Close" aria-hidden="true"></div>
                </div>
                <div class="modal-body">
                    <div class="modal_left">
                        <h3 class="text-center">Get a specific IgE blood test,&nbsp;today</h3>
                        <p> No more waiting. Choose the option that's right for you and decide between either purchasing a lab test or scheduling an appointment.</p>
                        <div class="btn-solid-primary">
                            <a class="btn" href="https://www.thermofisher.com/allergy/us/en/blood-testing-allergies/how-to-get-an-allergy-test.html#purchase-test">View testing options</a>
                        </div>
                    </div>
                    <div class="modal_right">
                        <h3 class="text-center">Consult with a healthcare provider&nbsp;first</h3>
                        <p>Fill out our symptom tracker, which will generate a comprehensive summary about your symptoms that you can review with your healthcare provider at your next appointment.</p>
                        <div class="btn-solid-primary">
                            <a class="btn" href="https://www.thermofisher.com/allergy/us/en/get-tested.html">Get started</a>
                        </div>
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