function beforeAfter() {
    if (!document.querySelector('body').classList.contains('before_after_demo')) {
        document.querySelector('body').classList.add('before_after_demo');

        document.querySelectorAll('.amw-content-component__tiles-container')[2].insertAdjacentHTML('beforebegin',`
            <div class="before-after-wrapper">
                <div class="before-after-item">
                    <div class="image-container">
                        <img class="image-after slider-image" src="https://www.amway.com/medias/art-01-dpb-VitCHA3Before-m.jpg?context=bWFzdGVyfHJvb3R8MjIwNDkzfGltYWdlL2pwZWd8aDhkL2g2OC85NDE4NTMzOTI4OTkwLmpwZ3w4ZDcyMzNhYTVlZmM2ZWMyNTY2NTEwOGJlN2M0MWNjMDRjMjFlMjFkYjgyZmZmMGY0ZjIxZTJhMjkzMTBlN2Zl" alt="black and white" />
                        <img class="image-before slider-image" src="https://www.amway.com/medias/art-01-dpb-VitCHA3After-m.jpg?context=bWFzdGVyfHJvb3R8MjMyODQ3fGltYWdlL2pwZWd8aDJhL2g3OS85NDE4NTMzOTk0NTI2LmpwZ3w4MTRiNWM3MTNlNWFkMWNhMzljMDkyMjM1ZDYxZmRjMGZiMWMyNDViOTBlODE5NDk3ODU0ZTI4YjFkMjE0M2Ey" alt="color photo" />
                    </div>
                    <input type="range" min="0" max="100" value="50" aria-label="Percentage of before photo shown" class="slider" />
                    <div class="slider-line" aria-hidden="true"></div>
                    <div class="slider-button" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                            viewBox="0 0 256 256">
                            <rect width="256" height="256" fill="none"></rect>
                            <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="16"></line>
                            <line x1="96" y1="128" x2="16" y2="128" fill="none" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="16"></line>
                            <polyline points="48 160 16 128 48 96" fill="none" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="16"></polyline>
                            <line x1="160" y1="128" x2="240" y2="128" fill="none" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="16"></line>
                            <polyline points="208 96 240 128 208 160" fill="none" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="16"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
        </div>`);

        document.querySelectorAll('.amw-content-component__tiles-container')[3].insertAdjacentHTML('beforebegin',`
            <div class="before-after-wrapper">
                <div class="before-after-item">
                    <div class="image-container">
                        <img class="image-after slider-image" src="https://www.amway.com/medias/art-00-dpb-VitCHA3Before-m.jpg?context=bWFzdGVyfHJvb3R8NTc0OTY4fGltYWdlL2pwZWd8aDA4L2hjNy85NDE4NTM0MDYwMDYyLmpwZ3xkMDExMzYyODM4NDA5YjA3ZTAxZjNlNTZhNWFjZWU4NDU4MzY3N2Y1ODgzMTQxZTM0MTFkMDBjNzQ1ZWRjYjM3" alt="black and white" />
                        <img class="image-before slider-image" src="https://www.amway.com/medias/art-00-dpb-VitCHA3After-m.jpg?context=bWFzdGVyfHJvb3R8NTY2Mjg5fGltYWdlL2pwZWd8aDI4L2gzOC85NDE4NTM0MTI1NTk4LmpwZ3xmY2QzMDY4NTA2YTA0ZTljOTJiZGEzMTA1ZGMyNjFhZmQzNzdhYjAwMmEzNTI3NGRhMmM4NWVjZjcwYzI3ZTNk" alt="color photo" />
                    </div>
                    <input type="range" min="0" max="100" value="50" aria-label="Percentage of before photo shown" class="slider" />
                    <div class="slider-line" aria-hidden="true"></div>
                    <div class="slider-button" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                            viewBox="0 0 256 256">
                            <rect width="256" height="256" fill="none"></rect>
                            <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="16"></line>
                            <line x1="96" y1="128" x2="16" y2="128" fill="none" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="16"></line>
                            <polyline points="48 160 16 128 48 96" fill="none" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="16"></polyline>
                            <line x1="160" y1="128" x2="240" y2="128" fill="none" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="16"></line>
                            <polyline points="208 96 240 128 208 160" fill="none" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="16"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
        </div>`);

        document.querySelector('#productPageAccordion').closest('.yCmsContentSlot').before(document.querySelectorAll('.amw-content-component__tiles-container')[3].closest('.amw-content-component'));
        document.querySelector('#productPageAccordion').closest('.yCmsContentSlot').previousElementSibling.before(document.querySelectorAll('.amw-content-component__tiles-container')[3].closest('.amw-content-component'));

        document.querySelectorAll('.before-after-wrapper').forEach(wrapper => {
            wrapper.nextElementSibling.style.display = 'none';
        });

        document.querySelectorAll('.before-after-item').forEach(container => {
            const slider = container.querySelector('.slider');
            if (slider) {
                slider.addEventListener('input', (e) => {
                    container.style.setProperty('--position', `${e.target.value}%`);
                });
            }
        });
    }
}
beforeAfter();