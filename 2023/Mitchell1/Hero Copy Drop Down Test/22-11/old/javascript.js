function loadTestCode() {
    console.log('working');
      var bodyEle = document.querySelector('body');
      if (!bodyEle.classList.contains('home_hero_iv')) {
          bodyEle.classList.add('home_hero_iv');
          var loadHero = setInterval(() => {
              if (document.querySelectorAll('.home_hero_iv .tp-parallax-wrap').length > 0) {
                  clearInterval(loadHero);
                  document.querySelector('.home_hero_iv .rev_group .tp-parallax-wrap:nth-child(3) .tp-caption').innerHTML = `
                  <div class="guidance-row">
                      <div class="guidance-label">I want:</div>
                      <div class="guidance-dropdown">
                          <div class="guidance-select">
                              <span class="guidance-select-content"></span>
                              <i class="guidance-select-icon"></i>
                          </div>
                          <ul class="guidance-menu guidance-hide">
                              <li data-value="Complete OEM Repair Information" class="selected">Complete OEM Repair Information</li>
                              <li data-value="to Increase Productivity">to Increase Productivity</li>
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
                              <li data-value="Grow My Business" class="selected">Grow My Business</li>
                              <li data-value="Service More Vehicles">Service More Vehicles</li>
                              <li data-value="Save Time and Money">Save Time and Money</li>
                          </ul>
                      </div>
                  </div>
                  `;
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
          }, 100);
      }
  }
  loadTestCode();
  