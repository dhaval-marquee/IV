function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-form')) {
        document.querySelector('body').classList.add('iv-form');

        const telInfoContainer = document.querySelector('.tel-info p')?.closest('.par-comp-meta');
        if (telInfoContainer) {
            telInfoContainer.style.display = "none";
        }

        const heroContent = `
            <div class="from-left col-12 col-lg-6">
                <h2 class="sec-title">Insurance eligibility verification made easy.</h2>
                <p class="tel-info">
                    <center>
                        <small>Click <a href="https://onesource.passporthealth.com/_members/Home/Login.aspx" style="text-decoration: underline;" target="_self">here to login</a> or call <a href="tel:+18338121015" style="text-decoration: underline;">833-812-1015</a> for OneSource login help.</small>
                    </center>
                </p>
                <ul class="from-left-list">
                    <li>Reduce claim denials with real-time insurance verification.</li>
                    <li>Improve patient experience with upfront coverage details.</li>
                    <li>Optimize operations by reducing manual insurance checks.</li>
                </ul>
            </div>`;

        const contactRow = document.querySelector('.iv-form #contact .aos-init .container .row');
        if (contactRow && !document.querySelector('.iv-form .from-left')) {
            contactRow.insertAdjacentHTML('afterbegin', heroContent);
            contactRow.classList.add('align-items-center');
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
