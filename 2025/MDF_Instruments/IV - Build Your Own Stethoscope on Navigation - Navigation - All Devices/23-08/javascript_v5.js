console.log('V5')

function insertLink(listSelector, liClass, liHTML) {
  const list = document.querySelector(listSelector);
  if (!list) return;

  const newItem = document.createElement('li');
  if (liClass) newItem.className = liClass;
  newItem.innerHTML = liHTML;

  // Append as last item
  list.appendChild(newItem);
}

function loadTestCode() {
  if (document.body.classList.contains('iv-build-your-own-stethoscope-on-navigation')) return;
  document.body.classList.add('iv-build-your-own-stethoscope-on-navigation');

  // Header nav (last position)
  insertLink(
    '.header__primary-nav ul.contents',
    'header__primary-nav-item dark-button-outline button',
    `<a href="https://mdfinstruments.com/pages/design-your-custom-stethoscope" class="block h6">
        Build Your Own Stethoscope
     </a>`
  );

  // Sidebar nav (last position)
  insertLink(
    '.header-sidebar__main-panel .header-sidebar__linklist',
    'dark-button-outline button', // no special class, just inline style if needed
    `<a href="https://mdfinstruments.com/pages/design-your-custom-stethoscope" 
        class="header-sidebar__linklist-button h6">
        Build Your Own Stethoscope
     </a>`
  );
}

// Run after body is ready
const checkCondition = setInterval(() => {
  if (document.body) {
    clearInterval(checkCondition);
    loadTestCode();
  }
}, 100);