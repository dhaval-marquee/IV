function runCodeInterval() {
    var element = jQuery("#subtopics .options .option.add");
    if (element.length > 0) {
        clearInterval(textchangeInterval);
        element.html(element.html().replace('My Speakers', 'Save To List'));
    }
}

var textchangeInterval = setInterval(runCodeInterval, 500);

// Add scroll and click event listeners
jQuery(window).on('scroll', runCodeInterval);
jQuery("#subtopics").on('click', runCodeInterval);
