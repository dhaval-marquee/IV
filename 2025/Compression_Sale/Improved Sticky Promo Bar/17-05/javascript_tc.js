const host = document.getElementById('yeps');

const shadow = host.shadowRoot;

const style = document.createElement('style');
style.textContent = `
    .yeps-frame  {
        display: none;
    }
`;

shadow.appendChild(style);
