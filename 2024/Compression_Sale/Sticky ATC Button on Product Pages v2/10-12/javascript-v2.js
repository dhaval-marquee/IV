function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-sticky-ATC')) {
        document.querySelector('body').classList.add('iv-sticky-ATC');

        if (document.querySelector('.product-title') && !document.querySelector('.sticky-atc-section')) {

            const productTitle = document.querySelector('.product-title').innerText;
            const stickyATC = `<div class="add-cta">
                        <a href="javascript:;" class="add-cart-cta">
                            <span class="cart-cta">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" width="27" height="28" viewBox="0 0 27 28" fill="none">
                                    <path d="M8.33325 27.3333C7.59992 27.3333 6.97214 27.0722 6.44992 26.55C5.9277 26.0277 5.66659 25.4 5.66659 24.6666C5.66659 23.9333 5.9277 23.3055 6.44992 22.7833C6.97214 22.2611 7.59992 22 8.33325 22C9.06659 22 9.69436 22.2611 10.2166 22.7833C10.7388 23.3055 10.9999 23.9333 10.9999 24.6666C10.9999 25.4 10.7388 26.0277 10.2166 26.55C9.69436 27.0722 9.06659 27.3333 8.33325 27.3333ZM21.6666 27.3333C20.9333 27.3333 20.3055 27.0722 19.7833 26.55C19.261 26.0277 18.9999 25.4 18.9999 24.6666C18.9999 23.9333 19.261 23.3055 19.7833 22.7833C20.3055 22.2611 20.9333 22 21.6666 22C22.3999 22 23.0277 22.2611 23.5499 22.7833C24.0721 23.3055 24.3333 23.9333 24.3333 24.6666C24.3333 25.4 24.0721 26.0277 23.5499 26.55C23.0277 27.0722 22.3999 27.3333 21.6666 27.3333ZM7.19992 5.99996L10.3999 12.6666H19.7333L23.3999 5.99996H7.19992ZM5.93325 3.33329H25.5999C26.111 3.33329 26.4999 3.56107 26.7666 4.01663C27.0333 4.47218 27.0444 4.93329 26.7999 5.39996L22.0666 13.9333C21.8221 14.3777 21.4944 14.7222 21.0833 14.9666C20.6721 15.2111 20.2221 15.3333 19.7333 15.3333H9.79992L8.33325 18H24.3333V20.6666H8.33325C7.33325 20.6666 6.5777 20.2277 6.06659 19.35C5.55547 18.4722 5.53325 17.6 5.99992 16.7333L7.79992 13.4666L2.99992 3.33329H0.333252V0.666626H4.66659L5.93325 3.33329Z" fill="#fff"></path>
                                </svg>
                            </span>
                            <span class="cart-text">Add to Cart</span>
                        </a>
                    </div>`;
            document.body.insertAdjacentHTML('beforeend', `<div class="sticky-atc-section">
                <div class="main-atc-section">
                    <h2 class="sticky-atc-title">${productTitle}</h2>
                    ${stickyATC}
                </div>
            </div>`);
            if (!document.querySelector('.product-form--regular .anu_inner_qty .btn_crt button .add-cta')) {
                document.querySelector('.product-form--regular .anu_inner_qty .btn_crt button').insertAdjacentHTML('afterend', stickyATC)
            }

            const waitForLinks = setInterval(() => {
                const links = document.querySelectorAll('.sticky-atc-section .add-cart-cta');
                if (links.length > 0) {
                    clearInterval(waitForLinks);
                    links.forEach(link => {
                        link.addEventListener('click', function(event) {
                            event.preventDefault();

                            const targetSection = document.querySelector('.tb ul.tabs li a[href="#tab-1"]');
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

            if (document.querySelector('.product-form--regular .anu_inner_qty .btn_crt .add-cta')) {
                document.querySelector('.product-form--regular .anu_inner_qty .btn_crt .add-cta .add-cart-cta').addEventListener('click', function() {
                    document.querySelector('.product-form--regular .anu_inner_qty .btn_crt button').click();
                })
            }
            const productOuterSection = document.querySelector('.product--outer');

            const isElementInViewport = (element) => {
                const rect = element.getBoundingClientRect();
                return rect.bottom > 0 && rect.top < window.innerHeight;
            };

            const handleVisibilityCheck = () => {
                if (productOuterSection) {
                    if (isElementInViewport(productOuterSection)) {
                        if (document.querySelector('.sticky-atc-section')) {
                            document.querySelector('.sticky-atc-section').style.display = "none";
                        }
                    } else {
                        document.querySelector('.sticky-atc-section').style.display = "block";
                    }
                }
            };

            window.addEventListener('scroll', handleVisibilityCheck);
            window.addEventListener('resize', handleVisibilityCheck);
            window.addEventListener('load', handleVisibilityCheck);

            handleVisibilityCheck();
        };
    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);