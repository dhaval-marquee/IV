function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('hero_iv')) {
        bodyEle.classList.add('hero_iv');

        function addLink() {
            var getClassInterval = setInterval(function(){
                if(document.querySelectorAll('div[class*=ProductList_grid__] > div > div').length > 0){
                    clearInterval(getClassInterval)
    
                    function quickViewLoad() {
                        document.querySelectorAll('div[class*=ProductList_grid__] > div').forEach(function(e,i){
                            setTimeout(() => {
                            if(e.querySelectorAll('div[class*=ProductThumbnail_thumbnailDetails__]').length > 0 && !e.classList.contains('item_box')) {
                                e.classList.add('item_box');
                                e.querySelector('div[class*=ProductThumbnail_thumbnailDetails__]').closest('a').insertAdjacentHTML('afterend','<a href="javascript:;" class="quickView">Quick View</a>');
                            }
                            }, 500);
                        });
                    }
    
                    window.onscroll = function() {
                        quickViewLoad();
                    };
    
                    window.dispatchEvent(new CustomEvent('scroll'));
                }
            },1000); 
        }
       

    // Load code just for Desktop 
    if (window.matchMedia("(min-width: 1025px)").matches) {

        addLink();

        document.addEventListener("click", addLink);

        document.addEventListener("click", function(e) {
            if (e.target.classList.contains("quickView")) {
                const itemBoxElement = e.target.closest('.item_box');
                if (itemBoxElement) {
                    const button = itemBoxElement.querySelector('div[class*="ProductThumbnailContainer_desktopQuickViewButtonContainer_"] button');
                    if (button) {
                        button.click();
                    }
                }
            }
        });

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

    }
}
loadTestCode();

