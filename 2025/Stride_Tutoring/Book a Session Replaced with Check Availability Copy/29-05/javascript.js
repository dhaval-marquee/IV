function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-check-availability')) {
        document.querySelector('body').classList.add('iv-check-availability');

        
        const imgElement = document.querySelectorAll('.iv-check-availability section div a img');
        imgElement.forEach(function(boxLabel) {
            const closestSection = boxLabel.closest('section');
            if (closestSection) {
                closestSection.classList.add('iv-tutor-box-section');
            }
        }); 
        
        function updateBookSessionButtons() {
            const intervalId = setInterval(() => {
                const bookSessionLinks = document.querySelectorAll('.iv-tutor-box-section div.border-transparent.border div > a');
                let updated = false;

                bookSessionLinks.forEach((link) => {
                    if (link.textContent.trim() === 'Book a Session') {
                        link.textContent = 'Check Availability';
                        updated = true;
                    }
                });

                if (updated) {
                    clearInterval(intervalId);
                }
            }, 300);
        }
        
        updateBookSessionButtons();
 
        const targetButton = document.querySelector('.iv-check-availability section.mb-12.w-full > button');
        if (targetButton) {
            targetButton.addEventListener('click', () => {
                updateBookSessionButtons();
            });
        }
        
    }
}

const checkCondition = setInterval(() => {
    if (document.querySelectorAll('body').length > 0) {
        loadTestCode();
    }
}, 2500);