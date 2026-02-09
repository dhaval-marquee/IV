function heroText() {
    var pageURL = window.location.href;

    if (!document.body.classList.contains('iv-form-hero')) {
        document.body.classList.add('iv-form-hero');

        
        if(pageURL.includes('household-moving-company/long-distance-moving')){
            // For this page https://www.allied.com/household-moving-company/long-distance-moving

            if (!document.body.classList.contains('iv-form-hero-v1')) {
                document.body.classList.add('iv-form-hero-v1');
                var movingFromTo = document.querySelectorAll('.iv-form-hero .moving-from-to');
                if (movingFromTo.length > 0) {
                    movingFromTo[0].classList.add('step1');
                }
        
                var step1SlideHeader = document.querySelector('.iv-form-hero .step1 .slide-header');
                if (step1SlideHeader) {
                    var p = step1SlideHeader.querySelector('p');
                    if (p) {
                        p.remove();
                    }
        
                    var ul = document.createElement('ul');
                    ul.innerHTML = `
                        <li>Full-Service or Customizable Moving Options</li>
                        <li>24/7 Customer Support Every Step of the Way</li>
                        <li>Transparent Pricing with No Hidden Fees</li>
                    `;
                    step1SlideHeader.appendChild(ul);
                }
        
                var step1SlideFooter = document.querySelector('.iv-form-hero .step1 .slide-footer');
                if (step1SlideFooter) {
                    var h2 = document.createElement('h2');
                    h2.classList.add('head2');
                    h2.innerHTML = `<span style="color: #ffd31f;">Allied is proud to drive life's biggest moments since 1928.</span>`;
                    step1SlideFooter.appendChild(h2);
                }
            }

        } else if(pageURL.includes('household-moving-company/interstate-moving')){
            // https://www.allied.com/household-moving-company/interstate-moving

            if (!document.body.classList.contains('iv-form-hero-v2')) {
                document.body.classList.add('iv-form-hero-v2');
                
                var movingFromTo = document.querySelectorAll('.iv-form-hero .moving-from-to');
                if (movingFromTo.length > 0) {
                    movingFromTo[0].classList.add('step1');
                }
    
                document.querySelector('.iv-form-hero .instaquote-container .content-section .textcontent').insertAdjacentHTML('beforeend', `<h3 style="text-align:center;">Experience a Hassle-Free Move with Allied</h3>`);
    
                var step1SlideHeader = document.querySelector('.iv-form-hero .step1 .slide-header');
                if (step1SlideHeader) {
                    var p = step1SlideHeader.querySelector('p');
                    if (p) {
                        p.remove();
                    }
    
                    var ul = document.createElement('ul');
                    ul.innerHTML = `
                        <li>Full-Service or Customizable Moving Options</li>
                        <li>24/7 Customer Support Every Step of the Way</li>
                        <li>Transparent Pricing with No Hidden Fees</li>
                    `;
                    step1SlideHeader.appendChild(ul);
                }
    
                var step1SlideFooter = document.querySelector('.iv-form-hero .step1 .slide-footer');
                if (step1SlideFooter) {
                    var h2 = document.createElement('h2');
                    h2.classList.add('head2');
                    h2.innerHTML = `<span style="color: #ffd31f;">Allied is proud to drive life's biggest moments since 1928.</span>`;
                    step1SlideFooter.appendChild(h2);
                }
            }
                

        } else if(pageURL.includes('household-moving-company/cross-country-moving')) {
            // https://www.allied.com/household-moving-company/cross-country-moving

            if (!document.body.classList.contains('iv-form-hero-v3')) {
                document.body.classList.add('iv-form-hero-v3');

                var movingFromTo = document.querySelectorAll('.iv-form-hero .moving-from-to');
                if (movingFromTo.length > 0) {
                    movingFromTo[0].classList.add('step1');
                }
    
                document.querySelector('.iv-form-hero .instaquote-container .content-section .textcontent').insertAdjacentHTML('beforeend', `<h3 style="text-align:center;">Experience a Hassle-Free Move with Allied</h3>`);
    
                var step1SlideHeader = document.querySelector('.iv-form-hero .step1 .slide-header');
                if (step1SlideHeader) {
                    var p = step1SlideHeader.querySelector('p');
                    if (p) {
                        p.remove();
                    }
    
                    var ul = document.createElement('ul');
                    ul.innerHTML = `
                        <li>Full-Service or Customizable Moving Options</li>
                        <li>24/7 Customer Support Every Step of the Way</li>
                        <li>Transparent Pricing with No Hidden Fees</li>
                    `;
                    step1SlideHeader.appendChild(ul);
                }
    
                var step1SlideFooter = document.querySelector('.iv-form-hero .step1 .slide-footer');
                if (step1SlideFooter) {
                    var h2 = document.createElement('h2');
                    h2.classList.add('head2');
                    h2.innerHTML = `<span style="color: #ffd31f;">Allied is proud to drive life's biggest moments since 1928.</span>`;
                    step1SlideFooter.appendChild(h2);
                }
            }

        } else if(pageURL.includes('household-moving-company/household-moving')) {
            // https://www.allied.com/household-moving-company/household-moving

            if (!document.body.classList.contains('iv-form-hero-v4')) {
                document.body.classList.add('iv-form-hero-v4');
            
                var movingFromTo = document.querySelectorAll('.iv-form-hero .moving-from-to');
                if (movingFromTo.length > 0) {
                    movingFromTo[0].classList.add('step1');
                }
    
                var step1SlideHeader = document.querySelector('.iv-form-hero .step1 .slide-header');
                if (step1SlideHeader) {
                    var p = step1SlideHeader.querySelector('p');
                    if (p) {
                        p.remove();
                    }
    
                    var ul = document.createElement('ul');
                    ul.innerHTML = `
                        <li>Full-Service or Customizable Moving Options</li>
                        <li>24/7 Customer Support Every Step of the Way</li>
                        <li>Transparent Pricing with No Hidden Fees</li>
                    `;
                    step1SlideHeader.appendChild(ul);
                }
    
                var step1SlideFooter = document.querySelector('.iv-form-hero .step1 .slide-footer');
                if (step1SlideFooter) {
                    var h2 = document.createElement('h2');
                    h2.classList.add('head2');
                    h2.innerHTML = `<span style="color: #ffd31f;">Allied is proud to drive life's biggest moments since 1928.</span>`;
                    step1SlideFooter.appendChild(h2);
                }
            }

        } else if(pageURL.includes('household-moving-company/auto-transport')) {
            // https://www.allied.com/household-moving-company/auto-transport

            if (!document.body.classList.contains('iv-form-hero-v5')) {
                document.body.classList.add('iv-form-hero-v5');

                var movingFromTo = document.querySelectorAll('.iv-form-hero .moving-from-to');
                if (movingFromTo.length > 0) {
                    movingFromTo[0].classList.add('step1');
                }
    
                var step1SlideHeader = document.querySelector('.iv-form-hero .step1 .slide-header');
                if (step1SlideHeader) {
                    var p = step1SlideHeader.querySelector('p');
                    if (p) {
                        p.remove();
                    }
    
                    var ul = document.createElement('ul');
                    ul.innerHTML = `
                        <li>Full-Service or Customizable Moving Options</li>
                        <li>24/7 Customer Support Every Step of the Way</li>
                        <li>Transparent Pricing with No Hidden Fees</li>
                    `;
                    step1SlideHeader.appendChild(ul);
                }
    
                document.querySelector('.iv-form-hero fieldset .slide-overlay .slide-footer p').remove();
                const ivstar = `<div class="content-section">
                                    <div class="textcontent">
                                        <div class="padded-md ratings">
                                            <div class="stars">
                                                <span class="star-image">
                                                    <img alt="" src="/ResourcePackages/Allied/assets/house-hold_dist/img/star.png">
                                                    <img alt="" src="/ResourcePackages/Allied/assets/house-hold_dist/img/star.png">
                                                    <img alt="" src="/ResourcePackages/Allied/assets/house-hold_dist/img/star.png">
                                                    <img alt="" src="/ResourcePackages/Allied/assets/house-hold_dist/img/star.png">
                                                    <img alt="" src="/ResourcePackages/Allied/assets/house-hold_dist/img/star.png">
                                                </span>
                                                <span class="star-text">Average Rating: 4.75/5&nbsp;based on 5,000 customer reviews</span>
                                            </div>
                                            </div>
                                        </div>
                                    </div>`;
                document.querySelector('.iv-form-hero fieldset .slide-overlay .slide-footer').insertAdjacentHTML('afterbegin', ivstar);
    
                var step1SlideFooter = document.querySelector('.iv-form-hero .step1 .slide-footer');
                if (step1SlideFooter) {
                    var h2 = document.createElement('h2');
                    h2.classList.add('head2');
                    h2.innerHTML = `<span style="color: #ffd31f;">Allied is proud to drive life's biggest moments since 1928.</span>`;
                    step1SlideFooter.appendChild(h2);
                }
            }
        } else if(pageURL.includes('household-moving-company/national-moving-companies')) {
            // https://www.allied.com/household-moving-company/national-moving-companies

            if (!document.body.classList.contains('iv-form-hero-v6')) {
                document.body.classList.add('iv-form-hero-v6');
                
                var movingFromTo = document.querySelectorAll('.iv-form-hero .moving-from-to');
                if (movingFromTo.length > 0) {
                    movingFromTo[0].classList.add('step1');
                }
    
                var step1SlideHeader = document.querySelector('.iv-form-hero .step1 .slide-header');
                if (step1SlideHeader) {
                    var p = step1SlideHeader.querySelector('p');
                    if (p) {
                        p.remove();
                    }
    
                    var ul = document.createElement('ul');
                    ul.innerHTML = `
                        <li>Full-Service or Customizable Moving Options</li>
                        <li>24/7 Customer Support Every Step of the Way</li>
                        <li>Transparent Pricing with No Hidden Fees</li>
                    `;
                    step1SlideHeader.appendChild(ul);
                }
    
                var step1SlideFooter = document.querySelector('.iv-form-hero .step1 .slide-footer');
                if (step1SlideFooter) {
                    var h2 = document.createElement('h2');
                    h2.classList.add('head2');
                    h2.innerHTML = `<span style="color: #ffd31f;">Allied is proud to drive life's biggest moments since 1928.</span>`;
                    step1SlideFooter.appendChild(h2);
                }
            }

        }

        



    }
}

var checkCondition = setInterval(function() {
    if (typeof window.jQuery !== 'undefined' && document.body) {
        clearInterval(checkCondition);
        heroText();
    }
}, 100);



