//==== ADA issue fixed ====//

// document.addEventListener("DOMContentLoaded", function () {
    // 8- Focusable elements cannot be missing an implicit or explicit role
    document.querySelectorAll('#footer span[tabindex="0"]').forEach(function(el) {
        if (!el.querySelector('a, button')) {
            el.removeAttribute("tabindex");
        }
    });

    // 4- Large text without sufficient contrast
    const promoTexts = document.querySelectorAll(
        '.labor-day-sale-title, .pss-row2 div, .numberText, .rentText, .uptoText'
    );
    promoTexts.forEach(function(el) {
        el.style.textShadow = "1px 1px 2px rgba(0,0,0,0.6)";
    });

    // 1 - Aria-level used where it is not allowed
    document.querySelectorAll('.pss-home__solutions-title[aria-level]').forEach(function(el) {
        el.removeAttribute("aria-level");
    });

    // 7 - Non-large text without sufficient contrast.
    document.querySelectorAll('.pss-ideal-zise__ruler-box a span').forEach(function(el) {
        el.style.color = "#000";
        el.style.fontWeight = "600";
    });

    // 1 - Iframe element missing accessible name.
    document.querySelectorAll("iframe:not([title]):not([aria-label]):not([aria-labelledby])").forEach(function(iframe, index) {
        iframe.setAttribute("title", "Embedded content " + (index + 1));
    });

    // 6 - Link has non-unique accessible name.
    const privacyLinks = document.querySelectorAll('a[href*="privacy-policy"]');
    privacyLinks.forEach((link, i) => {
        if (privacyLinks.length > 1) {
        if (i === 0) {
            link.setAttribute("aria-label", "Privacy Policy (Main Site)");
        } else {
            link.setAttribute("aria-label", "Privacy Policy (Local Page)");
        }
        }
    });

    const cookieLinks = document.querySelectorAll('a[href*="cookie-statement"]');
    cookieLinks.forEach((link, i) => {
        if (cookieLinks.length > 1) {
        if (i === 0) {
            link.setAttribute("aria-label", "Cookie Statement (Main Site)");
        } else {
            link.setAttribute("aria-label", "Cookie Statement (Local Page)");
        }
        }
    });

    const termsLinks = document.querySelectorAll('a[href*="terms-conditions"]');
    termsLinks.forEach((link, i) => {
        if (termsLinks.length > 1) {
        if (i === 0) {
            link.setAttribute("aria-label", "Terms & Conditions (Main Site)");
        } else {
            link.setAttribute("aria-label", "Terms & Conditions (Local Page)");
        }
        }
    });

    // 1 - Element with role region is missing an accessible name
    const unnamedRegions = document.querySelectorAll('[role="region"]:not([aria-label]):not([aria-labelledby])');
    unnamedRegions.forEach((region, index) => {
        let label = "Content Section " + (index + 1);

        if (region.classList.contains("pss-home__reviews-wrapper-right-content")) {
        label = "Customer Reviews Slider";
        }

        region.setAttribute("aria-label", label);
    });

    // 5 - Link has suspicious accessible name.
    document.querySelectorAll("a").forEach((link, index) => {
        if (link.hasAttribute("aria-label")) return;
            let label = link.getAttribute("title");
            if (!label && link.textContent.trim().length > 0 && link.textContent.trim().length < 50) {
            label = link.textContent.trim();
        }
        if (!label) {
            label = "Link " + (index + 1);
        }
        link.setAttribute("aria-label", label);
    });
// });