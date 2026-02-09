function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-search-results')) {
        document.querySelector('body').classList.add('iv-search-results');
        
        var targetElement = document.querySelector('#modalAutoSuggestionContainerDesktop');
        observerElm(targetElement, function(mutationsList, observer) {
            let searchTitle = document.querySelector(".amw-header-popover--auto-suggestion .amw-header-popover__title");
            if (searchTitle && !document.querySelector('.iv-title-wrapper')) {
                let wrapper = document.createElement("div");
                wrapper.classList.add("iv-title-wrapper");
                searchTitle.parentNode.insertBefore(wrapper, searchTitle);
                wrapper.appendChild(searchTitle);
            }
        });

    }
}

// Observer
function observerElm(target, callbackFn) {
	var config = {
		childList: true,
		attributes: true,
		subtree: true,
	};
	var callback = function(mutationsList, observer) {
		callbackFn(mutationsList, observer); 
	};
	var observer = new MutationObserver(callback);
	observer.observe(target, config);
}



var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);