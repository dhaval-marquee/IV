var bodyEle = document.querySelector('body');
if (!bodyEle.classList.contains('value_price_test')) {
    bodyEle.classList.add('value_price_test');
    
    // Put your test code here
    $('.value_price_test .promotions-module').addClass('value_price')
    $('.value_price h2 + h1').text('Know Personal Fitness')


    $('.value_price .promotions-loop li:first-child h1 + h1').html('<span class="discount_price">$95</span>$25');
    $('.value_price .promotions-loop li:last-child h1 + h1').prepend('<span class="discount_price">$50</span>');



    $('.value_price .promotions-loop li:first-child .promotion-bullets-loop').html(`
        <li>Get the personalized attention you deserve with a 1-on-1 training session and experienced coach.</li>
        <li>Know which movement pattern is hindering your ability with a professional 5 movement analysis and correction assessment.</li>
        <li>Let our expert coach build a personalized plan to maximize results for your fitness goals</li>
    `);
    
    $('.value_price .promotions-loop li:last-child .promotion-bullets-loop').html(`
        <li>Know real personalized data with on our InBody machine to see a visual representation of your current body composition & fitness level.</li>
        <li>Receive a Personalized Fitness Routine from a multi-certified Fitness Counselor based on your specific goals & needs.</li>
        <li>Tour the facility to learn more about some of our exclusive amenities, newest fitness technology, & even try out one of our unusual cardio machines or recovery devices.</li>
    `);

    $('.value_price .promotions-loop li:first-child a').text('Book Your Assessment');
    $('.value_price .promotions-loop li:last-child a').text('Book Your Consultation');
}