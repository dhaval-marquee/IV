	function loadTestCode() {
		if (!document.querySelector('body').classList.contains('liveChat_iv')) {
			document.querySelector('body').classList.add('liveChat_iv');
			
			// Put your test code here
			
			document.querySelector('.product-items-unit').insertAdjacentHTML('afterend',`<a href="javascript:void(0)" onclick="onclickAttributeValue" class="liveChat">
				<span class="content">
					<h2 class="marketing__content_heading">Have a question?<br> Chat with a Mac Expert!</h2>
					<span>Start Live Chat</span>
				</span>
			</a>`);



			// document.addEventListener("click", function (e) {
			// 	var targetLink = e.target.closest('a');
				
			// 	if ((e.target.classList.contains("liveChat")) || (targetLink && targetLink.classList.contains("liveChat"))) {
			// 		e.preventDefault();
			// 		var livechatHeaderOn = document.querySelector('#livechat_header_on');				
			// 		if (livechatHeaderOn) {
			// 			livechatHeaderOn.click();
			// 		}
			// 	}
			// });

			// document.addEventListener("click", function (e) {
			// 	var targetLink = e.target.closest('a');
			
			// 	if (e.target.classList.contains("liveChat") || (targetLink && targetLink.classList.contains("liveChat"))) {
			// 		e.preventDefault();
			// 		var livechatHeaderOn = document.querySelector('#livechat_header_on');
			// 		if (livechatHeaderOn) {
			// 			livechatHeaderOn.click();
			// 		}
			// 	}
			// });

			
			

		}
	}
loadTestCode();	



