$('body button[data-bs-target="#getTestedIntroModal"]').each(function() {
    $(this).replaceWith($('<a class="' +  $(this).attr('class') + ' text-nowrap openModal" href="https://www.thermofisher.com/allergy/us/en/get-started.html">' + this.innerHTML + '</a>'));
});
$('body .cmp-button a[href="/allergy/us/en/get-tested.html"]').attr('href', 'https://www.thermofisher.com/allergy/us/en/get-started.html').addClass('openModal');