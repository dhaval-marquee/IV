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
                    Image: "//res.cloudinary.com/ignite-visibility/image/upload/f_auto/EV_Lectron/Buyers_Guide_Product_Tile/BuyerGuideProductTitle-01.png",
                    h2: "Not sure which EV Charger is right for you?",
                    button: "Use The Product Finder",
                }
            },
            '/collections/level-1-ev-chargers': {
                guideProductTest: {
                    link: "https://ev-lectron.com/pages/buyers-guide",
                    Image: "//res.cloudinary.com/ignite-visibility/image/upload/f_auto/EV_Lectron/Buyers_Guide_Product_Tile/BuyerGuideProductTitle-02.png",
                    h2: "Not sure which EV Charger is right for you?",
                    button: "Use The Product Finder",
                }
            },
            '/collections/level-2-ev-chargers': {
                guideProductTest: {
                    link: "https://ev-lectron.com/pages/buyers-guide",
                    Image: "//res.cloudinary.com/ignite-visibility/image/upload/f_auto/EV_Lectron/Buyers_Guide_Product_Tile/BuyerGuideProductTitle-03.png",
                    h2: "Not sure which EV Charger is right for you?",
                    button: "Use The Product Finder",
                }
            },
            '/collections/ev-adapters': {
                guideProductTest: {
                    link: "https://ev-lectron.com/pages/buyers-guide",
                    Image: "//res.cloudinary.com/ignite-visibility/image/upload/f_auto/EV_Lectron/Buyers_Guide_Product_Tile/BuyerGuideProductTitle-04.png",
                    h2: "Not sure which adapter you need?",
                    button: "Use The Product Finder",
                }
            },
            '/collections/tesla': {
                guideProductTest: {
                    link: "https://ev-lectron.com/collections/tesla",
                    Image: "//res.cloudinary.com/ignite-visibility/image/upload/f_auto/EV_Lectron/Buyers_Guide_Product_Tile/BuyerGuide_ProductTitle05.png",
                    h2: "Find exactly what you need for your Tesla to stay charged",
                    button: "Use The Tesla Product Finder",
                }
            },
            '/collections/tesla-chargers': {
                guideProductTest: {
                    link: "https://ev-lectron.com/collections/tesla",
                    Image: "//res.cloudinary.com/ignite-visibility/image/upload/f_auto/EV_Lectron/Buyers_Guide_Product_Tile/BuyerGuideProductTitle-06.png",
                    h2: "Find exactly what you need for your Tesla to stay charged",
                    button: "Use The Tesla Product Finder",
                }
            },
            '/collections/tesla-adapters': {
                guideProductTest: {
                    link: "https://ev-lectron.com/collections/tesla",
                    Image: "//res.cloudinary.com/ignite-visibility/image/upload/f_auto/EV_Lectron/Buyers_Guide_Product_Tile/BuyerGuideProductTitle-07.png",
                    h2: "Find exactly what you need for your Tesla to stay charged",
                    button: "Use The Tesla Product Finder",
                }
            },
            '/collections/j1772-owners': {
                guideProductTest: {
                    link: "https://ev-lectron.com/collections/j1772-owners",
                    Image: "//res.cloudinary.com/ignite-visibility/image/upload/f_auto/EV_Lectron/Buyers_Guide_Product_Tile/BuyerGuideProductTitle-08.png",
                    h2: "Find exactly what you need for your J1772 EV to stay charged",
                    button: "Use The J1772 Product Finder",
                }
            },
            '/collections/j1772-chargers': {
                guideProductTest: {
                    link: "https://ev-lectron.com/collections/j1772-owners",
                    Image: "//res.cloudinary.com/ignite-visibility/image/upload/f_auto/EV_Lectron/Buyers_Guide_Product_Tile/BuyerGuideProductTitle-08.png",
                    h2: "Find exactly what you need for your J1772 EV to stay charged",
                    button: "Use The J1772 Product Finder",
                }
            },
            '/collections/j1772-adapters': {
                guideProductTest: {
                    link: "https://ev-lectron.com/collections/j1772-owners",
                    Image: "//res.cloudinary.com/ignite-visibility/image/upload/f_auto/EV_Lectron/Buyers_Guide_Product_Tile/BuyerGuideProductTitle-08.png",
                    h2: "Find exactly what you need for your J1772 EV to stay charged",
                    button: "Use The J1772 Product Finder",
                }
            }
        }
    
        var html = "";
        var ele = jsonData[window.location.pathname];
        Object.keys(ele).forEach(key => {
            html += `
            <a  href="${ele[key].link}">
                <div class="item " style="background-image: url(${ele[key].Image});">
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

        function setHeight() {
            var detailHead = document.querySelectorAll('.productgrid--items.products-per-row-4 .productgrid--item .productitem')[3];
            var serviceLeftWrap = document.querySelector("li.guideProduct");
            var serviceLeftWrap1 = document.querySelector("li.guideProduct a .item");
            var style = window.getComputedStyle(detailHead);
            var height = style.getPropertyValue('height');
            serviceLeftWrap.style.height = height;
            serviceLeftWrap1.style.height = height;
          }
          
          window.onload = function () {
            // Call setHeight on page load
            setHeight();
            
            // Add a resize event listener to update heights when the page is resized
            window.addEventListener("resize", setHeight);
          };
          
    }
}
loadTestCode();
  