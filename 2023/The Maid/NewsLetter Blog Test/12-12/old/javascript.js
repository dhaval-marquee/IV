var loadTest = setInterval(() => {
    if(document.querySelectorAll('body').length > 0 && !document.querySelector('body').classList.contains('newsLetter_iv')) {
        clearInterval(loadTest);

        document.querySelector('body').classList.add('newsLetter_iv');
        document.querySelectorAll('div.archive-wrapper')[1].append(document.querySelector('.single-wrapper .rec-wrapper'));
        document.querySelector('.single-wrapper .request-insert').before(document.querySelector('.tips-form-wrapper')); 
        
    }
}, 100);