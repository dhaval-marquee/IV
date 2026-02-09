function loadTestCode() {
    if (!jQuery('body').hasClass('bookingIV')) {
        jQuery('body').addClass('bookingIV');

        jQuery('body').append(`<div class="mq_modal">
            <div class="mq_modal_inner">
                <div class="mq_modal_block">
                    <div class="mq_modal_header">
                        <a href="javascript:;" class="mq_close"></a>    
                    </div>
                    <div class="mq_modal_content">
                        <h4>Enter your City of ZIP Code</h4>
                        <div id="dynamicForm"></div>
                    </div>
                </div>
            </div>
        </div>`);
        
        // Put your test code here
        jQuery('#pitchThemeContainer').after(`<section class="booking-section">
            <div class="container">
                <h2 class="fadein">Convenient self storage is only <br> a few clicks away</h2>
                <ul class="fadein">
                    <li>
                        <div class="list-img-wrapper">
                            <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1729253259/Store-IT/Select-Your-Unit.png" alt="Select Your Unit">
                        </div>
                        <h3>Select Your Unit</h3>
                        <p>Find the closest location and pick the right unit for your stuff.</p>
                    </li>   
                    <li>
                        <div class="list-img-wrapper">
                            <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1729253259/Store-IT/Rent-online.png" alt="Rent online">
                        </div>
                        <h3>Rent online</h3>
                        <p>Finish your rental on any device and sign your lease.</p>
                    </li>   
                    <li>
                        <div class="list-img-wrapper">
                            <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1729253259/Store-IT/Move-in.png" alt="Move in!">
                        </div>
                        <h3>Move in!</h3>
                        <p>Load up your belongings and put them in your storage unit.</p>
                    </li> 
                </ul>
                <a href="javascript:;" class="btnOrange fadein openModal">View Locations</a>
            </div>    
        </section>`);
    }

    // Modal Open & Close
    jQuery('body .openModal').on('click', function(){
        jQuery('#dynamicForm').append(jQuery('.locationsSearchContainer > form'));
        jQuery('body .mq_modal').addClass('fade').show();
        jQuery('html').addClass('mq_modal_open');
        setTimeout(() => {
            jQuery('body .mq_modal').addClass('open');
        }, 75);
    });
    jQuery('body .mq_modal_overlay, body .mq_close').on('click', function(){
        jQuery('html').removeClass('mq_modal_open');
        jQuery('body .mq_modal').removeClass('open');
        setTimeout(() => {
            jQuery('body .mq_modal').hide();
        }, 75);
        jQuery('.locationsSearchContainer').append(jQuery('#dynamicForm > form'));
    });
    
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);