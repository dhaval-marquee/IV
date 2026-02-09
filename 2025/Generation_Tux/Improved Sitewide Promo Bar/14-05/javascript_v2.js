function loadTestCode() {
    if (!document.querySelector('body').classList.contains('promo-bar-iv')) {
        document.querySelector('body').classList.add('promo-bar-iv');

        // Put your test code here
        const disclosureButton = document.querySelector('header + div button[id*="headlessui-disclosure-button"]');
        if (disclosureButton) {
            disclosureButton.classList.add('mx-auto', 'py-12');
            disclosureButton.classList.remove('w-full', 'py-16');

            const text = disclosureButton.querySelector('p');
            if (text) {
                text.classList.add('font-condensed-light');
                text.classList.remove('text-h5');
            }
        }

        const disclosurePanel = document.querySelector('div[id*="headlessui-disclosure-panel"]');
        if (disclosurePanel) {
            disclosurePanel.classList.add('text-center');
            disclosurePanel.classList.remove('ml-32');

            const block = disclosurePanel.querySelector(':scope > div');
            if (block) {
                block.classList.add('pt-16');
                block.classList.remove('pb-16');
            }

            const paragraph = disclosurePanel.querySelector('p');
            if (paragraph) {
                paragraph.classList.add('mx-auto');
            }

            const link = disclosurePanel.querySelector('a');
            if (link) {
                link.classList.add('inline-flex');
                link.classList.remove('flex');
            }
        }

        document.addEventListener('click', function(e) {
            if (e.target.matches('#header + div')) {  
                const button = document.querySelector('#header + div button p');
                if (button) {
                    button.click();
                }
            }
        });
        

    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('header + div button[id*="headlessui-disclosure-button"]').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);