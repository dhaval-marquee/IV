  function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-bookingPage')) {
      document.querySelector('body').classList.add('iv-bookingPage');

        var ulElement = document.querySelector('body #primary h4.wp-block-heading + ul');
        if (ulElement) {
          ulElement.innerHTML = `
            <li>Expert, board-certified vein specialists</li>
            <li>Quick, minimally invasive treatments.</li>
            <li>Free consultations and most insurance accepted</li>
          `;
        }
    }
  }

  var checkCondition = setInterval(function () {
  if (document.querySelectorAll('body').length > 0 && document.querySelectorAll('body #primary h4.wp-block-heading + ul').length > 0) {
      clearInterval(checkCondition);
      loadTestCode();
    }
  }, 100);