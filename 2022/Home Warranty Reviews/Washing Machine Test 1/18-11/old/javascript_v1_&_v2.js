function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('machine_btn_test')) {
        bodyEle.classList.add('machine_btn_test');

        // Put your test code here
        $('#q1+p').addClass('bonusVideo').prev().before(`<div class="bonus_btn_wrap"><h2>The average homeowner spends $3000 a year on upkeep and repairs. Protect your investment starting at $30 a month.</h2>
        <a href="https://www.homewarrantyreviews.com/" class="CTA_btn visit_site bonusVideo_btn">Learn More</a></div>`);

        // Remove for Variant 1
        var getTitle = setInterval(function() {
            if($('.section41').length > 0) {
                clearInterval(getTitle)
                $('.section41').after(`<div class="bonus_btn_wrap"><h2>The average homeowner spends $3000 a year on upkeep and repairs. Protect your investment starting at $30 a month.</h2>
                <a href="https://www.homewarrantyreviews.com/" class="CTA_btn visit_site bonusVideo_btn">Learn More</a></div>`);
            }
        }, 100);
        // Remove for Variant 1 over

        $('.bonusVideo').append($('iframe[src="https://www.youtube.com/embed/CoFHR3fjFzA"]').attr('width', '500').attr('height', '281'));

        $(".machine_btn_test .blog-detail > article > div").each(function (index) {
            $(this).addClass("main_section" + index);
        });

        $(".machine_btn_test .main_section1>p").each(function (index) {
            $(this).addClass("section" + index);
        });

    }
}
loadTestCode();