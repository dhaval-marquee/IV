console.log('V1');

function insertLink(listSelector, liHTML) {
  const list = document.querySelector(listSelector);
  if (!list) return;

  const newItem = document.createElement('li');
  newItem.innerHTML = liHTML;

  const items = list.children;
  if (items.length >= 2) {
    list.insertBefore(newItem, items[1]);
  } else {
    list.appendChild(newItem);
  }
}

function loadTestCode() {
  if (document.body.classList.contains('iv-build-your-own-stethoscope-on-navigation')) return;
  document.body.classList.add('iv-build-your-own-stethoscope-on-navigation');

  // Header nav
  insertLink(
    '.header__primary-nav ul.contents',
    `<a href="https://mdfinstruments.com/pages/design-your-custom-stethoscope" class="block h6">
        Build Your Own Stethoscope
     </a>`
  );

  // Sidebar nav
  insertLink(
    '.header-sidebar__main-panel .header-sidebar__linklist',
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