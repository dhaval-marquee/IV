function loadProgressiveForm(formType) {
    const region = document.querySelector(`.${formType} [role="region"] > div > .flex-col`);
    if (!region) return;

    const allDivs = region.querySelectorAll(':scope > div.grid');
    if (allDivs.length < 3) return;

    if (region.querySelector('.continue-button-wrapper')) return;

    for (let i = 2; i < allDivs.length; i++) {
        allDivs[i].style.display = 'none';
    }

    document.querySelectorAll(`.${formType} div`).forEach(function(e) {
        if (e.innerText === 'Passwords Match') {
            e.parentElement.closest('div').style.display = 'none';
        }
    });

    document.querySelectorAll('h3').forEach(function(title) {
        if (title.innerText === 'Student Info' && !document.querySelector('.iv-student-info')) {
            title.classList.add('iv-student-info');
        }
    });

    document.querySelectorAll('button span').forEach(function(span) {
        if (span.innerText.trim() === 'Add Another Student') {
            const button = span.closest('button');
            if (button) button.style.display = 'none';
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

    const submitBtn = document.querySelector('form input[value="GUARDIAN"] + [type="submit"]');
    if (submitBtn) {
        submitBtn.style.backgroundColor = "#fff220";
        submitBtn.style.color = "#666";
        submitBtn.style.cursor = "not-allowed";
        submitBtn.disabled = true;
    }

    const studentButton = document.querySelector('button#STUDENT');
    if (studentButton) {
        studentButton.addEventListener('click', () => {
            const submitBtn = document.querySelector('form input[value="GUARDIAN"] + [type="submit"]');
            if (submitBtn) {
                submitBtn.style.backgroundColor = "#ffea2f";
                submitBtn.style.color = "#001e6a";
                submitBtn.style.cursor = "pointer";
                submitBtn.disabled = false;
            }
            const checkAccept = document.querySelector('#acceptMarketing');
            if (checkAccept) {
                checkAccept.closest('.grid').style.display = '';
            }
        });
    }

    document.querySelectorAll('.student_form h5').forEach(h5 => {
            if (h5.textContent.trim().includes("Upload a photo (optional)")) {
                const parentDiv = h5.closest('div');
                if (parentDiv && parentDiv.style.display !== 'none') {
                parentDiv.style.display = 'none';
                }
            }
        });

    button.addEventListener('click', () => {
        const inputs = [];
        inputs.push(...allDivs[0].querySelectorAll('input'));
        inputs.push(...allDivs[1].querySelectorAll('input'));

        let isValid = true;
        
        inputs.forEach(input => {
            const wrapper = input.parentElement;
            const existingError = wrapper.nextElementSibling;
            const existingSelectError = wrapper.querySelector('ul.flex');

            // Remove old input error
            if (existingError && existingError.tagName === 'UL' && existingError.classList.contains('flex')) {
                existingError.remove();
            }
            // Remove old select error
            if (existingSelectError && existingSelectError.tagName === 'UL' && existingSelectError.classList.contains('flex')) {
                existingSelectError.remove();
            }

            wrapper.classList.remove('ring-[3px]', 'ring-orange-5');
            const value = input.value.trim();
            let errorText = '';
            let errorSelectText = '';

            // Input validations
            if (input.name === "firstnameGuardian" && !value) {
                errorText = 'Guardian first name cannot be empty';
            } else if (input.name === "studentFirstName-0" && !value) {
                errorText = 'Student First Name cannot be empty or less than 2 characters';
            } else if (input.name === "lastnameGuardian" && !value) {
                errorText = 'Guardian last name cannot be empty';
            } else if (input.name === "studentLastName-0" && !value) {
                errorText = 'Student Last Name cannot be empty or less than 2 characters';
            } else if (input.name === "studentGradeLevel-0" && !value) {
                errorSelectText = 'Invalid grade level';
            } else if (input.name === "emailGuardian") {
                const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
                if (!value || !emailRegex.test(value)) {
                    errorText = 'Invalid guardian email address';
                }
            } else if (input.name === "birthdayGuardian" || input.name === 'studentBirthday-0') {
                const birthdateRegex = /^(0[1-9]|1[0-2])[-\/](0[1-9]|[12]\d|3[01])[-\/]\d{4}$/;
                if (!value || !birthdateRegex.test(value)) {
                    errorText = 'Birthdate should be in the format MM-DD-YYYY.';
                }
            }

            // Handle input error
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

            // Handle select error (append inside wrapper to avoid layout issues)
            if (errorSelectText) {
                isValid = false;
                // wrapper.classList.add('ring-[3px]', 'ring-orange-5');

                const ul = document.createElement('ul');
                ul.className = 'flex flex-col gap-2';
                const li = document.createElement('li');
                li.className = 'text-orange-5';
                const small = document.createElement('small');
                small.className = 'text-sm font-normal';
                small.textContent = errorSelectText;

                li.appendChild(small);
                ul.appendChild(li);
                wrapper.appendChild(ul);
            }
        });

        if (!isValid) return;

        for (let i = 2; i < allDivs.length; i++) {
            allDivs[i].style.display = '';
        }

        document.querySelectorAll(`.${formType} div`).forEach(function(e) {
            if (e.innerText === 'Passwords Match') {
                e.parentElement.closest('div').style.display = '';
            }
        });
        const studentForm = button.closest('.student_form');
        if (studentForm) {
            document.querySelectorAll('button span').forEach(function(span) {
                if (span.innerText.trim() === 'Add Another Student') {
                    const button = span.closest('button');
                    if (button) button.style.display = '';
                }
            });
    
            if (checkAccept) {
                checkAccept.closest('.grid').style.display = '';
            }
            if (submitBtn) {
                submitBtn.style.backgroundColor = "#ffea2f";
                submitBtn.style.color = "#001e6a";
                submitBtn.style.cursor = "pointer";
                submitBtn.disabled = false;
            }

            studentForm.querySelectorAll('h5').forEach(h5 => {
                if (h5.textContent.trim().includes("Upload a photo (optional)")) {
                    const parentDiv = h5.closest('div');
                    if (parentDiv && parentDiv.style.display !== 'block') {
                    parentDiv.style.display = 'block';
                    }
                }
            });
        }

        buttonWrapper.remove();

    });
}


function waitForSection(title, className) {
    const interval = setInterval(() => {
        const h2 = Array.from(document.querySelectorAll('button h2')).find(
            el => el.innerText.trim() === title
        );
        if (h2) {
            const container = h2.closest('div[data-orientation="vertical"]');
            if (container && !container.classList.contains(className)) {
                container.classList.add(className);
                setTimeout(() => loadProgressiveForm(className), 300);
                clearInterval(interval);
            }
        }
    }, 300);
}

function waitForBothSections() {
    waitForSection('Guardian Info', 'guardian_form');
    waitForSection('Student Info', 'student_form');
}

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
        .iv-progressive-form .guardian_form > div,
        .iv-progressive-form .student_form > div {
            padding-bottom: 15px;
        }`;
        document.head.appendChild(styleTag);

        waitForBothSections();

        document.querySelectorAll('[role="radiogroup"] button').forEach((radioButton) => {
            radioButton.addEventListener('click', () => {
                if (radioButton.id === 'GUARDIAN') {
                    waitForBothSections();
                }
                if (radioButton.id === 'STUDENT') {
                    const submit = document.querySelector('form [type="submit"]');
                    if (submit && submit.style.display === "none") {
                        submit.style.display = "";
                    }
                }
            });
        });
    }
}

// Observer
function observerElm(target, callbackFn) {
    var config = {
        childList: true,
        attributes: true,
        subtree: true,
    };
    var callback = function(mutationsList, observer) {
        callbackFn(mutationsList, observer);
    };
    var observer = new MutationObserver(callback);
    observer.observe(target, config);
}

var targetElement = document.querySelector('body');
observerElm(targetElement, function(mutationsList, observer) {
    // stickyCart();
    loadTestCode();
});
const checkReady = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(checkReady);
        loadTestCode();
    }
}, 1000);