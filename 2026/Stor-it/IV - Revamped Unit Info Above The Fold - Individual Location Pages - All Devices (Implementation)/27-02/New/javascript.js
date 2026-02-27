// ---- OBSERVER ----
function observerElm(target, callbackFn) {
    const observer = new MutationObserver(function () {
        callbackFn();
    });

    observer.observe(target, {
        childList: true,
        subtree: true,
        attributes: false
    });
}

function loadTestCode() {
    if (!document.querySelector('body').classList.contains('ivLocationPages')) {
        document.querySelector('body').classList.add('ivLocationPages');

        const title = document.querySelector('.iv-top-features-title'); 
        const list = document.querySelector('.iv-top-features'); 
        if (title && list) { 
            const wrapper = document.createElement('div'); 
            wrapper.className = 'iv-top-features-wrapper four columns'; 
            title.parentNode.insertBefore(wrapper, title); 
            wrapper.appendChild(title); 
            wrapper.appendChild(list); 
        }

        // move paragraph only if BOTH exist
        const linkPara = document.querySelector('.tabcontent .four p:has(a.pageLink)');
        const titlePara = document.querySelector('.tabcontent .four p:has(.facility-title)');

        if (linkPara && titlePara) {
            linkPara.after(titlePara);
        }
        
        const secondP = document.querySelector('.tabcontent .four:nth-child(2) > p');
        const thirdFour = document.querySelector('.tabcontent .four:nth-child(3)');

        if (secondP && thirdFour) {
            secondP.after(thirdFour);
        }

        document.querySelector('.tabcontent .four:nth-child(2)')?.after(document.querySelector('.iv-top-features-wrapper'));
    }
}

// ---- WAIT FOR BODY + START OBSERVER ----
const checkCondition = setInterval(function () {
    if (document.querySelector('body')) {
        clearInterval(checkCondition);

        // run once
        loadTestCode();

        // observe future DOM changes
        observerElm(document.body, loadTestCode);
    }
}, 100);