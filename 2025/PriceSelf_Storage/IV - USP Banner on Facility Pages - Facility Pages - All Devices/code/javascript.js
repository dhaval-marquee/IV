function loadTestCode() {
    if (!document.body.classList.contains('iv-USP-banner')) {
        document.body.classList.add('iv-USP-banner');

        const ivWhyPriceSelfStorage = `
            <section class="iv-storage-box">
                <h2 class="iv-storage-title">WHY PRICE SELF STORAGE?</h2>
                <div class="iv-storage-items iv-desktop">
                    <div class="iv-storage-item">
                        <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1760171555/PriceSelfStorage/USPBannerFacilityPages/lock-icon.png" class="iv-icon"></img>
                        <p>Enhanced Safety<br>and Security</p>
                    </div>
                    <div class="iv-storage-item">
                        <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1760171554/PriceSelfStorage/USPBannerFacilityPages/bell-icon.png" class="iv-icon"></img>
                        <p>Free Concierge Service</p>
                    </div>
                    <div class="iv-storage-item">
                        <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1760171554/PriceSelfStorage/USPBannerFacilityPages/calendar-icon.png" class="iv-icon"></img>
                        <p>Month-to-month Leases</p>
                    </div>
                    <div class="iv-storage-item">
                        <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1760171554/PriceSelfStorage/USPBannerFacilityPages/management-icon.png" class="iv-icon"></img>
                        <p>Large Variety of<br>Storage Unit Sizes</p>
                    </div>
                    <div class="iv-storage-item">
                        <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1760171554/PriceSelfStorage/USPBannerFacilityPages/doller-icon.png" class="iv-icon"></img>
                        <p>No Deposit &<br>Competitive Rates</p>
                    </div>
                </div>
                <div class="iv-storage-items iv-mobile">
                    <div class="iv-storage-items-left">
                        <div class="iv-storage-item">
                            <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1760171555/PriceSelfStorage/USPBannerFacilityPages/lock-icon.png" class="iv-icon"></img>
                            <p>Enhanced Safety<br> and Security</p>
                        </div>
                        <div class="iv-storage-item">
                            <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1760171554/PriceSelfStorage/USPBannerFacilityPages/bell-icon.png" class="iv-icon"></img>
                            <p>Free Concierge Service</p>
                        </div>
                        <div class="iv-storage-item">
                            <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1760171554/PriceSelfStorage/USPBannerFacilityPages/management-icon.png" class="iv-icon"></img>
                            <p>Large Variety of<br> Storage Unit Sizes</p>
                        </div>
                    </div>
                    <div class="iv-storage-items-right">
                        <div class="iv-storage-item">
                            <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1760171554/PriceSelfStorage/USPBannerFacilityPages/calendar-icon.png" class="iv-icon"></img>
                            <p>Month-to-month Leases</p>
                        </div>
                        <div class="iv-storage-item">
                            <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1760171554/PriceSelfStorage/USPBannerFacilityPages/doller-icon.png" class="iv-icon"></img>
                            <p>No Deposit &<br> Competitive Rates</p>
                        </div>
                    </div>
                </div>
            </section>`;

        document.querySelector('.pss-facility__main-title').insertAdjacentHTML('beforebegin',ivWhyPriceSelfStorage);
    }
}

if (document.body) {
    loadTestCode();
}