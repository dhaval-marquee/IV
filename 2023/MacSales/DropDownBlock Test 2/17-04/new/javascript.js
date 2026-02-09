$(document).ready(function () {
    if ($('#pdp-options-container > .pdp-options__sub-title').length == 1 && $('#pdp-options-container > .pdp-options__sub-title').text() == '') {
        $('#pdp-options-container > .pdp-options__sub-title').text('Choose Your Capacity');
    }

	$('#pdp-options-container > .pdp-options__sub-title').on('click', function(event){
		event.preventDefault();
		var accordion = $(this);
		var accordionContent = accordion.next('#pdp-options-container > .pdp-options__button-container');
		accordion.toggleClass("toggle-open-title")
		accordionContent.slideToggle(150).toggleClass("toggle-open");
    });
});