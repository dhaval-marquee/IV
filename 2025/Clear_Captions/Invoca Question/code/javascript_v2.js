function loadTestCode() {
    // Dynamically load CSS for Slick Slider
    if (!jQuery('body').hasClass('iv-howItWork')) {
        jQuery('body').addClass('iv-howItWork');


        jQuery(function ($) {
        // ---- Defaults (used if hidden numbers are missing/invalid) ----
        const DEFAULT_DESKTOP = "8669928833"; // 866-992-8833
        const DEFAULT_MOBILE  = "8669929137"; // 866-992-9137

        // ---- Helpers ----
        const digitsOnly = (s) => (s || "").replace(/\D/g, "");
        const normalizeUS10 = (d) => {
            // drop leading country code; keep last 10 if longer
            d = d.replace(/^1/, "");
            if (d.length >= 10) d = d.slice(-10);
            return /^\d{10}$/.test(d) ? d : "";
        };
        const fmtUS = (d) => d.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
        const tel = (d) => `tel:+1${d}`;

        // ---- Read hidden numbers (if present) ----
        const rawD = $('#hidden-phone-numbers .fusion-no-small-visibility .fusion-button-text').first().text();
        const rawM = $('#hidden-phone-numbers .fusion-no-large-visibility .fusion-button-text').first().text();

        const numD = normalizeUS10(digitsOnly(rawD)) || DEFAULT_DESKTOP;
        const numM = normalizeUS10(digitsOnly(rawM)) || DEFAULT_MOBILE;

        const dispD = fmtUS(numD);
        const dispM = fmtUS(numM);

        // ---- Ensure/Insert Support Banner once ----
        const iconUrl = "https://res.cloudinary.com/ignite-visibility/image/upload/ClearCaptions/icon-service.svg";
        let $banner = $('.supportBanner');
        if (!$banner.length) {
            $banner = $(`
            <div class="supportBanner">
                <div class="content">
                <div class="iconWrapper">
                    <img src="${iconUrl}" alt="Service icon">
                    <p>Need help? Contact a support expert:</p>
                </div>
                <div class="phoneNumber"></div>
                </div>
            </div>
            `).insertAfter('#form');
        }

        // Fill banner numbers
        $banner.find('.phoneNumber').html(`
            <span class="onlyDesktop">Click to Call: <a href="${tel(numD)}">${dispD}</a></span>
            <span class="onlyMobile">Click to Call: <a href="${tel(numM)}">${dispM}</a></span>
        `);

        // ---- Header "Call now" (desktop) ----
        $('.header-menu .call-menu .phone-number span')
            .html(`Call now <a href="${tel(numD)}">${dispD}</a>`);

        // ---- Dynamic number placeholders ----
        $('#dynamicNumber .for-desktop').text(dispD);
        $('#dynamicNumber .for-mobile').text(dispM);

        // ---- Update links/labels depending on visibility classes ----
        $('a.fusion-no-small-visibility').each(function () {
            $(this).attr('href', tel(numD));
            const $span = $(this).find('span').first();
            if ($span.length) $span.text(`Call ${dispD}`);
        });

        $('a.fusion-no-large-visibility').each(function () {
            $(this).attr('href', tel(numM));
            const $span = $(this).find('span').first();
            if ($span.length) $span.text(`Call ${dispM}`);
        });

        // Special CTA in form row (mobile)
        $('div#form > div .fusion-builder-row > div a.fusion-no-large-visibility').each(function () {
            $(this).attr('href', tel(numM));
            const $span = $(this).find('span').first();
            if ($span.length) $span.text(`CALL NOW! ${dispM}`);
        });
        });
    }
}
loadTestCode();