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
                            <h4>JACK CITY FITNESS HOURS</h4>
                            <ul class="iv-info-list">
                                <li>MONDAY-SUNDAY</li>
                                <li>24/7 GYM ACCESS</li>
                            </ul>
                        </div>
                        <div class="iv-info-right">
                            <h4>CONTACT US</h4>
                            <ul class="iv-info-list">
                                <li class="iv-phone"><a href="tel:${formattedNumber.replace(/\D/g, '')}">${formattedNumber}</a></li>
                                <li>Free Consultation and Tour</li>
                            </ul>
                            <a class="iv-button" href="javascript:;">TRY FOR FREE</a>
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
