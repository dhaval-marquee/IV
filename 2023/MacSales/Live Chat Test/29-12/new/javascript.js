function loadTestCode() {
    if (!document.querySelector('body').classList.contains('liveChat_iv')) {
        document.querySelector('body').classList.add('liveChat_iv');
        
        // Put your test code here
		document.querySelector('.product-items-unit').insertAdjacentHTML('afterend',`<div class="liveChat" id="liveChat">
			<div class="contentWrapper">
					<div class="content">
						<h2 class="marketing__content_heading">Have a question?<br> Chat with a Mac Expert!</h2>
						<a href="javascript:void(0)">Start Live Chat</a>
					</div>
				</div>
		</div>`);
		
		document.querySelector("#liveChat").addEventListener("click", moneyBack_btn);
		function moneyBack_btn() {
			document.querySelector("#livechat_header_on").click();
		}
    }
}
loadTestCode();