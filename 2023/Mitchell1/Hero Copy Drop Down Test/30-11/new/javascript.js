function loadTestCode() {
    console.log('working');
    if (!document.querySelector('body').classList.contains('home_hero_iv')) {
        document.querySelector('body').classList.add('home_hero_iv');


        var loadHero1111 = setInterval(function() {
            if (document.querySelectorAll('.home_hero_iv .tp-parallax-wrap').length > 0) {
                clearInterval(loadHero1111);
                document.querySelector('.home_hero_iv .rev_group .tp-parallax-wrap:nth-child(3) .tp-caption').innerHTML = `
                    <div class="guidance-row">
                        <div class="guidance-label">I want:</div>
                        <div class="guidance-dropdown">
                            <div class="guidance-select">
                                <span class="guidance-select-content"></span>
                                <i class="guidance-select-icon"></i>
                            </div>
                            <ul class="guidance-menu guidance-hide">
                                <li data-value="to Increase Productivity" class="selected">to Increase Productivity</li>
                                <li data-value="Complete OEM Repair Information">Complete OEM Repair Information</li>
                                <li data-value="to Track Shop Activity">to Track Shop Activity</li>
                            </ul>
                        </div>
                    </div>
                    <div class="guidance-row">
                        <div class="guidance-label">So that I can:</div>
                        <div class="guidance-dropdown">
                            <div class="guidance-select">
                                <span class="guidance-select-content"></span>
                                <i class="guidance-select-icon"></i>
                            </div>
                            <ul class="guidance-menu guidance-hide">
                                <li data-value="Save Time and Money" class="selected">Save Time and Money</li>
                                <li data-value="Grow My Business">Grow My Business</li>
                                <li data-value="Service More Vehicles">Service More Vehicles</li>
                            </ul>
                        </div>
                    </div>
                    <p class="guidance_text">Find out if Mitchell 1 is right for you and get <span>3 MONTHS FREE!*</span></p>`;
                var guidanceDropdowns = document.querySelectorAll('.guidance-dropdown');
                guidanceDropdowns.forEach(function (dropdown) {
                    var selectContent = dropdown.querySelector('.guidance-select-content');
                    var selectOption = dropdown.querySelector('.guidance-menu > li.selected');
                    var guidanceMenu = dropdown.querySelector('.guidance-menu');
                    var guidanceSelect = dropdown.querySelector('.guidance-select');
                    selectContent.textContent = selectOption.textContent;
                    var options = dropdown.querySelectorAll('.guidance-menu > li');
                    options.forEach(function (option) {
                        option.addEventListener('click', function () {
                            var clickedOption = option;
                            selectContent.textContent = clickedOption.textContent;
                            options.forEach(function (opt) {
                                opt.classList.remove('selected');
                            });
                            clickedOption.classList.add('selected');
                            guidanceDropdowns.forEach(function (otherDropdown) {
                                if (otherDropdown !== dropdown) {
                                    otherDropdown.querySelector('.guidance-menu').classList.add('guidance-hide');
                                    otherDropdown.querySelector('.guidance-select').classList.remove('guidance-active');
                                }
                            });
                            guidanceMenu.classList.add('guidance-hide');
                            guidanceSelect.classList.remove('guidance-active');
                        });
                    });
                    guidanceSelect.addEventListener('click', function (event) {
                        event.stopPropagation();
                        guidanceDropdowns.forEach(function (otherDropdown) {
                            if (otherDropdown !== dropdown) {
                                otherDropdown.querySelector('.guidance-menu').classList.add('guidance-hide');
                                otherDropdown.querySelector('.guidance-select').classList.remove('guidance-active');
                            }
                        });
                        guidanceMenu.classList.toggle('guidance-hide');
                        guidanceSelect.classList.toggle('guidance-active');
                    });
                });
                document.addEventListener('click', function (event) {
                    guidanceDropdowns.forEach(function (dropdown) {
                        var guidanceMenu = dropdown.querySelector('.guidance-menu');
                        var guidanceSelect = dropdown.querySelector('.guidance-select');
                        if (!guidanceMenu.contains(event.target)) {
                            guidanceMenu.classList.add('guidance-hide');
                            guidanceSelect.classList.remove('guidance-active');
                        }
                    });
                });
            }
        }, 100);
    }
}

function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(function() {
    loadTestCode();
});