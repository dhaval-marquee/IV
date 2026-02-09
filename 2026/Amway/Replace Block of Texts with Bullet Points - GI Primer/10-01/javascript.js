function loadTestCode() {
  if (document.body.classList.contains('iv-gi-primer')) return;
  document.body.classList.add('iv-gi-primer');

  var shortDesc = document.querySelector('.amw-page-pdp__short-description');
  if (!shortDesc) return;

  // 1. Clear existing text/content
  shortDesc.innerHTML = '';

  // 2. Add bullet points inside the same div
  var bulletWrapper = document.createElement('ul');
  bulletWrapper.className = 'iv-gi-primer-bullets';

  bulletWrapper.innerHTML = `
    <li>Easy daily drink mix</li>
    <li>30-day gut reset system</li>
    <li>6-in-1 digestive wellness blend</li>
  `;

  shortDesc.appendChild(bulletWrapper);
}

loadTestCode();
