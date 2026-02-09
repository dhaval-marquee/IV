function() {
	vwo_$(document).ready(function () {
		// Polling interval
		console.log('condition checking');
		var interval = setInterval(function () {
			var el = document.querySelectorAll('.amw-product-price-panel .amw-list-key-value:nth-child(1) .amw-list-key-value__key')[0];

			if (el && el.textContent.trim() === "IBO Cost") {
				clearInterval(interval); // Stop polling
				console.log('condition met. Test should be executed now');
				executeTrigger(); // Trigger the test
			}
		}, 200); // Check every 200ms

		// Timeout after 5 seconds
		setTimeout(function () {
			clearInterval(interval); // Stop polling even if not found
			console.log('condition not met within timeout');
		}, 5000);
	});
}
