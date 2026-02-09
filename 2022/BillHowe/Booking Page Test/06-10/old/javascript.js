function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('billhomeTest')) {
        bodyEle.classList.add('billhomeTest');

        var getContent = setInterval(() => {
            if(jQuery('.pdm-sTitan div.time-select a.book').length > 0) {
                clearInterval(getContent)

                jQuery('.book .the-content h2').after(jQuery('.pdm-sTitan ul.timeline'));
                jQuery('label[for="services"]').before('<h3>How Can We Help?</h3>');
                jQuery('label[for="months"]').before('<h3 class="select_Date">Select Your Plumbing Appolintment Date:</h3>');
                jQuery('.pdm-sTitan div.time-select a.book').html('Book Now');

                jQuery(document).on('keyup change', '#the-services', function () {
                    jQuery('h3.select_Date').css('display','block');
                    jQuery('label[for="months"]').css('display','block');
                    jQuery('#calendar').css('display','block');
                    jQuery('.pdm-sTitan div.time-select').css('display','block');
                });

                jQuery(document).on('keyup change', '#the-services', function () {
                    var currentValue = jQuery(this).val();
                    console.log(currentValue);
                });
            }
        }, 100);
    }
}

// Load code just for Desktop 
if (window.matchMedia("(min-width: 1025px)").matches) {   
    var jQisLoaded = setInterval(function () {
        if (typeof jQuery != 'undefined') {
            clearInterval(jQisLoaded);
            loadTestCode();
        }
    }, 100);

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 1024.98px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 1025px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for Desktop over