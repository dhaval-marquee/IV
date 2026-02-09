function loadTestCode() {
  if (!document.querySelector('body').classList.contains('iv-booking-page')) {
    document.querySelector('body').classList.add('iv-booking-page');

    document.querySelector("body.page-template-page-book-online .subpage-img h1")
      ?.insertAdjacentHTML("afterend", `<a href="javascript:;" class="btn heroBtn iv-heroBtn">Book Now</a>`);

    // Add click event listener
    document.addEventListener("click", function (e) {
      if (e.target.classList.contains("iv-heroBtn")) {
        e.preventDefault();

        const formContainer = document.querySelector(".entry-content .kt-inside-inner-col iframe");
        if (formContainer) {
          const header = document.querySelector("header");
          const offset = formContainer.getBoundingClientRect().top + window.pageYOffset - (header?.getBoundingClientRect().height || 0) - 20;

          window.scrollTo({
            top: offset,
            behavior: "smooth",
          });
        }
      }
    });
  }
}

var checkCondition = setInterval(function () {
  if (document.querySelectorAll('body').length > 0) {
    clearInterval(checkCondition);
    loadTestCode();
  }
}, 100);