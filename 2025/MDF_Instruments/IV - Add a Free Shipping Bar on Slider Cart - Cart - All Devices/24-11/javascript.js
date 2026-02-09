function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-slider-cart')) {
        document.querySelector('body').classList.add('iv-slider-cart');

        const progressBarHTML = `
        <div class="iv-progress">
            <div class="iv-progress-container">
            <div class="iv-progress-bar"></div>
            </div>
        </div>
        <p class="iv-progress-message">
            <span class="iv-progress-dot"></span>
            Spend $<span id="remaining">0.00</span> more for free shipping
        </p>`;

        const targetElement = document.body;

        let lastAmount = null;

        const observer = new MutationObserver(() => {
            const freeShippingContainer = document.querySelector(".free-shipping-bar");

            if (freeShippingContainer && !document.querySelector(".iv-progress-container")) {
                freeShippingContainer.insertAdjacentHTML("afterbegin", progressBarHTML);
            }

            const priceEl = document.querySelector(".button-group .cart-drawer__button-price");
            if (!priceEl) return;

            const checkoutAmount = parseFloat(priceEl.innerText.replace(/[^0-9.]/g, ""));
            if (isNaN(checkoutAmount)) return;

            if (checkoutAmount === lastAmount) return;
            lastAmount = checkoutAmount;

            const progressBar = document.querySelector(".iv-progress-bar");
            const remainingText = document.getElementById("remaining");
            const messageEl = document.querySelector(".iv-progress-message");
            if (!progressBar || !remainingText || !messageEl) return;

            //| ---------------------------------------------------------------- |
            const shippingGoal = 125; // Change this to 125 or 150 when needed   |
            //|----------------------------------------------------------------- |

            const remainingAmount = Math.max(shippingGoal - checkoutAmount, 0).toFixed(2);
            const progress = Math.min((checkoutAmount / shippingGoal) * 100, 100).toFixed(2);

            progressBar.style.width = `${progress}%`;

            if (checkoutAmount >= shippingGoal) {
                messageEl.innerHTML = `<span class="iv-progress-dot iv-free-unlock"></span> You are eligible for free shipping!`;
            } else {
                messageEl.innerHTML = `
          <span class="iv-progress-dot"></span>
          Spend $<span id="remaining">${remainingAmount}</span> more for free shipping
        `;
            }
        });

        observer.observe(targetElement, {
            childList: true,
            attributes: true,
            subtree: true
        });
    }
}

loadTestCode();