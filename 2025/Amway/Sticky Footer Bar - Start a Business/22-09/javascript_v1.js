function loadTestCode() {
    if (!document.querySelector('body').classList.contains('stickyBottom_iv')) {
        document.querySelector('body').classList.add('stickyBottom_iv');

        document.querySelector('body').insertAdjacentHTML('beforeend',`<div class="stickyBottomBar">
            <div class="col-lg-3 col-12" data-sticky="btn">
                <a href="https://www.amway.com/en_US/register" class="btn btn-exp-outline-white">Click Here to Start Making Money with Amway</a>
            </div>
        </div>`);

        $(window).on("scroll", function () {
            var hero = $("#skip-to-content h2");

            if (hero.length) {
                var heroBottom = hero.offset().top + hero.outerHeight();

                if ($(window).scrollTop() > heroBottom) {
                    $("body").addClass("scrolled"); // add class to body
                } else {
                    $("body").removeClass("scrolled"); // remove class when above hero
                }
            }
        });
    // Trigger on page load in case the page is already scrolled past hero
    $(window).trigger("scroll");

    }
}

loadTestCode();

