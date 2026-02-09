function loadTestCode() {
  if (!document.querySelector('body').classList.contains('iv-enlarge-images')) {
    document.querySelector('body').classList.add('iv-enlarge-images')
  }
}

// Load code just for mobile
if (window.matchMedia("(max-width: 767.98px)").matches) {
  loadTestCode();
  window.addEventListener('resize', function (event) {
    if (window.matchMedia("(min-width: 768px)").matches) {
      location.reload();
    }
  }, true);
} else {
  window.addEventListener('resize', function (event) {
    if (window.matchMedia("(max-width: 767.98px)").matches) {
      location.reload();
    }
  }, true);
}
// Load code just for mobile over