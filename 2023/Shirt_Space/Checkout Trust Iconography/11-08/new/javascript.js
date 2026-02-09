function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('checkoutTrust')) {
        bodyEle.classList.add('checkoutTrust');
        
        // Put your test code here
        document.querySelector('.checkoutTrust .sidebar .box+div').after(document.querySelector('.details .content .cart-summary__trust-iconography'));

        // Get the container element
        const container = document.querySelector('.cart-summary__trust-iconography');

        // Get all the trust labels and icons
        const trustLabels = container.querySelectorAll('.trust__label');
        const trustIcons = container.querySelectorAll('.trust__icons');

        // Loop through the trust labels and icons, and reorder them
        trustLabels.forEach((label, index) => {
            const iconWrapper = document.createElement('div');
            iconWrapper.classList.add('item_wrapper');
            
            const icon = trustIcons[index];
            iconWrapper.appendChild(icon);
            iconWrapper.appendChild(label);
            
            container.appendChild(iconWrapper);
        });

    }
}
loadTestCode();