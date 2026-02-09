$(document).ready(function () {
    // initialize Slider
    $('.testimonial-slider').slick({
        dots: false,
        arrow: true,
        autoplay: true,
        autoplaySpeed: 8000,
        infinite: true,
        speed: 500,
        cssEase: 'linear'
    });
    // Slider JS over


    // Open modal code
    
    // Modal code over


    // Load form
    $.getScript('//js.hsforms.net/forms/v2.js', function () {
        hbspt.forms.create({
            region: "na1",
            portalId: "7934115",
            formId: "b504f7ad-0108-4f69-8a4e-9cb4976680f8",
            target: "#loadhsform"
        });
    });
    // Load form over


   
    $('.free-demo-button').on('click', function () {
        $('.modal').addClass('open');
    });

    $('.modal-overlay').on('click', function () {
        $('.modal').removeClass('open');
    });

    $('#g1-secondary-nav-switch').click(function () {
        $('#g1-secondary-nav-menu').toggleClass('active-dropdown');
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll <= 100) {
            $("#g1-back-to-top").hide();
        } else {
            $("#g1-back-to-top").show();
        };
    });

    $('#g1-back-to-top').click(function () {
        $('body').animate({
            scrollTop: 0
        }, 1000);
    });

    $('#g1-preheader-bar #g1-preheader__switch')[1].remove();
    $("#g1-preheader-bar .free-demo-button").prependTo("#g1-preheader-bar");


    $('.g1-nav-item__switch').click(function (e) {
        e.preventDefault();
        if ($(this).closest('li').hasClass('g1-nav-item--collapsed')) {
            $(this).closest('li').addClass('g1-nav-item--expanded').removeClass('g1-nav-item--collapsed');
        } else if (!$(this).closest('li').hasClass('g1-nav-item--collapsed')) {
            $(this).closest('li').addClass('g1-nav-item--collapsed').removeClass('g1-nav-item--expanded');
        }
    });
});