function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('mobile_landing_page_test')) {
        bodyEle.classList.add('mobile_landing_page_test');
        
        // Put your test code here

        document.querySelector('.mobile_landing_page_test .hero-section--primary').innerHTML = `<div class="container">
            <div class="img_wrapper">
                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1668155054/Ignite.co/Ignite_logo.png" alt="Ignite Logo">
            </div>
            <p>Unprecedented Innovation. <br> Uncompromising Excellence.</p>
            <ul>
                <li>Vapes</li>
                <li>Apparel</li>
                <li>CBD</li>
                <li>Spirits</li>
            </ul>
        </div>`


        window.addEventListener('resize', function(event) {
            $('.mobile_landing_page_test .hero-section--primary').css('margin-top',$('#header').height())
        }, true);
        window.dispatchEvent(new Event('resize'));

        $('.featured-content-section').prepend(`<div class="bottom_img">
            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1668155054/Ignite.co/Floating_CBD.jpg">
        </div>`);

        var gettext = $('.featured_text p').html().split('<br>')[0];
        $('.featured_text p').before('<p>'+gettext+'<span class="read_more"><a href="javascript:;" id="expandText">---Read More---</a></span></p>');

        $(document).on('click','#expandText', function() {
            $(this).closest('p').hide().next().show();
        });

    }
}


// Load code just for mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {

    loadTestCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 768px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for mobile over