function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-sticky-ATC')) {
        document.querySelector('body').classList.add('iv-sticky-ATC');

        const stickyAtcDiv = `<div class="product-button"></div>`;
        document.body.insertAdjacentHTML('beforeend', stickyAtcDiv);

        const ivsizeImg = `<span class="size_img iv-size-img">
                    <a href="javascript:;" class="tabbs"> 
                        <img src="https://cdn.shopify.com/s/files/1/0034/8789/1525/files/size_chart_button_0ddd13b6-6e60-4f77-9c08-ad9c513dc82e_134x134_crop_center@2x.png?v=1590575619" alt="">
                    </a>
                </span>`;

        const originalSizeImg = document.querySelector('legend.option-header .size_img');
        const tempDiv = document.createElement('span');
        if (originalSizeImg) {
            originalSizeImg.insertAdjacentHTML('afterend', tempDiv.innerHTML = ivsizeImg);
        }

        function sizeClickEvent() {
            const waitForLinks = setInterval(() => {
                const links = document.querySelectorAll('.iv-size-img > a');
                if (links.length > 0) {
                    clearInterval(waitForLinks);
                    links.forEach(link => {
                        link.addEventListener('click', function(event) {
                            event.preventDefault();

                            const targetSection = document.querySelector('.tb ul.tabs li a[href="#tab-3"]');
                            const header = document.querySelector('header');
                            if (targetSection) {
                                const headerHeight = header && window.getComputedStyle(header).position === 'sticky' ?
                                    header.offsetHeight :
                                    0;

                                const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight;

                                requestAnimationFrame(() => {
                                    window.scrollTo({
                                        top: targetPosition,
                                        behavior: 'smooth',
                                    });
                                    setTimeout(() => {
                                        targetSection.dispatchEvent(new Event('click', {
                                            bubbles: true
                                        }));
                                    }, 600);
                                });
                            }
                        });
                    });
                }
            }, 500);
        }
        sizeClickEvent();

        function setParentMinHeight() {
            const smartPaymentElement = document.querySelector('.product-main .spfa .smart-payment-enabled');
            const waitForElement = setInterval(() => {
                if (smartPaymentElement) {
                    clearInterval(waitForElement);
                    const parentElement = smartPaymentElement.parentElement;
                    const smartPaymentHeight = smartPaymentElement.offsetHeight;
                    parentElement.style.minHeight = `${smartPaymentHeight}px`;
                }
            }, 300)
        }

        // Call it initially
        setParentMinHeight();

        // Update on window resize
        window.addEventListener('resize', setParentMinHeight);
        window.addEventListener('scroll', setParentMinHeight);


        const productForm = document.querySelector('.smart-payment-enabled');
        const productButtonDiv = document.querySelector('.product-button');
        const productOuterSection = document.querySelector('.product--outer');
        const originalParent = productForm ? productForm.parentElement : null;
        let isProductFormMoved = false;

        const isElementInViewport = (element) => {
            const rect = element.getBoundingClientRect();
            return rect.bottom > 330 && rect.top < window.innerHeight;
        };

        const moveProductFormToSticky = () => {
            if (productForm && productButtonDiv && !isProductFormMoved) {
                productButtonDiv.appendChild(productForm);
                isProductFormMoved = true;
                applyStickySpecificChanges();
            }
        };

        const moveProductFormBack = () => {
            if (productForm && originalParent && isProductFormMoved) {
                originalParent.appendChild(productForm);
                isProductFormMoved = false;
            }
        };

        const applyStickySpecificChanges = (() => {
            let changesApplied = false;
            return () => {
                if (changesApplied) return;

                const legends = document.querySelectorAll('.product-button .product_options legend');
                legends.forEach(legend => {
                    const div = document.createElement('div');
                    div.innerHTML = legend.innerHTML;
                    Array.from(legend.attributes).forEach(attr => {
                        div.setAttribute(attr.name, attr.value);
                    });
                    legend.replaceWith(div);
                });

                const prodTitle = document.querySelector('.product-title').innerText;
                const afterRow = document.querySelector('.product-button .anu_inner_qty .anu_after_row');
                if (afterRow) {
                    if (!document.querySelector('.product-button  .prod_details')) {
                        afterRow.insertAdjacentHTML('afterbegin', `<div class="prod_details"><p class="prod_title">${prodTitle}</p></div>`);
                    }
                    if (!document.querySelector('.product-button .add-cta')) {
                        afterRow.insertAdjacentHTML('beforeend', `<div class="add-cta">
                            <a href="javascript:;" class="add-cart-cta">
                                <span class="cart-cta">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" width="27" height="28" viewBox="0 0 27 28" fill="none">
                                        <path d="M8.33325 27.3333C7.59992 27.3333 6.97214 27.0722 6.44992 26.55C5.9277 26.0277 5.66659 25.4 5.66659 24.6666C5.66659 23.9333 5.9277 23.3055 6.44992 22.7833C6.97214 22.2611 7.59992 22 8.33325 22C9.06659 22 9.69436 22.2611 10.2166 22.7833C10.7388 23.3055 10.9999 23.9333 10.9999 24.6666C10.9999 25.4 10.7388 26.0277 10.2166 26.55C9.69436 27.0722 9.06659 27.3333 8.33325 27.3333ZM21.6666 27.3333C20.9333 27.3333 20.3055 27.0722 19.7833 26.55C19.261 26.0277 18.9999 25.4 18.9999 24.6666C18.9999 23.9333 19.261 23.3055 19.7833 22.7833C20.3055 22.2611 20.9333 22 21.6666 22C22.3999 22 23.0277 22.2611 23.5499 22.7833C24.0721 23.3055 24.3333 23.9333 24.3333 24.6666C24.3333 25.4 24.0721 26.0277 23.5499 26.55C23.0277 27.0722 22.3999 27.3333 21.6666 27.3333ZM7.19992 5.99996L10.3999 12.6666H19.7333L23.3999 5.99996H7.19992ZM5.93325 3.33329H25.5999C26.111 3.33329 26.4999 3.56107 26.7666 4.01663C27.0333 4.47218 27.0444 4.93329 26.7999 5.39996L22.0666 13.9333C21.8221 14.3777 21.4944 14.7222 21.0833 14.9666C20.6721 15.2111 20.2221 15.3333 19.7333 15.3333H9.79992L8.33325 18H24.3333V20.6666H8.33325C7.33325 20.6666 6.5777 20.2277 6.06659 19.35C5.55547 18.4722 5.53325 17.6 5.99992 16.7333L7.79992 13.4666L2.99992 3.33329H0.333252V0.666626H4.66659L5.93325 3.33329Z" fill="#fff"></path>
                                    </svg>
                                </span>
                                <span class="cart-text">Add to Cart</span>
                            </a>
                        </div>`)

                        document.querySelector('.add-cta').addEventListener('click', function(cta) {
                            document.querySelector('.product-button .anu_inner_qty .anu_after_row .product-form--atc-button').click();
                        })
                    }
                }
                if (document.querySelector('.iv-sticky-ATC .option-header .size_img.iv-size-img a img')) {
                    document.querySelector('.iv-sticky-ATC .option-header .size_img.iv-size-img a img').src = "https://res.cloudinary.com/ignite-visibility/image/upload/v1733824385/Compression_Sale/size_chart_button.png";
                }
                const priceElements = document.querySelectorAll('.product-main .product--price');
                const targetContainer = document.querySelector('.product-button .prod_details');

                if (targetContainer) {
                    priceElements.forEach(priceElement => {
                        const copiedElement = priceElement.cloneNode(true);
                        targetContainer.appendChild(copiedElement);
                    });
                }
                sizeClickEvent();

                // Select box for colors and size
                function createSelectBoxForOptionGroup(optionName, fieldsetSelector) {

                    const targetFieldset = document.querySelector(fieldsetSelector);

                    if (targetFieldset) {
                        const selectBox = document.createElement('select');
                        selectBox.classList.add('iv-custom-select');

                        const optionInputs = targetFieldset.querySelectorAll(`input[name="${optionName}"]`);

                        optionInputs.forEach(input => {
                            const option = document.createElement('option');
                            option.value = input.value;
                            option.textContent = input.value;

                            if (input.checked) {
                                option.selected = true;
                            }

                            selectBox.appendChild(option);
                        });

                        selectBox.addEventListener('change', () => {
                            const selectedValue = selectBox.value;

                            optionInputs.forEach(input => {
                                if (input.value === selectedValue) {
                                    input.click();
                                }
                            });
                        });

                        targetFieldset.appendChild(selectBox);
                    } else {
                        console.error('Target fieldset not found.');
                    }
                }

                // Create select box for "Size"
                createSelectBoxForOptionGroup('Size', '.iv-sticky-ATC .product-button .product_options fieldset.form-options:nth-child(3)');
                changesApplied = true;

            };
        })();

        const handleVisibilityCheck = () => {
            if (productOuterSection) {
                if (isElementInViewport(productOuterSection)) {
                    moveProductFormBack();
                } else {
                    moveProductFormToSticky();
                }
            }
        };

        window.addEventListener('scroll', handleVisibilityCheck);
        window.addEventListener('resize', handleVisibilityCheck);
        window.addEventListener('load', handleVisibilityCheck);

        handleVisibilityCheck();
    }
}

// Load code just for mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {

    loadTestCode();

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