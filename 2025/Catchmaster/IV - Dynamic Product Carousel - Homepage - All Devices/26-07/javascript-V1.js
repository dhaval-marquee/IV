function loadTestCode() {
    if (!document.body.classList.contains('iv-dynamic-product')) {
        document.body.classList.add('iv-dynamic-product');

        // 1. Load Slick CSS & JS dynamically
        const head = document.head;

        const slickCSS = document.createElement('link');
        slickCSS.rel = 'stylesheet';
        slickCSS.href = 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css';
        head.appendChild(slickCSS);

        const slickThemeCSS = document.createElement('link');
        slickThemeCSS.rel = 'stylesheet';
        slickThemeCSS.href = 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css';
        head.appendChild(slickThemeCSS);

        const slickJS = document.createElement('script');
        slickJS.src = 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';

        slickJS.onload = () => {
            initDynamicProductBlock();
        };
        head.appendChild(slickJS);
    }

    function initDynamicProductBlock() {
        const productData = [{
                'Rodent': [{
                        "title": "Pro-Strength Mouse & Insect Glue Board Traps",
                        "img": "https://www.catchmaster.com/cdn/shop/products/Shopify_Product_Images-B005IMZ9K6_1.webp?v=1746123513&width=990",
                        "url": "https://www.catchmaster.com/products/pro-strength-mouse-traps-indoor-sticky-glue-boards-bulk",
                        "price": "$26.99 USD"
                    },
                    {
                        "title": "Max-Catch Non-Toxic Scented Glue Traps",
                        "img": "https://www.catchmaster.com/cdn/shop/files/ShopifyProductImages-36MAX_1_d923072f-da55-4202-b231-d716285e3226.jpg?v=1746123463&width=990",
                        "url": "https://www.catchmaster.com/products/max-catch-sticky-glue-mouse-traps-original-scent",
                        "price": "From $23.49 USD"
                    },
                    {
                        "title": "Non-Toxic Rat, Mouse & Insect Glue Traps",
                        "img": "https://www.catchmaster.com/cdn/shop/files/ShopifyProductImages-402_6-Pack.jpg?v=1730082927&width=990",
                        "url": "https://www.catchmaster.com/products/rat-mouse-snake-insect-sticky-glue-trays-indoors",
                        "price": "From $15.99 USD"
                    },
                    {
                        "title": "Jumbo Glue Traps for Large Rodents and Other Pests",
                        "img": "https://www.catchmaster.com/cdn/shop/files/ShopifyProductImages-1_399f40b6-49fd-44b0-b1db-d5ac784d67bb.jpg?v=1746123992&width=990",
                        "url": "https://www.catchmaster.com/products/jumbo-glue-trays-for-larger-rats",
                        "price": "$41.49 USD"
                    },
                    {
                        "title": "Pro Series Multi-Catch Mouse Trap & Glue Board Traps",
                        "img": "https://www.catchmaster.com/cdn/shop/products/Shopify_Product_Images-multicatch_hero_606-AM-3E.webp?v=1702323157&width=990",
                        "url": "https://www.catchmaster.com/products/pro-series-multi-catch-mouse-trap-glue-board",
                        "price": "From $31.99 USD"
                    },
                ],
            },
            {
                'Fly & Gnat': [{
                        "title": "Giant Fly Roll Glue Strip Trap",
                        "img": "https://www.catchmaster.com/cdn/shop/products/Shopify_Product_Images-931-AM-1-AL_Hero_2600x2600_18fc239b-9188-4266-a502-344b7c74234c.webp?v=1746123677&width=990",
                        "url": "https://www.catchmaster.com/products/giant-fly-glue-trap",
                        "price": "From $9.49 USD"
                    },
                    {
                        "title": "Fly Window Strip Traps",
                        "img": "https://www.catchmaster.com/cdn/shop/products/Shopify_Product_Images-B001QBPP66_1.webp?v=1746123575&width=990",
                        "url": "https://www.catchmaster.com/products/fly-window-traps",
                        "price": "From $10.99 USD"
                    },
                    {
                        "title": "PRO Series Outdoor Fly Bag Trap With Food-Based Lure",
                        "img": "https://www.catchmaster.com/cdn/shop/files/Shopify_Product_Images-Fly_Bag_New_Branding_1_2pack.jpg?v=1750181905&width=990",
                        "url": "https://www.catchmaster.com/products/pro-series-bulk-disposable-fly-bag-trap",
                        "price": "From $12.99 USD"
                    },
                    {
                        "title": "Scented Fly & Bug Ribbon Traps",
                        "img": "https://www.catchmaster.com/cdn/shop/products/Shopify_Product_Images-9144AM-20_Hero_2600x2600_baa1b891-edf8-4e83-9739-ee7aee283e72.webp?v=1746124069&width=990",
                        "url": "https://www.catchmaster.com/products/scented-bug-fly-ribbon",
                        "price": "$12.99 USD"
                    },
                    {
                        "title": "3\"x5\" Double-Sided Yellow Sticky Card Insect Trap",
                        "img": "https://www.catchmaster.com/cdn/shop/files/ShopifyProductImages-980-Y_1.jpg?v=1730903922&width=990",
                        "url": "https://www.catchmaster.com/products/double-sided-yellow-sticky-card-insect-trap",
                        "price": "From $31.99 USD"
                    },
                ],
            },
            {
                'Fly Lights': [{
                        "title": "Vector 30 UV Light Fly Trap",
                        "img": "https://www.catchmaster.com/cdn/shop/products/Shopify_Product_Images-Vector30_1.webp?v=1746125110&width=990",
                        "url": "https://www.catchmaster.com/products/vector-thirty",
                        "price": "$185.49 USD"
                    },
                    {
                        "title": "Vector 15 UV Light Trap for Flying Insects",
                        "img": "https://www.catchmaster.com/cdn/shop/files/ShopifyProductImages-VectorUVLightFlyTrap_1_B0C44B6YMK.jpg?v=1746125116&width=990",
                        "url": "https://www.catchmaster.com/products/vector-fifteen",
                        "price": "$150.49 USD"
                    },
                    {
                        "title": "Vector Optima UV Light Fly Traps, White",
                        "img": "https://www.catchmaster.com/cdn/shop/files/Shopify_Product_Images-B0CHLM66LF_Hero.jpg?v=1746125078&width=990",
                        "url": "https://www.catchmaster.com/products/vector-optima-white-uv-fly-light",
                        "price": "$133.49 USD"
                    },
                    {
                        "title": "Vector UV Fly Light Trap Replacement Boards",
                        "img": "https://www.catchmaster.com/cdn/shop/files/Shopify_Product_Images-Vector_Replacement_Boards_1_907_1.jpg?v=1746125091&width=990",
                        "url": "https://www.catchmaster.com/products/vector-uv-fly-light-replacement-boards-with-pheremones",
                        "price": "Regular price$34.99 USD"
                    },
                    {
                        "title": "Vector Universal Fly Light Trap Replacement Glue Boards",
                        "img": "https://www.catchmaster.com/cdn/shop/files/ShopifyProductImages-1_8d235100-cefb-4150-b1f7-86e49db1ee88.jpg?v=1746125034&width=990",
                        "url": "https://www.catchmaster.com/products/catchmaster-vector-universal-trap-replacement-glue-boards-12-pack",
                        "price": "$34.99 USD"
                    },
                ],
            },
            {
                'Mosquito & Wasp': [{
                        "title": "Oasis Ovi-Mini Water Jar & Glue Board Mosquito Trap Set",
                        "img": "https://www.catchmaster.com/cdn/shop/products/Shopify_Product_Images-OVI-MINI-AM-4E_1.webp?v=1702919801&width=713",
                        "url": "https://www.catchmaster.com/products/oasis-ovi-mini",
                        "price": "Regular price$49.99 USD"
                    },
                    {
                        "title": "Gold Stick Fly Sticky Traps with Attractant",
                        "img": "https://www.catchmaster.com/cdn/shop/files/ShopifyProductImages-GoldStickFlyTrap_1.jpg?v=1746124079&width=990",
                        "url": "https://www.catchmaster.com/products/gold-stick-fly-trap-with-bait",
                        "price": "$17.99 USD"
                    },
                    {
                        "title": "Glostik Flying Insect Light Sticky Trap",
                        "img": "https://www.catchmaster.com/cdn/shop/products/Shopify_Product_Images-908-AM-1E_1.webp?v=1746124091&width=990",
                        "url": "https://www.catchmaster.com/products/glostik-flying-insect-trap",
                        "price": "$19.99 USD"
                    },
                    {
                        "title": "Yellow Jacket, Hornet Bee & Wasp Trap",
                        "img": "https://www.catchmaster.com/cdn/shop/files/Shopify_Product_Images-976J-AM-2F_1_v1.jpg?v=1746123877&width=990",
                        "url": "https://www.catchmaster.com/products/yellow-jacket-hornet-bee-and-wasp-trap",
                        "price": "$15.49 USD"
                    },
                    {
                        "title": "Yellow Jacket and Wasps Trap Refill with Attractant",
                        "img": "https://www.catchmaster.com/cdn/shop/files/976-J-ATT-AM-1E.webp?v=1716668995&width=990",
                        "url": "https://www.catchmaster.com/products/yellow-jacket-hornet-bee-and-wasp-trap-refill",
                        "price": "$17.99 USD"
                    },
                ],
            },
            {
                'Spiders': [{
                        "title": "Foldable Brown Recluse Spider Traps",
                        "img": "https://www.catchmaster.com/cdn/shop/products/Shopify_Product_Images-288I-30PK_white_1.webp?v=1746124118&width=990",
                        "url": "https://www.catchmaster.com/products/brown-recluse-spider-traps",
                        "price": "$15.99 USD"
                    },
                    {
                        "title": "Brown Recluse Spider Glue Traps",
                        "img": "https://www.catchmaster.com/cdn/shop/products/Shopify_Product_Images-B0B2C4DXW2_1.webp?v=1702323677&width=990",
                        "url": "https://www.catchmaster.com/products/catchmaster-brown-recluse-spider-trap",
                        "price": "Regular price$14.99 USD"
                    },
                    {
                        "title": "Spider-Patterned Glue Traps",
                        "img": "https://www.catchmaster.com/cdn/shop/products/Shopify_Product_Images-B08PC9R71X_1.webp?v=1702323719&width=990",
                        "url": "https://www.catchmaster.com/products/spider-glue-trap",
                        "price": "$11.99 USD"
                    },
                    {
                        "title": "Mouse & Insect Glue Board Traps",
                        "img": "https://www.catchmaster.com/cdn/shop/products/Shopify_Product_Images-B005IMZ9TC_1.webp?v=1746123488&width=990",
                        "url": "https://www.catchmaster.com/products/sticky-mouse-traps-indoor-home-bulk-75",
                        "price": "$31.99 USD"
                    },
                    {
                        "title": "XL Giant Centipede, Cockroach & Cricket Insect Glue Traps",
                        "img": "https://www.catchmaster.com/cdn/shop/files/ShopifyProductImages-723-am-20e_1.jpg?v=1729204646&width=990",
                        "url": "https://www.catchmaster.com/products/catchmaster-xl-giant-crawling-insect-glue-traps",
                        "price": "$30.99 USD"
                    },
                ],
            },
            {
                'Ants': [{
                        "title": "DEFIANT™ Liquid Ant Bait for Ant Control, 1-Year Supply + 8 Classic Bait Stations",
                        "img": "https://www.catchmaster.com/cdn/shop/files/Defiant-Bait-Station-Hero.jpg?v=1751303698&width=713",
                        "url": "https://www.catchmaster.com/products/defiant-liquid-ant-killer",
                        "price": "$19.99 USD"
                    },
                    {
                        "title": "DEFIANT™ Classic Liquid Ant Bait Station Refills - 20 Pack",
                        "img": "https://www.catchmaster.com/cdn/shop/products/ShopifyProductImages-1Hero.webp?v=1746125848&width=713",
                        "url": "https://www.catchmaster.com/products/defiant-ant-bait-station-refills",
                        "price": "$14.99 USD"
                    },
                    {
                        "title": "DEFIANT™ Window Sill Liquid Ant Bait Station Refills – 8 Pack",
                        "img": "https://www.catchmaster.com/cdn/shop/files/Shopify_Product_Images-1_v2.jpg?v=1746123408&width=990",
                        "url": "https://www.catchmaster.com/products/catchmaster-defiant-refill-window-bait-stations-8-pack-4-stacked",
                        "price": "$14.99 USD"
                    },
                    {
                        "title": "Spider & Insect Glue Board Traps",
                        "img": "https://www.catchmaster.com/cdn/shop/files/Shopify_Product_Images-724-AM-3E_1.jpg?v=1746125471&width=990",
                        "url": "https://www.catchmaster.com/products/spider-insect-boards",
                        "price": "$9.99 USD"
                    },
                    {
                        "title": "Tree Insect DIY Band Sticky Full Barrier Kit",
                        "img": "https://www.catchmaster.com/cdn/shop/products/Shopify_Product_Images-TB-Heavy-AM-1E_Hero_2600x2600_7848973a-6960-47ea-bd83-ab53adf93b1d.webp?v=1746125655&width=990",
                        "url": "https://www.catchmaster.com/products/tree-banding-diy-insect-adhesive-barrier-full-kit?_pos=15&_sid=2e0d0c167&_ss=r",
                        "price": "$39.49 USD"
                    },
                ],
            },
        ];

        const sectionTitle = document.querySelectorAll('.collection .collection__title h2')[1];
        if (
            sectionTitle &&
            sectionTitle.textContent.trim() === "End Your Pest Problem Now With the Pest-Stopping Power of Catchmaster's Glue Traps."
        ) {
            const section = sectionTitle.closest('section');
            if (!document.querySelector('.iv-dynamic-product-section')) {
                section.classList.add('iv-dynamic-product-section');

                section.querySelector('slider-component').insertAdjacentHTML('afterend', `
                    <div class="iv-product-Carousel page-width-desktop">
                        <div class="iv-heading"> 
                            <h2>End Your Pest Problem Now With the Pest-Stopping Power of Catchmaster's Glue Traps.</h2>
                            <p>Start with Our Best-Selling Glue Trap Options, Trusted by Professionals and Consumers Alike.</p>
                        </div>
                        <div class="iv-category-tabs">
                            <ul class="iv-product-tabs"></ul>
                        </div>
                        <div class="iv-products-wrapper">
                            <div class="iv-product-slider"></div>
                        </div>
                        <div class="iv-product-btn-wrapper">
                            <a href="/collections/shop?sort_by=manual&filter.p.m.custom.collection=Rodents" class="iv-shop-all-btn">Shop all rodent traps</a>
                        </div>
                    </div>
                `);
            }
        }

        const tabContainer = document.querySelector('.iv-product-tabs');
        const sliderContainer = document.querySelector('.iv-product-slider');
        const ctaBtn = document.querySelector('.iv-shop-all-btn');

        let currentCategory = '';

        function renderTabs() {
            tabContainer.innerHTML = '';
            productData.forEach((catObj, index) => {
                const category = Object.keys(catObj)[0];
                const li = document.createElement('li');
                li.textContent = category;
                if (index === 0) {
                    li.classList.add('iv-tab-active');
                    currentCategory = category;
                }
                li.addEventListener('click', () => {
                    document.querySelectorAll('.iv-product-tabs li').forEach(el => el.classList.remove('iv-tab-active'));
                    li.classList.add('iv-tab-active');
                    currentCategory = category;
                    renderProducts(catObj[category], category);
                });
                tabContainer.appendChild(li);
            });
        }

        function renderProducts(products, category) {
            // Destroy if already initialized
            if ($(sliderContainer).hasClass('slick-initialized')) {
                $(sliderContainer).slick('unslick');
            }

            sliderContainer.innerHTML = '';

            products.forEach(p => {
                const item = document.createElement('div');
                item.className = 'iv-product-card';
                item.innerHTML = `
                    <a href="${p.url}">
                        <img src="${p.img}" alt="${p.title}">
                        <h4 class="iv-product-title">${p.title}</h4>
                        <div class="iv-product-price">${p.price}</div>
                    </a>
                `;
                sliderContainer.appendChild(item);
            });

            ctaBtn.textContent = `Shop all ${category} traps`;

            const categoryUrls = {
                'Rodent': '/collections/shop?sort_by=manual&filter.p.m.custom.collection=Rodents',
                'Fly & Gnat': '/collections/shop?sort_by=manual&filter.p.m.custom.pest=Fly+%26+Gnat',
                'Fly Lights': '/collections/shop?sort_by=manual&filter.p.m.custom.pest=Vector',
                'Mosquito & Wasp': '/collections/shop?sort_by=manual&filter.p.m.custom.pest=Mosquito',
                'Spider': '/collections/shop?sort_by=manual&filter.p.m.custom.pest=Spider',
                'Ants': '/collections/shop?sort_by=manual&filter.p.m.custom.pest=Ant'
            };

            const ctaLink = document.querySelector('.iv-shop-all-btn');
            if (ctaLink && categoryUrls[category]) {
                ctaLink.href = categoryUrls[category];
            }

            // Slide counter
            const existingCounter = document.querySelector('.iv-slide-counter');
            if (existingCounter) existingCounter.remove();

            const slideCounter = document.createElement('div');
            slideCounter.className = 'iv-slide-counter';
            slideCounter.innerHTML = `
                <button type="button" class="slick-prev">‹</button>
                <span class="iv-counter-text">1/${products.length}</span>
                <button type="button" class="slick-next">›</button>
            `;

            document.querySelector('.iv-product-btn-wrapper').after(slideCounter);

            toggleSlickSlider(products.length);
        }
        $(sliderContainer).on('init', function(event, slick) {
            const prevBtn = document.querySelector('.iv-slide-counter .slick-prev');
            const nextBtn = document.querySelector('.iv-slide-counter .slick-next');

            if (prevBtn && nextBtn) {
                prevBtn.addEventListener('click', () => {
                    $(sliderContainer).slick('slickPrev');
                });

                nextBtn.addEventListener('click', () => {
                    $(sliderContainer).slick('slickNext');
                });
            }
        });
        $(sliderContainer).on('afterChange', function(event, slick, currentSlide) {
            const counter = document.querySelector('.iv-counter-text');
            if (counter) {
                counter.textContent = `${currentSlide + 1}/${slick.slideCount}`;
            }
        });

        function toggleSlickSlider(totalSlides) {
            if (typeof $ === 'undefined' || typeof $.fn.slick === 'undefined') return;

            if (window.innerWidth <= 989) {
                $(sliderContainer).slick({
                    arrows: true,
                    prevArrow: '<button type="button" class="slick-prev">‹</button>',
                    nextArrow: '<button type="button" class="slick-next">›</button>',
                    dots: false,
                    infinite: true,
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '25%', // Adjust for half-item preview
                    variableWidth: false,
                    adaptiveHeight: false,
                    responsive: [{
                        breakpoint: 768,
                        settings: {
                            centerPadding: '20%',
                        }
                    }]
                });
            } else {
                if ($(sliderContainer).hasClass('slick-initialized')) {
                    $(sliderContainer).slick('unslick');
                }
            }
        }

        // Initial render
        renderTabs();
        const firstCategory = Object.keys(productData[0])[0];
        renderProducts(productData[0][firstCategory], firstCategory);

        // Handle resize
        window.addEventListener('resize', () => {
            const activeCategoryObj = productData.find(obj => Object.keys(obj)[0] === currentCategory);
            if (activeCategoryObj) {
                const products = activeCategoryObj[currentCategory];
                renderProducts(products, currentCategory);
            }
        });
    }

    const headings = document.querySelectorAll('main#MainContent .shopify-section.section h2');
    headings.forEach((heading) => {
        const headingText = heading.textContent.trim().toLowerCase();
        if (headingText.includes('select the pest you want to eliminate')) {
        const closestSection = heading.closest('.shopify-section.section');
        if (closestSection) {
            closestSection.classList.add('iv-eliminate-section');
        }
        }
    });
}

loadTestCode();