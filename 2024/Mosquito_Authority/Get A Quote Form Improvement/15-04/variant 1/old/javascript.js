if (!document.body.classList.contains('quote_form_iv')) {
    document.body.classList.add('quote_form_iv');
    var getForm = setInterval(function() {
        var formModal = document.querySelector('.quote_form_iv #form-modal');
        if (formModal !== null) {
            clearInterval(getForm);
            var formModalTitle = formModal.querySelector('.form-modal-main > span');
            formModalTitle.classList.add('form-modal-title');
            formModalTitle.textContent = 'Get A Free Quote';
            var formModalDesc = formModal.querySelector('.form-modal-main > p');
            formModalDesc.classList.add('form-modal-desc');
            formModalDesc.textContent = 'Fill out your details below and we\'ll contact you with a no-obligation price quote shortly!';
        }
    }, 100);
}