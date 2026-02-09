function loadTestCode() {
    // Put your test code here
    var changeBtntext = setInterval(function(){
        if(document.querySelectorAll('main[class*="LayoutWrapper_fillBody__"] .container-fluid').length > 0){
            clearInterval(changeBtntext);
            document.querySelector('.shopByGender').parentNode.parentNode.classList.add('shopByGenderWrapper');
            document.querySelector('.custom-outer-style-ROW-ead-e--bd-efbfecd').parentNode.classList.add('customOuter');
            document.querySelector('.custom-outer-style-ROW-ec-ecd-db-bd-abaac').parentNode.classList.add('crewsdifference');
            document.querySelector('.custom-outer-style-ROW-fbfab--ab-af-baa').parentNode.parentNode.classList.add('recentlyViewed');
    
            document.querySelector('.recentlyViewed').after(document.querySelector('.customOuter')); 
            document.querySelector('.customOuter').before(document.querySelector('.shopByGenderWrapper')); 
            document.querySelector('.recentlyViewed').before(document.querySelector('.crewsdifference')); 
    
            document.querySelectorAll('.shopByGenderWrapper h2.homeShopBtns')[0].innerText = "SHOP ALL WOMEN'S SHOES"
            document.querySelectorAll('.shopByGenderWrapper h2.homeShopBtns')[1].innerText = "SHOP ALL MEN'S SHOES";
        }
    },500);
   
}

function SPZTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('homepage_iv')) {
        bodyEle.classList.add('homepage_iv');
        var running = false;
        var target = document.querySelectorAll('main')[0];

        const config = { childList: true, characterData: true, subtree: true, attributes: true, };
        const callback = function(mutationsList, observer) {
            var page = window.location.href.split("?")[0].split("#")[0];
            if(running == false && page.indexOf('https://www.shoesforcrews.com/') > -1) {
                loadTestCode();
    
                running = true;
                setTimeout(function() { running = false }, 1000);
            }
        };
        const observer = new MutationObserver(callback);
        observer.observe(target, config);
    }
}

function runtest() {
    var page = window.location.href.split("?")[0].split("#")[0];    
    if(page.indexOf('https://www.shoesforcrews.com/') > -1) {
        SPZTestCode();
    }
}

 // Set Initial URL
var initialURL = window.location.href;
window.addEventListener('click', function(e){
    if(initialURL !== window.location.href){
        initialURL = window.location.href;
        runtest();
    }
});

window.addEventListener('popstate', runtest);
runtest();