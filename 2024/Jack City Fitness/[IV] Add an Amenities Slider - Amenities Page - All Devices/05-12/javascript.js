function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-amenities')) {
        document.querySelector('body').classList.add('iv-amenities');
        
        const tryBtn = `<div class="try_tab_box">
                            <div class="tab-arrows">
                                <button class="arrow prev"><span class="arrow-next"></span></button>
                                <button class="arrow next"><span class="arrow-prev"></span></button>
                            </div>
                            <a class="try-free-btn" href="javascript:;">TRY FOR FREE</a>
                        </div>`;

        const inSideTitle = `<div class="right-content-box-title"><p>Amenities insisde</p><h2>Jack city fitness</h2></div>`;

        const tabHtml = `<div class="iv-tabs-section">
            <h2 class="center cabin uppercase extra-bold">JACK CITY FITNESS AMENITIES</h2>
            <div class="tabs-container">
                <div class="tabs">
                    <button class="tab active">Power Racks</button>
                    <button class="tab">Olympic Lifting Platforms</button>
                    <button class="tab">Woodway Treadmills</button>
                    <button class="tab">Versa Climber</button>
                    <button class="tab">Concept 2 Rowers & Skiers</button>
                    <button class="tab hidden">Stationary Bikes and AirBikes</button>
                    <button class="tab hidden">Sports Cages</button>
                    <button class="tab hidden">Synthetic Ice</button>
                    <button class="tab hidden">Plyometrics Room</button>
                    <button class="tab hidden">Soft & Hard Boxes</button>
                    <button class="tab hidden">Dumbbell Racks</button>
                    <button class="tab hidden">Sports Turf</button>
                    <button class="tab hidden">Kettlebells</button>
                    <button class="tab hidden">Medicine Balls</button>
                    <button class="tab hidden">Sandbags</button>
                    <button class="tab hidden">Bands</button>
                    <button class="tab hidden">Yoga Mats</button>
                    <button class="tab hidden">Climbing Pegboard</button>
                    <button class="tab hidden">Infrared Sauna</button>
                    <button class="tab hidden">Specialty Bars</button>
                    <!-- Add more tabs as needed -->
                    <button class="view-all">View All</button>
                </div>
                
            </div>
            
            <div class="dropdown">
                <div class="dropdown-title">All Amenities</div>
                <!-- Tabs will be populated here dynamically -->
            </div>
            
            <div class="tab-content">
                <div class="content active">
                    <div class="tab-content-box">
                        <div class="left-content-box">
                            <div class="images">
                                <div class="image"><img src="//res.cloudinary.com/ignite-visibility/image/upload/v1733385663/jackcityfitness/Amenities-Slider/PowerRacks.png"/></div>
                            </div>
                        </div>
                        <div class="right-content-box">
                            ${inSideTitle}
                            <div class="content-box">
                                <div class="content-box-main">
                                    <div class="content-box-inner">
                                        <h2>Power Racks</h2>
                                        <p>Also called power cages, these heavy-duty pieces of equipment are must-haves at any fitness center. With a whopping 12 racks you'll never be waiting around!</p>
                                    </div>
                                </div>
                                ${tryBtn}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="tab-content-box">
                        <div class="left-content-box">
                            <div class="images">
                                <div class="image"><img src="//res.cloudinary.com/ignite-visibility/image/upload/v1733385660/jackcityfitness/Amenities-Slider/OlympicLiftingPlatforms.png"/></div>
                            </div>
                        </div>
                        <div class="right-content-box">
                            ${inSideTitle}
                            <div class="content-box">
                                <div class="content-box-main">
                                    <div class="content-box-inner">
                                        <h2>Olympic Lifting Platforms</h2>
                                        <p>We have 3 Olympic lifting platform with multiple sets of bumper plates to tackle your cleans, snatches, deadlifts, and so much more.</p>
                                    </div>
                                </div>
                                ${tryBtn}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="tab-content-box">
                        <div class="left-content-box">
                            <div class="images">
                                <div class="image"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1733385663/jackcityfitness/Amenities-Slider/WoodwayTreadmills.png"/></div>
                            </div>
                        </div>
                        <div class="right-content-box">
                            ${inSideTitle}
                            <div class="content-box">
                                <div class="content-box-main">
                                    <div class="content-box-inner">
                                        <h2>Woodway Treadmills</h2>
                                        <p>The Woodway treadmill is ultra-popular amongst HIIT fans for its ability to promote great form, work with athletes at their own pace, and burn more calories than its predecessor.</p>
                                    </div>
                                </div>
                                ${tryBtn}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="tab-content-box">
                        <div class="left-content-box">
                            <div class="images">
                                <div class="image"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1733385660/jackcityfitness/Amenities-Slider/Versa-Climber.png"/></div>
                            </div>
                        </div>
                        <div class="right-content-box">
                            ${inSideTitle}
                            <div class="content-box">
                                <div class="content-box-main">
                                    <div class="content-box-inner">
                                        <h2><a href="/versaclimber/">Versa Climber</a></h2>
                                        <p>Athletes at all fitness levels love this piece of climbing machinery, which has offered a low-impact, <a href="/5-versaclimber-workouts-for-cardio-and-total-body-strength/">full-body workout</a> for almost 40 years.</p>
                                    </div>
                                </div>
                                ${tryBtn}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="tab-content-box">
                        <div class="left-content-box">
                            <div class="images">
                                <div class="image"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1733385661/jackcityfitness/Amenities-Slider/Concept-Rowers-Skiers.png"/></div>
                            </div>
                        </div>
                        <div class="right-content-box">
                            ${inSideTitle}
                            <div class="content-box">
                                <div class="content-box-main">
                                    <div class="content-box-inner">
                                        <h2>Concept 2 Rowers & Skiers</h2>
                                        <p>As the name implies, this tried-and-true equipment mimics the same actions one performs while rowing a boat. The <a href="/rowing-machine-benefits/">benefits of rowing machines</a> are unmatched!</p>
                                    </div>
                                </div>
                                ${tryBtn}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="tab-content-box">
                        <div class="left-content-box">
                            <div class="images">
                                <div class="image"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1733385663/jackcityfitness/Amenities-Slider/StationaryBikesRogueEchoBikes.png"/></div>
                            </div>
                        </div>
                        <div class="right-content-box">
                            ${inSideTitle}
                            <div class="content-box">
                                <div class="content-box-main">
                                    <div class="content-box-inner">
                                        <h2>Stationary Bikes & Rogue Echo Bikes.</h2>
                                        <p><a href="/air-bike-benefits-for-crossfit-workouts/">Bicycling is a wonderful workout</a>, and ours let you get in your cycling even if the weather is working against you.</p>
                                    </div>
                                </div>
                                ${tryBtn}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="tab-content-box">
                        <div class="left-content-box">
                            <div class="images">
                                <div class="image"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1733385664/jackcityfitness/Amenities-Slider/SportsCages.png"/></div>
                            </div>
                        </div>
                        <div class="right-content-box">
                            ${inSideTitle}
                            <div class="content-box">
                                <div class="content-box-main">
                                    <div class="content-box-inner">
                                        <h2>Sports Cages</h2>
                                        <p>Hoping to train sport specific movements or planning to bring your whole team in for a sesh? We have entire training areas for that purpose.</p>
                                    </div>
                                </div>
                                ${tryBtn}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="tab-content-box">
                        <div class="left-content-box">
                            <div class="images">
                                <div class="image"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1733385661/jackcityfitness/Amenities-Slider/Synthetic_Ice.png"></div>
                            </div>
                        </div>
                        <div class="right-content-box">
                            ${inSideTitle}
                            <div class="content-box">
                                <div class="content-box-main">
                                    <div class="content-box-inner">
                                        <h2>Synthetic Ice</h2>
                                        <p>Hockey players need a year-round skating option, and synthetic ice allows you to hit the rink even in the middle of summer.</p>
                                    </div>
                                </div>
                                ${tryBtn}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="tab-content-box">
                        <div class="left-content-box">
                            <div class="images">
                                <div class="image"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1726300187/jazzercise/Amenities_Page/PlyometricsRoom.png"/></div>
                            </div>
                        </div>
                        <div class="right-content-box">
                            ${inSideTitle}
                            <div class="content-box">
                                <div class="content-box-main">
                                    <div class="content-box-inner">
                                        <h2>Plyometrics Room</h2>
                                        <p>Jump into a powerful workout routine at our plyometrics training center.</p>
                                    </div>
                                </div>
                                ${tryBtn}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="tab-content-box">
                        <div class="left-content-box">
                            <div class="images">
                                <div class="image"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1733385661/jackcityfitness/Amenities-Slider/SoftHardBoxes.png"/></div>
                            </div>
                        </div>
                        <div class="right-content-box">
                            ${inSideTitle}
                            <div class="content-box">
                                <div class="content-box-main">
                                    <div class="content-box-inner">
                                        <h2>Soft & Hard Boxes</h2>
                                        <p>If box jumps are your thing, we’ve got you covered: we have a number of box heights and styles for that very purpose.</p>
                                    </div>
                                </div>
                                ${tryBtn}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="tab-content-box">
                        <div class="left-content-box">
                            <div class="images">
                                <div class="image"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1733385664/jackcityfitness/Amenities-Slider/Dumbbell-Racks.png"/></div>
                            </div>
                        </div>
                        <div class="right-content-box">
                            ${inSideTitle}
                            <div class="content-box">
                                <div class="content-box-main">
                                    <div class="content-box-inner">
                                        <h2>Dumbbell Racks</h2>
                                        <p>Weightlifters, get ready: our collection of dumbbells is massive with dumbbells ranging from 5lbs all the way up to 150lbs</p>
                                    </div>
                                </div>
                                ${tryBtn}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="tab-content-box">
                        <div class="left-content-box">
                            <div class="images">
                                <div class="image"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1726297021/jazzercise/Amenities_Page/SportsTurf.png"/></div>
                            </div>
                        </div>
                        <div class="right-content-box">
                            ${inSideTitle}
                            <div class="content-box">
                                <div class="content-box-main">
                                    <div class="content-box-inner">
                                        <h2>Sports Turf</h2>
                                        <p>With a total of 85ft (28 yards) It’s game time on our field of artificial grass—bring the whole team!</p>
                                    </div>
                                </div>
                                ${tryBtn}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="tab-content-box">
                        <div class="left-content-box">
                            <div class="images">
                                <div class="image"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1733385661/jackcityfitness/Amenities-Slider/Kettle-bells.png"/></div>
                            </div>
                        </div>
                        <div class="right-content-box">
                            ${inSideTitle}
                            <div class="content-box">
                                <div class="content-box-main">
                                    <div class="content-box-inner">
                                        <h2>Kettlebells</h2>
                                        <p>Boasting the largest range of kettlebells in the valley, from 4kg (8.8lbs) to 92kg (203lbs)! These unique tools bring another flare to your functional fitness!</p>
                                    </div>
                                </div>
                                ${tryBtn}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="tab-content-box">
                        <div class="left-content-box">
                            <div class="images">
                                <div class="image"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1726297027/jazzercise/Amenities_Page/Medicine-Balls.png"/></div>
                            </div>
                        </div>
                        <div class="right-content-box">
                            ${inSideTitle}
                            <div class="content-box">
                                <div class="content-box-main">
                                    <div class="content-box-inner">
                                        <h2>Medicine Balls</h2>
                                        <p>Our collection of medicine balls lend themselves to all sorts of self-guided or coach-led training routines.</p>
                                    </div>
                                </div>
                                ${tryBtn}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="tab-content-box">
                        <div class="left-content-box">
                            <div class="images">
                                <div class="image"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1726655226/jazzercise/Amenities_Page/Sandbag_img.png"/></div>
                            </div>
                        </div>
                        <div class="right-content-box">
                            ${inSideTitle}
                            <div class="content-box">
                                <div class="content-box-main">
                                    <div class="content-box-inner">
                                        <h2>Sandbags</h2>
                                        <p>This gym standby is a hero for building strength.</p>
                                    </div>
                                </div>
                                ${tryBtn}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="tab-content-box">
                        <div class="left-content-box">
                            <div class="images">
                                <div class="image"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1726297022/jazzercise/Amenities_Page/Bands.png"/></div>
                            </div>
                        </div>
                        <div class="right-content-box">
                            ${inSideTitle}
                            <div class="content-box">
                                <div class="content-box-main">
                                    <div class="content-box-inner">
                                        <h2>Bands</h2>
                                        <p>If resistance training is what you’re after, be sure to grab some of our bands.</p>
                                    </div>
                                </div>
                                ${tryBtn}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="tab-content-box">
                        <div class="left-content-box">
                            <div class="images">
                                <div class="image"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1726297022/jazzercise/Amenities_Page/YogaMats.png"/></div>
                            </div>
                        </div>
                        <div class="right-content-box">
                            ${inSideTitle}
                            <div class="content-box">
                                <div class="content-box-main">
                                    <div class="content-box-inner">
                                        <h2>Yoga Mats</h2>
                                        <p>Feel free to use our complimentary yoga mats rather than remembering to bring yours every time.</p>
                                    </div>
                                </div>
                                ${tryBtn}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="tab-content-box">
                        <div class="left-content-box">
                            <div class="images">
                                <div class="image"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1733385663/jackcityfitness/Amenities-Slider/ClimbingPegboard.png"/></div>
                            </div>
                        </div>
                        <div class="right-content-box">
                            ${inSideTitle}
                            <div class="content-box">
                                <div class="content-box-main">
                                    <div class="content-box-inner">
                                        <h2>Climbing Pegboard</h2>
                                        <p>Whether you love to climb rocks or just want wicked biceps, you simply must try our climbing pegboards!</p>
                                    </div>
                                </div>
                                ${tryBtn}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="tab-content-box">
                        <div class="left-content-box">
                            <div class="images">
                                <div class="image"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1733385665/jackcityfitness/Amenities-Slider/InfraredSauna.png"/></div>
                            </div>
                        </div>
                        <div class="right-content-box">
                            ${inSideTitle}
                            <div class="content-box">
                                <div class="content-box-main">
                                    <div class="content-box-inner">
                                        <h2>Infrared Sauna</h2>
                                        <p>Whether you want to improve your recovery, detox your body, or just simply relax then we’ve got you covered!</p>
                                    </div>
                                </div>
                                ${tryBtn}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="tab-content-box">
                        <div class="left-content-box">
                            <div class="images">
                                <div class="image"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1733385662/jackcityfitness/Amenities-Slider/SpecialtyBars.png"/></div>
                            </div>
                        </div>
                        <div class="right-content-box">
                            ${inSideTitle}
                            <div class="content-box">
                                <div class="content-box-main">
                                    <div class="content-box-inner">
                                        <h2>Specialty Bars</h2>
                                        <p>Looking for variety? We carry Olympic Bars, Camber Bars, The Marrs-Bar, The Tsunami Bar, Multi Grip Bars, and so many more!</p>
                                    </div>
                                </div>
                                ${tryBtn}
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Add more content as needed -->
            </div>
        </div>`;

        // Header Amenities Menu added
        var amenitiesMenu = `<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-amenities"><a href="/fitness-equipment-and-gym-amenities/">Amenities</a></li>`;
        const desktopHomeMenu = document.querySelector(".menu-item-home");
        const mobileHomeMenu = document.querySelector("#menu-mobile-menu .menu-item-home");

        if(desktopHomeMenu){
            desktopHomeMenu.insertAdjacentHTML('afterend', amenitiesMenu);
        }
        if(mobileHomeMenu) {
            mobileHomeMenu.insertAdjacentHTML('afterend', amenitiesMenu);
        }

        // This code will be run only fitness-equipment-and-gym-amenities page
        if(window.location.href.includes('fitness-equipment-and-gym-amenities')){
            // Append Tab html
            document.querySelectorAll('.iv-amenities #section-1 .copy h2').forEach(function(h2){
                if(h2.innerText.toLowerCase().includes('what types of gym equipment')) {
                    h2.insertAdjacentHTML('beforebegin', tabHtml)
                }
            })

            // Tabs
            const tabs = document.querySelectorAll('.tab');
            const viewAllButton = document.querySelector('.view-all');
            const dropdown = document.querySelector('.dropdown');
            const tabContent = document.querySelectorAll('.tab-content .content');
            const maxVisibleTabs = 5;

            function updateTabs() {
                dropdown.innerHTML = '<div class="dropdown-title">All Amenities</div>';
                tabs.forEach((tab, index) => {
                    if (index >= maxVisibleTabs) {
                        tab.classList.add('hidden');
                    } else {
                        tab.classList.remove('hidden');
                    }

                    const newTab = tab.cloneNode(true);
                    dropdown.appendChild(newTab);
                    
                    // Ensure the tab click handler is not duplicated
                    newTab.removeEventListener('click', handleDropdownTabClick);
                    newTab.addEventListener('click', handleDropdownTabClick);
                });

                viewAllButton.style.display = 'inline-block';
            }

            function handleDropdownTabClick(event) {
                const clickedDropdownTab = event.currentTarget;
                const tabName = clickedDropdownTab.textContent.trim();
                const index = Array.from(tabs).findIndex(tab => tab.textContent.trim() === tabName);

                if (index !== -1) {
                    switchTab(tabs[index], index);
                }
            }

            function showDropdown() {
                dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
            }

            function switchTab(tab, index) {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                tabContent.forEach(c => c.classList.remove('active'));
                tabContent[index].classList.add('active');

                // Check if the active tab is hidden
                const activeTab = Array.from(tabs).find(t => t.classList.contains('active'));
                if (activeTab && activeTab.classList.contains('hidden')) {
                    viewAllButton.classList.add('active');
                } else {
                    viewAllButton.classList.remove('active');
                }

                dropdown.style.display = 'none';

                // Update dropdown tabs' active state
                const dropdownTabs = dropdown.querySelectorAll('.tab');
                dropdownTabs.forEach(dTab => dTab.classList.remove('active'));
                dropdownTabs[index]?.classList.add('active');
            }

            function handleClickOutside(event) {
                if (!dropdown.contains(event.target) && !viewAllButton.contains(event.target)) {
                    dropdown.style.display = 'none';
                }
            }

            function navigateTabs(direction) {
                const tabsArray = Array.from(tabs);
                let activeTabIndex = tabsArray.findIndex(tab => tab.classList.contains('active'));

                // Determine the new tab index based on direction
                if (direction === 'next') {
                    activeTabIndex = (activeTabIndex + 1) % tabsArray.length;
                } else if (direction === 'prev') {
                    activeTabIndex = (activeTabIndex - 1 + tabsArray.length) % tabsArray.length;
                }

                // Switch to the new tab
                switchTab(tabs[activeTabIndex], activeTabIndex);
            }

            tabs.forEach((tab, index) => {
                tab.addEventListener('click', function() {
                    switchTab(tab, index);
                });

                // Check if the corresponding content exists before querying the prev/next buttons
                if (tabContent[index]) {
                    const prevButton = tabContent[index].querySelector('.arrow.prev');
                    const nextButton = tabContent[index].querySelector('.arrow.next');

                    if (prevButton && nextButton) {
                        prevButton.addEventListener('click', function() {
                            navigateTabs('prev');
                        });

                        nextButton.addEventListener('click', function() {
                            navigateTabs('next');
                        });
                    }
                }
            });

            viewAllButton.addEventListener('click', showDropdown);
            window.addEventListener('resize', updateTabs);
            document.addEventListener('click', handleClickOutside);

            updateTabs();



            // Click on try to free button
            document.querySelectorAll('.try-free-btn').forEach(function(btn){
                btn.addEventListener("click", function(){
                    document.querySelector(`[href="#try-for-free"]`).click();
                });
            });
        }

    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);