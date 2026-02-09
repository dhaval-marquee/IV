function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('color_iv')) {
        bodyEle.classList.add('color_iv');
        
        // Put your test code here
        var getColor = $('.color_iv .popular-colors').html();
            TotalColor = $('.all-colors-container .color-tile').length;

        $('.color_iv .mobile-color-button').before(`<div class="popular-color-iv">`+getColor+`</div>`);
        $('.color_iv .mobile-color-button').html(`See All <span id="allColors">`+TotalColor+` Available Colors</span>`);

        $(document).on('click', '.popular-color-iv .color-tile', function(){
            console.log($(this).index());
            $('.popular-color-iv .color-tile').removeClass('active');
            $(this).addClass('active');
            $('.p-colors .popular-colors .color-tile:nth-of-type('+$(this).index()+')').trigger('click')
        });

        $(document).on('click', '.parent .popular-colors .color-tile', function(){
            $('.popular-color-iv .color-tile').removeClass('active');
            $('.popular-color-iv .color-tile:nth-of-type('+$(this).index()+')').addClass('active')
        });

        $(document).on('click', '.all-colors-container', function(){
            $('.popular-color-iv .color-tile').removeClass('active');
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