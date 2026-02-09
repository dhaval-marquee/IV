function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('hero_iv')) {
        bodyEle.classList.add('hero_iv');
        




      var getClassInterval = setInterval(function(){
        if(document.querySelectorAll('div[class*=ProductThumbnail_thumbnailStyle_] + div').length > 0){
            clearInterval(getClassInterval)

            var rowElements = document.querySelectorAll('div[class*=ProductThumbnail_thumbnailStyle_] + div')
            rowElements.forEach(function (row) {
                row.insertAdjacentHTML('afterend',`<div class="quickViewWrapper">
                <a href="#" class="quickView" tabindex="-1">Quick View</a></div>`);
          });

        document.getElementsByClassName("quickViewWrapper").addEventListener("click", myFunction1);
        function myFunction1() {
            document.getElementById("map_wrapper").style.display = "block";
        }


        document.querySelector("quickViewWrapper").addEventListener("click", moneyBack_btn);
        function moneyBack_btn() {
            document.querySelector(".ProductThumbnailContainer_quickViewDesktopButton__kWTHo").click();
            console.log('click')
        }

        }
    },500);



    }
}
loadTestCode();