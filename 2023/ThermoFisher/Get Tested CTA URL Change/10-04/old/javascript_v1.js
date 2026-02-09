$('button[data-bs-target="#getTestedIntroModal"]').each(function() {
    $(this).replaceWith($('<a class="' +  $(this).attr('class') + ' text-nowrap" href="https://www.thermofisher.com/allergy/us/en/blood-testing-allergies/how-to-get-an-allergy-test.html#testing-options">' + this.innerHTML + '</a>'));
})

$('.cmp-button a[href="/allergy/us/en/get-tested.html"]').attr('href', 'https://www.thermofisher.com/allergy/us/en/blood-testing-allergies/how-to-get-an-allergy-test.html#testing-options');