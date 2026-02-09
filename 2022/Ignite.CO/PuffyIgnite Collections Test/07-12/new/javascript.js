function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('mobile_Collections_test')) {
        bodyEle.classList.add('mobile_Collections_test');
        
        // Put your test code here


    $('.ignitecbd-collection .collection-main__header-title').closest('.container').addClass('vapeShop').after(`<section class="experience_section" id="section-tab">
        <div class="container">
            <div class="experience_main" id="section-tab">  
                <ul id="tab-control">
                    <li class="tab-control" id="control-selected">
                        <a href="javascript:void(0)">
                            <div class="img_wrapper">
                                <img src="https://cdn.shopify.com/s/files/1/0072/5119/8050/products/Web-NIC-DVP-BloodOrange-1copy_600x.png?v=1616166264" alt="V3 img">
                            </div>
                            <span class="title">V3</span>
                            <span class="price">
                                <span class="money">300 puff</span>
                            </span>
                        </a>
                    </li>
                    <li class="tab-control">
                        <a href="javascript:void(0)">
                            <div class="img_wrapper">
                                <img src="https://cdn.shopify.com/s/files/1/0072/5119/8050/products/Web-NIC-800-Mango-1copy_1200x.png?v=1616164951" alt="V8 img">
                            </div>
                            <span class="title">V8</span>
                            <span class="price">
                                <span class="money">800 puffs</span>
                            </span>
                        </a>
                    </li>
                    <li class="tab-control">
                        <a href="javascript:void(0)">
                            <div class="img_wrapper">
                                <img src="https://cdn.shopify.com/s/files/1/0072/5119/8050/products/Web-NIC-1500-StrawberryGuavaIce-1_2000x.png?v=1599592140" alt="V15 img">
                            </div>
                            <span class="title">V15</span>
                            <span class="price">
                                <span class="money">1500 puff</span>
                            </span>
                        </a>
                    </li>
                    <li class="tab-control">
                        <a href="javascript:void(0)">
                            <div class="img_wrapper">
                                <img src="https://cdn.shopify.com/s/files/1/0072/5119/8050/products/Strawberry-Watermelon_2000x.png?v=1630366016" alt="V25 img">
                            </div>
                            <span class="title">V25</span>
                            <span class="price">
                                <span class="money">2500 puff</span>
                            </span>
                        </a>
                    </li>
                    <li class="tab-control">
                        <a href="javascript:void(0)">
                            <div class="img_wrapper">
                                <img src="https://cdn.shopify.com/s/files/1/0072/5119/8050/products/V40-Synthetic-single-box_device-Grape-Ice_2000x.png?v=1642108489" alt="V40 img">
                            </div>
                            <span class="title">V40</span>
                            <span class="price">
                                <span class="money">4000 puff</span>
                            </span>
                        </a>
                    </li>
                 
                </ul>
                <div id="tab-div">
                    <div class="tab">
                      <h3 class="text-center v_produc">The V3 by Ignite</h3>
                        <div class="box_wrapper">
                            <div class="disposable_box">
                                <p>Disposable, Pre-Filled 1.2ml</p>
                            </div>
                            <div class="battery_box">
                                <p>280mAh Pre-charged Battery</p>
                            </div>
                            <div class="discreet_box">
                                <p>Discreet</p>
                            </div>
                            <div class="experience_box">
                                <p>5% Synthetic Nicotine for an accurate experience</p>
                            </div>
                        </div>
                    </div>
                    <div class="tab">
                    <h3 class="text-center v_produc">The V8 by Ignite</h3>
                        <div class="box_wrapper">
                            <div class="disposable_box">
                                <p>Disposable, Pre-Filled 2.6ml</p>
                            </div>
                            <div class="battery_box">
                                <p>500mAh Pre Charged Battery</p>
                            </div>
                            <div class="discreet_box">
                                <p>Discreet</p>
                            </div>
                            <div class="experience_box">
                                <p>5% Synthetic Nicotine for an accurate experience</p>
                            </div>
                        </div>
                    </div>   
                    <div class="tab">
                       <h3 class="text-center v_produc">The V15 by Ignite</h3>
                        <div class="box_wrapper">
                            <div class="disposable_box">
                                <p>Disposable, Pre-Filled 5.1ml</p>
                            </div>
                            <div class="battery_box">
                                <p>850mAh Pre Charged Battery</p>
                            </div>
                            <div class="discreet_box">
                                <p>Discreet</p>
                            </div>
                            <div class="experience_box">
                                <p>5% Synthetic Nicotine for an accurate experience</p>
                            </div>
                        </div>
                    </div>
                    <div class="tab">
                    <h3 class="text-center v_produc">The V25 by Ignite</h3>
                        <div class="box_wrapper">
                            <div class="disposable_box">
                                <p>Disposable, Prefilled 7.5ml</p>
                            </div>
                            <div class="battery_box">
                                <p>1000mAh Precharged Battery</p>
                            </div>
                            <div class="discreet_box">
                                <p>Unique & Discreet Design</p>
                            </div>
                            <div class="experience_box">
                                <p>5% Synthetic Nicotine for an accurate experience</p>
                            </div>
                        </div>
                    </div>
                    <div class="tab">
                    <h3 class="text-center v_produc">The V40 by Ignite</h3>
                        <div class="box_wrapper">
                            <div class="disposable_box">
                                <p>Disposable, Prefilled 10ml</p>
                            </div>
                            <div class="battery_box">
                                <p>400mAh Precharged Battery?</p>
                            </div>
                            <div class="discreet_box">
                                <p>Discreet</p>
                            </div>
                            <div class="experience_box">
                                <p>5% Synthetic Nicotine for an accurate experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`);


        const controls = document.querySelectorAll(".tab-control");
        const tabs = document.querySelectorAll(".tab");
    
        // display none for 1-length tabs
        for (let i = 1; i < tabs.length; i++) {
        tabs[i].style.display = "none";
        }
    
        // set value forl all tabs
        for (let i = 0; i < tabs.length; i++) {
        tabs[i].setAttribute("value", i);
        }
    
        // add event listener for all controls
        for (let i = 0; i < controls.length; i++) {
        controls[i].setAttribute("value", i);
        controls[i].addEventListener("click", displayTab);
        }
    
        // display tab function
        function displayTab() {
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].style.display = "none";
            controls[i].removeAttribute("id");
        }
        tabs[this.value].style.display = "block";
        controls[this.value].setAttribute("id", "control-selected");
        }


    }
}

// Load code just for mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {

    loadTestCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 768px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for mobile over