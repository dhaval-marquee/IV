function set_cookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";secure;" + expires + ";domain=.trueyouweightloss.com;path=/";
}
function delete_cookie(name) {
    document.cookie = name +'=; domain=.trueyouweightloss.com; path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
hbspt.forms.create({
	region: "na1",
	portalId: "20758113",
	formId: "6f3cd9fb-3171-4963-9eda-4b73c77b4a82",
	onBeforeFormSubmit: function($form) {
		if(jQuery('select[name="tywl_preferred_procedure_location"]').val() == 'Cary, NC') {
			set_cookie('locationCary', 'true', 30);
		} else {
			delete_cookie('locationCary');
		}
	}
});