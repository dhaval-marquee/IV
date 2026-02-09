var getLogo = setInterval(() => {
    if(document.querySelectorAll('.client-logos').length > 0 &&
        document.querySelectorAll('#section-1').length > 0) {
        document.querySelector('#section-1').before(document.querySelectorAll('.client-logos')[0].parentNode);
    }
}, 100);