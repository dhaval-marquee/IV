function loadTestCode() {
    if (jQuery('body').hasClass('iv-calendar')) return;
    jQuery('body').addClass('iv-calendar');

    function addCalendarContent() {
        var $dates = jQuery('.pss-form-group-float[id^="divDate"]:has(.pss-move-in-date-input)');
        if (!$dates.length) return;

        $dates.each(function () {
            var $element = jQuery(this);
            var $dateInput = $element.find('.pss-move-in-date-input');
            var isVisible = $element.is(':visible');

            // Enable interaction but readonly if visible
            $dateInput.prop('disabled', false).prop('readonly', isVisible);
        });
    }

    addCalendarContent();

    // Calendar trigger
    jQuery(document).on('click', '.pss-move-in-date-input', function () {
        jQuery(this).closest('div').find('.pss-datepicker__icon').trigger('mousedown').trigger('click');
        jQuery(this).closest('div').find('#calendarLinkArea').trigger('mousedown').trigger('click');
    });

    // Observe changes to body and re-run addCalendarContent
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.addedNodes.length > 0) addCalendarContent();
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

// Run after DOM is ready (safe for VWO)
(function waitForElements() {
    if (jQuery('.pss-form-group-float[id^="divDate"]:has(.pss-move-in-date-input)').length) {
        loadTestCode();
    } else {
        setTimeout(waitForElements, 100);
    }
})();