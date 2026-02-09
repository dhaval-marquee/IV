function loadTestCode() {
    const tagClass = 'header-new';
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains(tagClass)) {
        bodyEle.classList.add(tagClass);
        // cloudinary URL
        const Curl = `//res.cloudinary.com/ignite-visibility/image/upload`

        // Hide unused data
        document.querySelector('.header-new header .nav-secondary__logo-wrap').remove();

        // Topbar
        var topbarLeft = `<div class="carousel-main">
            <div class="splide">
                <div class="splide__track">
                    <ul class="splide__list">
                        <li class="splide__slide">
                            <p class="top-left-text">Free Shipping available on most orders $149.00 & up. <a href="/shop/shipping">Get Details. »</a></p>
                        </li>
                        <li class="splide__slide">
                            <p class="top-left-text">Celebrating 35 years of quality gear and expert support. <a href="/about-us">Our Story »</a></p>
                        </li>
                        <!-- Add more slides as needed -->
                    </ul>
                </div>
            </div>
        </div>`;
        document.querySelector('.nav-secondary__links .nav-secondary__support').insertAdjacentHTML('afterbegin', topbarLeft);
        var textRegion = `Region:`;
        document.querySelector('.header-new header .nav-secondary__support-links li#navigation-region span').insertAdjacentHTML('afterbegin', textRegion);

        // navigation-region
        var navRegion = document.querySelector('.header-new header .nav-secondary__support-links li#navigation-region').innerHTML;

        // My Account
        document.querySelector('.header-new header .nav-secondary__support-links li#navigation-account button').remove();
        document.querySelector('.header-new header .nav-secondary__support-links li#navigation-account .nav-secondary__dropdown').remove();
        var myAccount = `<div class="account"><a href="/MyAccount/">Sign In</a><span>/</span><a href="/MyAccount/?goto=orderHistory">Order Status</a></div>`;
        document.querySelector('.header-new header .nav-secondary__support-links li#navigation-account').insertAdjacentHTML('afterbegin', myAccount);

        // Second Header 
        var cartIcon = `<svg class="cartIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34px" height="27px" viewBox="0 0 34 27" version="1.1">
                            <title>Combined Shape</title>
                            <g id="Responsive" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="NavWrapperV3-2023-pullmenu-responsive-TABLET-V5--2" transform="translate(-718, -81)" fill="#0A1934" fill-rule="nonzero">
                                    <path d="M720.000419,81.0828337 L724.485283,81.9547927 C724.871556,82.029893 725.177877,82.3245496 725.267908,82.707618 C726.675135,88.6950958 726.675135,88.6950958 727.570643,92.5053089 L727.686665,92.9989591 C727.939707,94.0756056 728.07239,94.6401479 728.155415,94.9934026 L746.11257,94.9994531 L746.127311,94.9578546 C746.389087,94.153258 746.404486,94.1059288 746.769782,92.9831527 L746.842521,92.7595819 C747.249551,91.5085324 747.507668,90.7151839 747.756964,89.9489466 L747.856544,89.642877 C748.255639,88.416217 748.679971,87.111987 749.703361,83.9664911 C749.874231,83.4413036 750.438497,83.1540728 750.963685,83.324943 C751.488872,83.4958132 751.776103,84.0600793 751.605233,84.5852668 C750.581843,87.7307627 750.157511,89.0349927 749.758416,90.2616527 L749.658836,90.5677223 C749.40954,91.3339596 749.151423,92.1273081 748.744393,93.3783576 C748.487291,94.1685863 748.381426,94.4939746 748.281222,94.8019625 L748.220614,94.9882467 C748.168733,95.1477093 748.110988,95.3251939 748.029183,95.5766303 C747.919915,95.9124775 747.919915,95.9124775 747.850381,96.1261985 C747.823063,96.2101603 747.823063,96.2101603 747.80568,96.2635905 C747.798851,96.2845809 747.798851,96.2845809 747.794505,96.2979385 C747.791284,96.3078374 747.791284,96.3078374 747.791013,96.3086723 L747.748192,96.4182978 C747.586589,96.7696046 747.233555,97 746.839844,97 L727.364746,97 C727.303418,97 727.243154,96.9944241 727.1845,96.9837035 C727.144915,96.990342 727.103821,96.9954797 727.061965,96.9980783 C725.204201,97.1134162 724.476563,97.7555448 724.476563,99.109375 C724.476563,100.435636 725.164477,101 727,101 L748.010408,101 C748.562692,101 749.010408,101.447715 749.010408,102 C749.010408,102.482115 748.669233,102.884544 748.21515,102.979022 C748.702622,103.510238 749,104.220391 749,105 C749,106.656854 747.656854,108 746,108 C744.343146,108 743,106.656854 743,105 C743,104.231693 743.288818,103.530843 743.763805,103.000098 L730.236195,103.000098 C730.711182,103.530843 731,104.231693 731,105 C731,106.656854 729.656854,108 728,108 C726.343146,108 725,106.656854 725,105 C725,104.189818 725.321159,103.454647 725.843113,102.914849 C723.695153,102.584972 722.476563,101.274581 722.476563,99.109375 C722.476563,96.8586836 723.790285,95.4746256 726.124165,95.0920709 C726.024133,94.6666912 725.872177,94.0201495 725.623693,92.9628971 C725.298054,91.5773651 725.090829,90.6956629 724.891293,89.8466769 L724.816612,89.5289206 C724.517596,88.2566684 724.20474,86.9255271 723.504347,83.9454881 L723.46857,83.7934531 L719.618721,83.0460725 C719.115312,82.9481983 718.774085,82.4885873 718.812298,81.9893656 L718.827951,81.8736041 C718.933354,81.3314707 719.458286,80.9774307 720.000419,81.0828337 Z" id="Combined-Shape"/>
                                </g>
                            </g>
                        </svg>`
        var featuredTitle = `Featured Items`
        var subArrowMenu = `<img class="arrow-default" src="${Curl}/v1700281141/macsales/SitewideNewHeaderTest/nav-arrow-right.svg" alt="Arrow" />
                            <img class="arrow-hover" src="${Curl}/v1700287960/macsales/SitewideNewHeaderTest/nav-arrow-right-hover.svg" alt="Arrow" />
                            <img class="arrow-mobile" src="${Curl}/v1700288822/macsales/SitewideNewHeaderTest/nav-arrow-right-white.svg" alt="Arrow" />`
        var searchBar = `<form class="nav-primary__search-form" name="GeneralSearchForm" action="/search/" method="get" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="search">
                            <label id="search-label" for="nav-primary-search" class="form__label-visually-hidden">Search</label>
                            <input class="nav-primary__search-input nav-link-menu" id="nav-primary-search" type="text" name="q" value="" placeholder="Search OWC..." autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
                            <button class="nav-primary__search-btn" id="search-site" type="submit" aria-label="search"><svg viewBox="0 0 28 28" width="16" height="16" focusable="false"><use xlink:href="/assets/images/defs.svg#icon-search"></use><title>search</title></svg></button>
                        </form>`
        var secondHeader = `<div class="nav-second">
            <div class="nav-primary__container">
                <div class="nav-second-wrapr">
                    <div class="logo">
                        <a href="/" role="img" aria-label="Other World Computing">
                            <svg class="nav-float__logo-img" viewBox="0 0 84 46"><use xlink:href="/assets/images/defs.svg#owc-logo"></use></svg>
                        </a>
                    </div>
                    <div class="nav-right-menu">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="hamburger-icon">
                                <div class="icon-menu-line"></div>
                                <div class="icon-menu-line"></div>
                                <div class="icon-menu-line"></div>
                            </span>
                            <span class="close-icon"><img src="${Curl}/v1701437138/mitchell1/SitewideNewHeaderTest/close-icon.svg" /></span>
                        </button>
                        <div class="logo logo-mobile">
                            <a href="/" role="img" aria-label="Other World Computing">
                                <svg class="nav-float__logo-img" viewBox="0 0 84 46"><use xlink:href="/assets/images/defs.svg#owc-logo"></use></svg>
                            </a>
                        </div>
                        <div class="header-content">
                            <div class="nav-menu">
                                <ul>
                                    <li class="nav-sub-item">
                                        <a href="javascript:;">
                                            <span class="hamburger-icon">
                                                <div class="icon-menu-line"></div>
                                                <div class="icon-menu-line"></div>
                                                <div class="icon-menu-line"></div>
                                            </span>
                                            Shop
                                            <span class="sub-arrow-icon">
                                                <img class="arrow-mobile" src="${Curl}/v1700288822/macsales/SitewideNewHeaderTest/nav-arrow-right-white.svg" alt="Arrow">
                                            </span>
                                        </a>
                                        <ul class="nav-sub-menu">
                                            <li>
                                                <div class="nav-sub-menu-wrapr">
                                                    <a href="/shop/external-storage">
                                                        <span class="nav-icon">
                                                            <img src="${Curl}/v1700281239/macsales/SitewideNewHeaderTest/externalDrives.svg" />
                                                        </span> 
                                                        <span>External Drives</span>
                                                    </a>
                                                    <span class="sub-arrow-icon">${subArrowMenu}</span>
                                                    <div class="nav-mega-menu">
                                                        <ul>
                                                            <li><a href="/shop/external-storage">Desktop Drives</a></li>
                                                            <li><a href="/shop/external-storage">Portable Drives</a></li>
                                                            <li><a href="/shop/owc-archive-pro">LTO Archival</a></li>
                                                            <li><a href="/shop/external-storage">Optical Drives</a></li>
                                                        </ul>
                                                        <div class="featured-items">
                                                            <h5 class="nav-title">${featuredTitle}</h5>
                                                            <div class="featured-items-list"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="nav-sub-menu-wrapr">
                                                    <a href="/shop/nas-storage">
                                                        <span class="nav-icon">
                                                            <img src="${Curl}/v1700281243/macsales/SitewideNewHeaderTest/networkAttachedStorage.svg" />
                                                        </span> 
                                                        <span>Network Attached Storage</span>
                                                    </a>
                                                    <span class="sub-arrow-icon">${subArrowMenu}</span>
                                                    <div class="nav-mega-menu sub-nav-mega-menu">
                                                        <ul>
                                                            <li>
                                                                <a href="/shop/storage/Enterprise/jupiter">OWC Jupiter</a>
                                                                <span class="sub-arrow-icon">${subArrowMenu}</span>
                                                                <div class="nav-mega-menu">
                                                                    <ul>
                                                                        <li><a href="/shop/storage/Enterprise/jupiter/callisto">Callisto</a></li>
                                                                        <li><a href="/shop/storage/Enterprise/jupiter/kore">Kore</a></li>
                                                                        <li><a href="/shop/jupiter-mini">Mini</a></li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <a href="/shop/jellyfish-nas-storage">OWC Jellyfish</a>
                                                                <span class="sub-arrow-icon">${subArrowMenu}</span>
                                                                <div class="nav-mega-menu">
                                                                    <ul>
                                                                        <li><a href="/solutions/jellyfish/studio">Mobile</a></li>
                                                                        <li><a href="/solutions/jellyfish/tower">Tower</a></li>
                                                                        <li><a href="/solutions/jellyfish/r24">Rack</a></li>
                                                                        <li><a href="/shop/jellyfish-nas-storage">Software</a></li>
                                                                        <li><a href="/shop/jellyfish-nas-storage#how-to-buy">Service & Support</a></li>
                                                                        <li><a href="/solutions/jellyfish/builder">Solution Builder</a></li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="nav-sub-menu-wrapr">
                                                    <a href="/shop/internal_storage/hard_drives_and_SSD">
                                                        <span class="nav-icon">
                                                            <img src="${Curl}/v1700281240/macsales/SitewideNewHeaderTest/internalDrives.svg" />
                                                        </span> 
                                                        <span>Internal Drives</span>
                                                    </a>
                                                    <span class="sub-arrow-icon">${subArrowMenu}</span>
                                                    <div class="nav-mega-menu sub-nav-mega-menu">
                                                        <ul>
                                                            <li>
                                                                <a href="#">Find Your Upgrade Kit</a>
                                                                <span class="sub-arrow-icon">${subArrowMenu}</span>
                                                                <div class="nav-mega-menu">
                                                                    <ul>
                                                                        <li><a href="/shop/storage/Enterprise/jupiter/callisto">MacBook Pro</a></li>
                                                                        <li><a href="/shop/storage/Enterprise/jupiter/kore">iMac</a></li>
                                                                        <li><a href="/shop/jupiter-mini">MacBook Air</a></li>
                                                                        <li><a href="/shop/jupiter-mini">Mac Pro</a></li>
                                                                        <li><a href="/shop/jupiter-mini">Mac mini</a></li>
                                                                        <li><a href="/shop/jupiter-mini">MacBook</a></li>
                                                                        <li><a href="/shop/jupiter-mini">PS4 HDD Upgade Kits</a></li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li class="none-sub-mega"><a href="#">2.5-inch SATA SSDs</a></li>
                                                            <li class="none-sub-mega"><a href="#">PCIe NVMe SSDs</a></li>
                                                            <li class="none-sub-mega"><a href="#">NVMe M.2 SSDs</a></li>
                                                            <li class="none-sub-mega"><a href="#">NVMe U.2 SSDs</a></li>
                                                            <li class="none-sub-mega"><a href="#">SSDs for Mac</a></li>
                                                            <li class="none-sub-mega"><a href="#">3.5" HDDs</a></li>
                                                            <li class="none-sub-mega"><a href="#">2.5" HDDs</a></li>
                                                            <li class="none-sub-mega"><a href="#">Optical Drives</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="nav-sub-menu-wrapr">
                                                    <a href="#">
                                                        <span class="nav-icon">
                                                            <img src="${Curl}/v1700281239/macsales/SitewideNewHeaderTest/docksConnectivity.svg" />
                                                        </span> 
                                                        <span>Docking Stations & Connectivity</span>
                                                    </a>
                                                    <span class="sub-arrow-icon">${subArrowMenu}</span>
                                                    <div class="nav-mega-menu">
                                                        <ul>
                                                            <li><a href="/shop/thunderbolt/thunderbolt-docks">Thunderbolt Docks</a></li>
                                                            <li><a href="/shop/owc-thunderbolt-hub">Thunderbolt Hubs</a></li>
                                                            <li><a href="/shop/thunderbolt-docks/compare#owc-14-port-thunderbolt-3-dock,owc-thunderbolt-dock">USB-C Docks</a></li>
                                                            <li><a href="/shop/thunderbolt/thunderbolt-interface-adapters#expansion-type:ethernet-adapters">Network Adapters</a></li>
                                                            <li><a href="/shop/thunderbolt/thunderbolt-interface-adapters#expansion-type:display-adapter">Video Adapters</a></li>
                                                            <li><a href="/shop/accessories/cables">Cables</a></li>
                                                        </ul>
                                                        <div class="featured-items">
                                                             <h5 class="nav-title">${featuredTitle}</h5>
                                                            <div class="featured-items-list"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="nav-sub-menu-wrapr">
                                                    <a href="#">
                                                        <span class="nav-icon">
                                                            <img src="${Curl}/v1700281241/macsales/SitewideNewHeaderTest/memoryCards.svg" />
                                                        </span> 
                                                        <span>Memory Cards & Readers</span>
                                                    </a>
                                                    <span class="sub-arrow-icon">${subArrowMenu}</span>
                                                    <div class="nav-mega-menu">
                                                        <ul>
                                                            <li><a href="/shop/memory-cards/atlas-ultra-sd-v90">Memory Cards</a></li>
                                                            <li><a href="/shop/memory-cards/atlas-pro-sd-v60">Memory Card Readers</a></li>
                                                        </ul>
                                                        <div class="featured-items">
                                                             <h5 class="nav-title">${featuredTitle}</h5>
                                                            <div class="featured-items-list"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="nav-sub-menu-wrapr">
                                                    <a href="#">
                                                        <span class="nav-icon">
                                                            <img src="${Curl}/v1700281240/macsales/SitewideNewHeaderTest/macs.svg" />
                                                        </span> 
                                                        <span>Apple & Macs</span>
                                                    </a>
                                                    <span class="sub-arrow-icon">${subArrowMenu}</span>
                                                    <div class="nav-mega-menu">
                                                        <ul>
                                                            <li><a href="/configure-my-mac/macbook-pro">MacBook Pro</a></li>
                                                            <li><a href="/configure-my-mac/macbook-air">MacBook Air & MacBook</a></li>
                                                            <li><a href="/configure-my-mac/imac">iMac & iMac Pro</a></li>
                                                            <li><a href="/configure-my-mac/mac-pro">Mac Pro</a></li>
                                                            <li><a href="/configure-my-mac/mac-studio">Mac Studio</a></li>
                                                            <li><a href="/configure-my-mac/mac-mini">Mac Mini</a></li>
                                                            <li><a href="/shop/apple/ipad">iPad & iPad Pro</a></li>
                                                            <li><a href="/shop/apple/iphone">iPhone</a></li>
                                                            <li><a href="/shop/apple/watch">Apple Watch</a></li>
                                                            <li><a href="/shop/apple/displays">Apple Display</a></li>
                                                            <li><a href="/shop/apple/apple-tv">Apple TV</a></li>
                                                            <li><a href="/shop/apple/specials">Apple Accessories</a></li>
                                                            <li><a href="/trade-in-your-mac">Sell Your Mac</a></li>
                                                            <li><a href="#">All Apple & Macs</a></li>

                                                        </ul>
                                                        <div class="featured-items">
                                                             <h5 class="nav-title">${featuredTitle}</h5>
                                                            <div class="featured-items-list"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="nav-sub-menu-wrapr">
                                                    <a href="#">
                                                        <span class="nav-icon">
                                                            <img src="${Curl}/v1700281246/macsales/SitewideNewHeaderTest/batteries.svg" />
                                                        </span> 
                                                        <span>Batteries & Power</span>
                                                    </a>
                                                    <span class="sub-arrow-icon">${subArrowMenu}</span>
                                                    <div class="nav-mega-menu sub-nav-mega-menu">
                                                        <ul>
                                                            <li>
                                                                <a href="#">Find Your Upgrade Kit</a>
                                                                <span class="sub-arrow-icon">${subArrowMenu}</span>
                                                                <div class="nav-mega-menu">
                                                                    <ul>
                                                                        <li><a href="/configure-my-mac/macbook-pro">MacBook Pro</a></li>
                                                                        <li><a href="/shop/laptop-batteries/macbook-air">MacBook Air</a></li>
                                                                        <li><a href="/shop/laptop-batteries/macbook">MacBook</a></li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li class="none-sub-mega"><a href="/shop/laptop-batteries/macbook-air">Power Adapters</a></li>
                                                            <li class="none-sub-mega"><a href="/shop/laptop-batteries/macbook">Portable Powerbanks</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="nav-sub-menu-wrapr">
                                                    <a href="/shop/software">
                                                        <span class="nav-icon">
                                                            <img src="${Curl}/v1700281245/macsales/SitewideNewHeaderTest/softwareApps.svg" />
                                                        </span> 
                                                        <span>Software & Apps</span>
                                                    </a>
                                                    <span class="sub-arrow-icon">${subArrowMenu}</span>
                                                    <div class="nav-mega-menu">
                                                        <ul>
                                                            <li><a href="/shop/argest-software>ArGest</a></li>
                                                            <li><a href="/shop/copy-that">Copy That Mobile</a></li>
                                                            <li><a href="/item/OWC/DA10/">Disk Aware</a></li>
                                                            <li><a href="/solutions/dock-ejector">Dock Ejector</a></li>
                                                            <li><a href="/shop/innergize">Innergize</a></li>
                                                            <li><a href="/shop/macdrive">MacDrive</a></li>
                                                            <li><a href="/shop/softraid">SoftRAID</a></li>
                                                        </ul>
                                                        <div class="featured-items">
                                                             <h5 class="nav-title">${featuredTitle}</h5>
                                                            <div class="featured-items-list"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="nav-sub-menu-wrapr">
                                                    <a href="/shop/accessories/cables">
                                                        <span class="nav-icon">
                                                            <img src="${Curl}/v1700281238/macsales/SitewideNewHeaderTest/cables.svg" />
                                                        </span> 
                                                        <span>Cables</span>
                                                    </a>
                                                    <span class="sub-arrow-icon">${subArrowMenu}</span>
                                                    <div class="nav-mega-menu sub-nav-mega-menu">
                                                        <ul>
                                                            <li>
                                                                <a href="/shop/Thunderbolt/OWC/Thunderbolt-Cables">Thunderbolt Cables</a>
                                                                <span class="sub-arrow-icon">${subArrowMenu}</span>
                                                                <div class="nav-mega-menu">
                                                                    <ul>
                                                                        <li><a href="/shop/Thunderbolt/OWC/Thunderbolt-Cables">Thunderbolt 2 and Thunderbolt </a></li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <a href="/shop/Thunderbolt/OWC/Thunderbolt-Cables">USB Cables</a>
                                                                <span class="sub-arrow-icon">${subArrowMenu}</span>
                                                                <div class="nav-mega-menu">
                                                                    <ul>
                                                                        <li><a href="/shop/cables/usb">USB Cables</a></li>
                                                                        <li><a href="/shop/cables/usb-c">USB USB-C</a></li>

                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li class="none-sub-mega"><a href="/shop/cables/lightning">Lightning Cables</a></li>
                                                            <li class="none-sub-mega"><a href="/item/OWC/CAT725GRY/">Ethernet Cables</a></li>
                                                            <li class="none-sub-mega"><a href="/shop/cables/video">Video Cables</a></li>
                                                            <li class="none-sub-mega"><a href="/shop/cables/power">Power Cables</a></li>
                                                            <li class="none-sub-mega"><a href="#">Cable Adapters</a></li>
                                                            <li class="none-sub-mega"><a href="/shop/cables/audio">Audio Cables</a></li>
                                                            <li class="none-sub-mega"><a href="/shop/cables/firewire">FireWire Cables</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="nav-sub-menu-wrapr">
                                                    <a href="#">
                                                        <span class="nav-icon">
                                                            <img src="${Curl}/v1700281245/macsales/SitewideNewHeaderTest/accessories.svg" />
                                                        </span> 
                                                        <span>Accessories</span>
                                                    </a>
                                                    <span class="sub-arrow-icon">${subArrowMenu}</span>
                                                    <div class="nav-mega-menu">
                                                        <ul>
                                                            <li><a href="/shop/accessories/tools-toolkits">Tools & Toolkits</a></li>
                                                            <li><a href="#">Mounts & Adapters</a></li>
                                                            <li><a href="/shop/video">Video & Display Adapters</a></li>
                                                            <li><a href="#">Hardware Accessories</a></li>
                                                            <li><a href="#">Service Parts</a></li>
                                                        </ul>
                                                        <div class="featured-items">
                                                             <h5 class="nav-title">${featuredTitle}</h5>
                                                            <div class="featured-items-list"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="nav-sub-menu-wrapr">
                                                    <a href="#">
                                                        <span class="nav-icon">
                                                            <img src="${Curl}/v1700281241/macsales/SitewideNewHeaderTest/memory.svg" />
                                                        </span> 
                                                        <span>Memory</span>
                                                    </a>
                                                    <span class="sub-arrow-icon">${subArrowMenu}</span>
                                                    <div class="nav-mega-menu sub-nav-mega-menu">
                                                        <ul>
                                                            <li>
                                                                <a href="/shop/memory-cards/atlas-ultra-sd-v90">Find Your Upgrade Kit</a>
                                                                <span class="sub-arrow-icon">${subArrowMenu}</span>
                                                                <div class="nav-mega-menu">
                                                                    <ul>
                                                                        <li><a href="/shop/apple/memory/iMac">iMac</a></li>
                                                                        <li><a href="/shop/memory/Apple_MacBook_MacBook_Pro/Upgrade/Macbook_selector">MacBook</a></li>
                                                                        <li><a href="/shop/memory/Apple_MacBook_MacBook_Pro/Upgrade">MacBook Pro</a></li>
                                                                        <li><a href="/shop/memory/Mac-Pro-Memory">Mac Pro</a></li>
                                                                        <li><a href="/shop/memory/owc/apple-imac-pro">iMac Pro</a></li>
                                                                        <li><a href="/shop/mac-mini">Mac mini</a></li>
                                                                        <li><a href="/shop/apple/memory/legacy">Legacy Mac Memory</a></li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="nav-sub-menu-wrapr">
                                                    <a href="/shop/expansion-cards/pcie">
                                                        <span class="nav-icon">
                                                            <img src="${Curl}/v1700281243/macsales/SitewideNewHeaderTest/PCIeExpansion.svg" />
                                                        </span> 
                                                        <span>PCIe Expansion</span>
                                                    </a>
                                                    <span class="sub-arrow-icon">${subArrowMenu}</span>
                                                    <div class="nav-mega-menu">
                                                        <ul>
                                                            <li><a href="/shop/thunderbolt/thunderbolt-expansion#expansion-type:external-gpu">External GPUs</a></li>
                                                            <li><a href="/shop/thunderbolt/thunderbolt-expansion#expansion-type:pcie-expansion">External PCIe</a></li>
                                                            <li><a href="/shop/thunderbolt/thunderbolt-expansion#expansion-type:external-storage">PCIe Storage</a></li>
                                                            <li><a href="/shop/owc-u2-nvme-interchange-system">U.2 Interchange</a></li>
                                                            <li><a href="/search/?filter.catidpath=4315&filter.dimension_external_ports_145=10Gb%20Ethernet">PCIe Network Adapters</a></li>
                                                        </ul>
                                                        <div class="featured-items">
                                                             <h5 class="nav-title">${featuredTitle}</h5>
                                                            <div class="featured-items-list"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="nav-sub-menu-wrapr">
                                                    <a href="#">
                                                        <span class="nav-icon">
                                                            <img src="${Curl}/v1700281242/macsales/SitewideNewHeaderTest/Mouse.svg" />
                                                        </span> 
                                                        <span>Peripherals</span>
                                                    </a>
                                                    <span class="sub-arrow-icon">${subArrowMenu}</span>
                                                    <div class="nav-mega-menu">
                                                        <ul>
                                                            <li><a href="/shop/apple/displays">Displays</a></li>
                                                            <li><a href="/search/?filter.catidpath=11/67/2858">Video Cards</a></li>
                                                            <li><a href="#">Keyboads</a></li>
                                                            <li><a href="/shop/accessories/Mouse_Mice">Mice</a></li>
                                                            <li><a href="/search/?&filter.catidpath=2575/4674">Microphones</a></li>
                                                            <li><a href="/search/?&filter.catidpath=2575/4673">Audio Interfaces</a></li>
                                                        </ul>
                                                        <div class="featured-items">
                                                             <h5 class="nav-title">${featuredTitle}</h5>
                                                            <div class="featured-items-list"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="nav-sub-menu-wrapr">
                                                    <a href="/shop/specials">
                                                        <span class="nav-icon">
                                                            <img src="${Curl}/v1700281239/macsales/SitewideNewHeaderTest/deals.svg" />
                                                        </span> 
                                                        <span>Deals</span>
                                                    </a>
                                                    <span class="sub-arrow-icon">${subArrowMenu}</span>
                                                    <div class="nav-mega-menu">
                                                        <ul>
                                                            <li><a href="/shop/macsales_newsletter">Newsletter Sign Up (Email Deals)</a></li>
                                                            <li><a href="/shop/specials">Specials</a></li>
                                                            <li><a href="/shop/garage_sale">Garage Sales</a></li>
                                                            <li><a href="/search/?q=open%20box&filter.condition=New%20(Open%20Box)">Open Box (this could be a new search filter)</a></li>
                                                        </ul>
                                                        <div class="featured-items">
                                                             <h5 class="nav-title">${featuredTitle}</h5>
                                                            <div class="featured-items-list"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="nav-sub-menu-wrapr">
                                                    <a href="/blog/">
                                                        <span class="nav-icon">
                                                            <img src="${Curl}/v1700281247/macsales/SitewideNewHeaderTest/blog.svg" />
                                                        </span> 
                                                        <span>Blog</span>
                                                    </a>
                                                    <span class="sub-arrow-icon">${subArrowMenu}</span>
                                                    <div class="nav-mega-menu">
                                                        <ul>
                                                            <li><a href="/blog/">Rocketyard</a></li>
                                                        </ul>
                                                        <div class="featured-items">
                                                             <h5 class="nav-title">${featuredTitle}</h5>
                                                            <div class="featured-items-list"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="nav-sub-menu-wrapr">
                                                    <a href="#">
                                                        <span class="nav-icon">
                                                            <img src="${Curl}/v1700281244/macsales/SitewideNewHeaderTest/setting.svg" />
                                                        </span> 
                                                        <span>Upgrade Support</span>
                                                    </a>
                                                    <span class="sub-arrow-icon">${subArrowMenu}</span>
                                                    <div class="nav-mega-menu">
                                                        <ul>
                                                            <li><a href="/upgrades/">My Upgrades</a></li>
                                                            <li><a href="/installvideos">DIY Install Videos</a></li>
                                                            <li><a href="/tech_center/basictrob.cfm">Manuals, Drivers, Firmware Updates</a></li>
                                                            <li><a href="/Service/Knowledgebase/">FAQ Knowledge Base</a></li>
                                                            <li><a href="/support/windows-drive-formatting">Drive Formatting Tips</a></li>
                                                            <li><a href="/tech_center/support/archive.cfm">Support Archive</a></li>
                                                            <li><a href="/shop/upgrade-service">Send In Service Program</a></li>
                                                        </ul>
                                                        <div class="featured-items">
                                                             <h5 class="nav-title">${featuredTitle}</h5>
                                                            <div class="featured-items-list"></div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/shop/specials"> Specials <span class="tag-item">488</span></a>
                                    </li>
                                    <li>
                                        <a href="/shop/garage_sale"> Clearance  <span class="tag-item">288</span></a>
                                    </li>
                                    <li>
                                        <a href="/shop/new-this-month">What's New</a>
                                    </li>
                                    <li class="nav-mobile-item">
                                        <ul>
                                            <li><a href="tel:8002754576"><img width="13" height="13" src="${Curl}/v1701437138/mitchell1/SitewideNewHeaderTest/phone-icon-blue.svg" /> USA 1-800-275-4576</a></li>
                                            <li><a href="tel:18153388685">INTL +1-815-338-8685</a></li>
                                            <li><a href="/installvideos">Install Videos</a></li>
                                            <li class="nav-mobile-region">${navRegion}</li>
                                            <li>
                                                <a aria-label="macsales.com live chat window" aria-expanded="false" href="/Service/" id="livechat_header_on" onclick="liveagent.startChat('573410000000U6L');return false;" class="xlive-chat-hidden">Chat</a>
                                            </li>
                                            <li><a href="/Service/">Support</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="nav-search">
                            ${searchBar}
                        </div>
                        <div class="right-nav-part"><div class="nav-cart"></div></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav-search-mobile">${searchBar}</div>`;
        if(!document.querySelector('.nav-second')){
            document.querySelector('.header-new header .nav-secondary').insertAdjacentHTML('afterend', secondHeader);
        }
        document.querySelector('#navigation-cart').insertAdjacentHTML("afterbegin", cartIcon);

        // Cart
        var cartDiv = document.querySelector('.nav-secondary__cart-container');
        var cartNewElement = document.querySelector('.nav-second .nav-cart');
        if (cartDiv && cartNewElement) {
            cartNewElement.appendChild(cartDiv);
        }

        // Nav Mobile Region
        var navRegionMobile = document.querySelector('.nav-mobile-region');
        var navRegionForm = document.querySelector('.nav-mobile-item > ul > li > .nav-secondary__dropdown-region');
        navRegionMobile.addEventListener('click', function(event) {
          event.stopPropagation();
          toggleActiveClass();
        });
        document.addEventListener('click', function(event) {
          var isClickInsideNavRegionMobile = navRegionMobile.contains(event.target);
          var isClickInsideRegionForm = navRegionForm.contains(event.target);
          if (!isClickInsideNavRegionMobile && !isClickInsideRegionForm) {
            navRegionForm.classList.remove('active');
          }
        });
        function toggleActiveClass() {
            var navRegionForm = document.querySelector('.nav-mobile-item > ul > li > .nav-secondary__dropdown-region');
            navRegionForm.classList.toggle('active');
        }

        document.querySelectorAll('.header-new .nav-mobile-region .nav-secondary__dropdown-region .nav-secondary__dropdown-link-region a picture source').forEach(function(sourceElement) {
            sourceElement.removeAttribute('media');
        });

        // Featured Item
        var contentPage = "//eshop.macsales.com/shop/specials";
        var featuredItemsDivs = document.querySelectorAll('.featured-items-list');
        function fetchAndAppendContent(featuredItemsDiv) {
            fetch(contentPage)
                .then(response => response.text())
                .then(html => {
                    var tempContainer = document.createElement('div');
                    tempContainer.innerHTML = html;
                    var publicationSection = tempContainer.querySelector('[name="top-of-results"] + .horizontal-scroll__flex');
                    if (publicationSection) {
                        featuredItemsDiv.innerHTML = '';
                        featuredItemsDiv.appendChild(publicationSection);
                    } else {
                        console.error('Publication section not found in the loaded content.');
                    }
                })
                .catch(error => console.error('Error loading content:', error));
        }
        featuredItemsDivs.forEach(fetchAndAppendContent);

        // User account 
        const navAccountUser = document.querySelector('.header-new header .nav-secondary__support-links li#navigation-account');
        const secondNavUser = document.querySelector('.header-new header .nav-second-wrapr .nav-cart');
        if (navAccountUser && secondNavUser) {
            secondNavUser.parentNode.insertBefore(navAccountUser, secondNavUser);
        }

        // Mobile Menu 
        var NavMobile = document.querySelector('.navbar-toggler');
        NavMobile.addEventListener('click', function() {
            var NavMenuMobile = document.querySelector('.header-content');
            if (NavMenuMobile.classList.contains('active-menu')) {
                NavMenuMobile.classList.remove('active-menu');
            } else {
                NavMenuMobile.classList.add('active-menu');
            }

            var NavMenuMobileBody = document.body;
            if(NavMenuMobileBody.classList.contains('menu-open')){
                NavMenuMobileBody.classList.remove('menu-open');
            } else {
                NavMenuMobileBody.classList.add('menu-open');
            }
        });

        // Sub Menu
        var subMenuAnchors = document.querySelectorAll('.nav-sub-menu > li > .nav-sub-menu-wrapr > .sub-arrow-icon');
        var subSubMenuAnchors = document.querySelectorAll('.sub-nav-mega-menu ul li .sub-arrow-icon');
        var activeAnchor = null;
        function toggleMenu(anchor) {
            anchor.classList.toggle('active-sub-mega-menu');
            var navMegaMenu = anchor.nextElementSibling;

            if (navMegaMenu) {
                navMegaMenu.classList.toggle('active-sub-mega-menu');
            }

            if (anchor.getAttribute('href') && !anchor.getAttribute('href').startsWith('#')) {
                return;
            }
        }
        subMenuAnchors.forEach(function (anchor) {
            anchor.addEventListener('click', function (event) {
                var activeSubMenuAnchor = document.querySelector('.nav-sub-menu > li > .nav-sub-menu-wrapr > .sub-arrow-icon.active-sub-mega-menu');
                if (activeSubMenuAnchor && activeSubMenuAnchor !== anchor) {
                    toggleMenu(activeSubMenuAnchor);
                }
        
                toggleMenu(anchor);
                event.preventDefault();
            });
        });
        
        subSubMenuAnchors.forEach(function (anchor) {
            anchor.addEventListener('click', function (event) {
                var activeSubSubMenuAnchor = document.querySelector('.sub-nav-mega-menu ul li .sub-arrow-icon.active-sub-mega-menu');
                if (activeSubSubMenuAnchor && activeSubSubMenuAnchor !== anchor) {
                    toggleMenu(activeSubSubMenuAnchor);
                }
                toggleMenu(anchor);
                event.preventDefault();
            });
        });

        var subMenuMobile = document.querySelector('.nav-sub-item a');
        subMenuMobile.addEventListener('click', function(){
            var navSubMenu = document.querySelector('.nav-sub-menu');
            navSubMenu.classList.toggle('active-sub-menu');
        });

        // Sticky Header
        var stickyHeader = document.body;
        function addScrolledClass() {
            stickyHeader.classList.add('header-sticky');
        }
        function removeScrolledClass() {
            stickyHeader.classList.remove('header-sticky');
        }
        window.addEventListener('scroll', function() {
            if (window.scrollY > 0) {
                addScrolledClass();
            } else {
                removeScrolledClass();
            }
        });

        // On hover nav sub
        var navSubItem = document.querySelector('.nav-second .nav-sub-item');
        navSubItem.addEventListener('mouseover', function () {
            document.body.classList.add('hovered-menu');
        });
        navSubItem.addEventListener('mouseout', function () {
            document.body.classList.remove('hovered-menu');
        });

        // Topbar Slider
        function loadStylesheet(url){
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = url;
            document.head.appendChild(link);
        }
        loadStylesheet('//cdn.jsdelivr.net/npm/@splidejs/splide@3.0.9/dist/css/splide.min.css');
        function loadScript(url, callback){
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            script.onload = callback;
            document.head.appendChild(script);
        }
        loadScript('//cdn.jsdelivr.net/npm/@splidejs/splide@3.0.9/dist/js/splide.min.js', function () {
            var splide = new Splide('.splide', {
                perPage: 1,
                rewind : true,
                type : 'loop',
                arrows: false,
                pagination : false,
                autoplay: true,
                interval: 6000,
                gap: 0
            });
            splide.mount();
        });
    }
}
loadTestCode();