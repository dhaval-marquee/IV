var removeClassInterval = setInterval(function(){
    if(document.querySelectorAll('header.shopify-section--header .header').length > 0){
        clearInterval(removeClassInterval);

        document.querySelector('.live-menu-mobile').remove();
        document.querySelector('.live-menu').remove();
        document.querySelector('.abtest-menu').classList.remove('abtest-menu');
        document.querySelector('.abtest-menu-mobile').classList.remove('abtest-menu-mobile');
    }
},500);