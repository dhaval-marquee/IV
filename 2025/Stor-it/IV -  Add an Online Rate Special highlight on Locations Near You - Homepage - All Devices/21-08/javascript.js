const urlDirections = {
  Boise: "https://www.stor-it.com/location/USA/ID/Boise/stor-it-maple-grove/",
  Meridian: "https://www.stor-it.com/location/USA/ID/Meridian/stor-it-ten-mile-2/",
  Nampa: "https://www.stor-it.com/location/USA/ID/Nampa/stor-it-kings-road/",
  Caldwell: "https://www.stor-it.com/location/USA/ID/Caldwell/stor-it-caldwell/"
};

// Normalize helper
const normalize = url =>
  new URL(url, location.origin).href.replace(/[?#].*$/, "").replace(/\/$/, "").toLowerCase();

const directions = Object.entries(urlDirections).map(([city, url]) => ({
  city: city.toLowerCase(),
  url: normalize(url)
}));

function tagMatches() {
  document
    .querySelectorAll(
      "#pitchTheme4 .closestLocationsWrapper .pitchInfo a.facilityBlockButton"
    )
    .forEach(a => {
      if (a.dataset.ivChecked) return;
      const href = normalize(a.href);
      const match = directions.find(d => d.url === href);
      if (match) {
        a.dataset.ivChecked = "1";
        const block = a.closest(".facilityBlock");
        if (block) {
          block.classList.add("iv-highlight", `city-${match.city}`);

          // Timer only if not already added
          if (!block.querySelector(".flash-sale-banner")) {
            block.insertAdjacentHTML(
              "afterbegin",
              `<div class="flash-sale-banner">
                  FLASH SALE! &nbsp;<span class="timer countdown"></span>
                </div>`
            );
            startTimer();
          }
        }
      }
    });
}

function startTimer() {
  const KEY = "flash_sale_timer";
  const DURATION = 16 * 60 * 60 * 1000; // 16 hours
  let start = localStorage.getItem(KEY);

  if (!start) {
    start = Date.now();
    localStorage.setItem(KEY, start);
  } else {
    start = parseInt(start, 10);
  }

  function tick() {
    const now = Date.now();
    const elapsed = now - start;
    const remain = DURATION - (elapsed % DURATION);

    // Normal calculation
    // let days = Math.floor(remain / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remain % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((remain % (1000 * 60)) / 1000);

    // Force minimum 1 day
    // if (days === 0) days = 1;

    // const d = String(days).padStart(2, "0");
    const h = String(hours).padStart(2, "0");
    const m = String(mins).padStart(2, "0");
    const s = String(secs).padStart(2, "0");

    document.querySelectorAll(".countdown").forEach(el => {
      el.textContent = `${h}:${m}:${s}`;
    });
  }

  setInterval(tick, 1000);
  tick();
}


function init() {
  if (document.body.classList.contains("ivHomepage")) return;
  document.body.classList.add("ivHomepage");

  tagMatches();

  const container = document.querySelector("#pitchTheme4");
  if (container) {
    new MutationObserver(tagMatches).observe(container, {
      childList: true,
      subtree: true
    });
  }
}

document.readyState === "loading"
  ? document.addEventListener("DOMContentLoaded", init)
  : init();
