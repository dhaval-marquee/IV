function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-form-step')) {
        document.querySelector('body').classList.add('iv-form-step');

    const stepForm = `  
        <div class="step-indicator">
            <div class="circle">1</div>
            <div class="line inactive"></div>
            <div class="circle inactive">2</div>
        </div>
        <div class="first-step">
            <h2 class="step-heading">Most Important</h2>
            <form>
                <div class="question">
                    <p>Does the individual have hearing loss that requires captions to use the phone?</p>
                    <div class="btn-group">
                    <button type="button" class="btn">Yes</button>
                    <button type="button" class="btn">No</button>
                    </div>
                </div>

                <div class="question">
                    <p>Does the household requesting the ClearCaptions phone have internet access?</p>
                    <div class="btn-group">
                    <button type="button" class="btn">Yes</button>
                    <button type="button" class="btn">No</button>
                    </div>
                </div>

                <div class="question">
                    <p>Is the individual using the phone able to read and speak English?</p>
                    <div class="btn-group">
                    <button type="button" class="btn">Yes</button>
                    <button type="button" class="btn">No</button>
                    </div>
                </div>

                <div class="question">
                    <p>Is the individual living in the U.S.?</p>
                    <div class="btn-group">
                    <button type="button" class="btn">Yes</button>
                    <button type="button" class="btn">No</button>
                    </div>
                </div>

                <div class="note">
                    *Only individuals who have answered "yes" to all questions above are eligible for phone service.
                </div>

                <button type="submit" class="continue-btn">Continue</button>
            </form>
        </div>`
        const ivDots = `<div class="dots">
            <span class="dot"></span>
            <span class="dot inactive"></span>
        </div>`
        document.querySelectorAll('h4').forEach(h4 => {
            if (h4.textContent.trim() === 'Get your phone today!') {
                h4.classList.add('form-heading')
                const updatedText = h4.textContent.replace(/(phone)/, '<span class="highlight">phone</span>');
                h4.innerHTML = updatedText;
            }
        });
           
        if(!document.querySelector('.step-indicator') && !document.querySelector('.first-step')){
            document.querySelector('.form-referral_wrapper').insertAdjacentHTML('afterbegin' , stepForm)
        }
        if(!document.querySelector('.dots')){
            document.querySelector('.form-referral_wrapper').insertAdjacentHTML('beforeend' , ivDots)
        }

        // Track selections
        document.querySelectorAll('.btn-group').forEach(group => {
            group.querySelectorAll('.btn').forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active style from both buttons
                    group.querySelectorAll('.btn').forEach(btn => {
                        btn.style.backgroundColor = 'white';
                        btn.style.color = '#353B8B';
                    });

                    // Apply active style
                    button.style.backgroundColor = '#FE4500';
                    button.style.color = 'white';

                    // Store selection in a data attribute
                    group.setAttribute('data-selected', button.innerText);
                });
            });
        });

        // Handle Continue click
        document.querySelector('.continue-btn').addEventListener('click', function(e) {
            e.preventDefault();
            const allGroups = document.querySelectorAll('.btn-group');
            let allYes = true;

            allGroups.forEach(group => {
                const answer = group.getAttribute('data-selected');
                if (answer !== 'Yes') {
                    allYes = false;
                }
            });

            const note = document.querySelector('.note');

            if (allYes) {
                sessionStorage.setItem('ivFormStepPassed', 'true');
                document.querySelector('.form-referral').style.display = 'block';
                document.querySelector('.first-step').style.display = 'none';

                // Activate step 2 indicator
                const circles = document.querySelectorAll('.step-indicator .circle');
                circles[1].classList.remove('inactive');
                circles[0].classList.add('inactive');

                // Activate second dot
                const dots = document.querySelectorAll('.dots .dot');
                dots[1].classList.remove('inactive');
                dots[0].classList.add('inactive');
            } else {
                // Apply shake animation to note
                note.classList.add('shake');
                setTimeout(() => {
                    note.classList.remove('shake');
                }, 500);
            }
        });

        document.querySelector('.form-referral .gform_body').insertAdjacentHTML('afterbegin', `<h2 class="step2-heading">Your Details</h2>`)
        document.querySelector('.form-referral .gform_footer .gform_button').value="Submit"
    }
}

const checkConditionBody = setInterval(() => {
    if (document.querySelector('body')) {
      clearInterval(checkConditionBody);
      loadTestCode();
    }
  }, 100);