function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('color_iv')) {
        bodyEle.classList.add('color_iv');
        
        // Put your test code here
        var getColor = $('.color_iv .popular-colors').html();
        $('.color_iv .chosen-color').after(`<div class="popular-color-iv">`+getColor+`</div>`);

        $(document).on('click', '.popular-color-iv .color-tile', function(){
            console.log($(this).index());
            $('.popular-color-iv .color-tile').removeClass('active');
            $(this).addClass('active');
            $('.p-colors .popular-colors .color-tile:nth-of-type('+$(this).index()+')').trigger('click')
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