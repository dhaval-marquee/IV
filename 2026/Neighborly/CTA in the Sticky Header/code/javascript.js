function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-header-sticky')) {
    document.querySelector('body').classList.add('iv-header-sticky');

        const searchWrapper = document.querySelector('.search-wrapper');
        if (!searchWrapper) return;

        const link = document.createElement('a');
        link.href = 'https://franchise.neighborly.com/map';
        link.textContent = 'Available Markets';
        link.className = 'iv-available-markets-link';

        searchWrapper.insertAdjacentElement('afterend', link);

        const header = document.querySelector('header');
        const extraScroll = 250;
        const stickyOffset = header.offsetTop + extraScroll;

        window.addEventListener('scroll', function () {
            if (window.pageYOffset > stickyOffset) {
                header.classList.add('is-sticky');
            } else {
                header.classList.remove('is-sticky');
            }
        });
            
        document.querySelectorAll('header nav ul li.main-link')[4].insertAdjacentHTML('afterend', `<li class="main-link scheduleCallButton"><a href="https://franchise.neighborly.com/schedule-a-call"><span>Schedule a Call</span></a></li>`);

        document.querySelector('.iv-header-sticky .nbr.header .header__main nav a.header__main-menu-cta').textContent = 'Available Markets';
        document.querySelector('.iv-header-sticky .nbr.header .header__main nav a.header__main-menu-cta').href = 'https://franchise.neighborly.com/map';

        // fire event for map Page Visited page
        var currentPageMap = window.location.href.split('?')[0].split('#')[0];
        if (currentPageMap == 'https://franchise.neighborly.com/map') {
            // Add the following snippet to trigger this event
            window.VWO = window.VWO || [];
            VWO.event = VWO.event || function () {VWO.push(["event"].concat([].slice.call(arguments)))};
            VWO.event("mapPageVisited");
        }

        // fire event for market Inquiry Page Visited page
        var currentPage = window.location.href.split('?')[0].split('#')[0];
        if (currentPage == 'https://franchise.neighborly.com/market-inquiry') {
            // Add the following snippet to trigger this event
            window.VWO = window.VWO || [];
            VWO.event = VWO.event || function () {VWO.push(["event"].concat([].slice.call(arguments)))};
            VWO.event("marketInquiryPageVisited");
        }

         // fire event for market Schedule A Call page
        var currentPage = window.location.href.split('?')[0].split('#')[0];
        if (currentPage == 'https://franchise.neighborly.com/schedule-a-call') {
            // Add the following snippet to trigger this event
            window.VWO = window.VWO || [];
            VWO.event = VWO.event || function () {VWO.push(["event"].concat([].slice.call(arguments)))};
            VWO.event("scheduleACallPageVisited");
        }

        // Market Inquiry Form Submission
        window.addEventListener('message', function (event) {
            if (!event.data) return;
            if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted' && event.data.id === '07a76c0a-abd1-45d1-85c7-32caa3f70fdf') {
                // Add the following snippet to trigger this event
                window.VWO = window.VWO || [];
                VWO.event = VWO.event || function () {VWO.push(["event"].concat([].slice.call(arguments)))};
                VWO.event("marketInquiryFormSubmission");
            }
        });
    }
}

loadTestCode();