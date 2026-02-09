function loadTestCode() {
    // Dynamically load CSS for Slick Slider
    if (!jQuery('body').hasClass('ivChat')) {
        jQuery('body').addClass('ivChat');
        jQuery('body').addClass('ivChat_v2');

        jQuery('#howItWorkSection').before(`<div class="iv-supportBanner">
            <div class="content">
                <div class="iconWrapper">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/ClearCaptions/icon-service.svg" alt="Service icon">
                    <p>Have Questions? Live chat with a ClearCaptions specialist:</p>
                </div>
                <div class="ClickHereChatWrapper">
                    <button type="button" class="awb-menu__m-toggle ClickHereChat" onclick="icPatronChat.setStateWindowToggle()">
                        <span> <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1762584409/ClearCaptions/massageicon.png" alt="Massage icon"> Click here to chat</span>
                    </button>
                </div>
            </div>
        </div>`);
    }
}
loadTestCode();