function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-form')) {
        document.querySelector('body').classList.add('iv-form');

        const telInfoContainer = document.querySelector('.tel-info p')?.closest('.par-comp-meta');
        if (telInfoContainer) {
            telInfoContainer.style.display = "none";
        }

        const heroContent = `
            <div class="from-left col-12 col-lg-6">
                <p class="tel-info">
                    Click <a href="https://onesource.passporthealth.com/_members/Home/Login.aspx" style="text-decoration: underline;" target="_self">here to login</a> or call <a href="tel:+18338121015" style="text-decoration: underline;">833-812-1015</a> for OneSource login help.
                </p>
                <ul class="from-left-list">
                    <li>Optimize your revenue cycle with smarter solutions.</li>
                    <li>Simplify workflows with automation and real-time insights.</li>
                    <li>Enhance patient satisfaction with clear, upfront coverage details.</li>
                </ul>
            </div>`;

        const contactRow = document.querySelector('.iv-form #contact .aos-init .container .row');
        if (contactRow && !document.querySelector('.iv-form .from-left')) {
            contactRow.insertAdjacentHTML('afterbegin', heroContent);
            contactRow.classList.add('align-items-center');
        }

        const fromLeftList = document.querySelector('.from-left > .tel-info');
        const formHeadings = document.querySelectorAll('.form-section h2');
        formHeadings.forEach(heading => {
            if (fromLeftList) {
                fromLeftList.parentNode.insertBefore(heading, fromLeftList);
            }
        });

        const bottomContactInfo = document.querySelector('.form__bottomcontactinfo');
        if (fromLeftList && bottomContactInfo) {
            fromLeftList.parentNode.insertBefore(bottomContactInfo, fromLeftList);
        }

        const formDiv = document.querySelector('.iv-form #contact .aos-init .container .row .exp-pseudo-grad-top-lg');
        if (formDiv) {
            formDiv.className = '';
            formDiv.classList.add('exp-pseudo-grad-top-lg', 'col-12', 'col-lg-5', 'form-container', 'exp-solid-bg--white', 'p-0', 'rounded', 'shadow', 'overflow-hidden');
        }
    }
}

const checkCondition = setInterval(function () {
    if (document.querySelector('body')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
