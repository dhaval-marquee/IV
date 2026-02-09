// Create input + message container
const zipInputContainer = document.createElement('div');
zipInputContainer.className = 'zip-search-wrapper';
zipInputContainer.innerHTML = `
    <input type="number" id="zip-search" placeholder="Enter zip code" maxlength="5" />
    <div id="no-results-msg" style="display:none; margin-top:10px; color:red; font-weight:bold;">No results found</div>
  `;

// Insert after state selector or top of body
const stateSelector = document.querySelector('#state-selector');
if (stateSelector) {
  stateSelector.insertAdjacentElement('beforebegin', zipInputContainer);
} else {
  document.body.prepend(zipInputContainer);
}

const zipInput = document.getElementById('zip-search');
const noResultsMsg = document.getElementById('no-results-msg');

zipInput.addEventListener('keyup', function() {
  const input = this.value.trim();
  const allStates = document.querySelectorAll('.locations-directory');
  const stateHeads = document.querySelectorAll('.state-head');

  let totalMatches = 0;

  allStates.forEach((stateDir, stateIndex) => {
    const locations = stateDir.querySelectorAll('.location-wrap');
    let stateHasMatch = false;
    let allVisible = true;

    locations.forEach(loc => {
      const city = loc.querySelector('.city');
      if (!city) return;
      const cityText = city.innerText.replace(/\s+/g, ' ').trim();
      const zipMatch = cityText.match(/(\d{5})$/);
      
      if (zipMatch && zipMatch[1].startsWith(input)) {
        loc.style.display = '';
        stateHasMatch = true;
        totalMatches++;
      } else {
        loc.style.display = 'none';
      }
      if (loc.style.display === 'none') {
        allVisible = false;
      }
    });

    // Show/hide state and heading
    stateDir.style.display = stateHasMatch ? '' : 'none';
    if (stateHeads[stateIndex]) {
      stateHeads[stateIndex].style.display = stateHasMatch ? '' : 'none';
    }
    // Show or hide .state-selector accordingly
    // const stateSelectorElement = document.querySelector('#state-selector');
    // if (stateSelectorElement) {
    //   stateSelectorElement.style.display = allVisible ? '' : 'none';
    // }
  });

  // Show "no results" message
  if (input.length > 0 && totalMatches === 0) {
    noResultsMsg.style.display = 'block';
  } else {
    noResultsMsg.style.display = 'none';
  }

});