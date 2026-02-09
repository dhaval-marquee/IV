document.querySelectorAll('.right-content .product-details .btn-wrapper').forEach(function(text){
    text.style.marginTop = '10px';
	text.insertAdjacentHTML('beforebegin',`<ul>
        <li>Book now & pay later (once we arrive).</li>
        <li>No credit card required upfront.</li>
        <li>We'll come to you with zero travel fees!</li>
    </ul>`);
});