function loadTestCode() {
    if (!document.body.classList.contains('iv-revamp-the-PDP-layout')) {
        document.body.classList.add('iv-revamp-the-PDP-layout');

        
        // Thumbnail Slider Desktop Code
        function thumbnailSliderDesktop() {
            const thumbnailSlider = document.querySelector('.thumbnail-slider');
            const thumbnailList = document.querySelector('.product--thumbnail_slider .thumbnail-list');
            if (thumbnailSlider && thumbnailList) {
                const setSize = () => {
                    thumbnailList.style.width = thumbnailSlider.offsetHeight + 'px';
                    thumbnailSlider.style.height = thumbnailSlider.offsetHeight + 'px';
                };
            setSize();
            window.addEventListener('resize', setSize);
    
            }
        }

        document.querySelector('.product .product__media-wrapper div:has(.price-per-piece-wrapper)')?.after(document.querySelector('.pdp-price-per-trap'));

        let isDesktop = null;
        const mediaQuery = window.matchMedia("(min-width: 1024px)");

        function handleBreakpoint(e) {
            if (e.matches && isDesktop !== true) {
                isDesktop = true;
                thumbnailSliderDesktop();
            }

            if (!e.matches && isDesktop !== false) {
                isDesktop = false;
                // mobile cleanup
            }
        }
        
        handleBreakpoint(mediaQuery);
        mediaQuery.addEventListener("change", handleBreakpoint);
        // Thumbnail Slider Desktop Code over

        // Product section
        const productDescription = document.querySelector('.product__description');
        const targetedPests = `<div class="iv-targeted-section">
            <div class="iv-targeted-image-section"></div>
        </div>`;

        if (productDescription) {
            productDescription.insertAdjacentHTML('beforebegin', targetedPests);

            const imageSection = document.querySelector('.iv-targeted-image-section');

            const pestMap = {
                "max-catch-sticky-glue-mouse-traps-original-scent": ["Mice", "Spider", "Roach", "Cricket", "Centipede"],
                "giant-fly-glue-trap": ["Fly", "Gnat"],
                "professional-strength-mouse-insect-glue-traps": ["Mice", "Roach", "Spider", "Centipede", "Scorpion"],
                "pro-strength-mouse-traps-indoor-sticky-glue-boards-bulk": ["Mice", "Spider", "Roach", "Cricket", "Centipede"],
                "clothes-moth-traps-six-count-get-rid-of-clothes-moths": ["Moth"],
            };

            const pestImages = {
                "Mice": "//res.cloudinary.com/ignite-visibility/image/upload/v1758266361/Catchmaster/RevampPDPLayout/Rat_Mouse-2600x2600.png",
                "Spider": "//res.cloudinary.com/ignite-visibility/image/upload/v1758266361/Catchmaster/RevampPDPLayout/Spider_Scorpion-2600x2600.png",
                "Roach": "//res.cloudinary.com/ignite-visibility/image/upload/v1758266361/Catchmaster/RevampPDPLayout/Cockroach_Cricket_Centiped-2600x2600.png",
                "Cricket": "//res.cloudinary.com/ignite-visibility/image/upload/v1758266362/Catchmaster/RevampPDPLayout/Icons-2600x2600_Cricket.png",
                "Centipede": "//res.cloudinary.com/ignite-visibility/image/upload/v1758266361/Catchmaster/RevampPDPLayout/Icons-2600x2600_Centipede.png",
                "Fly": "//res.cloudinary.com/ignite-visibility/image/upload/v1758287357/Catchmaster/RevampPDPLayout/Fly_and_Gnat_icon.png",
                "Gnat": "//res.cloudinary.com/ignite-visibility/image/upload/v1758287357/Catchmaster/RevampPDPLayout/Fly_and_Gnat_icon.png",
                "Scorpion": "//res.cloudinary.com/ignite-visibility/image/upload/v1758287357/Catchmaster/RevampPDPLayout/Scorpion_icon.png",
                "Moth": "//res.cloudinary.com/ignite-visibility/image/upload/v1758287357/Catchmaster/RevampPDPLayout/Moth_icon.png"
            };

            const currentUrl = window.location.href;

            let matchedPests = [];
            for (let key in pestMap) {
                if (currentUrl.includes(key)) {
                    matchedPests = pestMap[key];
                    break;
                }
            }

            if (matchedPests.length > 0) {
                imageSection.insertAdjacentHTML('beforebegin', `<h4 class="iv-targeted-heading">Targeted Pests</h4>`);
                document.querySelector('body').classList.add('pdpPage');
                matchedPests.forEach(pest => {
                    const pestDiv = document.createElement("div");
                    pestDiv.className = "iv-targeted-item";
                    pestDiv.innerHTML = `
                        <img src="${pestImages[pest] || 'https://via.placeholder.com/80'}" alt="${pest}">
                        <p>${pest}</p>
                    `;
                    imageSection.appendChild(pestDiv);
                });
            }

            const promiseData = {
                heading: "Catchmaster’s Promise",
                items: [{
                        href: "/pages/satisfaction-guarantee",
                        img: "//res.cloudinary.com/ignite-visibility/image/upload/v1758266362/Catchmaster/RevampPDPLayout/Secondary-icons_Warranty.png",
                        alt: "60-day satisfaction warranty",
                        text: "60-day satisfaction warranty"
                    },
                    {
                        href: "/pages/shipping-policy",
                        img: "//res.cloudinary.com/ignite-visibility/image/upload/v1758266361/Catchmaster/RevampPDPLayout/Secondary-icons_Free_Shipping.png",
                        alt: "Free Shipping on all orders above $40",
                        text: "Free Shipping on all orders above $40"
                    },
                    {
                        href: "/pages/satisfaction-guarantee",
                        img: "//res.cloudinary.com/ignite-visibility/image/upload/v1758266361/Catchmaster/RevampPDPLayout/Secondary-icons_Return.png",
                        alt: "Free 60-day returns",
                        text: "Free 60-day returns"
                    }
                ]
            };

            function renderPromiseSection(data) {
                const itemsHtml = data.items.map(item => `
                    <a href="${item.href}" class="iv-promise-item">
                        <img src="${item.img}" alt="${item.alt}" />
                        <p>${item.text}</p>
                    </a>
                `).join("");

                return `
                    <div class="iv-promise-section">
                        <h4 class="iv-promise-heading">${data.heading}</h4>
                        <div class="iv-promise-image-section">
                            ${itemsHtml}
                        </div>
                    </div>
                `;
            }

            if (!document.querySelector('.iv-promise-section')) {
                productDescription.insertAdjacentHTML('afterend', renderPromiseSection(promiseData));
            }
        }

        const descEl = document.querySelector(".product__description");
        if (descEl) {
            descEl.insertAdjacentHTML('afterbegin', `<h4 class="iv-description-title">Product Description</h4>`);
            $('.product__description > p, .product__description > ul').wrapAll('<div class="iv-description-content"></div>');
            $('.product__description > div.OutlineElement, .product__description > div.ListContainerWrapper').wrapAll('<div class="iv-description-content"></div>');
        }

        function runCodeDesktop() {
            var onlyDesContent = document.querySelector('.iv-description-content');
            if (onlyDesContent) {

                // Read more
                const heroDescription = document.querySelector('.product__description');
                if (heroDescription) {
    
                    heroDescription.classList.add('iv-read-more-active');
    
                    if (!document.querySelector('.iv-readmore')) {
                        const span = document.querySelector('.iv-description-content > span');
                        const ul = document.querySelector('.iv-description-content');
                        const target = span || ul;
                        if (target) {
                            target.insertAdjacentHTML(
                                'afterend',
                                `
                                <span class="iv-readmore">Read More</span>
                                <span class="iv-readless" style="cursor:pointer; display:none;">Read Less</span>
                                `
                            );
                        }
                    }
    
                    const readMore = heroDescription.querySelector('.iv-readmore');
                    const readLess = heroDescription.querySelector('.iv-readless');
    
                    if (readMore && readLess) {
                        readMore.addEventListener('click', () => {
                            heroDescription.classList.remove('iv-read-more-active');
                            readMore.style.display = 'none';
                            readLess.style.display = 'inline';
                        });
                        readLess.addEventListener('click', () => {
                            heroDescription.classList.add('iv-read-more-active');
                            readLess.style.display = 'none';
                            readMore.style.display = 'inline';
                        });
                    }
                }
            }
        }

        // Load code just for Desktop 
        let isDesktopReadMore = null;
        const mediaQueryReadMore = window.matchMedia("(min-width: 750px)");
        function readMoreBreakpoint(e) {
            if (e.matches && isDesktopReadMore !== true) {
                isDesktopReadMore = true;
                runCodeDesktop();
            }

            if (!e.matches && isDesktopReadMore !== false) {
                isDesktopReadMore = false;
                // mobile cleanup
            }
        }
        readMoreBreakpoint(mediaQueryReadMore);
        mediaQueryReadMore.addEventListener("change", readMoreBreakpoint);
        // Load code just for Desktop over

        // Feature data
        const featuresByUrl = {
            "https://www.catchmaster.com/products/max-catch-sticky-glue-mouse-traps-original-scent": {
                heading: "Top Features and Benefits",
                features: [{
                        title: "Ready to Use",
                        desc: "No additional bait necessary! Our traps can be used right out of the package."
                    },
                    {
                        title: "Family-Friendly",
                        desc: "Non-toxic and mess-free, these traps are safe to use around children and pets."
                    },
                    {
                        title: "Professional Strength",
                        desc: "Our traps are made with professional-strength adhesive to maximize your catch."
                    },
                    {
                        title: "Trusted by Professionals",
                        desc: "For over 70 years, pest control professionals have turned to Catchmaster to get the job done."
                    },
                    {
                        title: "Designed to Save You Time",
                        desc: "A specially-formulated peanut-butter scent will attract and trap pests quickly."
                    },
                ]
            },

            "https://www.catchmaster.com/products/giant-fly-glue-trap": {
                heading: "Top Features and Benefits",
                features: [{
                        title: "Family Friendly",
                        desc: "Made without toxic chemicals, our traps are safe to use around children and pets."
                    },
                    {
                        title: "Easy-to-Use",
                        desc: "No need for additional baiting! Use our glue strip traps straight out of the packaging."
                    },
                    {
                        title: "Complete Protection",
                        desc: "With over 30 feet of insect-catching surface, these traps will provide complete protection over your space."
                    },
                    {
                        title: "Professional Strength",
                        desc: "Our traps feature a specially formulated, professional-strength adhesive to make catching pests easier than ever."
                    }
                ],
            },

            "https://www.catchmaster.com/products/professional-strength-mouse-insect-glue-traps": {
                heading: "Top Features and Benefits",
                features: [{
                        title: "Complete Protection",
                        desc: "Whether it’s cool and moist or hot and dry, our traps are effective in any environment."
                    },
                    {
                        title: "Home and Family Safe",
                        desc: "Made without pesticides or toxic chemicals, feel confident using our traps around children and pets."
                    },
                    {
                        title: "Easy-to-Use ",
                        desc: "Convenient and simple to set up, making pest control effortless. "
                    },
                    {
                        title: "Value-Driven",
                        desc: "Our traps offer exceptional results without compromising on quality."
                    },
                    {
                        title: "Professional-Grade Performance",
                        desc: "Trusted by pest control experts for over 70 years, Catchmaster delivers reliable results every time."
                    },
                ],
            },

            "https://www.catchmaster.com/products/pro-strength-mouse-traps-indoor-sticky-glue-boards-bulk": {
                heading: "Top Features and Benefits",
                features: [{
                        title: "Year-Round Protection",
                        desc: "No matter the season, Catchmaster Pro-Strength traps are here to help!"
                    },
                    {
                        title: "Ready to Use",
                        desc: "Our glue boards come pre-scented and ready to use straight out of the packaging!"
                    },
                    {
                        title: "Strong Adhesive",
                        desc: "Our professional-strength glue holds even the biggest pest with ease."
                    },
                    {
                        title: "Family Friendly",
                        desc: "Made without toxic chemicals or pesticides, these traps are safe to use around children and pets."
                    },
                    {
                        title: "Trusted by Professionals",
                        desc: "Now you can use the same solutions that pest control professionals have trusted for over 70 years."
                    },
                ]
            },

            "https://www.catchmaster.com/products/clothes-moth-traps-six-count-get-rid-of-clothes-moths": {
                heading: "Top Features and Benefits",
                features: [{
                        title: "Built To Last",
                        desc: "Catchmaster’s traps are made with a sturdy design that delivers reliable, long-lasting results."
                    },
                    {
                        title: "Designed for Precision",
                        desc: "Crafted for maximum efficiency, our traps target pests with precision, making pest control easier and more effective without the hassle."
                    },
                    {
                        title: "Individually Packaged",
                        desc: "Stock up and save! Keep your traps in the package until you need them so our proprietary pheromone stays active for up to one year."
                    },
                    {
                        title: "Family Friendly",
                        desc: "Made without toxic chemicals or pesticides, you can feel confident using our traps around children and pets."
                    }
                ]
            }
        };

        const currentUrl = window.location.href.split("?")[0];
        const productData = featuresByUrl[currentUrl];
        if (productData) {
            const featureHTML = productData.features.map(f => `
                <div class="iv-how-use-item">
                    <h6>${f.title}</h6>
                    <p>${f.desc}</p>
                </div>
            `).join("");

            const howUseHTML = `
                <section class="iv-how-use">
                    <div class="iv-container">
                        <h2 class="iv-title">${productData.heading}</h2>
                        <div class="iv-how-use-container">
                            <div class="iv-how-use-left">
                                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/Catchmaster/RevampPDPLayout/family-image.jpg" alt="Main Product Image">
                            </div>
                            <div class="iv-how-use-right">
                                ${featureHTML}
                            </div>
                        </div>
                    </div>
                </section>`;

            if (!document.querySelector('.iv-how-use')) {
                document.querySelector('#MainContent > section[id*="main"]').insertAdjacentHTML("afterend", howUseHTML);
            } 

            function runMobileOnly() {
                $(document).ready(function () {

                    // 👉 By default Product Description OPEN (with height)
                    const $defaultTitle = $('.product__description .iv-description-title');
                    const $defaultContent = $defaultTitle.next('.iv-description-content');

                    $defaultTitle.addClass('active');
                    $defaultContent
                        .addClass('expanded')
                        .css('max-height', $defaultContent.prop('scrollHeight') + 'px');
                    $defaultTitle.parent().addClass('active');

                    // 👉 Accordion behavior (one open at a time)
                    $('.product__description .iv-description-title, .iv-how-use .iv-title,.iv-promise-section .iv-promise-heading').on('click', function () {

                        var $current = $(this);
                        var $currentContent = $current.next();

                        // 🔹 Close all others
                        $('.product__description .iv-description-title, .iv-how-use .iv-title, .iv-promise-section .iv-promise-heading')
                            .not($current)
                            .removeClass('active')
                            .each(function () {
                                const $content = $(this).next();
                                $content
                                    .removeClass('expanded')
                                    .css('max-height', 0);
                                $(this).parent().removeClass('active');
                            });

                        // 🔹 Toggle current
                        if ($current.hasClass('active')) {
                            // Close current
                            $current.removeClass('active');
                            $currentContent
                                .removeClass('expanded')
                                .css('max-height', 0);
                            $current.parent().removeClass('active');
                        } else {
                            // Open current
                            $current.addClass('active');
                            $currentContent
                                .addClass('expanded')
                                .css('max-height', $currentContent.prop('scrollHeight') + 'px');
                            $current.parent().addClass('active');
                        }

                    });

                });
            }


            function desktopElement() {
                const layout = document.querySelector('.iv-revamp-the-PDP-layout');
                if (!layout) return;

                const mediaGallery = layout.querySelector('.product__info-wrapper > product-info');
                if (!mediaGallery) return;

                const title = layout.querySelector('.product__media-wrapper > .product__title');
                const yotpoBlock = layout.querySelector('.product__media-wrapper > .shopify-block:has(.yotpo-widget-instance)');
                const priceBlock = layout.querySelector('.product__media-wrapper > .shopify-block + div:has(.price-per-piece-wrapper)');

                if (priceBlock) mediaGallery.prepend(priceBlock);
                if (yotpoBlock) mediaGallery.prepend(yotpoBlock);
                if (title) mediaGallery.prepend(title);
            }

            function mobileElement() {
                const layout = document.querySelector('.iv-revamp-the-PDP-layout');
                if (!layout) return;

                const mediaGallery = layout.querySelector('.product__media-wrapper > media-gallery');
                if (!mediaGallery) return;

                const title = layout.querySelector('.product__info-container > .product__title');
                const yotpoBlock = layout.querySelector('.product__info-container > .shopify-block:has(.yotpo-widget-instance)');
                const priceBlock = layout.querySelector('.product__info-container > .shopify-block + div:has(.price-per-piece-wrapper)');

                if (title) mediaGallery.before(title);
                if (yotpoBlock) mediaGallery.before(yotpoBlock);
                if (priceBlock) mediaGallery.before(priceBlock);

                
            }
            // Load code for Desktop and Mobile 
            if (window.matchMedia("(min-width: 750px)").matches) {
                desktopElement();

                window.addEventListener('resize', function(event) {
                    if (window.matchMedia("(max-width: 749.98px)").matches) {
                        location.reload();
                    }
                }, true);
            } else {
                if (window.matchMedia("(max-width: 749.98px)").matches) {
                    runMobileOnly();
                    mobileElement();
                    document.querySelector('.product__description').after(document.querySelector('.iv-how-use'));

                    $(window).on('scroll', function () {
                        const $section = $('.variant-change');
                        if (!$section.length) return;
                        const sectionBottom =
                            $section.offset().top + $section.outerHeight();
                        const windowTop = $(window).scrollTop();
                        if (windowTop >= sectionBottom) {
                            $('body').addClass('iv-productQuantity');
                        } else {
                            $('body').removeClass('iv-productQuantity');
                        }
                    });

                }

                window.addEventListener('resize', function(event) {
                    if (window.matchMedia("(min-width: 750px)").matches) {
                        location.reload();
                    }
                }, true);
            }
            // Load code for Desktop and Mobile 
        }

        // How to Use Glue Traps
        const pagesData = {
            "https://www.catchmaster.com/products/max-catch-sticky-glue-mouse-traps-original-scent": {
                title: "How to Use Glue Traps",
                subtitle: "Just 3 simple steps to reclaim your home",
                steps: [{
                        img: "https://res.cloudinary.com/ignite-visibility/image/upload/v1758700740/Catchmaster/RevampPDPLayout/sticky-glue-original-scent-v1.gif",
                        number: "Step 1",
                        desc: "Choose the best Catchmaster product for your needs."
                    },
                    {
                        img: "https://res.cloudinary.com/ignite-visibility/image/upload/v1758700739/Catchmaster/RevampPDPLayout/sticky-glue-original-scent-v2.gif",
                        number: "Step 2",
                        desc: "Place the scented glue trap where pests are active, then remove the paper cover after 24 hours."
                    },
                    {
                        img: "https://res.cloudinary.com/ignite-visibility/image/upload/v1758700739/Catchmaster/RevampPDPLayout/sticky-glue-original-scent-v3.gif",
                        number: "Step 3",
                        desc: "Let the trap capture pests efficiently, and dispose of it when full."
                    }
                ]
            },

            "https://www.catchmaster.com/products/giant-fly-glue-trap": {
                title: "How to Use Catchmaster Giant Fly Roll Glue Strip Traps",
                subtitle: "Just 3 simple steps to reclaim your home",
                steps: [{
                        img: "https://res.cloudinary.com/ignite-visibility/image/upload/v1758697316/Catchmaster/RevampPDPLayout/giant-fly-glue-trap-1.gif",
                        number: "Step 1",
                        desc: "Unroll the strip, being careful not to search the adhesive."
                    },
                    {
                        img: "https://res.cloudinary.com/ignite-visibility/image/upload/v1758699663/Catchmaster/RevampPDPLayout/giant-fly-glue-trap-2.gif",
                        number: "Step 2",
                        desc: "Hang strip (side by side) where flies are."
                    },
                    {
                        img: "https://res.cloudinary.com/ignite-visibility/image/upload/v1758699689/Catchmaster/RevampPDPLayout/giant-fly-glue-trap-3.gif",
                        number: "Step 3",
                        desc: "Monitor the traps regularly and replace it when necessary."
                    }
                ]
            },

            "https://www.catchmaster.com/products/professional-strength-mouse-insect-glue-traps": {
                title: "How to Use Catchmaster Pro Strength Mouse & Insect Glue Traps",
                subtitle: "Just 3 simple steps to reclaim your home",
                steps: [{
                        img: "https://res.cloudinary.com/ignite-visibility/image/upload/v1758705625/Catchmaster/RevampPDPLayout/CatchmasterProStrength-v1.gif",
                        number: "Step 1",
                        desc: "Unroll the trap and place it where you’ve seen pest activity."
                    },
                    {
                        img: "https://res.cloudinary.com/ignite-visibility/image/upload/v1758705624/Catchmaster/RevampPDPLayout/CatchmasterProStrength-v2.gif",
                        number: "Step 2",
                        desc: "Monitor the trap regularly."
                    },
                    {
                        img: "https://res.cloudinary.com/ignite-visibility/image/upload/v1758705622/Catchmaster/RevampPDPLayout/CatchmasterProStrength-v3.gif",
                        number: "Step 3",
                        desc: "After catching pests, fold the trap in a plastic bag and dispose of safely."
                    }
                ]
            },

            "https://www.catchmaster.com/products/pro-strength-mouse-traps-indoor-sticky-glue-boards-bulk": {
                title: "How to Use Pro-Strength Mouse & Insect Glue Traps",
                subtitle: "Just 3 simple steps to reclaim your home",
                steps: [{
                        img: "https://res.cloudinary.com/ignite-visibility/image/upload/v1758706639/Catchmaster/RevampPDPLayout/pro-strength-ndoor-boards-bulk-v1.gif",
                        number: "Step 1",
                        desc: "Place the Catchmaster Mouse Glue Board along pest pathways."
                    },
                    {
                        img: "https://res.cloudinary.com/ignite-visibility/image/upload/v1758706352/Catchmaster/RevampPDPLayout/pro-strength-ndoor-boards-bulk-v2.gif",
                        number: "Step 2",
                        desc: "Leave the adhesive cover on for 24 hours."
                    },
                    {
                        img: "https://res.cloudinary.com/ignite-visibility/image/upload/v1758706639/Catchmaster/RevampPDPLayout/pro-strength-ndoor-boards-bulk-v3.gif",
                        number: "Step 3",
                        desc: "After 24 hours, remove the cover and watch it work!"
                    }
                ]
            },

            "https://www.catchmaster.com/products/clothes-moth-traps-six-count-get-rid-of-clothes-moths": {
                title: "How to Use Catchmaster Clothes Moth Traps with Pheromones",
                subtitle: "Just 3 simple steps to reclaim your home",
                steps: [{
                        img: "https://res.cloudinary.com/ignite-visibility/image/upload/v1758707035/Catchmaster/RevampPDPLayout/clothes-moth-six-count-v1.gif",
                        number: "Step 1",
                        desc: "Remove your pheromone moth trap from the package without touching the glue."
                    },
                    {
                        img: "https://res.cloudinary.com/ignite-visibility/image/upload/v1758707033/Catchmaster/RevampPDPLayout/clothes-moth-six-count-v2.gif",
                        number: "Step 2",
                        desc: "Place traps inside your closets, wardrobes, storage chests, or drawers."
                    },
                    {
                        img: "https://res.cloudinary.com/ignite-visibility/image/upload/v1758707033/Catchmaster/RevampPDPLayout/clothes-moth-six-count-v3.gif",
                        number: "Step 3",
                        desc: "Monitor traps regularly. Replace them when necessary."
                    }
                ]
            }
        };

        // Get current page URL
        const currentURL = window.location.href.split("?")[0];

        // Load matching content if found
        if (pagesData[currentURL] && !document.querySelector('.iv-use-glue')) {
            const page = pagesData[currentURL];

            const stepsHTML = page.steps.map(s => `
            <div class="iv-use-glue-item">
                <div class="iv-use-glue-img">
                <img src="${s.img}" alt="${s.number}">
                </div>
                <div class="iv-use-glue-content">
                <h6>${s.number}</h6>
                <p>${s.desc}</p>
                </div>
            </div>
            `).join("");

            const useGlueHTML = `
            <section class="iv-use-glue">
                <div class="iv-container">
                <h2 class="iv-title">${page.title}</h2>
                <p class="iv-use-glue-subtitle">${page.subtitle}</p>
                <div class="iv-use-glue-steps">
                    ${stepsHTML}
                </div>
                </div>
            </section>
            `;
            
            function desktopRun() {
                document.querySelector('.iv-how-use')?.insertAdjacentHTML("afterend", useGlueHTML);
            }
            function mobileRun() {
                document.querySelector('.iv-promise-section')?.insertAdjacentHTML("afterend", useGlueHTML);
            }
            
            let currentViewDM = null; // 'desktop' | 'mobile'
            const wmq = window.matchMedia("(min-width: 750px)");

            function ivUseGlue(e) {
                if (e.matches) {
                    // ===== DESKTOP =====
                    if (currentViewDM !== 'desktop') {
                        currentViewDM = 'desktop';
                        desktopRun();
                    }
                } else {
                    // ===== MOBILE =====
                    if (currentViewDM !== 'mobile') {
                        currentViewDM = 'mobile';
                        mobileRun();
                    }
                }
            }
            // Initial load
            ivUseGlue(wmq);
            // Listen for screen size change
            wmq.addEventListener("change", ivUseGlue);
        }

        // FAQ section
        const ivFaqHTML = `
        <section class="iv-faq" id="iv-faq-root" role="region" aria-label="FAQ">
            <div class="iv-container">
                <h2 class="iv-faq-title">FREQUENTLY ASKED<br>QUESTIONS</h2>
                <div class="iv-faq-list" id="iv-faq-list"></div>
            </div>
        </section>`;

        // FAQ data mapped by URL
        const ivFaqDataByURL = {
            "https://www.catchmaster.com/products/giant-fly-glue-trap": [{
                    q: "Are Catchmaster Giant Fly Roll Glue Strip Traps safe to use around children and pets?",
                    a: "Yes, Catchmaster Giant Fly Roll Glue Strip Traps are safe to use around children and pets. They contain no toxic chemicals, poisons, or harmful substances that could pose health risks. If accidental contact occurs, the adhesive can be removed using vegetable oil, followed by soap and water."
                },
                {
                    q: "Are Catchmaster glue Giant Fly Roll Glue traps suitable for commercial use?",
                    a: "Absolutely! These traps are specifically designed to work in both residential and commercial environments. With 3,600 square inches of coverage, our large fly traps are particularly effective in commercial settings such as restaurants, food processing areas, warehouses, barns, and retail spaces. Our non-toxic adhesive formula also makes them safe to use around food preparation areas."
                },
                {
                    q: "How do I use Catchmaster Giant Fly Roll Glue Strip Traps effectively?",
                    a: "Strategic placement is crucial! Install fly sticky paper near windows and doors where flies typically enter buildings, or in areas where you’ve noticed a lot of insect activity, such as around food preparation or trash cans. Don’t be afraid to use multiple traps in larger spaces to maximize your catch."
                },
                {
                    q: "How long do Catchmaster Giant Fly Roll Glue Strip Traps remain effective?",
                    a: "Our traps can remain effective for up to one year when used in optimal conditions. However, if you hand them in areas with a lot of insects, dust, or dirt, traps may fill more quickly and require earlier replacement. Once your trap is visually full or if you suspect the adhesive has been compromised in any way, replace your trap to ensure continuous protection."
                },
                {
                    q: "What is the return policy for Catchmaster Giant Fly Roll Glue Strip Traps if I'm not happy with my purchase?",
                    a: `Catchmaster stands behind the quality and effectiveness of our Giant Fly Roll Glue Strip Traps with our <a href="https://www.catchmaster.com/pages/satisfaction-guarantee">60 Day Satisfaction Guarantee</a>. As long as you purchase your sticky fly catcher from an authorized seller, we will provide you with a refund or replacement.`
                }
            ],

            "https://www.catchmaster.com/products/max-catch-sticky-glue-mouse-traps-original-scent": [{
                    q: "Are Catchmaster Max-Catch scented glue traps safe to use around children and pets?",
                    a: "Yes! Our Max-Catch traps are non-toxic and pesticide-free, so you can feel comfortable using them around every member of your family. Our adhesive formulas have undergone rigorous testing, earning the trust and approval of both industry experts and families alike. For additional protection, you can fold the Max Catch traps into a tunnel to shield the glue and keep it safe from unwanted catches!"
                },
                {
                    q: "Are Catchmaster Max-Catch glue traps suitable for commercial use?",
                    a: "Yes! Our Max-Catch traps can be used indoors in any residential, commercial, or industrial building. Our traps’ discreet design makes them ideal for situations where rodenticides or snap traps may be prohibited or undesirable."
                },
                {
                    q: "How do I use Catchmaster Max-Catch sticky glue traps effectively?",
                    a: "To use Max-Catch glue traps, place them in areas with pest activity, like baseboards, pipes, and flat surfaces—avoid corners. For best results, leave the release paper on for 24 hours to let pests acclimate. After 24 hours, remove the paper and let the traps do their job!"
                },
                {
                    q: "How long do Catchmaster Max-Catch glue traps remain effective?",
                    a: "Under optimal conditions, our traps will remain effective for up to one year. However, be sure to check them often and remove them when they get full. Folding them into a tunnel shape will also help prolong their effectiveness when being used in dusty or debris-prone areas."
                },
                {
                    q: "What is the return policy for Catchmaster Max-Catch glue traps if I'm not happy with my purchase?",
                    a: `Here at Catchmaster, we stand behind our products and our quality control processes. That’s why we offer a 60-Day Satisfaction Guarantee. If you are unhappy with your purchase, you can request a refund or replacement within 60 days. <a href="https://www.catchmaster.com/pages/satisfaction-guarantee">Click here for more information</a>.`
                }
            ],

            "https://www.catchmaster.com/products/professional-strength-mouse-insect-glue-traps": [{
                    q: "Are Catchmaster Pro Strength mouse & insect glue traps safe to use around children and pets?",
                    a: "Yes! Here at Catchmaster, we take our customers’ health and safety very seriously. All of our traps are non-toxic and safe to use around children and pets. The discreet design and pesticide-free adhesive also make them an ideal choice for sensitive or food-friendly areas."
                },
                {
                    q: "Are Catchmaster mouse & Insect glue traps suitable for commercial use?",
                    a: "Yes! Catchmaster glue traps can be used indoors in residential, commercial, or industrial buildings. They are also ideal for sensitive areas where rodenticides or snap traps are undesirable or prohibited. Since they can fit into narrow spaces, they provide optimal protection in a variety of spaces."
                },
                {
                    q: "How do I use Catchmaster mouse & insect glue boards effectively?",
                    a: "Our glue boards are most effective when placed in areas with high pest activity. This includes places like along baseboards, underneath bathroom or kitchen sinks, along hallways, or in closets, basements, or garages. For best results, place your glue board out for 24 hours with the paper still covering the adhesive. After 24 hours, remove the paper and start capturing those pests!"
                },
                {
                    q: "How long do Catchmaster Professional Strength Mouse & Insect glue traps remain effective?",
                    a: "In optimal settings, our mouse and insect glue traps can remain effective for up to one year."
                },
                {
                    q: "What is the return policy for Catchmaster Professional Strength Mouse & Insect Glue Traps if I'm not happy with my purchase?",
                    a: `Catchmaster stands by our products! If you are ever unhappy with your purchase, you can take advantage of our 60-Day Satisfaction Guarantee. As long as you purchase from an authorized retailer, you can request a refund or replacement product within 60 days. Click here for more information on our <a href="https://www.catchmaster.com/pages/satisfaction-guarantee">guarantee guidelines</a>.`
                }
            ],

            "https://www.catchmaster.com/products/pro-strength-mouse-traps-indoor-sticky-glue-boards-bulk": [{
                    q: "Are Pro-Strength mouse & insect glue board traps safe to use around children and pets?",
                    a: "Yes! Our professional-strength glue formula is non-toxic and mess-free, making it an ideal pest control solution for use around children and pets. Plus, since our products do not contain any harmful chemicals or pesticides, they can also be used in health-conscious or food-sensitive settings."
                },
                {
                    q: "Are Catchmaster Pro-Strength mouse & insect glue traps suitable for commercial use?",
                    a: "Yes! Catchmaster’s bulk mouse glue traps are well-loved by professional exterminators for this very reason. Flexible, discreet, and non-toxic, they can be used in commercial areas, including schools, warehouses, retail stores, and food processing facilities."
                },
                {
                    q: "How do I use Catchmaster Pro-Strength mouse & insect glue boards effectively?",
                    a: "Our pre-scented glue boards for mice and insects are ready to use. Place them flat, against baseboards, or under furniture, or fold them into a U shape for tight spaces. To protect the adhesive in dusty areas, fold the trap into a tunnel. For best results, leave the covering on for 24 hours, allowing pests to adjust. After 24 hours, remove the cover and let the adhesive handle your pest problems!"
                },
                {
                    q: "How long do Catchmaster Pro-Strength mouse & insect glue board traps remain effective?",
                    a: "In optimal conditions, Catchmaster’s traps remain effective for up to one year! Be sure to check your traps regularly and replace them when they get full."
                },
                {
                    q: "What is the return policy for Catchmaster Pro-Strength mouse & insect glue traps if I'm not happy with my purchase?",
                    a: `When we say we stand by our product, we mean it! If you are ever dissatisfied with your Catchmaster product, you can request a refund or replacement by taking advantage of our <a href="https://www.catchmaster.com/pages/satisfaction-guarantee">60-Day Satisfaction Guarantee</a>.`
                }
            ],

            "https://www.catchmaster.com/products/clothes-moth-traps-six-count-get-rid-of-clothes-moths": [{
                    q: "Are Catchmaster Clothes Moth Traps with Pheromones safe to use around children and pets?",
                    a: "Yes, Catchmaster moth traps for clothes moths use pheromones, not toxic chemicals or pesticides, to attract and capture hungry clothes moths. This makes them completely safe to use around children and pets! If your furry friend or tiny human comes into contact with the trap, simply use vegetable oil, soap, and water to remove the glue from their fur or skin."
                },
                {
                    q: "Are Catchmaster Clothes Moth Traps with Pheromones suitable for commercial use?",
                    a: "Absolutely! Catchmaster Clothes Moth Traps are the best pheromone traps for clothes moths because they contain a professional-strength formula originally designed for commercial spaces. Our traps are ideal for spaces such as retail stores, textile warehouses, museums, costume departments, and vintage clothing stores."
                },
                {
                    q: "How do I use Catchmaster Clothes Moth Pheromone Traps effectively?",
                    a: "Place traps evenly throughout storage areas, particularly near vulnerable items made of natural fibers, such as wool, silk, cashmere, fur, and feathers. Typically, one trap per closet is good for prevention, while active infestations may require multiple traps. Remember to monitor your traps regularly and replace them when they get full."
                },
                {
                    q: "How long do Catchmaster Pheromone Traps for Moths remain effective?",
                    a: "Catchmaster recommends replacing your moth trap when the grid is full or every three months to ensure maximum protection. If you store unused traps in their original packaging, the pheromone formula and extra-strength glue will remain effective for up to one year."
                },
                {
                    q: "What is the return policy for Catchmaster Clothes Moth Traps with Pheromones if I'm not happy with my purchase?",
                    a: `Catchmaster stands behind all our products with our 60 Day Satisfaction Guarantee. If you are ever unhappy with your purchase, you can return it for a refund or a replacement within 60 days of your purchase from an approved retailer. Terms and conditions apply, so see our <a href="https://www.catchmaster.com/pages/satisfaction-guarantee">60 Day Satisfaction Guarantee</a> to learn more!`
                }
            ]
        };

        // Render FAQ accordion
        function initIvFaq(mount, faqData) {
            if (!faqData) return;

            const list = mount.querySelector('#iv-faq-list');
            list.innerHTML = faqData.map((it, i) => `
            <div class="iv-accordion-item" data-idx="${i}">
            <button class="iv-accordion-btn" type="button" aria-expanded="false">
                <span class="iv-question">${it.q}</span>
                <span class="iv-icon" aria-hidden="true">
                <svg class="iv-chevron" viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
            </button>
            <div class="iv-panel" aria-hidden="true">
                <div class="iv-panel-inner">${it.a}</div>
            </div>
            </div>`).join('');

            list.addEventListener('click', e => {
                const btn = e.target.closest('.iv-accordion-btn');
                if (!btn) return;
                const item = btn.closest('.iv-accordion-item');
                const panel = item.querySelector('.iv-panel');
                const isOpen = btn.getAttribute('aria-expanded') === 'true';

                list.querySelectorAll('.iv-accordion-btn[aria-expanded="true"]').forEach(b => {
                    b.setAttribute('aria-expanded', 'false');
                    const p = b.closest('.iv-accordion-item').querySelector('.iv-panel');
                    p.style.maxHeight = null;
                    p.setAttribute('aria-hidden', 'true');
                });

                if (!isOpen) {
                    btn.setAttribute('aria-expanded', 'true');
                    panel.setAttribute('aria-hidden', 'false');
                    panel.style.maxHeight = panel.scrollHeight + 'px';
                }
            });

            requestAnimationFrame(() => {
                list.querySelectorAll('.iv-panel').forEach(p => p.style.maxHeight = null);
            });
        }

        // Insert FAQ section and initialize
        const relatedProducts = document.querySelector('.related-products');
        if (relatedProducts) {
            const reviewSection = relatedProducts.closest('section.shopify-section');
            reviewSection.insertAdjacentHTML('beforebegin', ivFaqHTML);

            const faqRoot = document.getElementById('iv-faq-root');
            const currentURL = window.location.href.split('?')[0];
            const currentFaqData = ivFaqDataByURL[currentURL];

            initIvFaq(faqRoot, currentFaqData);
        }

        // Guarantee section
        const ivGuaranteeHTML = `
            <section class="iv-guarantee" id="iv-guarantee">
                <div class="iv-container">
                    <div class="iv-guarantee-inner">
                        <div class="iv-guarantee-text">
                        <h2 class="iv-guarantee-title">CATCHMASTER 60-DAY<br><span>SATISFACTION GUARANTEE</span></h2>
                        <p class="iv-guarantee-desc">
                            At AP&amp;G Co., Inc. d/b/a Catchmaster® (“Catchmaster®”), we stand behind our products and quality controls. 
                            If for any reason you are not satisfied with a Catchmaster® product you purchased from one of our authorized sellers, 
                            <a href="https://www.catchmaster.com/pages/satisfaction-guarantee" class="iv-guarantee-link">you may request a refund or replacement product</a>.
                        </p>
                        </div>
                        <div class="iv-guarantee-logo">
                            <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/Catchmaster/RevampPDPLayout/CATCHMASTER60DAYnew.png" alt="Catchmaster Guarantee Logo">
                        </div>
                    </div>
                </div>
            </section>`;

        (function addGuarantee() {
            const faq = document.getElementById('iv-faq-root');
            if (faq) {
                faq.insertAdjacentHTML('afterend', ivGuaranteeHTML);
            }
        })();

        // Hide sections 
        const hideTexts = [
            "Effective Against",
            "Max-Catch Glue Traps Protect You and Your Family From Harm.",
            "Roach Traps that Stop Roaches and Roach-Related Problems.",
            "Spider Traps That Prevent Injuries and Creation of More Spiders.",
            "Glue Traps for Mice that Stop Allergens & Disease.",
            "Why Choose Our Fly Glue Trap?",
            "Designed for Convenience and Efficiency",
            "Safe and Non-Toxic",
            "Why Choose Catchmaster's Clothes Moth Traps?",
            "There Are Two Main Species of Clothes Moths - Catchmaster's Clothes Moth Traps Stops Them Both.",
            "Get Rid of Clothes Moths - Know the Signs.",
        ];
        document.querySelectorAll("section h2").forEach(h2 => {
            const text = h2.textContent.trim();
            if (hideTexts.includes(text)) {
                h2.closest("section").style.display = "none";
            }
        });

        // Only run on the Clothes Moth Traps product page
        if (window.location.href.includes("/products/clothes-moth-traps-six-count-get-rid-of-clothes-moths")) {
            document.body.classList.add("iv-clothes-moth-page");

            const hideTexts = [
                "There Are Two Main Species of Clothes Moths - Catchmaster's Clothes Moth Traps Stops Them Both.",
                "Get Rid of Clothes Moths - Know the Signs.",
                "Why Choose Catchmaster's Clothes Moth Traps?"
            ];
            document.querySelectorAll("section h2").forEach(h2 => {
                const text = h2.textContent.trim();
                if (hideTexts.includes(text)) {
                    h2.closest("section").style.display = "none";
                }
            });

            const hideTextsH1 = [
                "Professional-Grade Glue, Advanced Pheroguard Technology.",
                "Learn More About How to Get Rid of Clothes Moths From This Blog Post."
            ];

            document.querySelectorAll("section h1, div h1").forEach(h1 => {
                const textH1 = h1.textContent.trim();
                if (hideTextsH1.includes(textH1)) {
                    h1.closest(".shopify-section").style.display = "none";
                }
            });

            const hideTextsH3 = [
                "Webbing or Silken Tunnels"
            ];

            document.querySelectorAll("section h3, div h3").forEach(h3 => {
                const textH3 = h3.textContent.trim();
                if (hideTextsH3.includes(textH3)) {
                    h3.closest(".shopify-section").style.display = "none";
                }
            });
        }

        // Custom Radio button
        const select = document.querySelector("product-info .product-form__input .select__select");
        if (!select) return;

        if (!select.value) {
            select.selectedIndex = 0;
        }

        const container = document.createElement("div");
        container.className = "variant-radio-container";

        [...select.options].forEach((opt) => {
            const isSelected = opt.selected;
            container.innerHTML += `
                <label class="variant-radio-label ${isSelected ? 'active-label' : ''}">
                    <input type="radio" name="variant" value="${opt.value}" ${isSelected ? 'checked' : ''}>
                    <span>${opt.text}</span>
                </label>`;
        });
        select.closest(".select").insertAdjacentElement("afterend", container);

        container.addEventListener("change", e => {
            if (e.target.name === "variant") {
                select.value = e.target.value;
                select.dispatchEvent(new Event("change", {
                    bubbles: true
                }));

                document.querySelectorAll(".variant-radio-label").forEach(label => {
                    label.classList.remove("active-label");
                });

                e.target.closest(".variant-radio-label").classList.add("active-label");
            }
        });
    }
}

loadTestCode();