function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('messaging_USPs')) {
        bodyEle.classList.add('messaging_USPs');

        // Put your test code here
        document.querySelectorAll('h2').forEach(function(title){
            if(title.innerText == 'Product Lineup') {
                title.closest('div').classList.add('productLineup_section');
            }
        });

        document.querySelector('.productLineup_section').insertAdjacentHTML('beforebegin',`<section class="industry_laser">
            <div class="title_wrapper">
                <h2>See Why Keyence is the Industry Leader in Laser Marking</h2>
            </div>
            <div class="btn_wrapper">
                <a href="/inquiry/requestDemoTest/?groupId=tcm%3A26-2047&amp;typeId=tcm%3A26-1742395&amp;ad_local=side_demo" class="prd-button of-primary prd-utility-focusRing btn_icon">
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/Keyence/Add_USPs_and_Test_Demo_related_messaging_to_your_homepage/icon.png" alt="Men Icon" width="70" /> Request A Free <br> Demo/Test
                </a>
                <a href="tel:18885393623" class="btn_number"><img src="//res.cloudinary.com/ignite-visibility/image/upload/v1691664753/Keyence/Add_USPs_and_Test_Demo_related_messaging_to_your_homepage/icon_tel_02.svg" alt="Phone Icon" width="70" /> 1-888-539-3623</a>
            </div>
        </section>
        <div class="ul_wrapper">
            <ul>
                <li>
                    <div class="ul_icon"><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/Keyence/Add_USPs_and_Test_Demo_related_messaging_to_your_homepage/service_icon.png" alt="Industry Leading 30 Year Lifespan" /></div>
                    <div class="ul_title">Industry Leading <br>30 Year Lifespan</div>
                </li>
                <li>
                    <div class="ul_icon"><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/Keyence/Add_USPs_and_Test_Demo_related_messaging_to_your_homepage/sine_wave_icon.png" alt="Widest Range Of Wavelengths Available" /></div>
                    <div class="ul_title">Widest Range Of <br>Wavelengths Available</div>
                </li>
                <li>
                    <div class="ul_icon"><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/Keyence/Add_USPs_and_Test_Demo_related_messaging_to_your_homepage/customer_support_icon.png" alt="Direct Support or Onsite Support" /></div>
                    <div class="ul_title">Direct Support or <br>Onsite Support</div>
                </li>
            </ul>
        </div>`);
    }
}
loadTestCode();