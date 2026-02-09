function loadGuardianProgressiveForm() {
    const guardianRegion = document.querySelector('.guardian_form [role="region"] > div > .flex-col');
    if (!guardianRegion) return;

    const allDivs = guardianRegion.querySelectorAll(':scope > div.grid');
    if (allDivs.length < 4) return;

    if (guardianRegion.querySelector('.continue-button-wrapper')) return;

    for (let i = 2; i < allDivs.length; i++) {
        allDivs[i].style.display = 'none';
    }

    document.querySelectorAll('.guardian_form div').forEach(function (e) {
        if (e.innerText === 'Passwords Match') {
            e.parentElement.closest('div').style.display = 'none';
        }
    });

    document.querySelectorAll('h3').forEach(function (title) {
        if (title.innerText === 'Student Info' && !document.querySelector('.iv-student-info')) {
            title.classList.add('iv-student-info');
        }
    });

    const StudentinfoBtn = document.querySelector('.iv-student-info button');
    if (StudentinfoBtn) {
        StudentinfoBtn.click();
    }

    document.querySelectorAll('button span').forEach(function (span) {
        if (span.innerText.trim() === 'Add Another Student') {
            const button = span.closest('button');
            if (button) {
                button.style.display = 'none';
            }
        }
    });

    const checkAccept = document.querySelector('#acceptMarketing');
    if (checkAccept) {
        checkAccept.closest('.grid').style.display = 'none';
    }

    const buttonWrapper = document.createElement('div');
    buttonWrapper.className = 'continue-button-wrapper';

    const button = document.createElement('a');
    button.innerText = 'Continue';
    button.className = 'btn btn-primary';
    buttonWrapper.appendChild(button);

    allDivs[1].insertAdjacentElement('afterend', buttonWrapper);

    const submitBtn = document.querySelector('form [type="submit"]');
    if(submitBtn){
        submitBtn.style.backgroundColor = "#fff220";
        submitBtn.style.color = "#666";
        submitBtn.style.cursor = "not-allowed";
        submitBtn.disabled = true;
    }

    button.addEventListener('click', () => {
        const inputs = [];
        inputs.push(...allDivs[0].querySelectorAll('input'));
        inputs.push(...allDivs[1].querySelectorAll('input'));

        let isValid = true;

        inputs.forEach(input => {
            const wrapper = input.parentElement;
            const existingError = wrapper.nextElementSibling;
            if (existingError && existingError.tagName === 'UL' && existingError.classList.contains('flex')) {
                existingError.remove();
            }

            // Reset styling
            wrapper.classList.remove('ring-[3px]', 'ring-orange-5');
            const value = input.value.trim();

            let errorText = '';

            if (input.name == "firstnameGuardian" && !value) {
                errorText = 'Guardian first name cannot be empty';
            } else if (input.name == "lastnameGuardian" && !value) {
                errorText = 'Guardian last name cannot be empty';
            } else if (input.name == "emailGuardian") {
                const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
                if (!value) {
                    errorText = 'Invalid guardian email address';
                } else if (!emailRegex.test(value)) {
                    errorText = 'Invalid guardian email address';
                }
            } else if (input.name == "birthdayGuardian") {
                const birthdateRegex = /^(0[1-9]|1[0-2])[-\/](0[1-9]|[12]\d|3[01])[-\/]\d{4}$/;
                if (!value) {
                    errorText = 'Birthdate should be in the format MM-DD-YYYY.';
                } else if (!birthdateRegex.test(value)) {
                    errorText = 'Birthdate should be in the format MM-DD-YYYY.';
                }
            }

            if (errorText) {
                isValid = false;
                wrapper.classList.add('ring-[3px]', 'ring-orange-5');

                const ul = document.createElement('ul');
                ul.className = 'flex flex-col gap-2';

                const li = document.createElement('li');
                li.className = 'text-orange-5';

                const small = document.createElement('small');
                small.className = 'text-sm font-normal';
                small.textContent = errorText;

                li.appendChild(small);
                ul.appendChild(li);
                wrapper.after(ul);
            }
        });

        if (!isValid) return;

        for (let i = 2; i < allDivs.length; i++) {
            allDivs[i].style.display = '';
        }

        document.querySelectorAll('.guardian_form div').forEach(function (e) {
            if (e.innerText === 'Passwords Match') {
                e.parentElement.closest('div').style.display = '';
            }
        });

        document.querySelectorAll('button span').forEach(function (span) {
            if (span.innerText.trim() === 'Add Another Student') {
                const button = span.closest('button');
                if (button) {
                    button.style.display = '';
                }
            }
        });

        const checkAccept = document.querySelector('#acceptMarketing');
        if (checkAccept) {
            checkAccept.closest('.grid').style.display = '';
        }

        buttonWrapper.remove();
        const submitBtn = document.querySelector('form [type="submit"]');
        if(submitBtn){
            submitBtn.style.backgroundColor = "#ffea2f";
            submitBtn.style.color = "#001e6a";
            submitBtn.style.cursor = "pointer";
            submitBtn.disabled = false;
        }

        const StudentinfoBtn = document.querySelector('.iv-student-info button');
        if (StudentinfoBtn) {
            StudentinfoBtn.click();
        }

    });

}

function waitForGuardianSection() {
    const interval = setInterval(() => {
        const h2 = Array.from(document.querySelectorAll('button h2')).find(
            el => el.innerText.trim() === 'Guardian Info'
        );

        if (h2) {
            const container = h2.closest('div[data-orientation="vertical"]');
            if (container && !container.classList.contains('guardian_form')) {
                container.classList.add('guardian_form');
                setTimeout(loadGuardianProgressiveForm, 300); // wait briefly for layout
                clearInterval(interval);
            }
        }
    }, 300);
}
document.querySelectorAll('[role="radiogroup"] button').forEach((radioButton) => {
    radioButton.addEventListener('click', () => {
        waitForGuardianSection()
        if (radioButton.id == 'STUDENT') {
            if (document.querySelector('form [type="submit"]').style.display == "none") {
                document.querySelector('form [type="submit"]').style.display = ""
            }
        }
    })
})

function loadTestCode() {
    if (!document.body.classList.contains('iv-progressive-form')) {
        document.body.classList.add('iv-progressive-form');

        const styleTag = document.createElement("style");
        styleTag.innerHTML = `
        .iv-progressive-form .continue-button-wrapper {
            text-align: center;
            margin-top: 20px;
        }
        .iv-progressive-form .continue-button-wrapper a {
            font-weight: 700;
            font-size: 20px;
            padding: 10px 20px;
            background-color: #ffea2e;
            border-radius: 30px;
            max-width: 360px;
            width: 100%;
            color: #001e6a;
            border: none;
            cursor: pointer;
            display: inline-block;
        }
        .iv-progressive-form .guardian_form > div {
            padding-bottom: 15px;
        }`;
        document.head.appendChild(styleTag);

        waitForGuardianSection();
    }
}

const checkReady = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(checkReady);
        loadTestCode();
    }
}, 100);