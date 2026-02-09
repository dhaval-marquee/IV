function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-search-bar')) {
        document.querySelector('body').classList.add('iv-search-bar');

        const updatePlaceholder = () => {
            const searchBar = document.querySelector('.iv-search-bar .amw-header .amw-input__search-field');
            if (searchBar) {
                if (searchBar.getAttribute('placeholder') !== 'Search by goal or product') {
                    searchBar.setAttribute('placeholder', 'Search by goal or product');
                }
                clearInterval(interval);
            }
        };

        const interval = setInterval(updatePlaceholder, 500);
    }
}

// Run script when body exists
var checkCondition = setInterval(function () {
    if (document.querySelector('body')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 500);

// Reload the page on window resize
window.addEventListener('resize', function () {
    location.reload();
});
