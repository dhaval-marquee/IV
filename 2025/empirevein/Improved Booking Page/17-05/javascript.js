function loadTestCode() {
  if (!document.querySelector('body').classList.contains('iv-booking-page')) {
    document.querySelector('body').classList.add('iv-booking-page');

    const subtext = document.querySelector('.subtext');

    if (subtext) {
      const text = subtext.textContent;

      const parts = text.split('Southern California!');

      if (parts.length === 2) {
        subtext.innerHTML = `
              <p>${parts[0].trim()}Southern California!</p>
              <p>${parts[1].trim()}</p>
            `;
      }
    }

  }
  const intervalId = setInterval(() => {
    const dropdowns = document.querySelectorAll("select.form-dropdown");

    if (dropdowns.length > 0) {
      ["input_26", "input_13", "input_34"].forEach(function (id) {
        const select = document.getElementById(id);
        if (select && select.tagName.toLowerCase() === "select") {
          // Prevent duplicate insertion
          if (!select.querySelector('option[value="Not required"]')) {
            const defaultOption = document.createElement("option");
            defaultOption.value = "Not required";
            defaultOption.text = "Not required";
            defaultOption.selected = true;

            select.insertBefore(defaultOption, select.firstChild);
            select.selectedIndex = 0;
          }
        }
      });

      clearInterval(intervalId);
    }
  }, 500);
  
	var chatWrapper = document.getElementById('apexchat_exitpopup2_chatwindow_wrapper');
	if (chatWrapper) {
	    chatWrapper.remove();
	}

  const heroTitle = 'We offer free leg vein consultation at each of our conveniently located offices.'
  document.querySelector('h4#we-offer-free-leg-vein-screening-evaluations-at-each-of-our-conveniently-located-offices').innerText = heroTitle;

   const subText = 'To book your free consultation, complete this form and we will contact you shortly.'
  document.querySelector('.kt-inside-inner-col > p').innerText = subText;

}

var checkCondition = setInterval(function () {
  if (document.querySelectorAll('body').length > 0 && document.querySelector('.form-section')) {
    clearInterval(checkCondition);
    loadTestCode();
  }
}, 100);