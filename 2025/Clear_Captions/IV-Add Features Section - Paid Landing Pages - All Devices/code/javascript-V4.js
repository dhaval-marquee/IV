function loadTestCode() {
    if (!document.body.classList.contains("iv-feature-step")) {
        document.body.classList.add("iv-feature-step");

        const headings = document.querySelectorAll("h2");
        let targetBox = null;

        headings.forEach(h2 => {
            if (h2.textContent.toLowerCase().includes("independence")) {
                const box = h2.closest(".fullwidth-box");
                if (box) {
                    box.classList.add("iv-target-box");
                    targetBox = box;
                }
            }
        });

        const section = document.createElement("section");
        section.className = "iv-captioning-section";
        section.id = "iv-Features";
        section.innerHTML = `
        <div class="iv-container">
            <h2 class="fusion-title-heading title-heading-center fusion-responsive-typography-calculated">
                <p>Using your <span class="title-italic"> captioning phone</span></p>
            </h2>
            <p class="iv-sub-heading">ClearCaptions provides phone call captions to help keep your conversations as comfortable and natural as possible. As your caller speaks, their words appear on the phone’s bright and clear screen, allowing you to read your caller’s words just as you would a book.</p>
            <div class="iv-caption-grid">
                ${createItem(
                    "https://res.cloudinary.com/ignite-visibility/image/upload/v1758793454/ClearCaptions/PaidLandingPages/callLogo.svg",
                    "Call Log",
                    "Call log of all your",
                    "calls and their captions"
                )}
                ${createItem(
                    "https://res.cloudinary.com/ignite-visibility/image/upload/v1758793353/ClearCaptions/PaidLandingPages/help.svg",
                    "Help Videos",
                    "Learn how to",
                    "use your phone"
                )}
                ${createItem(
                    "https://res.cloudinary.com/ignite-visibility/image/upload/v1758793354/ClearCaptions/PaidLandingPages/font.svg",
                "Font",
                "One-touch caption size",
                "and color adjustments"
                )}
                ${createItem(
                    "https://res.cloudinary.com/ignite-visibility/image/upload/v1758793354/ClearCaptions/PaidLandingPages/voicemail.svg",
                    "Voicemail",
                    "Voicemail with",
                    "captioned messages"
                )}
                ${createItem(
                    "https://res.cloudinary.com/ignite-visibility/image/upload/v1758793354/ClearCaptions/PaidLandingPages/favorites.svg",
                    "Favorites",
                    "Fast-dial contacts",
                    "and favorites"
                )}
                ${createItem(
                    "https://res.cloudinary.com/ignite-visibility/image/upload/v1758793355/ClearCaptions/PaidLandingPages/speakerphone.svg",
                    "Speakerphone",
                    "Built-in speakerphone",
                    "for hands-free calling"
                )}
            </div>
        </div>`;

        targetBox.parentNode.insertBefore(section, targetBox);

        // menu redirect
        document.querySelectorAll('#menu-lp_menu .menu-text').forEach((menuSpan) => {
            if (menuSpan.innerText == "Features") {
                menuSpan.closest('a').href = "#iv-Features"
            }
        });
    }

    function createItem(icon, title, line1, line2) {
        return `
      <div class="iv-caption-item">
        <div class="iv-caption-icon">
          <img src="${icon}" alt="${title}">
        </div>
        <p>${line1} <span>${line2}</span></p>
      </div>
    `;
    }
}

loadTestCode();