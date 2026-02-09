function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-contact')) {
        document.querySelector('body').classList.add('iv-contact');

        document.querySelector('.iv-contact .subpage-img .entry-header h1').innerText = "Book a Free Screening"

        document.querySelector('.py-section > .row .col-md-9').setAttribute('class', 'col-md-6 col-lg-6');
        const info = `<div class="col-md-6 col-lg-5">
            <div class="iv-info">
                
            </div>
        </div>`;

        document.querySelector('.py-section > .row').insertAdjacentHTML('afterbegin', info)

        const entryContent = document.querySelector('.py-section > .row .entry-content');
        const ivInfo = document.querySelector('.iv-info');
        const paragraphs = entryContent.querySelectorAll('p.has-text-align-center');

        paragraphs.forEach(paragraph => {
            paragraph.removeAttribute('class');
            ivInfo.appendChild(paragraph);
        });
        const firstParagraph = document.querySelector('.iv-info p strong');
        if (firstParagraph) {
            firstParagraph.replaceWith(firstParagraph.textContent);
        }
        const list = `<ul class="info-list">
            <li>Expert Vein Care Specialists</li>
            <li>Most treatments covered by insurance</li>
            <li>Personalized care and follow-up</li>
        </ul>`
        document.querySelector('.iv-info > p:first-child').insertAdjacentHTML('afterend', list);

        const intervalId = setInterval(function() {
            const footerButton = document.querySelector('.pagefooter-block-btn');
            
            if (footerButton) {
                clearInterval(intervalId);
                footerButton.closest('.container').remove();
                
                const elementToMove = document.getElementById("id_34");
                const parent = elementToMove.parentElement;
                const targetPosition = elementToMove.previousElementSibling.previousElementSibling.previousElementSibling;
                parent.insertBefore(elementToMove, targetPosition);
        
                document.querySelector('#cid_2 div button').innerText = 'Book a Free Screening Now!';
            }
        }, 1000);


    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
