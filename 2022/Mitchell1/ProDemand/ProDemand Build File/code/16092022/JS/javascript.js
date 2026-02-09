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
$('.free-demo-button').on('click', function(){
    $('.modal').addClass('open');
});
$('.modal-overlay').on('click', function(){
    $('.modal').removeClass('open');
});
// Modal code over


// Load form
$.getScript('//js.hsforms.net/forms/v2.js', function(){
    hbspt.forms.create({
        region: "na1",
        portalId: "7934115",
        formId: "b504f7ad-0108-4f69-8a4e-9cb4976680f8",
        target: "#loadhsform"
    });
});
// Load form over