function loadTestCode() {
    // Observer
    if (!document.querySelector('body').classList.contains('iv-starting-label')) {
        document.querySelector('body').classList.add('iv-starting-label');
    }

    const startingLabel = `<span class="iv-label">Starting at $34.99</span>`;

    function labelAdd() {
        const labelSection = document.querySelectorAll('.iv-box-section a span svg');
        labelSection.forEach(function(ivLabel) {
            const closestDiv = ivLabel.closest('div');
            if (closestDiv) {
                closestDiv.classList.add('iv-label-section');
                if (!closestDiv.querySelector('.iv-label')) {
                    closestDiv.insertAdjacentHTML('beforeend', startingLabel);
                }
            }
        })
    }
    const imgElement = document.querySelectorAll('.iv-starting-label section div a img');
    imgElement.forEach(function(boxLabel) {
        const closestSection = boxLabel.closest('section');
        if (closestSection) {
            closestSection.classList.add('iv-box-section');
        }
    });
    labelAdd();

    document.querySelectorAll('button').forEach((button) => {
        if (button.innerText === "Load More Tutors") {
            button.addEventListener('click', () => {
                labelAdd();
            })
        }
    });
}

const checkCondition = setInterval(() => {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 2500);