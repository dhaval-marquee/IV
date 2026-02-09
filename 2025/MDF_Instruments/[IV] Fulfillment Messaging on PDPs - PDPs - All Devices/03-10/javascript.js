function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-fulfillment')) {
        document.querySelector('body').classList.add('iv-fulfillment');

        console.log(document.querySelector('.iv-fulfillment div[data-block-id="price"]'));
        
        document.querySelector('.iv-fulfillment div[data-block-id="price"]').insertAdjacentHTML('afterend',`<div class="fulfillment-wrap">
            <span class="fulfillment-text">
                Fulfilled within 1-3 business days.
            </span>
            <span class="tooltip">
                <span class="info-icon">i</span>
                <span class="tooltip-box">
                Orders will be processed in 1-3 business days (excluding weekends and holidays). 
                Please allow additional time for shipments in transit. The transit time will vary 
                depending on the delivery address and carrier speed. We offer expedited shipping for a fee.
                </span>
            </span>
        </div>`);

        
    }
}

loadTestCode();