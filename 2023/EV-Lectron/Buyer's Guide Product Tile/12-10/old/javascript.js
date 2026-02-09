function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('guideProductTest')) {
        bodyEle.classList.add('guideProductTest');

        document.querySelectorAll('.productgrid--item')[2]?.insertAdjacentHTML('afterend', `<li class="guideProduct productgrid--item  imagestyle--natural    productitem--sale  productitem--emphasis      show-actions--mobile">
        <a href="https://ev-lectron.com/pages/buyers-guide">
            <div class="item">
                <div class="itemImg">
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1697023642/EV_Lectron/Buyers_Guide_Product_Tile/BuyerGuideProductTitle-01.png" alt="Buyer's GuideProduct Title">
                </div>
                <div class="itemText">
                    <h2>Charge your EV with ease</h2>
                </div>
            </div>
        </a>
    </li>`);
    }
}
loadTestCode();
console.log('working');