function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-nav')) {
        document.querySelector('body').classList.add('iv-nav');
       
        function updateLabels() {
            if(!document.querySelector('.storage-info-dropdown')){
                document.querySelector('#storageInfoDropdown').parentElement.classList.add('storage-info-dropdown')
            }

            const viewLocations = `<li class="pss-navbar__nav-link dropdown view-locations-dropdown">
                <!-- Expand Tier 2 Mobile Only -->
                <a class="pss-tier2-expand-box pss-visible-mobile-only2" data-toggle="collapse" href="#expandStorageTier4" aria-expanded="false" aria-controls="expandStorageTier4">
                    <span class="pss-tier2">View Locations</span>
                </a>
                <div class="collapse pss-visible-mobile-only2 pss-tier2-effect" id="expandStorageTier4">
                    <div class="card card-body pss-tier2-expand-content">
                        <a class="pss-tier2-expand-box" data-toggle="collapse" href="#expandStorageTier5" aria-expanded="false" aria-controls="expandStorageTier5">
                            <span class="pss-tier2">San Diego</span>
                        </a>
                        <div class="collapse margin-top--10" id="expandStorageTier5">
                            <ul class="card card-body pss-tier2-expand-content pss-navbar--dropdown-simple">
                                <li class="pss-navbar__dropdown-item">
                                    <a href="/san-diego-self-storage-morena/" title="Morena Blvd">Morena Blvd</a>
                                </li>
                                <li class="pss-navbar__dropdown-item">
                                    <a href="/san-diego-self-storage-murphy-canyon/" title="Murphy Canyon Rd">Murphy Canyon Rd</a>
                                </li>
                                <li class="pss-navbar__dropdown-item">
                                    <a href="/pacific-beach-self-storage/" title="Pacific Beach">Pacific Beach </a>
                                </li>
                                <li class="pss-navbar__dropdown-item">
                                    <a href="/santee-self-storage/" title="Santee">Santee </a>
                                </li>
                                <li class="pss-navbar__dropdown-item">
                                    <a href="/solana-beach-self-storage/" title="Solana Beach​">Solana Beach​</a>
                                </li>
                            </ul>
                        </div>
                        <a class="pss-tier2-expand-box" data-toggle="collapse" href="#expandStorageTier6" aria-expanded="false" aria-controls="expandStorageTier6">
                            <span class="pss-tier2">Los Angeles</span>
                        </a>
                        <div class="collapse margin-top--10" id="expandStorageTier6">
                            <ul class="card card-body pss-tier2-expand-content pss-navbar--dropdown-simple">
                                <li class="pss-navbar__dropdown-item">
                                    <a href="/west-los-angeles-self-storage/" title="West Los Angeles - South La Brea Ave">West Los Angeles - South La Brea Ave</a>
                                </li>
                                <li class="pss-navbar__dropdown-item">
                                    <a href="/los-angeles-self-storage-national-blvd/" title="Culver City - National Blvd​">Culver City - National Blvd​</a>
                                </li>
                            </ul>
                        </div>
                        <a class="pss-tier2-expand-box" data-toggle="collapse" href="#expandStorageTier7" aria-expanded="false" aria-controls="expandStorageTier7">
                            <span class="pss-tier2">Inland Empire</span>
                        </a>
                        <div class="collapse margin-top--10" id="expandStorageTier7">
                            <ul class="card card-body pss-tier2-expand-content pss-navbar--dropdown-simple">
                                <li class="pss-navbar__dropdown-item">
                                    <a href="/rancho-cucamonga-self-storage-arrow/" title="Rancho Cucamonga - Arrow Route">Rancho Cucamonga - Arrow Route</a>
                                </li>
                                <li class="pss-navbar__dropdown-item">
                                    <a href="/rancho-cucamonga-self-storage-haven/" title="Alta Loma - Haven Ave">Alta Loma - Haven Ave</a>
                                </li>
                                <li class="pss-navbar__dropdown-item">
                                    <a href="/norco-self-storage/" title="Norco - Cota St​">Norco - Cota St​</a>
                                </li>
                                <li class="pss-navbar__dropdown-item">
                                    <a href="/azusa-self-storage/" title="Azusa - West Foothill Blvd">Azusa - West Foothill Blvd</a>
                                </li>
                            </ul>
                        </div>
                        <a class="pss-tier2-expand-box" data-toggle="collapse" href="#expandStorageTier8" aria-expanded="false" aria-controls="expandStorageTier8">
                            <span class="pss-tier2">Orange County</span>
                        </a>
                        <div class="collapse margin-top--10" id="expandStorageTier8">
                            <ul class="card card-body pss-tier2-expand-content pss-navbar--dropdown-simple">
                                <li class="pss-navbar__dropdown-item">
                                    <a href="/san-juan-capistrano-self-storage/" title="San Juan Capistrano - Valle Rd">San Juan Capistrano - Valle Rd</a>
                                </li>
                            </ul>
                        </div>
                        <a class="pss-tier2-expand-box" data-toggle="collapse" href="#expandStorageTier9" aria-expanded="false" aria-controls="expandStorageTier9">
                            <span class="pss-tier2">Northern California</span>
                        </a>
                        <div class="collapse margin-top--10" id="expandStorageTier9">
                            <ul class="card card-body pss-tier2-expand-content pss-navbar--dropdown-simple">
                                <li class="pss-navbar__dropdown-item">
                                    <a href="/walnut-creek-self-storage/" title="Walnut Creek - Saranap Ave">Walnut Creek - Saranap Ave</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- END Expand Tier 2 Mobile Only -->

                <a id="navbarDropdown" class="nav-link dropdown-toggle pss-invisible-mobile-only2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-hidden="Main Menu Storage">View Locations </a>
                <!-- Expand tier 1 -->
                <div class="dropdown-menu pss-navbar__dropdown pss-navbar--dropdown-submenu" id="viewLocationsDropdown">
                    <div class="pss-navbar__submenu">
                        <div class="pss-navbar__submenu-main">
                            <ul class="list-unstyled">
                                <li class="pss-navbar__dropdown-item">
                                    <a href="#" title="San Diego" data-tab="#submenuContent-view-1">San Diego <span class="pss-navbar__item-icon">
                                        <svg class="pss-navbar__arrow-icon" role="presentation">
                                            <use href="/Assets/sprite/icons.svg#arrow-right" />
                                        </svg></span>
                                    </a>
                                </li>
                                <li class="pss-navbar__dropdown-item">
                                    <a href="#" title="Los Angeles" data-tab="#submenuContent-view-2">Los Angeles <span class="pss-navbar__item-icon">
                                        <svg class="pss-navbar__arrow-icon" role="presentation">
                                            <use href="/Assets/sprite/icons.svg#arrow-right" />
                                        </svg></span></a>
                                </li>
                                <li class="pss-navbar__dropdown-item">
                                    <a href="#" title="Inland Empire" data-tab="#submenuContent-view-3">Inland Empire <span class="pss-navbar__item-icon">
                                        <svg class="pss-navbar__arrow-icon" role="presentation">
                                            <use href="/Assets/sprite/icons.svg#arrow-right" />
                                        </svg></span>
                                    </a>
                                </li>
                                <li class="pss-navbar__dropdown-item">
                                    <a href="#" title="Orange County" data-tab="#submenuContent-view-4">Orange County <span class="pss-navbar__item-icon">
                                        <svg class="pss-navbar__arrow-icon" role="presentation">
                                            <use href="/Assets/sprite/icons.svg#arrow-right" />
                                        </svg></span>
                                    </a>
                                </li>
                                <li class="pss-navbar__dropdown-item">
                                    <a href="#" title="Northern California" data-tab="#submenuContent-view-5">Northern California <span class="pss-navbar__item-icon">
                                        <svg class="pss-navbar__arrow-icon" role="presentation">
                                            <use href="/Assets/sprite/icons.svg#arrow-right" />
                                        </svg></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="pss-navbar__submenu-drops">
                            <div id="submenuContent-view-1" class="pss-navbar__submenu-drop pss-navbar--submenu-links active">
                                <ul class="list-unstyled">
                                    <li><a href="/san-diego-self-storage-morena/" title="Morena Blvd">Morena Blvd</a></li>
                                    <li><a href="/san-diego-self-storage-murphy-canyon/" title="Murphy Canyon Rd">Murphy Canyon Rd</a></li>
                                    <li><a href="/pacific-beach-self-storage/" title="Pacific Beach">Pacific Beach </a></li>
                                    <li><a href="/santee-self-storage/" title="Santee">Santee</a></li>
                                    <li><a href="/solana-beach-self-storage/" title="Solana Beach​">Solana Beach​</a></li>
                                </ul>
                            </div>
                            <div id="submenuContent-view-2" class="pss-navbar__submenu-drop pss-navbar--submenu-links">
                                <ul class="list-unstyled">
                                    <li><a href="/west-los-angeles-self-storage/" title="West Los Angeles - South La Brea Ave">West Los Angeles - South La Brea Ave</a></li>
                                    <li><a href="/los-angeles-self-storage-national-blvd/" title="Culver City - National Blvd​">Culver City - National Blvd​</a></li>
                                </ul>
                            </div>
                            <div id="submenuContent-view-3" class="pss-navbar__submenu-drop pss-navbar--submenu-links">
                                <ul class="list-unstyled">
                                    <li><a href="/rancho-cucamonga-self-storage-arrow/" title="Rancho Cucamonga - Arrow Route">Rancho Cucamonga - Arrow Route</a></li>
                                    <li><a href="/rancho-cucamonga-self-storage-haven/" title="Alta Loma - Haven Ave">Alta Loma - Haven Ave</a></li>
                                    <li><a href="/norco-self-storage/" title="Norco - Cota St​">Norco - Cota St​</a></li>
                                    <li><a href="/azusa-self-storage/" title="Azusa - West Foothill Blvd">Azusa - West Foothill Blvd</a></li>
                                </ul>
                            </div>
                            <div id="submenuContent-view-4" class="pss-navbar__submenu-drop pss-navbar--submenu-links">
                                <ul class="list-unstyled">
                                    <li><a href="/san-juan-capistrano-self-storage/" title="San Juan Capistrano - Valle Rd">San Juan Capistrano - Valle Rd</a></li>
                                </ul>
                            </div>
                            <div id="submenuContent-view-5" class="pss-navbar__submenu-drop pss-navbar--submenu-links">
                                <ul class="list-unstyled">
                                    <li><a href="/walnut-creek-self-storage/" title="Walnut Creek - Saranap Ave">Walnut Creek - Saranap Ave</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END Expand tier 1 -->
            </li>`;

            document.querySelector('.storage-info-dropdown').insertAdjacentHTML('beforebegin', viewLocations);

            const viewLocationsLink = document.querySelector('.view-locations-dropdown .nav-link');
            const viewLocationsDropdown = document.querySelector('.view-locations-dropdown .dropdown-menu');


            viewLocationsLink.addEventListener('mouseover', function() {
                viewLocationsDropdown.classList.add('show');
            });
            viewLocationsDropdown.addEventListener('mouseleave', function() {
                viewLocationsDropdown.classList.remove('show');
            });

            const dropdownItems = document.querySelectorAll('#viewLocationsDropdown .pss-navbar__dropdown-item a');
            const submenuDrops = document.querySelectorAll('#viewLocationsDropdown .pss-navbar__submenu-drop');

            dropdownItems.forEach(function(item) {
                item.addEventListener('mouseover', function(event) {
                    event.preventDefault();
                    submenuDrops.forEach(function(drop) {
                        drop.classList.remove('active');
                    });
                    const targetTab = this.getAttribute('data-tab');
                    const targetContent = document.querySelector(targetTab);

                    if (targetContent) {
                        targetContent.classList.add('active');
                    }
                });
            });

            const navLinks = document.querySelectorAll('.navbar-nav .pss-navbar__nav-link > a');
            navLinks.forEach(link => {
                link.addEventListener('mouseover', () => {
                    const listItem = link.closest('.pss-navbar__nav-link');
                    if (!listItem.classList.contains('view-locations-dropdown')) {
                        const dropdownSubmenu = document.querySelector('.view-locations-dropdown #viewLocationsDropdown');
                        if (dropdownSubmenu && dropdownSubmenu.classList.contains('show')) {
                            dropdownSubmenu.classList.remove('show'); 
                        }
                    } else {
                        const storageInfoDropdown = document.querySelector('#storageInfoDropdown');
                        const featuresDropdown = document.querySelector('#featuresDropdown');
                        const companyDropdown = document.querySelector('#companyDropdown');

                        [storageInfoDropdown, featuresDropdown, companyDropdown].forEach(dropdown => {
                            if (dropdown && dropdown.classList.contains('show')) {
                                dropdown.classList.remove('show');
                            }
                        });
                    }
                });
            });

        }
        updateLabels();
        
    }
}

// Check condition and initialize the code
const checkCondition = setInterval(() => {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
