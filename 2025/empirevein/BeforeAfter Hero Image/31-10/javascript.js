function loadTestCode() {
  if (!document.body.classList.contains('iv-hero-cerosol')) {
    document.body.classList.add('iv-hero-cerosol');

    // Replace text
    document.querySelectorAll('.evvs-homepage-wrapper h2').forEach(h2 => {
    h2.innerHTML = h2.innerHTML = '<span class="c-accent">Expert Treatment</span> for <br> Varicose Veins & <br>Knee Pain.';
  });


    const images = [
      "https://empirevein.com/wp-content/uploads/SpiderVeins_Before-After_05.jpg",
      "https://www.empirevein.com/wp-content/uploads/SpiderVeins_Before-After_06.jpg",
      "https://www.empirevein.com/wp-content/uploads/SpiderVeins_Before-After_04.jpg",
      "https://www.empirevein.com/wp-content/uploads/SpiderVeins_Before-After_03.jpg",
      "https://www.empirevein.com/wp-content/uploads/SpiderVeins_Before-After_02.jpg",
      "https://www.empirevein.com/wp-content/uploads/SpiderVeins_Before-After_01.jpg"
    ];

    const createSwiperHTML = (className) => `
      <div class="iv-swiper ${className} swiper">
        <div class="iv-swiper-wrapper swiper-wrapper">
          ${images.map(img => `
            <div class="iv-swiper-slide swiper-slide">
              <img src="${img}" alt="Before and After" loading="lazy" />
            </div>
          `).join('')}
        </div>
        <div class="iv-swiper-button-prev swiper-button-prev"></div>
        <div class="iv-swiper-button-next swiper-button-next"></div>
      </div>`;

    // Swiper JS
    const initSwiper = (selector) => {
      const poll = setInterval(() => {
        const SwiperCtor = window.Swiper;
        if (SwiperCtor) {
          clearInterval(poll);

          const el = document.querySelector(selector);
          if (!el) return;

          try {
            new SwiperCtor(selector, {
              loop: true,
              navigation: {
                nextEl: `${selector} .iv-swiper-button-next`,
                prevEl: `${selector} .iv-swiper-button-prev`,
              },
              slidesPerView: 1,
              spaceBetween: 40,
              effect: "slide",
              speed: 800,
            });
          } catch (err) {
            console.error('Swiper init failed for', selector, err);
          }
        }
      }, 100);
    };

    // Desktop
    const targetSection = document.querySelector(".evvs-homepage-wrapper div:has(>video)");
    if (targetSection) {
      const videoEl = targetSection.querySelector("video");
      if (videoEl) videoEl.remove();

      targetSection.insertAdjacentHTML("beforeend", createSwiperHTML("iv-swiper-desktop"));
      initSwiper(".iv-swiper-desktop");
    }

    // column adjustments
    const leftHero = document.querySelector(".iv-hero-cerosol .evvs-homepage-wrapper > div > .row > .col-md-6.wow");
    if (leftHero?.classList.contains("col-lg-7")) leftHero.classList.remove("col-lg-7");

    const rightHero = document.querySelector(".iv-hero-cerosol .evvs-homepage-wrapper > div > .row > .col-md-6:last-child");
    if (rightHero?.classList.contains("col-lg-5")) rightHero.classList.remove("col-lg-5");

    // Mobile
    const bookOnlineLink = document.querySelector('.evvs-homepage-wrapper [href="/en/book-online/"]');
    if (bookOnlineLink) {
      bookOnlineLink.insertAdjacentHTML('beforebegin', createSwiperHTML("iv-swiper-mobile"));
      initSwiper(".iv-swiper-mobile");
    }
  }
}

// Wait for DOM and then call loadTestCode
const readyPoll = setInterval(() => {
  if (document.body) {
    clearInterval(readyPoll);
    loadTestCode();
  }
}, 100);
