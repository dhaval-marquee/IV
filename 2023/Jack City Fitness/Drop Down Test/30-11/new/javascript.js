function loadTestCode() {
    if (!document.querySelector('body').classList.contains('home_hero_iv')) {
        document.querySelector('body').classList.add('home_hero_iv');

        document.querySelector('.home_hero_iv .banner-module .fourteen-hundred').insertAdjacentHTML('beforeend', `<div class="guidance-wrapper aos-init" data-aos="fade-up" data-aos-delay="300">
            <div class="guidance-row">
                <div class="guidance-label">I want to</div>
                <div class="guidance-dropdown">
                    <div class="guidance-select">
                        <span class="guidance-select-content"></span>
                        <i class="guidance-select-icon"></i>
                    </div>
                    <ul class="guidance-menu guidance-hide">
                        <li data-value="Get help with my health" class="selected">Get help with my health</li>
                        <li data-value="Improve my physical fitness">Improve my physical fitness</li>
                        <li data-value="Find a supportive fitness community">Find a supportive fitness community</li>
                        <li data-value="Find a gym that fits my busy schedule">Find a gym that fits my busy schedule</li>
                    </ul>
                </div>
            </div>
            <div class="guidance-row">
                <div class="guidance-label">so that I can</div>
                <div class="guidance-dropdown">
                    <div class="guidance-select">
                        <span class="guidance-select-content"></span>
                        <i class="guidance-select-icon"></i>
                    </div>
                    <ul class="guidance-menu guidance-hide">
                        <li data-value="Have more energy for my family" class="selected">Have more energy for my family</li>
                        <li data-value="Enjoy a healthier, more active lifestyle">Enjoy a healthier, more active lifestyle</li>
                        <li data-value="Stay motivated and enjoy my fitness journey">Stay motivated and enjoy my fitness journey</li>
                        <li data-value="Maintain regular exercise without disrupting my daily routine">Maintain regular exercise without disrupting my daily routine</li>
                    </ul>
                </div>
            </div>
        </div>`);

        var guidanceWrapper = document.querySelector('.home_hero_iv .guidance-wrapper');
        var bannerModuleH2 = document.querySelector('.home_hero_iv .banner-module .h2.white');
        var bannerModuleButtons = document.querySelector('.home_hero_iv .banner-module .banner-buttons');
        if (guidanceWrapper && bannerModuleH2 && bannerModuleButtons) {
            guidanceWrapper.appendChild(bannerModuleH2);
            guidanceWrapper.appendChild(bannerModuleButtons);
            bannerModuleH2.setAttribute('data-aos', '');
            bannerModuleButtons.setAttribute('data-aos', '');
        }

        var guidanceDropdowns = document.querySelectorAll('.guidance-dropdown');
        guidanceDropdowns.forEach(function(dropdown) {
            var selectContent = dropdown.querySelector('.guidance-select-content');
            var selectOption = dropdown.querySelector('.guidance-menu > li.selected');
            var guidanceMenu = dropdown.querySelector('.guidance-menu');
            var guidanceSelect = dropdown.querySelector('.guidance-select');
            selectContent.textContent = selectOption.textContent;

            var options = dropdown.querySelectorAll('.guidance-menu > li');
            options.forEach(function(option) {
                option.addEventListener('click', function() {
                    var clickedOption = option;
                    selectContent.textContent = clickedOption.textContent;
                    options.forEach(function(opt) {
                        opt.classList.remove('selected');
                    });
                    clickedOption.classList.add('selected');
                    guidanceDropdowns.forEach(function(otherDropdown) {
                        if (otherDropdown !== dropdown) {
                            otherDropdown.querySelector('.guidance-menu').classList.add('guidance-hide');
                            otherDropdown.querySelector('.guidance-select').classList.remove('guidance-active');
                        }
                    });
                    guidanceMenu.classList.add('guidance-hide');
                    guidanceSelect.classList.remove('guidance-active');
                });
            });

            guidanceSelect.addEventListener('click', function(event) {
                event.stopPropagation();
                guidanceDropdowns.forEach(function(otherDropdown) {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.querySelector('.guidance-menu').classList.add('guidance-hide');
                        otherDropdown.querySelector('.guidance-select').classList.remove('guidance-active');
                    }
                });
                guidanceMenu.classList.toggle('guidance-hide');
                guidanceSelect.classList.toggle('guidance-active');
            });
        });

        document.addEventListener('click', function(event) {
            guidanceDropdowns.forEach(function(dropdown) {
                var guidanceMenu = dropdown.querySelector('.guidance-menu');
                var guidanceSelect = dropdown.querySelector('.guidance-select');
                if (!guidanceMenu.contains(event.target)) {
                    guidanceMenu.classList.add('guidance-hide');
                    guidanceSelect.classList.remove('guidance-active');
                }
            });
        });
    }
}
loadTestCode();