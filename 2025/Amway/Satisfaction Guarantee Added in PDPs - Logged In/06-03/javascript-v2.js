function loadTestCode() {
  if (!document.querySelector("body").classList.contains("iv-popup")) {
    document.querySelector("body").classList.add("iv-popup");

    const learnMoreContent = `<div class="iv-learn-content">
            <p>Buy with the confidence of our <strong>Satisfaction Guarantee</strong></p>
            <a class="guarantee-cta" href="#">Learn More</a>
        </div>`;

    if (!document.querySelector(".iv-learn-content")) {
      document
        .querySelector(
          ".iv-popup .js-product-wrapper .amw-panel .AddToCart-ShareAction"
        )
        .insertAdjacentHTML("afterend", learnMoreContent);
    }

    // For popup
    const popUp = `<div class="guarantee-popup">
        <div class="guarantee-popup-inner">
            <div class="guarantee-popup-container">
                <div class="guarantee-popup-content">
                    <div class="guarantee-popup-title">
                        <a class="guarantee-popup-closed" href="javascript:void(0)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 30 30" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M26 6.083L6.16 26L4 23.917L23.84 4L26 6.083Z" fill="black"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6.083L23.84 26L26 23.917L6.16 4L4 6.083Z" fill="black"/>
                            </svg>
                        </a>
                        <h2>Satisfaction Guarantee Customers and Guests</h2>
                        <strong>If for any reason you are not completely satisfied with our products, you may return them within 180 days of purchase for an exchange or refund of the product price and applicable tax.</strong>
                        <ul>
                            <li>Specific limited guarantees apply to designated products. Atmosphere™, iCook™ and eSpring™ products must be returned within 120 days.</li>
                            <li>Some items such as consumable food and beverage items are non-returnable unless defective upon receipt.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML("afterbegin", popUp);

    const guaranteePopup = document.querySelector(".guarantee-popup");

    if (guaranteePopup) {
      document
        .querySelector(".guarantee-cta")
        .addEventListener("click", function () {
          guaranteePopup.style.display = "block";
        });
      document
        .querySelector(".guarantee-popup-closed")
        .addEventListener("click", function () {
          guaranteePopup.style.display = "none";
        });
    }
  }
}

var checkCondition = setInterval(function () {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(checkCondition);
    loadTestCode();
  }
}, 100);
