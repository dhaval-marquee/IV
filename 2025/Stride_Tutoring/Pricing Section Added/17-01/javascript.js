function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-pricing-try-us')) {
        document.querySelector('body').classList.add('iv-pricing-try-us');

        const shortFormatIcon = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32">
        <path d="M23.5 31.461h-15c-0.316 0-0.588-0.221-0.652-0.531l-2.5-12c-0.041-0.195 0.008-0.401 0.135-0.557 0.127-0.153 0.317-0.245 0.517-0.245h20c0.2 0 0.391 0.088 0.519 0.245 0.125 0.156 0.175 0.361 0.135 0.557l-2.5 12c-0.065 0.309-0.339 0.531-0.653 0.531zM9.043 30.128h13.916l2.223-10.667h-18.361l2.223 10.667zM24.667 22.128h-17.333c-0.368 0-0.667-0.3-0.667-0.667 0-0.369 0.299-0.667 0.667-0.667h17.333c0.367 0 0.667 0.297 0.667 0.667 0 0.367-0.3 0.667-0.667 0.667zM16 18.795c-0.368 0-0.667-0.3-0.667-0.667v-14.667c0-0.368 0.299-0.667 0.667-0.667s0.667 0.299 0.667 0.667v14.667c0 0.367-0.299 0.667-0.667 0.667zM15.283 16.46v0c-1.988 0-3.672-0.699-4.871-2.023-1.235-1.361-1.856-3.341-1.664-5.295 0.035-0.355 0.347-0.649 0.697-0.6 2.472 0.131 4.537 1.016 5.813 2.495 1.096 1.271 1.58 2.925 1.399 4.788-0.031 0.319-0.285 0.575-0.607 0.599-0.263 0.025-0.519 0.036-0.768 0.036zM10.048 9.932c0.019 1.361 0.503 2.676 1.352 3.609 0.94 1.036 2.281 1.584 3.883 1.584v0c0.027 0 0.053 0 0.080 0 0.008-1.253-0.371-2.359-1.112-3.217-0.925-1.072-2.401-1.761-4.203-1.976zM16.776 12.46c-0.249 0-0.505-0.011-0.771-0.033-0.32-0.028-0.576-0.28-0.607-0.597-0.18-1.861 0.304-3.519 1.399-4.789 1.279-1.479 3.341-2.364 5.813-2.492 0.356-0.045 0.663 0.248 0.696 0.597 0.193 1.953-0.428 3.932-1.664 5.296-1.196 1.32-2.879 2.019-4.867 2.019zM16.695 11.127c1.667-0.028 3.008-0.531 3.964-1.584 0.849-0.936 1.333-2.251 1.352-3.609-1.801 0.211-3.277 0.904-4.203 1.973-0.74 0.864-1.12 1.967-1.113 3.22zM15.283 8.46v0c-1.988 0-3.672-0.699-4.871-2.023-1.235-1.361-1.856-3.341-1.664-5.295 0.035-0.355 0.347-0.637 0.697-0.6 2.472 0.131 4.537 1.016 5.813 2.495 1.096 1.271 1.58 2.925 1.399 4.788-0.031 0.319-0.285 0.575-0.607 0.599-0.263 0.025-0.519 0.036-0.768 0.036zM10.048 1.932c0.019 1.361 0.503 2.676 1.352 3.609 0.94 1.036 2.281 1.584 3.883 1.584v0c0.027 0 0.053 0 0.080 0 0.008-1.253-0.371-2.359-1.112-3.217-0.925-1.072-2.401-1.761-4.203-1.976z"></path>
        </svg>`

        const longFormatIcon = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32">
        <path d="M14.253 30.18c-0.015 0-0.029 0-0.047-0.003-3.431-0.237-6.265-1.631-8.425-4.143-3.521-4.1-5.069-11.008-4.363-19.451 0.029-0.361 0.321-0.66 0.703-0.609 4.747 0.277 9.948 3.045 13.576 7.224 3.303 3.801 4.924 8.252 4.572 12.539-0.031 0.364-0.339 0.628-0.72 0.609-0.367-0.031-0.64-0.355-0.611-0.719 0.323-3.924-1.187-8.028-4.249-11.556-3.232-3.724-7.772-6.251-11.995-6.712-0.532 7.676 0.947 14.14 4.095 17.807 1.917 2.232 4.444 3.472 7.505 3.68 0.367 0.027 0.644 0.344 0.62 0.711-0.019 0.352-0.312 0.623-0.661 0.623zM17.748 31.361c-0.305 0-0.58-0.211-0.649-0.521-1.608-7.159-9.288-16.467-12.544-19.611-0.265-0.253-0.273-0.675-0.019-0.941 0.256-0.264 0.68-0.271 0.943-0.019 3.347 3.236 11.245 12.827 12.919 20.277 0.081 0.361-0.145 0.713-0.504 0.8-0.048 0.011-0.097 0.015-0.145 0.015zM19.671 24.289c-0.309 0-0.585-0.216-0.652-0.531-0.076-0.36 0.156-0.713 0.516-0.789 10.043-2.101 10.111-15.788 9.765-20.943-5.8 0.629-11.848 5.075-14.577 10.795-0.159 0.333-0.559 0.472-0.889 0.315-0.332-0.159-0.473-0.556-0.315-0.888 3.028-6.348 9.907-11.229 16.356-11.607 0.355-0.035 0.675 0.251 0.703 0.609 1.072 12.781-2.955 21.388-10.771 23.025-0.047 0.008-0.091 0.013-0.136 0.013zM17.747 18.057c-0.115 0-0.231-0.028-0.336-0.091-0.317-0.188-0.424-0.593-0.237-0.915 3.067-5.233 7.295-10.143 9.389-12.169 0.267-0.252 0.688-0.249 0.943 0.019 0.255 0.261 0.249 0.688-0.016 0.943-2.041 1.972-6.167 6.765-9.167 11.887-0.125 0.207-0.348 0.327-0.576 0.327z"></path>
        </svg>`

        const animationBack = `<div
                    class="nectar-lottie-wrap">
                    <div class="nectar-lottie"
                        data-lottie-settings="{&quot;trigger_type&quot;:&quot;play&quot;,&quot;mobile_func&quot;:&quot;default&quot;,&quot;loop&quot;:&quot;true&quot;,&quot;trigger_offset&quot;:&quot;0.00,100.00&quot;,&quot;frame_constraint&quot;:&quot;0.00,100.00&quot;,&quot;speed&quot;:&quot;0.2&quot;,&quot;width_desktop&quot;:&quot;150%&quot;,&quot;height_desktop&quot;:&quot;150%&quot;,&quot;alignment&quot;:&quot;center&quot;,&quot;preserve_aspect_ratio&quot;:&quot;xMidYMid meet&quot;,&quot;position_desktop&quot;:&quot;absolute&quot;,&quot;top_position_desktop&quot;:&quot;0&quot;,&quot;left_position_desktop&quot;:&quot;0&quot;,&quot;translate_y_desktop&quot;:&quot;-50%&quot;,&quot;translate_x_desktop&quot;:&quot;25%&quot;,&quot;preserveaspectratio&quot;:&quot;none&quot;,&quot;json_url&quot;:&quot;https:\/\/assets1.lottiefiles.com\/packages\/lf20_w4NUp4.json&quot;,&quot;zindex&quot;:&quot;-1&quot;,&quot;box_shadow_method&quot;:&quot;filter&quot;}"
                        id="nectar-lottie-1737106357152">
                        </div>
                </div>`

        const pricingSection = `<div class="iv-pricing-sec">
            <div class="iv-pricing-container">
                <div class="iv-pricing-title nectar-highlighted-text">
                    <h2 class="iv-pricing-heading"><em class="animated">Tutor Pricing <svg class="nectar-scribble basic-underline" viewBox="-400 -55 730 60" preserveAspectRatio="none"><path style="animation-duration: 1.8s;" d="m -383.25 -6 c 55.25 -22 130.75 -33.5 293.25 -38 c 54.5 -0.5 195 -2.5 401 15" stroke="#fd762b" pathLength="1" stroke-width="20" fill="none"></path></svg></em></h2>
                </div>
                <div class="iv-pricing-plans-sec">
                    <div class="iv-pricing-plans">
                        <div class="iv-pricing-plan iv-short-format-plan">
                            ${animationBack}
                            <div class='iv-pricing-plan-icon'>
                                ${shortFormatIcon}
                            </div>
                            <h5 class="iv-plan-text">Short Format</h5>
                            <div class="iv-price-typography">
                                <span class="iv-price-text">30</span>
                                <span class="iv-after-text">Minutes</span>
                            </div>
                            <div class="iv-divider-wrap" data-alignment="default"><div style="height: 15px;" class="divider"></div></div>
                            <p class="iv-plan-info-text">Shorter sessions are great for:</p>
                            <div class="iv-divider-wrap" data-alignment="default"><div style="height: 15px;" class="divider"></div></div>
                            <div class="iv-plan-info">
                                <ul>
                                    <li><i class="icon-default-style fa fa-circle accent-color"></i> Focusing on practical problem solving</li>
                                    <li><i class="icon-default-style fa fa-circle accent-color"></i> Homework questions and study tips</li>
                                    <li><i class="icon-default-style fa fa-circle accent-color"></i> Staying within an established budget</li>
                                </ul>
                            </div>
                            <div class="iv-divider-wrap" data-alignment="default"><div style="height: 90px;" class="divider-long"></div></div>
                            <div class="iv-og-price-tag">
                                <h3 class="iv-plan-price-tag"><del>$32.50</del></h3>
                            </div>
                            <div class="iv-off-price-tag nectar-highlighted-text ">
                                <h3 class="iv-plan-price-tag"><em class="animated">$19.99</em></h3>
                            </div>
                        </div>
                    </div>
                    <div class="iv-pricing-plans">
                        <div class="iv-pricing-plan iv-long-format-plan">
                            <div class='iv-pricing-plan-icon'>
                                ${longFormatIcon}
                            </div>
                            <h5 class="iv-plan-text">Long Format</h5>
                            <div class="iv-price-typography">
                                <span class="iv-price-text">60</span>
                                <span class="iv-after-text">Minutes</span>
                            </div>
                            <div class="iv-divider-wrap" data-alignment="default"><div style="height: 15px;" class="divider"></div></div>
                            <p class="iv-plan-info-text">Longer sessions are great for:</p>
                            <div class="iv-divider-wrap" data-alignment="default"><div style="height: 15px;" class="divider"></div></div>
                            <div class="iv-plan-info">
                                <ul>
                                    <li><i class="icon-default-style fa fa-circle accent-color"></i> Addressing complex concepts</li>
                                    <li><i class="icon-default-style fa fa-circle accent-color"></i> Covering multiple course topics</li>
                                    <li><i class="icon-default-style fa fa-circle accent-color"></i> Developing strong study habits</li>
                                </ul>
                            </div>
                            <div class="iv-divider-wrap" data-alignment="default"><div style="height: 90px;" class="divider-long"></div></div>
                            <div class="iv-og-price-tag">
                                <h3 class="iv-plan-price-tag"><del>$65.00</del></h3>
                            </div>
                            <div class="iv-off-price-tag nectar-highlighted-text ">
                                <h3 class="iv-plan-price-tag"><em class="animated">$39.99</em></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        if(window.location.href.includes('https://tutoring.k12.com/try-us/')){
            if(!document.querySelector('.iv-pricing-sec')){
                document.querySelector('#steps').insertAdjacentHTML('afterend', pricingSection)
            }
        }

        if(window.location.href.includes('https://tutoring.k12.com/try-us-mobile/')){
            if(!document.querySelector('.iv-pricing-sec')){
                document.querySelectorAll('h2').forEach(function(heading){
                    if(heading.innerText==='FAQs'){
                        heading.closest('.wpb_row').insertAdjacentHTML('beforebegin' , pricingSection)
                    }
                })
            }
        }
        const lottie = setInterval(() => {
            if (document.querySelector('.nectar-lottie-wrap')) {
                const element = document.querySelector('.nectar-lottie-wrap');
                clearInterval(lottie)
                element.style.transform = 'translateX(25%) translateY(-50%)';
                element.style.display = 'flex';
            }
        }, 2000);


        const jQueryScript = document.createElement('script');
        jQueryScript.src = 'https://tutoring.k12.com/wp-content/themes/salient/js/build/elements/nectar-lottie.js?ver=15.0.9';
        document.body.appendChild(jQueryScript);

        const lottiePlayerScript = document.createElement('script');
        lottiePlayerScript.src = 'https://tutoring.k12.com/wp-content/themes/salient/js/build/third-party/lottie-player.min.js?ver=0.4.0';
        document.body.appendChild(lottiePlayerScript);

        const lottieWebScript = document.createElement('script');
        lottieWebScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.0/lottie.min.js';
        document.body.appendChild(lottieWebScript);
    }
}

// Check condition and initialize the code
const checkCondition = setInterval(() => {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);