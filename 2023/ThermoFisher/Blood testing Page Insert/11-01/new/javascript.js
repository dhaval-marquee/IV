function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('blood_testing_Page')) {
        bodyEle.classList.add('blood_testing_Page');
     
        document.querySelectorAll('.cmp-well .well[data-icon][data-icon-circle]')[1].classList.add('blood_testing');   
        
        document.querySelector('.blood_testing.well[data-icon][data-icon-circle] h4').insertAdjacentHTML('beforebegin',`<h2 class="text-center">Make the most of your appointment.</h2>`);
        document.querySelector('.blood_testing.well[data-icon][data-icon-circle] h4').innerHTML = 'Talk to your healthcare provider about specific IgE blood testing.'

        document.querySelectorAll('.blood_testing.well[data-icon][data-icon-circle] h4 ~ p')[0].innerHTML = 'Track your symptoms via this questionnaire. Then review your answers with your healthcare provider to decide if specific IgE blood testing is right for you.'

        document.querySelectorAll('.blood_testing.well[data-icon][data-icon-circle] h4 ~ p')[1].remove();
        document.querySelectorAll('.blood_testing.well[data-icon][data-icon-circle] h4 ~ p')[1].remove();
        document.querySelector('.blood_testing.well[data-icon][data-icon-circle] .cmp-button.full-width .btn').innerHTML = 'Start Questionnaire'

        document.querySelector('.blood_testing.well[data-icon][data-icon-circle] .cmp-button.full-width .btn').setAttribute('href','https://www.thermofisher.com/allergy/us/en/get-tested.html?wcmmode=disabled&skip_first_page=true');

    }
}

loadTestCode();