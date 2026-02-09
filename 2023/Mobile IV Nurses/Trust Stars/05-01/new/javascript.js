function SPZTestCode() {
    if (!jQuery('body').hasClass('google-review')) {
        jQuery('body').addClass('google-review');
        
        // Put your test code here

        jQuery('.feel-better-faster-section .column_button:last-child').after('<div class="google-review-wrap"><span class="rating-number">5.0</span><span class="rating-star"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1671630942/mobileIVnurses/five-star.png" width="100" height="23"></span><span class="rating-count">1,074 Reviews</span></div>');





        jQuery('.entry-content > div > div:nth-child(3)').after(`
        <div class="review_wrapper">
            <div class="container">
                <ul>
                    <li>
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1672913343/mobileIVnurses/Trust_Stars/A.png">
                        <h4>Amber Espericueta</h4>
                        <div class="review_text">
                            <p>It was very easy to make an appointment. The follow up was perfect and my nurse was so caring. She felt like family. I will definitely be a returning customer. Thank you for making it simple and comfortable.</p>
                            <a href="javascript:;" id="showText">More</a>
                        </div>
                        <img class="review_star" src="https://res.cloudinary.com/ignite-visibility/image/upload/v1671630942/mobileIVnurses/five-star.png">
                        <span class="review_time">3 weeks ago</span>
                    </li>
                    <li>
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1672913343/mobileIVnurses/Trust_Stars/Fatimah_Gordon.png">
                        <h4>Fatimah Gordon</h4>
                        <div class="review_text">
                            <p>I love mobile iv nurses, not only do they educate you on what you're getting they are also very friendly and make it a fun easy experience! Mario is the reason I will definitely be another returning customer, he is highly recommended!</p>
                            <a href="javascript:;" id="showText">More</a>
                        </div>
                        <img class="review_star" src="https://res.cloudinary.com/ignite-visibility/image/upload/v1671630942/mobileIVnurses/five-star.png">
                        <span class="review_time">2 weeks ago</span>
                    </li>
                    <li>
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1672913343/mobileIVnurses/Trust_Stars/J.png">
                        <h4>Jessica Siegel</h4>
                        <div class="review_text">
                            <p>Donna was amazing! She was here in 2 hours on a weekend when I had the flu. So thankful- it was my first IV would do it again! Highly recommend</p>
                            <a href="javascript:;" id="showText" class="xl_desktop_hide">More</a>
                        </div>
                        <img class="review_star" src="https://res.cloudinary.com/ignite-visibility/image/upload/v1671630942/mobileIVnurses/five-star.png">
                        <span class="review_time">a month ago</span>
                    </li>
                </ul>
            </div>
        </div>`);

        jQuery(document).on('click', '#showText', function() {
            jQuery(this).prev().addClass('showAll');
            jQuery(this).hide();
        })


        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }
}


try {
    // PG Cookies Add
    var cookieName = 'google_review_Cookie';
    var cookieValue = '1';
    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 30);
    document.cookie = cookieName +"=" + cookieValue + ";expires=" + myDate;
    // END PG Cookies Add

    SPZTestCode();

} catch(ex) {

} finally {
    setTimeout(() => {
        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }, 3000);
}