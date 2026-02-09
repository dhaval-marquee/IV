function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-west-la-video')) {
        document.querySelector('body').classList.add('iv-west-la-video');

        const ivVideoDescription = `Price Self Storage West LA offers a unique and convenient drive-in experience that you won’t find anywhere else in the city. Avoid elevators and long hauls—drive straight in and unload with ease. Our units are clean, secure, and designed for fast, convenient access to fit your busy lifestyle. Experience the ultimate in convenience — only at Price Self Storage West LA.`;

        const ivVideoContent = `
            <section class="iv-west-video-section" aria-labelledby="iv-west-heading">
                <div class="iv-west-video-left">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/RrpXScJ5NDg" title="Tour of West LA Drive-In Storage Facility" frameborder="0" allow="accelerometer; autoplay; web-share" allowfullscreen></iframe>
                    <p class="iv-video-description iv-video-description-mobile">${ivVideoDescription}</p>
                </div>
                <div class="iv-west-video-right">
                    <h3 id="iv-west-heading" class="iv-video-heading">The Only Indoor Drive-In Storage Facility in Los Angeles</h3>
                    <p class="iv-video-description">${ivVideoDescription}</p>
                    <ul class="iv-video-list">
                        <li>
                            <span>
                                <svg focusable="false" aria-label="check-icon"><use href="/Assets/sprite/icons.svg#check-icon"></use></svg>
                            </span>
                            Indoor drive-in access
                        </li>
                        <li>
                            <span>
                                <svg focusable="false" aria-label="check-icon"><use href="/Assets/sprite/icons.svg#check-icon"></use></svg>
                            </span>
                            Clean and modern design
                        </li>
                        <li>
                            <span>
                                <svg focusable="false" aria-label="check-icon"><use href="/Assets/sprite/icons.svg#check-icon"></use></svg>
                            </span>
                            Perfect for personal or business storage
                        </li>
                    </ul>
                </div>
            </section>`;

        const filterSize = document.querySelector('#MainContent_Panel1 .pss-unit-list__filters');
        if (filterSize) {
            filterSize.insertAdjacentHTML('afterend', ivVideoContent);
        }

        // ADA FIX
        const dropdownAnchor = document.querySelector('.pss-facility__main-title .pss-facility__main-dropdown-holder[role="button"]');

        if (dropdownAnchor) {
            const dropdownDiv = document.createElement('div');
            dropdownDiv.setAttribute('role', 'button');
            dropdownDiv.setAttribute('tabindex', '0');

            for (let attr of dropdownAnchor.attributes) {
                if (attr.name !== 'href' && attr.name !== 'role') {
                    dropdownDiv.setAttribute(attr.name, attr.value);
                }
            }

            const table = dropdownAnchor.parentElement.querySelector('table');
            if (table) {
                const tableClone = table.cloneNode(true);
                table.remove();
                
                dropdownDiv.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        dropdownDiv.click();
                    }
                });
                
                dropdownAnchor.parentNode.replaceChild(dropdownDiv, dropdownAnchor);
                Array.from(dropdownAnchor.childNodes).forEach(child => {
                    dropdownDiv.appendChild(child);
                });

                dropdownDiv.insertAdjacentElement('afterend', tableClone);
            }
        }

        document.querySelector('section.iv-west-video-section').after(document.querySelector('#MainContent_Panel1 .pss-unit-list__filters'));
        document.querySelector('section.iv-west-video-section').after(document.querySelector('#MainContent_Panel1 .pss-notification-fee-banner'));
    }
}
loadTestCode();