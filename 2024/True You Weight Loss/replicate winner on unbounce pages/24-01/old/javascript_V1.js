var jQisLoaded = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQisLoaded);
        loadcode();
    } else {
        // DOM: Create the script element
        var jsElm = document.createElement("script");
        // set the type attribute
        jsElm.type = "application/javascript";
        // make the script element load file
        jsElm.src = '//cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js';
        // finally insert the element to the body element in order to load the script
        document.body.appendChild(jsElm);
        clearInterval(jQisLoaded);
        var jqueryInterval = setInterval(function () {
            if (typeof jQuery != 'undefined') {
                clearInterval(jqueryInterval);
                loadcode();
            }
        }, 100);
    }
}, 100);
function loadcode() {
    var $ = jQuery;
    if($('.form_columns').length == 0) {
        $('.lp-pom-form').wrapInner('<div class="form_columns"><div class="form_wrapper"></div></div>');
    }
    var formWrapperHeight = Math.max($('.lp-pom-form .form_columns').height());
    var form_wrapper = $('.lp-pom-form .form_columns').parent();
    var form_wrap_height = form_wrapper.height();
    var form_top = form_wrapper.position().top;
    var blocks1 = [], form_block;
    $('.lp-positioned-content>.lp-element').each(function(index, element) {
        if (!$(element).is(form_wrapper) && ($(element).position().top > form_top)){
            blocks1.push(element);
        }
    });
    $('#lp-pom-root>.lp-element').each(function(index, element) {
        var el_top = $(element).position().top;
        if ((el_top < form_top) && (el_top + $(element).height() > form_top)) {
            form_block = $(element);
            return false;
        }
    });
    var collapse_page = function(event, ui) {
        if($(window).innerWidth() > 600) {
            var currFormHeight = Math.max($('.lp-pom-form .form_columns').height() - 200);
        } else {
            var currFormHeight = Math.max($('.lp-pom-form .form_columns').height() - 230);
        }
        var diff = currFormHeight - formWrapperHeight;
        formWrapperHeight = currFormHeight;
        if (form_wrap_height < currFormHeight) {
            form_wrapper.height(currFormHeight);
        } else {
            form_wrapper.height(form_wrap_height);
        }
        form_block.height(form_block.height()+diff);
        form_block.find('div').each(function(index, el_div) {
            $(el_div).height($(el_div).height()+diff);
        });
        $.each(blocks1, function(index, element) {
            var el_top = $(element).position().top;
            var new_top = el_top + diff;
            $(element).css('top', new_top+'px');
        });
    }
    collapse_page(false);
    if(!$('body').hasClass('form_iv')) {
        $('body').addClass('form_iv');
        $('.lp-pom-form').prev().hide();
        $('.form_wrapper').before(`
        <div class="form_content">
            <h2>Learn more about our non-surgical weight loss solutions with a quick consultation.</h2>
            <ul>
                <li>0% interest financing available.</li>
                <li>Discover which solution is right for you.</li>
                <li>Go over pricing & payment options.</li>
            </ul>
            <h3>Fill out the short form to learn more!</h3>
            <img class="form_arrow_rotate" src="https://trueyouweightloss.com/wp-content/uploads/arrow-rotate.jpg" alt="Arrow">
        </div>
        `);
        $('.form_wrapper > form').before('<h2 class="form_title">Request a Free Consultation</h2>');
        $('.lp-pom-form-field .text').each(function() {
            var $_input = $(this);
            var inputPlaceholder = $_input.attr('placeholder');
            var inputName = $_input.attr('name');
            $_input.before('<label class="main lp-form-label" for="'+inputName+'" id="label_'+inputName+'"><span class="label-style">'+inputPlaceholder+'&nbsp;*</span></label>');
            $_input.attr('placeholder','');
        });
        $('option[value=""]').each(function() {
            $(this).text('Please Select');
            collapse_page(true);
        });
        $('#service_of_interest option[value=""]').after($('#service_of_interest option[value="Undecided"]').eq(0).text('Not sure Yet - Guide me!'));
        $('#service_of_interest option[value="ESG"]').prop('selected', 'selected');
        if ($('#select_a_preferred_location option[value="No Preference"]').length > 0) {
            $('#select_a_preferred_location option[value=""]').after($('#select_a_preferred_location option[value="No Preference"]').eq(0).text('No Preference/Not Sure Yet'));
        } else {
            $('#select_a_preferred_location option[value=""]').after($('#select_a_preferred_location option[value="Undecided"]').eq(1).text('No Preference/Not Sure Yet'));
        }
        $('#container_understanding_of_insurance input[type="checkbox"]').click();
        $('.lp-pom-button[type="submit"] .label').text('Request a Free No-Obligation Consultation!');
        // Smooth scrolling when clicking an anchor link
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
        // Window resize function
        var waitForFinalEvent = (function () {
            var timers = {};
            return function (callback, ms, uniqueId) {
                if (!uniqueId) {
                    uniqueId = "Don't call this twice without a uniqueId";
                }
                if (timers[uniqueId]) {
                    clearTimeout (timers[uniqueId]);
                }
                timers[uniqueId] = setTimeout(callback, ms);
            };
        })();
        var win = $(window);
        var prevWin = win.width();
        win.resize(function () {
            waitForFinalEvent(function () {
                if ((win.width() < 600 && prevWin > 600) || win.width() > 600 && prevWin < 600) {
                    window.location.reload();
                    prevWin = win.width();
                }
            },100);
        });
    }
}
