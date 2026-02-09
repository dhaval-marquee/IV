function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-form-progressive')) {
        document.querySelector('body').classList.add('iv-form-progressive');

        const form = document.getElementById("contactForm_1258514943");
        const originalSubmitBtn = form.querySelector('button[type="submit"]');

        if (originalSubmitBtn) {
            // Fields to hide initially
            const fieldsToHideSelectors = [
                'input[name="phone"]',
                'select[name="state"]',
                'select[name="title"]',
                'select[name="industry"]',
                'textarea[name="comments"]'
            ];

            // Get input elements and wrap them
            const fieldGroups = fieldsToHideSelectors.map(selector => {
                const input = form.querySelector(selector);
                return input?.closest(".form-group");
            }).filter(Boolean);

            // Hide fields initially
            fieldGroups.forEach(group => {
                group.setAttribute("style", "display: none !important;");
            });

            // Change original button to hidden
            originalSubmitBtn.style.display = "none";

            // Create new "Continue" button
            const continueBtn = document.createElement("button");
            continueBtn.textContent = "Continue";
            continueBtn.type = "button";
            continueBtn.className = originalSubmitBtn.className;
            originalSubmitBtn.parentNode.insertBefore(continueBtn, originalSubmitBtn);

            // Validation function
            function isValidEmail(email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email.trim());
            }

            // Add error message
            function addError(input) {
                const formGroup = input.closest(".form-group");
                input.classList.add("is-invalid");
                formGroup.classList.add("form-group-is-invalid");

                if (!formGroup.querySelector(".invalid-feedback")) {
                    const errorDiv = document.createElement("div");
                    errorDiv.className = "error-msg invalid-feedback text-left d-block";
                    errorDiv.setAttribute("role", "alert");
                    errorDiv.textContent = "* This field is required.";
                    input.after(errorDiv);
                }
            }

            // Remove error message
            function removeError(input) {
                const formGroup = input.closest(".form-group");
                input.classList.remove("is-invalid");
                formGroup.classList.remove("form-group-is-invalid");

                const errorDiv = formGroup.querySelector(".invalid-feedback");
                if (errorDiv) {
                    errorDiv.remove();
                }
            }

            // Validate default fields
            continueBtn.addEventListener("click", function () {
                let valid = true;

                const requiredFields = [
                    form.querySelector('input[name="first_name"]'),
                    form.querySelector('input[name="last_name"]'),
                    form.querySelector('input[name="email"]'),
                    form.querySelector('input[name="company"]')
                ];

                requiredFields.forEach(input => {
                    if (!input.value.trim() || (input.name === "email" && !isValidEmail(input.value))) {
                        valid = false;
                        addError(input);

                        input.addEventListener("input", () => {
                            if (input.name === "email") {
                                if (isValidEmail(input.value)) removeError(input);
                            } else if (input.value.trim()) {
                                removeError(input);
                            }
                        });
                    } else {
                        removeError(input);
                    }
                });

                if (valid) {
                    // Show hidden fields
                    fieldGroups.forEach(group => {
                        group.setAttribute("style", "display: block !important;");
                    });

                    // Hide continue, show submit
                    continueBtn.style.display = "none";
                    originalSubmitBtn.style.display = "inline-block";
                    originalSubmitBtn.textContent = "Submit Request";
                }
            });
        }
    }
}

// Wait for form to load
const checkCondition = setInterval(function () {
    if (document.querySelector('body') && document.getElementById("contactForm_1258514943")) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 200);
