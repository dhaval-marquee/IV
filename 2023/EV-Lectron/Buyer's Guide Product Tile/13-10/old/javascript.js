function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('guideProductTest')) {
        bodyEle.classList.add('guideProductTest');
  
        document.querySelectorAll('.productgrid--item')[2]?.insertAdjacentHTML('afterend', `
            <li class="guideProduct productgrid--item imagestyle--natural productitem--sale productitem--emphasis show-actions--mobile"></li>`);
    
        const jsonData = {
            '/collections/ev-chargers': {
                guideProductTest: {
                    link: "https://ev-lectron.com/pages/buyers-guide",
                    Image: "https://res.cloudinary.com/ignite-visibility/image/upload/v1697023642/EV_Lectron/Buyers_Guide_Product_Tile/BuyerGuideProductTitle-01.png",
                    h2: "Not sure which EV Charger is right for you?",
                    button: "Use The Product Finder",
                }
            },
            '/collections/level-1-ev-chargers': {
                guideProductTest: {
                    link: "https://ev-lectron.com/pages/buyers-guide",
                    Image: "https://res.cloudinary.com/ignite-visibility/image/upload/v1697023633/EV_Lectron/Buyers_Guide_Product_Tile/BuyerGuideProductTitle-02.png",
                    h2: "Not sure which EV Charger is right for you?",
                    button: "Use The Product Finder",
                }
            },
            '/collections/level-2-ev-chargers': {
                guideProductTest: {
                    link: "https://ev-lectron.com/pages/buyers-guide",
                    Image: "https://res.cloudinary.com/ignite-visibility/image/upload/v1697023640/EV_Lectron/Buyers_Guide_Product_Tile/BuyerGuideProductTitle-03.png",
                    h2: "Not sure which EV Charger is right for you?",
                    button: "Use The Product Finder",
                }
            },
            '/collections/ev-adapters': {
                guideProductTest: {
                    link: "https://ev-lectron.com/pages/buyers-guide",
                    Image: "https://res.cloudinary.com/ignite-visibility/image/upload/v1697023640/EV_Lectron/Buyers_Guide_Product_Tile/BuyerGuideProductTitle-04.png",
                    h2: "Not sure which adapter you need?",
                    button: "Use The Product Finder",
                }
            },
            '/collections/tesla': {
                guideProductTest: {
                    link: "https://ev-lectron.com/collections/tesla",
                    Image: "https://res.cloudinary.com/ignite-visibility/image/upload/v1697023640/EV_Lectron/Buyers_Guide_Product_Tile/BuyerGuideProductTitle-05.png",
                    h2: "Find exactly what you need for your Tesla to stay charged",
                    button: "Use The Tesla Product Finder",
                }
            },
            '/collections/tesla-chargers': {
                guideProductTest: {
                    link: "https://ev-lectron.com/collections/tesla",
                    Image: "https://res.cloudinary.com/ignite-visibility/image/upload/v1697023640/EV_Lectron/Buyers_Guide_Product_Tile/BuyerGuideProductTitle-06.png",
                    h2: "Find exactly what you need for your Tesla to stay charged",
                    button: "Use The Tesla Product Finder",
                }
            }
        }
    
        var html = "";
        var ele = jsonData[window.location.pathname];
        Object.keys(ele).forEach(key => {
            html += `
            <a href="${ele[key].link}">
                <div class="item" style="background-image: url(${ele[key].Image});">
                <div class="itemText">
                    <h2>${ele[key].h2}</h2>
                    <button type="button" class="btn">${ele[key].button}</button>
                </div>
                </div>
            </a>
            `;
        });
    
        document.querySelectorAll('.guideProduct').forEach(function (listitem) {
            listitem.innerHTML = html;
        });
    }
}
loadTestCode();
  