var loadTest = setInterval(() => {
    if(document.querySelectorAll('body').length > 0 && !document.querySelector('body').classList.contains('newsLetter_iv')) {
        clearInterval(loadTest);

        setTimeout(() => {
            document.querySelector('#gform_confirmation_wrapper_13')?.closest('.archive-wrapper').classList.add('ThankyouMessage');
        }, 1000);
        document.querySelector('body').classList.add('newsLetter_iv');
        document.querySelectorAll('div.archive-wrapper')[1].append(document.querySelector('.single-wrapper .rec-wrapper'));
        document.querySelector('.single-wrapper .request-insert').before(document.querySelector('.tips-form-wrapper')); 
        
    }
}, 100);