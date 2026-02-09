$(document).ready(function() {
    $(".Level0").each(function(index) {
        var $level = $(this);

        /* Cache it */
        var $magicLine = $level.find("#magic-line");
        var originalLeftPos = $magicLine.position().left;
        $magicLine.data("origLeft", originalLeftPos);

        $level.find("li a").hover(function() {
            var $el = $(this);
            var leftPos = $el.position().left + ($el.width() / 2);

            $magicLine.stop().animate({
                left: leftPos,
            });
        }, function() {
            $magicLine.stop(); // Stop any ongoing animation
        });

        $level.find(".SelectedTab a").mouseenter();
    });
});