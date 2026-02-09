function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('tab_iv')) {
        bodyEle.classList.add('tab_iv');

        document.querySelector('section.m-textmedia:nth-last-child(2):not(.tab_iv_tabslayer)')?.remove();

        document.querySelector('section.m-textmedia:last-child').insertAdjacentHTML('beforebegin',`<section class="m-textmedia double-pad tab_iv_tabslayer">
                <div class="container">
                    <h2 class="title"><strong>Protect Your Business While Enabling It</strong></h2>
                    <div class="tab_iv_tabs">
                        <div class="tab_iv_tabstitle_wrap">
                            <button class="tab_iv_tabstitle active" data-tab="1">
                                <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/CyberGRX/Homepage_CyberRisk_Nation_Swap_Test/verify-icon.png" alt="" width="28px" />
                                <span class="tab_iv_tabstitle_text">Verify Vendor Compliance</span>
                                <span class="tab_iv_tabstitle_line"></span>
                            </button>
                            <button class="tab_iv_tabstitle" data-tab="2">
                                <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/CyberGRX/Homepage_CyberRisk_Nation_Swap_Test/vet-onboard-icon.png" alt="" width="36px" />
                                <span class="tab_iv_tabstitle_text">Vet and Onboard Vendors</span>
                                <span class="tab_iv_tabstitle_line"></span>
                            </button>
                            <button class="tab_iv_tabstitle" data-tab="3">
                                <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/CyberGRX/Homepage_CyberRisk_Nation_Swap_Test/prioritize-risk-icon.png" alt="" width="28px" />
                                <span class="tab_iv_tabstitle_text">Prioritize Vendor Risk</span>
                                <span class="tab_iv_tabstitle_line"></span>
                            </button>
                            <button class="tab_iv_tabstitle" data-tab="4">
                                <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/CyberGRX/Homepage_CyberRisk_Nation_Swap_Test/secure-program-investment-icon.png" alt="" width="28px" />
                                <span class="tab_iv_tabstitle_text">Secure Program Investment</span>
                                <span class="tab_iv_tabstitle_line"></span>
                            </button>
                            <button class="tab_iv_tabstitle" data-tab="5">
                                <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/CyberGRX/Homepage_CyberRisk_Nation_Swap_Test/zero-day-attack-icon.png" alt="" width="34px" />
                                <span class="tab_iv_tabstitle_text">Prepare for a Zero Day Attack</span>
                                <span class="tab_iv_tabstitle_line"></span>
                            </button>
                        </div>
                        <div class="tab_iv_tabscontent_wrap">
                            <div class="tab_iv_tabscontent_item active" id="tab-1">
                                <div class="tab_iv_tabscontent_inner">
                                    <div class="tab_iv_tabscontent_itemrhs">
                                        <img width="420" alt="jack" src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/CyberGRX/Homepage_CyberRisk_Nation_Swap_Test/vendor-compliance-person.png" />
                                    </div>
                                    <div class="tab_iv_tabscontent_itemlhs">
                                        <ul class="tab_iv_tabscontent_list">
                                            <li>
                                                <div class="tab_iv_tabscontent_listicon">
                                                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/CyberGRX/Homepage_CyberRisk_Nation_Swap_Test/verify-icon.png" alt="icon" width="26px" />
                                                </div>
                                                <div class="tab_iv_tabscontent_listtext">
                                                    <h4>Quickly see who meets your regulatory requirements.</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="tab_iv_tabscontent_listicon">
                                                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/CyberGRX/Homepage_CyberRisk_Nation_Swap_Test/verify-icon.png" alt="icon" width="26px" />
                                                </div>
                                                <div class="tab_iv_tabscontent_listtext">
                                                    <h4>Identify third-party compliance gaps.</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="tab_iv_tabscontent_listicon">
                                                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/CyberGRX/Homepage_CyberRisk_Nation_Swap_Test/verify-icon.png" alt="icon" width="26px" />
                                                </div>
                                                <div class="tab_iv_tabscontent_listtext">
                                                    <h4>Continuously monitor vendors for ongoing compliance.</h4>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="tab_iv_learnmore_btn">
                                            <a href="https://www.cybergrx.com/book-a-demo" class="btn-capsule transparent">Book a Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <div class="tab_iv_tabscontent_item" id="tab-2">
                                <div class="tab_iv_tabscontent_inner">
                                    <div class="tab_iv_tabscontent_itemrhs">
                                        <img width="570" alt="Persona" src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/CyberGRX/Homepage_CyberRisk_Nation_Swap_Test/evaluate-vendors.png" />
                                    </div>
                                    <div class="tab_iv_tabscontent_itemlhs">
                                        <ul class="tab_iv_tabscontent_list">
                                            <li>
                                                <div class="tab_iv_tabscontent_listicon vet-icon">
                                                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/CyberGRX/Homepage_CyberRisk_Nation_Swap_Test/vet-onboard-icon.png" alt="icon" width="28px" />
                                                </div>
                                                <div class="tab_iv_tabscontent_listtext">
                                                    <h4>Accelerate purchasing decisions.</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="tab_iv_tabscontent_listicon vet-icon">
                                                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/CyberGRX/Homepage_CyberRisk_Nation_Swap_Test/vet-onboard-icon.png" alt="icon" width="28px" />
                                                </div>
                                                <div class="tab_iv_tabscontent_listtext">
                                                    <h4>Support supply chain diversification.</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="tab_iv_tabscontent_listicon vet-icon">
                                                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/CyberGRX/Homepage_CyberRisk_Nation_Swap_Test/vet-onboard-icon.png" alt="icon" width="28px" />
                                                </div>
                                                <div class="tab_iv_tabscontent_listtext">
                                                    <h4>Manage contracts efficiently.</h4>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="tab_iv_learnmore_btn">
                                            <a href="https://www.cybergrx.com/book-a-demo" class="btn-capsule transparent">Book a Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <div class="tab_iv_tabscontent_item" id="tab-3">
                                <div class="tab_iv_tabscontent_inner">
                                    <div class="tab_iv_tabscontent_itemrhs">
                                        <img width="460" alt="Persona2" src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/CyberGRX/Homepage_CyberRisk_Nation_Swap_Test/prioritize-vendor-risks.png" />
                                    </div>
                                    <div class="tab_iv_tabscontent_itemlhs">
                                        <ul class="tab_iv_tabscontent_list">
                                            <li>
                                                <div class="tab_iv_tabscontent_listicon">
                                                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/CyberGRX/Homepage_CyberRisk_Nation_Swap_Test/prioritize-risk-icon.png" alt="icon" width="26px" />
                                                </div>
                                                <div class="tab_iv_tabscontent_listtext">
                                                    <h4>Quickly understand your inherent risks.</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="tab_iv_tabscontent_listicon">
                                                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/CyberGRX/Homepage_CyberRisk_Nation_Swap_Test/prioritize-risk-icon.png" alt="icon" width="26px" />
                                                </div>
                                                <div class="tab_iv_tabscontent_listtext">
                                                    <h4>Mitigate the impact of third-party breach.</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="tab_iv_tabscontent_listicon">
                                                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/CyberGRX/Homepage_CyberRisk_Nation_Swap_Test/prioritize-risk-icon.png" alt="icon" width="26px" />
                                                </div>
                                                <div class="tab_iv_tabscontent_listtext">
                                                    <h4>Monitor and proactively respond to emerging risks.</h4>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="tab_iv_learnmore_btn">
                                            <a href="https://www.cybergrx.com/book-a-demo" class="btn-capsule transparent">Book a Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <div class="tab_iv_tabscontent_item" id="tab-4">
                                <div class="tab_iv_tabscontent_inner">
                                    <div class="tab_iv_tabscontent_itemrhs">
                                        <img width="410" alt="secure-investment-person" src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/CyberGRX/Homepage_CyberRisk_Nation_Swap_Test/secure-investment.png" />
                                    </div>
                                    <div class="tab_iv_tabscontent_itemlhs">
                                        <ul class="tab_iv_tabscontent_list">
                                            <li>
                                                <div class="tab_iv_tabscontent_listicon">
                                                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/CyberGRX/Homepage_CyberRisk_Nation_Swap_Test/secure-program-investment-icon.png" alt="icon" width="26px" />
                                                </div>
                                                <div class="tab_iv_tabscontent_listtext">
                                                    <h4>Prove ROI of your TPRM program.</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="tab_iv_tabscontent_listicon">
                                                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/CyberGRX/Homepage_CyberRisk_Nation_Swap_Test/secure-program-investment-icon.png" alt="icon" width="26px" />
                                                </div>
                                                <div class="tab_iv_tabscontent_listtext">
                                                    <h4>Improve defensibility without adding headcount.</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="tab_iv_tabscontent_listicon">
                                                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/CyberGRX/Homepage_CyberRisk_Nation_Swap_Test/secure-program-investment-icon.png" alt="icon" width="26px" />
                                                </div>
                                                <div class="tab_iv_tabscontent_listtext">
                                                    <h4>Confidently communicate risk to stakeholders.</h4>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="tab_iv_learnmore_btn">
                                            <a href="https://www.cybergrx.com/book-a-demo" class="btn-capsule transparent">Book a Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <div class="tab_iv_tabscontent_item" id="tab-5">
                                <div class="tab_iv_tabscontent_inner">
                                    <div class="tab_iv_tabscontent_itemrhs">
                                        <img width="580" alt="zeroday" src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/CyberGRX/Homepage_CyberRisk_Nation_Swap_Test/zero-day-attack.png" />
                                    </div>
                                    <div class="tab_iv_tabscontent_itemlhs">
                                        <ul class="tab_iv_tabscontent_list">
                                            <li>
                                                <div class="tab_iv_tabscontent_listicon zero-icon">
                                                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/CyberGRX/Homepage_CyberRisk_Nation_Swap_Test/zero-day-attack-icon.png" alt="icon" width="28px" />
                                                </div>
                                                <div class="tab_iv_tabscontent_listtext">
                                                    <h4>Know what could go wrong in advance.</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="tab_iv_tabscontent_listicon zero-icon">
                                                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/CyberGRX/Homepage_CyberRisk_Nation_Swap_Test/zero-day-attack-icon.png" alt="icon" width="28px" />
                                                </div>
                                                <div class="tab_iv_tabscontent_listtext">
                                                    <h4>Contain and minimize the impact of an attack.</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="tab_iv_tabscontent_listicon zero-icon">
                                                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/CyberGRX/Homepage_CyberRisk_Nation_Swap_Test/zero-day-attack-icon.png" alt="icon" width="28px" />
                                                </div>
                                                <div class="tab_iv_tabscontent_listtext">
                                                    <h4>Be confident in your detection and response plan.</h4>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="tab_iv_learnmore_btn">
                                            <a href="https://www.cybergrx.com/book-a-demo" class="btn-capsule transparent">Book a Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`
        );

        document.querySelectorAll(".tab_iv_tabstitle").forEach(function(button){
            button.addEventListener("click", function(){
                var tabID = button.getAttribute('data-tab');
                document.querySelectorAll(".tab_iv_tabstitle").forEach(function(removeClass){
                    removeClass.classList.remove('active');
                });
                document.querySelectorAll(".tab_iv_tabscontent_item").forEach(function(removeClass){
                    removeClass.classList.remove('active');
                });
                button.classList.add('active');
                document.querySelector('#tab-' + tabID).classList.add('active');
            });
        });
    }
}

// Load code just for Desktop 
if (window.matchMedia("(min-width: 1025px)").matches) {

    loadTestCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 1024.98px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 1025px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for Desktop over