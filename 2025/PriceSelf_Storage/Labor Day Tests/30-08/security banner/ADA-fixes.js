//====== ADA issue fixed ======//

// A - SVG element missing accessible name
document.querySelectorAll("svg").forEach(svg => {
    if (svg.closest("a, button")) return;

    const useEl = svg.querySelector("use");
    if (!useEl) return;

    const ref = useEl.getAttribute("href") || "";

    if (ref.includes("star")) {
        svg.setAttribute("aria-hidden", "true");
        svg.setAttribute("focusable", "false");
    } else if (ref.includes("address")) {
        svg.setAttribute("role", "img");
        svg.setAttribute("aria-label", "Address");
    }
});

// A - Focusable elements cannot be missing an implicit or explicit role
const focusableSpans = document.querySelectorAll("span[tabindex]");

focusableSpans.forEach(span => {
    const text = span.innerText.trim().toLowerCase();

    if (!span.onclick && !span.dataset.roleInteractive) {
        span.removeAttribute("tabindex");
        return;
    }

    if (text.includes("view for details") || span.classList.contains("pss-link-important")) {
        span.setAttribute("role", "link");
        span.addEventListener("keydown", e => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                span.click();
            }
        });
    } else {
        span.setAttribute("role", "button");
        span.addEventListener("keydown", e => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                span.click();
            }
        });
    }
});

// A - Element has click listener but no keyboard listener
const clickableDivs = document.querySelectorAll(".pss-buton.pss-button--filter-with-icon");

clickableDivs.forEach(div => {
    div.setAttribute("tabindex", "0");

    div.setAttribute("role", "button");

    div.addEventListener("keydown", function(e) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            div.click();
        }
    });
});

// A - Element with role button contains an element that is not allowed
const anchorsWithButtonRole = document.querySelectorAll('a[role="button"]');

anchorsWithButtonRole.forEach(anchor => {
    if (anchor.hasAttribute("href")) {
        anchor.removeAttribute("role");
    } else {
        anchor.setAttribute("tabindex", "0");
        anchor.addEventListener("keydown", function(e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                anchor.click();
            }
        });
    }
});

// A - Heading structure skips heading level
const cookieHeading = document.getElementById("CybotCookiebotDialogBodyContentTitle");
if (cookieHeading && cookieHeading.getAttribute("role") === "heading") {
    cookieHeading.setAttribute("aria-level", "1");
}

const allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6, [role="heading"]');
let lastLevel = 0;

allHeadings.forEach(h => {
    let level = 0;

    if (h.tagName.match(/^H[1-6]$/)) {
        level = parseInt(h.tagName.substring(1), 10);
    } else if (h.getAttribute("role") === "heading") {
        level = parseInt(h.getAttribute("aria-level") || "2", 10);
    }

    if (lastLevel > 0 && level > lastLevel + 1) {
        level = lastLevel + 1;
        if (h.tagName.match(/^H[1-6]$/)) {
            const newHeading = document.createElement("h" + level);
            newHeading.innerHTML = h.innerHTML;
            [...h.attributes].forEach(attr => newHeading.setAttribute(attr.name, attr.value));
            h.replaceWith(newHeading);
        } else {
            h.setAttribute("aria-level", level);
        }
    }

    lastLevel = level;
});

// A - Element with mouseout listener but no blur listener
const elems = document.querySelectorAll(".pss-buton.pss-button--filter-with-icon");

elems.forEach(el => {
    el.setAttribute("tabindex", "0");
    el.setAttribute("role", "button");

    if (el.hasAttribute("onmouseout")) {
        const handlerCode = el.getAttribute("onmouseout");
        el.setAttribute("onblur", handlerCode);
    }

    el.addEventListener("mouseout", function(e) {
        el.addEventListener("blur", function(be) {
            const clone = new Event("mouseout", {
                bubbles: true,
                cancelable: true
            });
            el.dispatchEvent(clone);
        }, {
            once: true
        });
    });
});

// A - Span element has aria-label that will not be used
const spans = document.querySelectorAll("span[aria-label]");

spans.forEach(span => {
    const visible = span.textContent.trim();
    const aria = span.getAttribute("aria-label").trim();

    if (visible === aria) {
        span.removeAttribute("aria-label");
    } else {
        if (!span.hasAttribute("role")) {
            span.setAttribute("role", "text");
        }
    }
});

// A - Focusable elements cannot be missing an implicit or explicit role
const focusableDivs = document.querySelectorAll("div[tabindex]:not([tabindex='-1'])");

focusableDivs.forEach(div => {
    if (!div.hasAttribute("role")) {
        if (div.classList.contains("pss-card-nl__facility-address")) {
            div.setAttribute("role", "text");
        } else if (div.classList.contains("pss-card-nl__facility-distance")) {
            div.setAttribute("role", "text");
        } else if (div.classList.contains("pss-card-nl__facility-stars")) {
            div.setAttribute("role", "img");
        } else if (div.classList.contains("pss-card-nl__facility-rating")) {
            div.setAttribute("role", "status");
        } else {
            div.setAttribute("role", "generic");
        }
    }
});

// A - Element with mouseover listener but no focus listener
const filterDiv = document.getElementById("facilityFilterDesktop");

if (filterDiv) {
    filterDiv.setAttribute("tabindex", "0");
    filterDiv.setAttribute("role", "button");

    filterDiv.addEventListener("focus", function(e) {
        if (typeof showPopDeskt === "function") {
            showPopDeskt(e);
        }
    });

    filterDiv.addEventListener("keydown", function(e) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            if (typeof showPopDeskt === "function") {
                showPopDeskt(e);
            }
        }
    });
}

// A - Iframe element missing accessible name.
const iframes = document.querySelectorAll("iframe:not([title]):not([aria-label]):not([aria-labelledby])");

iframes.forEach((iframe, index) => {
    if (iframe.getAttribute("tabindex") === "-1" || iframe.getAttribute("aria-hidden") === "true") {
        if (!iframe.hasAttribute("title")) {
            iframe.setAttribute("title", "empty");
        }
    } else {
        iframe.setAttribute("title", `Embedded content ${index + 1}`);
    }
});

// A - Link has non-unique accessible name.
const policyLinks = document.querySelectorAll('a[href*="privacy-policy"], a[href*="cookie-statement"], a[href*="terms-conditions"]');
policyLinks.forEach(link => {
    if (link.href.includes("privacy-policy")) {
        link.setAttribute("aria-label", "Privacy Policy - Price Self Storage");
    } else if (link.href.includes("cookie-statement")) {
        link.setAttribute("aria-label", "Cookie Statement - Price Self Storage");
    } else if (link.href.includes("terms-conditions")) {
        link.setAttribute("aria-label", "Terms and Conditions - Price Self Storage");
    }
});

const unitLinks = document.querySelectorAll('a.pss-button.pss-button--xsmall[href*="self-storage"]');
unitLinks.forEach(link => {
    const path = link.getAttribute("href");
    const location = path.replace(/\/|-/g, " ").trim();
    const locationName = location.replace("self storage", "").trim();

    link.setAttribute("aria-label", "View Units at " + locationName);
});

// A - Link has suspicious accessible name.
document.querySelectorAll('a[href="/self-storage/faq/"]').forEach(link => {
    link.setAttribute("aria-label", "Frequently Asked Questions about Self Storage");
});