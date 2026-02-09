function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-sticky-header')) {
        document.querySelector('body').classList.add('iv-sticky-header');

        const headerSectionContainer = document.querySelector('.iv-sticky-header header .main-header-container');

        const ivHeaderBtn = `<a href="https://afcurgentcare.com/locations/" class="iv-header-btn">Save Your Spot</a>`;

        if(headerSectionContainer) {
            headerSectionContainer.insertAdjacentHTML('beforeend', ivHeaderBtn);
        }

        if (!document.querySelector('.iv-main-topbar')) {
            document.querySelector('.iv-sticky-header section.topbar').closest('div').classList.add('iv-main-topbar');
        }

        if (!document.querySelector('.iv-topbar-btn')) {
            document.querySelector('.iv-sticky-header .topbar .elementor-hidden-desktop').closest('.elementor-top-column').classList.add('iv-topbar-btn');
        }

        const ivTopbarFindLocation = document.querySelectorAll('.iv-sticky-header .topbar .topbar-links ul li:first-child a .elementor-icon-list-text');
        ivTopbarFindLocation.forEach((location) => {
            location.innerText = 'Find a Location';
        });

    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);