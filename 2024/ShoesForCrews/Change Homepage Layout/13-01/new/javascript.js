function loadTestCode() {
    var getContainer = setInterval(function(){
        if(document.querySelectorAll('.home_redesign_iv main .container-fluid').length > 0 && document.querySelectorAll('.shopByGender').length > 0){
            clearInterval(getContainer);
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
function runtest() {
    var page = window.location.href.split("?")[0].split("#")[0];
    if(page === 'https://www.shoesforcrews.com' || page === 'https://www.shoesforcrews.com/') {
        document.body.classList.add('home_redesign_iv');
        loadTestCode();
    } else {
        document.body.classList.remove('home_redesign_iv');
    }
}
var initialURL = window.location.href;
window.addEventListener('click', function(e){
    if(initialURL !== window.location.href){
        initialURL = window.location.href;
        runtest();
    }
});
window.addEventListener('popstate', runtest);
window.addEventListener('load', function () {
    runtest();
});