function sizeGuidCode() {

    if (!$('body').hasClass('iv-size-guide')) {
        $('body').addClass('iv-size-guide');

        if (!$('.iv-size-guide-box').length) {

            // Reserve now button
            var reserveButton = setInterval(() => {
                const buttonReserve1 = $('.pss-invisible-mobile-only2.hero-size-guide a[href="/locations/"]');
                const buttonReserve2 = $('.hero-locker a[href="/locations/"]');
                if(buttonReserve1 || buttonReserve2){
                    clearInterval(reserveButton)
                    buttonReserve1.attr('href', 'javascript:;');
                    buttonReserve2.attr('href', 'javascript:;');
                }
            }, 500);

            // Button "Compare Units"
            const compareUnits = `<a class="compare-cta" href="javascript:;">Compare Units</a>`;

            $('.pss-size-guide__what-can').each(function() {
                if ($(this).text().trim() === 'What can you fit?') {
                    var parentContainer = $(this).closest('.container-fluid');
                    if (!parentContainer.hasClass('hero-size-guide')) {
                        parentContainer.addClass('hero-size-guide');
                    }
                }
            });

            if (!$('.hero-size-guide div:first-child div.pss-horizontal-center > div .compare-cta').length) {
                $('.hero-size-guide div:first-child div.pss-horizontal-center > div').append(compareUnits);
            }

            if (!$('.hero-size-guide .pss-size-guide__what-can-fit-inner .compare-cta').length) {
                $('.hero-size-guide .pss-size-guide__what-can-fit-inner').append(compareUnits);
            }

            // Button "Compare Units" | locker sized unit page
            var path = window.location.pathname
            if (path == '/self-storage/size-guide/locker-sized-unit/') {
                $('h1, h2').each(function() {
                    if ($(this).text().trim() === 'Storage Locker Rental' || $(this).text().trim() === 'Storage Unit Size Guide') {
                        const $row = $('.pss-size-guide__unit-box').closest('.row');
                        if (!$row.hasClass('hero-locker')) {
                            $row.addClass('hero-locker');
                        }
                    }
                });
                if (!$('.hero-locker .pss-size-guide__unit-box .compare-cta').length) {
                    $('.hero-locker .pss-size-guide__unit-box').append(compareUnits);
                }
            }

            // Zipcode Popup
            $('.iv-size-guide header').prepend(`<div class="iv-size-guide-box search-popup">
                <div class="search-popup-inner">
                    <div class="search-popup-container">
                        <div class="search-popup-content">
                            <a class="close_button" href="javascript:;">Close</a>
                            <div class="iv-size-guide-box-inner">
                                <h3 class="title">Enter your City or ZIP Code</h3>
                                <div class="pss-search-form"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`);

            // Desktop
            var $elementToMove = $('#navbarSupportedContent .form-inline.pss-form');
            var $targetElement = $('.iv-size-guide-box-inner > .pss-search-form');

            if ($elementToMove.length && $targetElement.length) {
                $targetElement.append($elementToMove);
            }

            // Mobile
            function moveElement() {
                var $elementToMove = $('#nav .form-inline.pss-form.pss-invisible-mobile-only2');
                var $targetElement = $('#navbarSupportedContent.pss-navbar__navmenu .navbar-nav');
                var $originalParent = $('#nav .pss-navbar__action-btn');

                if ($elementToMove.length && $targetElement.length && $originalParent.length) {
                    if (window.innerWidth < 1200) {
                        $targetElement.before($elementToMove);
                    } else {
                        $originalParent.before($elementToMove);
                    }
                }
            }
            moveElement();

            $(window).on('resize', moveElement);

            $('a[href="/locations/"]').each(function() {
                if($(this).text() == "Find Storage") {
                    $(this).attr('href', 'javascript:;');
                    $(this).addClass('find-storage');
                }
            });

            // Hide and show popup (For Reserve now and Find Storage button)
            const popupTriger = $('.find-storage, .pss-invisible-mobile-only2.hero-size-guide [href="/locations/"], .hero-locker a[href="/locations/"]');
            popupTriger.on('click', function() {
                if (!$('.iv-size-guide-box').hasClass('show')) {
                    $('.iv-size-guide-box').addClass('show');
                    $('body').addClass('iv-size-show');
                }
            });

            $('.iv-size-guide .iv-size-guide-box .close_button').on('click', function() {
                if ($('.iv-size-guide-box').hasClass('show')) {
                    $('.iv-size-guide-box').removeClass('show');
                    $('body').removeClass('iv-size-show');
                }
            });

            $(window).on('resize', function() {
                removeClass();
            });

            // storage box
            const products = [{
                    'img': `<img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1727845585/PriceSelfStorage/CompareUnits/10x5.png" alt="" />`,
                    'category': 'Locker',
                    'info': 'These locker storage units are just enough to clear the clutter from your closets, garage, or spare bedroom.',
                    'link' : '/self-storage/size-guide/locker-sized-unit/'
                },
                {
                    'img': `<img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1727845585/PriceSelfStorage/CompareUnits/5x5.png" alt="" />`,
                    'category': 'Small 5 x 5',
                    'info': 'Perfect for storing small items like File cabinets, Small furniture items, and office supplies.',
                    'link' : '/self-storage/size-guide/5x5-storage-unit/'
                },
                {
                    'img': `<img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1727845585/PriceSelfStorage/CompareUnits/10x5.png" alt="" />`,
                    'category': 'Small 5 x 10',
                    'info': 'For those looking to store medium to semi-large items like a queen bed, dresser, or even a quad or motorcycle!',
                    'link' : '/self-storage/size-guide/5x10-storage-unit/'
                },
                {
                    'img': `<img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1727845585/PriceSelfStorage/CompareUnits/10x10.png" alt="" />`,
                    'category': 'Medium 10 x 10',
                    'info': 'Need an extra room for your house? For those who need a room-size capacity storage. Ready to store a couch, dining sets, and multiple boxes.',
                    'link' : '/self-storage/size-guide/10x10-storage-unit/'
                },
                {
                    'img': `<img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1727845585/PriceSelfStorage/CompareUnits/10x15.png" alt="" />`,
                    'category': 'Large 10 x 15',
                    'info': 'Our 10x15 self storage unit can accommodate up to three bedrooms worth of belongings.',
                    'link' : '/self-storage/size-guide/10x15-storage-unit/'
                },
                {
                    'img': `<img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1727845585/PriceSelfStorage/CompareUnits/10x20.png" alt="" />`,
                    'category': 'Large 10 x 20',
                    'info': 'This unit can store the furnishings and belongings of a 3- to 4-bedroom house. For businesses, you’ll have more than enough space for large office furniture, extra equipment, many file boxes, or a wide variety of business supplies.',
                    'link' : '/self-storage/size-guide/10x20-storage-unit/'
                },
                {
                    'img': `<img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1727845632/PriceSelfStorage/CompareUnits/10x30.png" alt="" />`,
                    'category': 'Large 10 x 30',
                    'info': 'This storage unit size gives you enough space to store the contents of a 4-5 bedroom house. Store a full household’s worth of belongings!',
                    'link' : '/self-storage/size-guide/10x30-storage-unit/'
                },
            ];

            var storageBox = `<div class="size-box" id="size-box">
                            <h2 class="size-box-heading padding-bottom--20">Do I Need To Size Up or Down?</h2>
                            <div class="size-box-flex-box">
                            </div>
                        </div>`;

            if (!$('.size-box').length) {
                var allH2 = $('.pss-size-guide h2');
                allH2.each(function(index) {
                    if (index === 0) {
                        $(this).next().after(storageBox);
                    }
                });
            }

            $('[aria-label="Locker Sized Unit"], [aria-labelledby="Locker Sized Unit"]').parent().addClass('nav_category');

            var active = $('.nav_category a.active');
            if (active.length) {
                var activeText = active.text();
                var nextText = active.next().text();
                var prevText = active.prev().text();

                // Clear the current display
                $('.size-box-flex-box').empty();

                $.each(products, function(index, product) {
                    if (product.category == activeText || product.category == nextText || product.category == prevText) {
                        var positionClass = '';
                        if (product.category == activeText) {
                            positionClass = 'center-product';
                        } else if (product.category == nextText) {
                            positionClass = 'right-product';
                        } else if (product.category == prevText) {
                            positionClass = 'left-product';
                        }

                        $('.size-box-flex-box').append(`
                            <a href="${product.link}" class="size-box-storage ${positionClass}">
                                <div class="size-box-img">
                                    ${product.img}
                                </div>
                                <h3 class="size-box-category">${product.category}</h3>
                                <p class="size-box-info">${product.info}</p>
                            </a>
                        `);
                    }
                });
            }

            $('a.compare-cta').each(function() {
                $(this).on('click', function(e) {
                    e.preventDefault();
                    
                    $('html, body').animate({
                        scrollTop: $('#size-box').offset().top - 130
                    }, 1000);
                });
            });
            
            if (path.includes('/self-storage/size-guide/locker-sized-unit') || path.includes('/self-storage/size-guide/5x5-storage-unit')) {
                document.querySelector('.size-box-flex-box [href="/self-storage/size-guide/locker-sized-unit/"]').style.display = "none";
            }


            $(document).on('click', '.iv-size-guide-box-inner .pss-search-form__button', function() {

                var activeSize = $('.pss-button--ghost-medium.active').text().trim();
                activeSize = activeSize.replace(/[0-9\sxX]/g, '');

                if (activeSize === "Small" || activeSize === "Medium" || activeSize === "Large") {
                    sessionStorage.setItem('sortProduct', activeSize);
                }

                setTimeout(() => {
                    if ($('#errorSearchModal').hasClass('show')) {
                        sessionStorage.removeItem('sortProduct');
                    }
                }, 2000);
            });
        }
    }
}

function locationPageCode() {
    if(sessionStorage.getItem('sortProduct')) {
        if(sessionStorage.getItem('sortProduct') === "Small") {
            $('#divSize #sizeSmall').trigger('click');
        } else if(sessionStorage.getItem('sortProduct') === "Medium") {
            $('#divSize #sizeMedium').trigger('click');
        } else if(sessionStorage.getItem('sortProduct') === "Large") {
            $('#divSize #sizeLarge').trigger('click');
        }
    }
}

if(window.location.pathname.includes('/self-storage/size-guide/')) {
    sizeGuidCode();
} else if (window.location.pathname.includes('/locations/')) {
    locationPageCode()
}