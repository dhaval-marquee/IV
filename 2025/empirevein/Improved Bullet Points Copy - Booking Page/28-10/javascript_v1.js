function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-bookingPage')) {
      document.querySelector('body').classList.add('iv-bookingPage');

        var ulElement = document.querySelector('body #primary h4.wp-block-heading + ul');
        if (ulElement) {
          ulElement.innerHTML = `
            <li>Expert, board-certified vein specialists dedicated to your care.</li>
            <li>Most treatments covered by insurance for worry-free visits.</li>
            <li>Quick, minimally invasive procedures with personalized follow-up.</li>
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