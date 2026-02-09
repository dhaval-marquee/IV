document.querySelector('#contact h2').textContent = 'Insurance Verification Made Easy';
document.querySelector('#contact .form-description p').textContent = 'Complete the form below to learn more about how we can help you verify your patients\' insurance eligibility with ease!';
document.querySelector('#contact #contactForm button').innerText = 'Submit Request';
document.querySelector('#contact #contactForm button').parentNode.classList.add('text-center','w-100');


// How To Maximize Eligibility Verification
var largePromotion = document.querySelector('.largePromotion');
largePromotion.classList.add('hidden');

// Related Products
var relatedProductsOne = document.querySelector('.contentBannerSmall + .columnBoxes');
var relatedProductsTwo = document.querySelector('.contentBannerSmall + .columnBoxes + .contentBlock');
relatedProductsOne.classList.add('hidden');
relatedProductsTwo.classList.add('hidden');

// Insurance eligibility resources
document.querySelectorAll('section.column-boxes.exp-solid-bg--default .column-content').forEach(item => {
    var thumbnail = item.querySelector('.box-thumbnail > img');
    var href = item.querySelector('.btn').href;
    var link = document.createElement('a');
    link.setAttribute('href', href);
    link.innerHTML = thumbnail.outerHTML;
    thumbnail.replaceWith(link);
    var button = item.querySelector('.box-bottom');
    button.classList.add('hidden');
})