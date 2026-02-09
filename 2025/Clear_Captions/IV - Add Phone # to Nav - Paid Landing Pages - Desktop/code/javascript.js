function headerNumberDesktop() {
    if (!jQuery("body").hasClass("header-menu")) {
        jQuery("body").addClass("header-menu");

        // Select the target UL element
        var targetElement = document.querySelector(".fusion-builder-row ul");

        // Ensure the UL exists before inserting content
        if (targetElement) {
            var phoneNumber = $(".fusion-title").eq(2).find("h4").text().trim();
            var contactNumberMatch = phoneNumber.match(/\d{3}-\d{3}-\d{4}/);

            if (contactNumberMatch) {
                var contactNumber = contactNumberMatch[0];

                var newContent = `
                <li class="menu-item menu-item-type-custom menu-item-object-custom awb-menu__li awb-menu__main-li awb-menu__main-li_regular call-menu">
                    <div class="phone-number">
                        <span> Call now <a href="tel:+1${contactNumber.replace(/-/g, '')}">${contactNumber}</a></span>
                    </div>
                </li>`;

                // Insert new content inside UL
                targetElement.insertAdjacentHTML("beforeend", newContent);
            }
        }
    }
}

// Load code just for Desktop 
if (window.matchMedia("(min-width: 1025px)").matches) {

    var checkCondition = setInterval(function () {
        if (typeof jQuery !== "undefined" && jQuery("body").length > 0) {
            clearInterval(checkCondition);
            headerNumberDesktop();
        }
    }, 100);

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 1024.98px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 1025px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for Desktop over
