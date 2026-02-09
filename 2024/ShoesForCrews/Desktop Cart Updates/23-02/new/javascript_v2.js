function loadTest() {
    function loadTestCode() {
        var getContainer = setInterval(function(){
            if(document.querySelectorAll('h3[class*=Recommendations_title__]').length > 0){
                clearInterval(getContainer);
                document.querySelector('h3[class*=Recommendations_title__]').innerHTML = "Keep Your New Shoes Fresh Longer With";
            }
        },500);
    }
    function runtest() {
        var page = window.location.href.split("?")[0].split("#")[0];
        if(page === 'https://www.shoesforcrews.com/cart') {
            document.body.classList.add('desktopCart_iv');
            loadTestCode();
        } else {
            document.body.classList.remove('desktopCart_iv');
        }
    }
    window.addEventListener('popstate', runtest);
    window.addEventListener('load', function () {
        runtest();
    });
}
// Load code just for Desktop 
if (window.matchMedia("(min-width: 1025px)").matches) {
    loadTest();
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