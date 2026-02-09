function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('billhomeTest')) {
        bodyEle.classList.add('billhomeTest');
        
     // Put your test code here
     var refreshInterval = setInterval(function () {
        if (jQuery("body").length > 0) {
            jQuery('.book .the-content h2').after(jQuery('.pdm-sTitan ul.timeline'));
            jQuery('[for="services"]').before('<h3>How Can We Help?</h3>');
            jQuery('[for="months"]').before('<h3 class="select_Date">Select Your Plumbing Appolintment Date:</h3>');
            jQuery('.billhomeTest div.selectors .select_Date').hide();
            jQuery('.billhomeTest [for="months"]').hide();
            jQuery('#calendar').hide();

            clearInterval(refreshInterval);
        }
     }, 200);


    var refreshInterval1 = setInterval(function () {
        if (jQuery("body").length > 0) {

            jQuery('#the-services').keyup(function () {
                hide2();
            });

            jQuery(document).on('change', '#the-services', function () {
                jQuery('h3.select_Date').show();
                jQuery('[for="months"]').show();
                jQuery('#calendar').show();
            });

                function hide2() {
            if (jQuery('#the-services').val() != "") {
                jQuery('h3.select_Date').show();
                jQuery('[for="months"]').show();
                jQuery('#calendar').show();
            }
        }
        jQuery('.pdm-sTitan div.time-select a.book').html('Book Now');

            clearInterval(refreshInterval1);
        }
     }, 300);




    }
}

loadTestCode();


// Load code just for Mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {

    initCode();

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
// Load code just for Mobile over