function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('iv_product_page')) {
        bodyEle.classList.add('iv_product_page');
        
        // Put your test code here


        // var getBottomImg = document.querySelectorAll('img[src*="Control_Panel_Button_Labels.png"]')[0];

        


        // var getItems = document.querySelectorAll('#product-main-image > ul > li:first-child')
        // getItems.forEach(function(item){
        //     item.outerHTML = '';                        
        // });

        // var getThumbnail = document.querySelectorAll('.main-product .gallery .product__thumbnails > li:first-child')
        // getThumbnail.forEach(function(thumbnail){
        //     thumbnail.outerHTML = '';                        
        // });
        


        document.querySelector('img[alt="Air Purifier Breakdown"]').setAttribute('src','https://res.cloudinary.com/ignite-visibility/image/upload/v1666078721/Air_Oasis/iAdapt_Air_Product_Page/iAdaptExplodedView-ContaminantsEdit.jpg');
        document.querySelector('img[alt="Air Purifier Breakdown"]').removeAttribute('srcset');

        document.querySelector('img[alt="Air Purifier Breakdown"]').parentNode.nextElementSibling.classList.add('newImage');
        document.querySelector('.newImage').innerHTML = '<img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1666078721/Air_Oasis/iAdapt_Air_Product_Page/iAdaptExplodedView-TechnologyEdit.jpg" alt="iAdapt Exploded View-Technology">';



       
        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }
}


try {
    loadTestCode();

} catch(ex) {

} finally {
    setTimeout(() => {
        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }, 3000);
}