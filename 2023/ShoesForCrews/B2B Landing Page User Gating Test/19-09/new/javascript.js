function modal() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('mq_test')) {
        bodyEle.classList.add('mq_test');
        
        // Modal content
        document.querySelector('.mq_test').insertAdjacentHTML('beforeend',`<div class="mq_modal">
            <div class="mq_modal_overlay fade"></div>
            <div class="mq_modal_inner">
                <div class="mq_modal_block">
                    <div class="mq_modal_header">
                        <b>Shoes For Crews Corporate Safety Footwear Program</b> <br>
                        <span>Select an option below to continue:</span>
                    </div>
                    <div class="mq_modal_content">
                        <div class="mq_modal_left">
                            <p>I am an <b>employer</b> looking to open a safety footwear program</p>
                            <a class="blue_cta mq_close" href="javascript:;">Get Started</a>
                        </div>
                        <div class="mq_modal_right">
                            <p>I am an <b>employee</b> purchasing shoes through my corporate account</p>
                            <a class="blue_cta" href="https://www.shoesforcrews.com/page/faq#payrollDeduction">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`);
    
        setTimeout(() => {
            bodyEle.classList.add('mq_modal_open');
            document.querySelector('.mq_modal').classList.add('fade', 'open');
        }, 500);

        document.addEventListener('click', function(e) {
            if (e.target && (e.target.matches('.mq_test .mq_modal_overlay') || e.target.matches('.mq_test .mq_close'))) {
                document.querySelector('.mq_test').classList.remove('mq_modal_open');
                document.querySelector('.mq_test .mq_modal').classList.remove('open');

                setTimeout(() => {
                    var modalElements = document.querySelectorAll('.mq_test .mq_modal, .mq_test .mq_modal_overlay');
                    modalElements.forEach(function(element) {
                        element.style.display = 'none';
                    });
                }, 75);
            }
        });
    }
}

if(!sessionStorage.getItem('ExistingUser')) {
    sessionStorage.setItem("ExistingUser", "true");
    modal();
}