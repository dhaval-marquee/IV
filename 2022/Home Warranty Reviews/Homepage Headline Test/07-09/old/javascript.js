var bodyEle = document.querySelector('body');
if(!bodyEle.classList.contains('hero_form_iv')) {
    bodyEle.classList.add('hero_form_iv');
    // Put your test code here

    document.querySelectorAll('.hero_form_iv .banner_ab_testing_device h1')[0].textContent = 'Find the Best home Warranty In Your Area';

    // Use dynamic number

    var checkLength = setInterval(() => {
        if(document.querySelectorAll('.hero_form_iv .banner_ab_testing_device .review_genuine_block p').length > 0) {
            clearInterval(checkLength);
            var string = document.querySelector('.hero_form_iv .banner_ab_testing_device .review_genuine_block p').innerText
            string = string.replace(/  +/g, ' ');
            var newDigit = string.split(' ')[0]
        
            document.querySelectorAll('.hero_form_iv .banner_ab_testing_device h1 + p.content_block')[0].textContent = 'Based on 99,000+ reviews by homeowners just like you!';
            
            document.querySelectorAll('.hero_form_iv .banner_ab_testing_device h1 + p.content_block')[0].textContent = 'Based on '+ newDigit +' reviews by homeowners just like you!';
        }
    }, 10);


    document.querySelectorAll('.form_top_block > p:first-child')[0].textContent = 'What would you like to protect?';

    document.querySelectorAll('#appliances_list_3 p.appliance_value_3')[0].textContent = 'HVAC / Furnace';
    document.querySelectorAll('#appliances_list_1 p.appliance_value_1')[0].textContent = 'Whole House';

    document.querySelectorAll('.banner_list + p')[0].textContent = 'Enter your zip code to get started';

    

    document.getElementsByTagName("body")[0].style.visibility = "visible";
}