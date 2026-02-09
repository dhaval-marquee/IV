var popupInterval = setInterval(function(){
	if(document.querySelectorAll('#lead-bot-wrapper-3604s').length > 0){
		clearInterval(popupInterval);
		document.body.classList.add('iv_lawsuit_home');
		function observerForLoadingBlock() {
			var target = document.querySelectorAll('.iv_lawsuit_home')[0];
			const config = {
				childList: true, characterData: true, subtree: true, attributes: true,
			};

			var running = false;
			const callback = function (mutationsList, observer) {
				if (running) return;
				if (document.querySelectorAll('.iv_lawsuit_home div[class*="leadforms-form-modal-template__"]').length == 0) {
					return;
				}

				var imgwrapper = document.querySelector('.iv_lawsuit_home div[class*="leadforms-bubble-avatar-img-wrapper"]');
				imgwrapper.innerHTML = "<strong>Don’t settle with insurance before learning what your claim is really worth! Get started below.</strong>";
				imgwrapper.style.width = "auto";
				imgwrapper.style.height = "auto";
				imgwrapper.style.borderRadius = "0";

				var queText = document.querySelector('.iv_lawsuit_home div[class*="leadforms-step-title-modal"]').textContent;
				if (queText == 'Were you or a loved one injured in a car accident? Before settling with insurance, see how much your claim is worth by answering 6 easy questions.') {
					document.querySelector('.iv_lawsuit_home div[class*="leadforms-step-title-modal"]').textContent = "Were you or a loved one injured in a car accident?";
				} else if (queText == 'Please complete the form below to find out how much your claim is worth today!') {
					document.querySelector('.iv_lawsuit_home div[class*="leadforms-step-title-modal"]').innerHTML = "<p>You’re almost done!</p><p>Submit your info below and we will contact you within 24 hours to give you your FREE settlement estimate and to answer any questions you may have.</p>";
				}

				document.querySelectorAll('.iv_lawsuit_home div[class*="leadforms-answer-wrapper-modal-template"]').forEach(function (ele) {
					ele.addEventListener("click", function () {
						imgwrapper.style.display = "none";
						document.querySelectorAll('.iv_lawsuit_home div[class*="tip-text-modal-template"]').forEach(function (ele1) {
							ele1.style.marginTop = "76px";
						})
					});
				})

				running = true;
				setTimeout(function () { running = false; }, 100);
			};
			const observer = new MutationObserver(callback);
			observer.observe(target, config);
		}
		observerForLoadingBlock();
		document.querySelector('body').style.visibility = 'visible';
	}
},50);