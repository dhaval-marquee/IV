function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('tab_iv')) {
        bodyEle.classList.add('tab_iv');

        document.querySelector('section.m-textmedia:nth-last-child(2):not(.tab_iv_tabslayer)')?.remove();

        document.querySelector('section.m-textmedia:last-child').insertAdjacentHTML('beforebegin',`<section class="m-textmedia double-pad tab_iv_tabslayer">
                <div class="container">
                    <h2 class="title"><strong>Protect Your</strong> Business While Enabling It</h2>
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