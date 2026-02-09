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
        
        document.querySelector('.productLineup_section').insertAdjacentHTML('beforebegin',`<section class="industry_leser">
                <div class="title_wrapper">
                    <h2>See Why Keyence is the Industry Leader in Laser Marking</h2>
                </div>
            <div class="btn_wrapper">
                    <a href="/inquiry/requestDemoTest/?groupId=tcm%3A26-2047&amp;typeId=tcm%3A26-1742395&amp;ad_local=side_demo" class="btn_icon">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1691664047/Keyence/Add_USPs_and_Test_Demo_related_messaging_to_your_homepage/icon.png" width="70" alt=Widest Range Of Network"> Request A Free <br> Demo/test
                    </a>
                    <a href="tel:18885393623" class="btn_number"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1691664753/Keyence/Add_USPs_and_Test_Demo_related_messaging_to_your_homepage/icon_tel_02.svg" width="70" alt=""> 1-888-539-3623</a>
                </div>
            </section>
            <div class="ul_wrapper">
            <ul>
                <li>
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/Keyence/Add_USPs_and_Test_Demo_related_messaging_to_your_homepage/shield_icon.png" width="60" alt="Industry Leading 30 year Lifespan">
                    <p>Industry Leading <br>30 year Lifespan</p>
                </li>
                <li>
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/Keyence/Add_USPs_and_Test_Demo_related_messaging_to_your_homepage/wave_icon.png" width="90" alt="Global Network">
                    <p>Wavelengths Available</p>
                </li>
                <li>
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/Keyence/Add_icons_that_help_clearly_demonstrate_your_product%E2%80%99s_USPs./DirectSupport.png" width="50" alt="Direct Support or onsite Support">
                    <p>Direct Support or <br>onsite Support</p>
                </li>
            </ul>
        </div>`);
        }
    }

loadTestCode();
