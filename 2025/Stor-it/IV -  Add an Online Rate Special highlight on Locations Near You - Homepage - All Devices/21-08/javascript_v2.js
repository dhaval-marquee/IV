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
                Online Special Rate!</div>`
            );
          }
        }
      }
    });
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