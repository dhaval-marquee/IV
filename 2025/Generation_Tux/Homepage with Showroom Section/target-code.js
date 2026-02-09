function callbackFn(activate, options) {
    function setupObserver() {
        var targetElement = document.querySelector('#main-content > div:nth-child(4)');
        if (!targetElement) return false;

        var observer = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
            activate();
            observer.disconnect();
        }
        }, { threshold: 0.1 });

        observer.observe(targetElement);
        return true;
    }

    if (setupObserver()) return;

    var retries = 0;
    var maxRetries = 10;
    var retryInterval = setInterval(function() {
        if (setupObserver() || retries >= maxRetries) {
        clearInterval(retryInterval);
        }
        retries++;
    }, 1000);
}