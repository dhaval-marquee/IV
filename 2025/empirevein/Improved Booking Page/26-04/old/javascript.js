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
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
