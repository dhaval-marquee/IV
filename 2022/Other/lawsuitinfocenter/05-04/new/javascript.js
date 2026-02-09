var popupInterval = setInterval(function(){
	if(document.querySelectorAll('#lead-bot-wrapper-3604s').length > 0){
		clearInterval(popupInterval);
		document.body.classList.add('iv_lawsuit_home');
		function observerForLoadingBlock() {
			var target = document.querySelectorAll('.iv_lawsuit_home div[class*="leadforms-general-wrapper"]')[0];
			const config = {
				childList: true, characterData: true, subtree: true, attributes: true,
			};

			var running = false;
			const callback = function (mutationsList, observer) {
				if (running) return;
				if (document.querySelectorAll('.iv_lawsuit_home div[class*="leadforms-form-modal-template__"]').length == 0) {
					return;
				}

                if (document.querySelectorAll('.formStep_88').length == 0) {
                    document.querySelector('#lead-bot-wrapper-3604s').classList.add('formStep_1');
                }
                if (document.querySelectorAll('body span[class*="leadforms-progress-bar-label-modal-template"]').length) {
                    var stepsText = document.querySelectorAll('body span[class*="leadforms-progress-bar-label-modal-template"]')[0].textContent;
                    var stepsNumber = stepsText.replace(/\%/g, "");
                    console.log(stepsNumber);
                    document.querySelector('#lead-bot-wrapper-3604s').removeAttribute('class')
                    document.querySelector('#lead-bot-wrapper-3604s').classList.add('formStep_'+stepsNumber);
                }

				running = true;
				setTimeout(function () { running = false; }, 200);
			};
			const observer = new MutationObserver(callback);
			observer.observe(target, config);
		}
		observerForLoadingBlock();
		document.querySelector('body').style.visibility = 'visible';
	}
},100);