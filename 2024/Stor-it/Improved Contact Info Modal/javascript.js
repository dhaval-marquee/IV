var jqueryInterval = setInterval(function () {
    if (typeof ($) != "undefined") {
        clearInterval(jqueryInterval);

        function addLabel() {
            $('div#quoteModal form .gform_next_button').attr('value', 'CONTINUE TO LOCATION DETAILS');
            $('div#quoteModal form input').each(function () {
                if ($(this).attr('placeholder') && !$(this).hasClass('label-added')) {
                    $(this).addClass('label-added');
                    $(this).before('<label>' + $(this).attr('placeholder') + '</label>');
                }
            });
        }
        addLabel();

        var changeLabel;
        $(document).on('click', function (e) {
            if (e.target.classList.contains('gform_previous_button') || e.target.classList.contains('gform_next_button')) {
                clearInterval(changeLabel);
                var i = 0;
                changeLabel = setInterval(() => {
                    i++;
                    if (i == 50) {
                        clearInterval(changeLabel);
                    }

                    addLabel();
                }, 100);
            }
        });
    }
}, 100);