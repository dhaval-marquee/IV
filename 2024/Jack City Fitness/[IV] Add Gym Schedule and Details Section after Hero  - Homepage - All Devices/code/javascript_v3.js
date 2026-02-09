function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-info')) {
        document.querySelector('body').classList.add('iv-info');

        const phoneLink = document.querySelector("header .header-ul li span a[href^='tel']");
        let formattedNumber = '(208) 999-1111';

        if (phoneLink) {
            let phoneNumber = phoneLink.getAttribute("href").replace("tel:", "").replace(/\D/g, '');

            if (phoneNumber.length >= 10) {
                formattedNumber = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
            }
        }
        
        const contactInfo = `
            <section class="iv-info-sec">
                <div class="fourteen-hundred">
                    <div class="iv-info-inner">
                        <div class="iv-info-left">
                            <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/jackcityfitness/24x7-icon.jpg" alt="24/7 gym access">
                            <span>Come and train 7 days a week,<br/> 24/7 gym access.</span>
                        </div>
                        <div class="iv-info-right">
                            <a class="iv-button" href="javascript:;">TRY FOR FREE</a>  
                            <span>or call <a href="tel:${formattedNumber.replace(/\D/g, '')}"><b>${formattedNumber}</b></a></span>
                            <p class="iv-note">*New Clients By Appointment Only</p>
                        </div>
                    </div>
                </div>
            </section>
        `;

        document.querySelector('.iv-info .banner-module').insertAdjacentHTML('afterend', contactInfo);

        document.querySelector('.iv-button').addEventListener('click', function(){
            document.querySelector('header [href="#try-for-free"]').click();
        });
    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
