function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-showrooms')) {
        document.querySelector('body').classList.add('iv-showrooms');

        function showroomsCode() {
            const titleElement = document.querySelector('.iv-showrooms .p-section-hero:not(.bg-gray-lighter) .text-h1-display:first-child');

            if (titleElement) {
                const title = titleElement.textContent;
                const updatedTitle = title.replace(/\s*\(.*?\)/, '');

                if (titleElement.parentElement) {
                    titleElement.parentElement.classList.add('hero-block', 'text-center');
                }

                const h1Element = document.querySelector('.hero-block h1');
                if (h1Element) {
                    h1Element.textContent = 'Experience the Benefits of In-Person Suit Selection at Our ' + updatedTitle;
                }
            }

            const secondParagraph = document.querySelectorAll('.hero-block p')[1];
            if (secondParagraph) {
                secondParagraph.innerHTML = `<em>${secondParagraph.innerHTML}</em>`;
            }

            const paragraph = document.querySelector('.hero-block p');
            if (paragraph) {
                const newContent = document.createElement('div');
                newContent.classList.add('mb-16');
                newContent.innerHTML = `
                    <h2 class="mb-16">Touch, try, and trust your wedding or event look with expert guidance.</h2>
                    <ul class="list-none text-left">
                        <li>Ensure a flawless fit with precise measurements taken by our stylists</li>
                        <li>Work with expert stylists to design a look tailored to your big day.</li>
                        <li>Feel the quality of luxurious fabrics and try on styles that match your vision.</li>
                    </ul>
                `;
                paragraph.replaceWith(newContent);
            }

            const button = document.querySelector('.hero-block .btn');
            if (button) {
                button.textContent = 'Book A Free Appointment';
            }

            const image = document.querySelector('img[alt*="Enjoy a personalized"]');
            if (image) {
                const moveBlock = image.parentElement;
                moveBlock.classList.add('image-block', 'text-center');

                const heroBlock = document.querySelector('.hero-block');
                if (heroBlock) {
                    heroBlock.insertAdjacentElement('afterend', moveBlock);
                }

                const heading = document.createElement('h2');
                heading.className = 'text-h1-display';
                heading.textContent = 'What can be done at our Showroom?';
                moveBlock.insertAdjacentElement('afterbegin', heading);
            }

        }
        showroomsCode();
    }

    document.addEventListener('click', function (event) {
        if (event.target.matches('nav.bg-gray-lighter a')) {
            event.preventDefault();
            showroomsCode();
        }
    });
}

const checkCondition = setInterval(function() {
    if (document.querySelector('body')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);