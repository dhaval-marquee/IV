function mobileTestOnly() {
    if (!document.querySelector('body').classList.contains('filterTestIV')) {
        document.querySelector('body').classList.add('filterTestIV');

        document.querySelector('aside.sidebar-section').classList.add('sidebarIV');

        // Select all sidebar blocks
        var sidebarBlocks = document.querySelectorAll("aside .sidebar__block");
        var blocksArray = Array.prototype.slice.call(sidebarBlocks);

        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        var randomBlocks = shuffle(blocksArray).slice(0, 3);

        var ulElement = document.createElement("ul");
        ulElement.classList.add("filter-iv");
        var fixedLiElement = document.createElement("li");
        fixedLiElement.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20">
                <rect width="256" height="256" fill="none"></rect>
                <circle cx="104" cy="80" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></circle>
                <circle cx="168" cy="176" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></circle>
                <line x1="128" y1="80" x2="216" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                <line x1="40" y1="80" x2="80" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                <line x1="192" y1="176" x2="216" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                <line x1="40" y1="176" x2="144" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
            </svg>
        `;
        ulElement.appendChild(fixedLiElement);

        fixedLiElement.addEventListener("click", function() {
            asideElement.classList.add("show");
            document.querySelector('html').classList.add("open");
        });

        randomBlocks.forEach(function(block) {
            var h3Element = block.querySelector("h3.sidebar-block__heading");
            if (h3Element) {
                var liElement = document.createElement("li");
                var liText = h3Element.textContent.trim();
                // if (liText === "Country of Origin") {
                //     liText = "Origin";
                // }

                if (liText.indexOf("Country of Origin") > -1) {
                    liText = "Origin";
                }

                liElement.textContent = liText;
                liElement.addEventListener("click", function() {
                    var button = h3Element.querySelector("button.sidebar-block__toggle-icon");
                    if (button) {
                        asideElement.classList.add("show");
                        document.querySelector('html').classList.add("open");
                        button.click();
                    }
                });

                ulElement.appendChild(liElement);
            }
        });

        var asideElement = document.querySelector(".sidebarIV");
        asideElement.parentNode.insertBefore(ulElement, asideElement);

        document.querySelector('.sidebarIV').insertAdjacentHTML('afterbegin', `<div class="popupHeader">
            <h5>Sort & Filter</h5>
            <a href="javascript:;" id="closeModal"></a>
        </div>`);

        document.querySelector('.sidebarIV .popupHeader').after(document.querySelector('.collection__sort-by-filter').closest('.field'));
        
        document.addEventListener('click', function(e) {
            if (e.target.id === 'closeModal') {
                asideElement.classList.remove("show");
                document.querySelector('html').classList.remove("open");
            }
        });
    }
}

// Load code just for mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {

    mobileTestOnly();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 768px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for mobile over
