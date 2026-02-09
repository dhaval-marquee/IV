if (!document.querySelector('body').classList.contains('iv-home-hero')) {
    document.querySelector('body').classList.add('iv-home-hero');

    var Heading = document.querySelector('#main-heading h3.elementor-heading-title');
    if (Heading) {
        Heading.textContent = 'Get Quality Urgent Care That’s Fast, Easy, and Affordable';
    }

    var Subheading = document.querySelector('#main-heading span.elementor-heading-title');
    if (Subheading) {
        Subheading.textContent = 'Skip the long waits and high ER costs. Walk in or book online for quick, expert care today!';
    }
}