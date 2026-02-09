function loadTestCode() {
    if (!document.querySelector('body').classList.contains('maids-form')) {
        document.querySelector('body').classList.add('maids-form');
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
        var targetElement = document.querySelector('.dynamic-quote .overlay-content-inner');
        observerElm(targetElement, function(mutationsList, observer) {
            updateLabels();
            zipCode();
        });

        // Zipcode 
        function zipCode(){
            document.querySelector('#gform_14').onsubmit = function(e) {
                var formStep = document.querySelector('#gform_page_14_2')
                if(formStep.style.display != 'none'){
                    e.preventDefault();
                    var el = document.getElementById("input_14_35");
                    if (el.value && el.value.length == 5) {
                        var xhr = new XMLHttpRequest();
                        xhr.open("GET", "https://zip.getziptastic.com/v2/US/" + el.value, false);
                        xhr.onreadystatechange = function() {
                            if (xhr.readyState == 4 && xhr.status == 200) {
                                var result = JSON.parse(xhr.responseText);
                                document.getElementById("zipCodeMessage").classList.add('d-none');
                                document.getElementById("input_14_9_3").value = result.city;
                                document.getElementById("input_14_9_4").value = result.state;
                            } else if (xhr.readyState == 4) {
                                document.getElementById("zipCodeMessage").classList.remove('d-none');
                                document.getElementById("input_14_9_3").value = "";
                                document.getElementById("input_14_9_4").value = "";
                            }
                        };
                        xhr.send();
                    } else if (el.value && el.value.length < 5) {
                        document.getElementById("zipCodeMessage").classList.remove('d-none');
                        document.getElementById("input_14_9_3").value = "";
                        document.getElementById("input_14_9_4").value = "";
                    }
                    this.submit();
                }
            }
        }


        // Labels Updateing...
        function updateLabels() {
            var formTitle = document.querySelector('.dynamic-quote-contain .title-top p');
            if (formTitle) {
                if (formTitle.innerText !== 'Get a Quick No-Obligation Quote!') {
                    formTitle.innerText = 'Get a Quick No-Obligation Quote!';
                }
            }
            var unitLabel = document.querySelector('.maids-form .dynamic-quote #field_14_32 label');
            if (unitLabel && !unitLabel.querySelector('.re-star')) {
                unitLabel.innerHTML = `Unit # <span class="gfield_required"><span class="re-star gfield_required gfield_required_asterisk"></span></span>`;
            }
            var squareFeetLabel = document.querySelector('.maids-form .dynamic-quote #field_14_29 label');
            if (squareFeetLabel && !squareFeetLabel.querySelector('.re-star')) {
                squareFeetLabel.innerHTML = `Estimated Square Feet <span class="gfield_required"><span class="re-star gfield_required gfield_required_asterisk">*</span></span>`;
            }
            var zipCodeLabel = document.querySelector('.maids-form .dynamic-quote #field_14_35 label');
            if (zipCodeLabel && !zipCodeLabel.querySelector('.re-star')) {
                zipCodeLabel.innerHTML = `Zip code <span class="gfield_required"><span class="re-star gfield_required gfield_required_asterisk">*</span></span>`;
            }
            var stateLabel = document.querySelector('.maids-form .dynamic-quote .gfield--type-address .address_city > label');
            if (stateLabel && !stateLabel.querySelector('.re-star')) {
                stateLabel.innerHTML = `City <span class="gfield_required"><span class="re-star gfield_required gfield_required_asterisk">*</span></span>`;
            }
            var stateLabel = document.querySelector('.maids-form .dynamic-quote .gfield--type-address .address_state > label');
            if (stateLabel && !stateLabel.querySelector('.re-star')) {
                stateLabel.innerHTML = `State <span class="gfield_required"><span class="re-star gfield_required gfield_required_asterisk">*</span></span>`;
            }
            var bathroomsLabel = document.querySelector('.maids-form .dynamic-quote #field_14_28 label');
            if (bathroomsLabel && !bathroomsLabel.querySelector('.re-star')) {
                bathroomsLabel.innerHTML = `Bathroom Count <span class="gfield_required"><span class="re-star gfield_required gfield_required_asterisk">*</span></span>`;
            }
            var bedroomsLabel = document.querySelector('.maids-form .dynamic-quote #field_14_27 label');
            if (bedroomsLabel && !bedroomsLabel.querySelector('.re-star')) {
                bedroomsLabel.innerHTML = `Bedrooms Count <span class="gfield_required"><span class="re-star gfield_required gfield_required_asterisk">*</span></span>`;
            }
            var reteYourHomeLabel = document.querySelector('.maids-form .dynamic-quote #field_14_38 label');
            if (reteYourHomeLabel && !reteYourHomeLabel.querySelector('.re-star')) {
                reteYourHomeLabel.innerHTML = `Current Clean Level <span class="gfield_required"><span class="re-star gfield_required gfield_required_asterisk">*</span></span>`;
            }
            var serviceTypeLable = document.querySelector('.maids-form .dynamic-quote #field_14_30 label');
            if (serviceTypeLable && !serviceTypeLable.querySelector('.re-star')) {
                serviceTypeLable.innerHTML = `Service Type <span class="gfield_required"><span class="re-star gfield_required gfield_required_asterisk">*</span></span>`;
            }
            var selectService = document.querySelector('.maids-form .dynamic-quote #gform_page_14_2 #field_14_30 #input_14_30 .gf_placeholder');
            if (selectService && !selectService.querySelector('.re-star')) {
                selectService.innerHTML = `Select Service Type <span class="gfield_required"><span class="re-star gfield_required gfield_required_asterisk">*</span></span>`;
            }
            var zipCodeError = `<div id="zipCodeMessage" class="gfield_description validation_message gfield_validation_message d-none">Not a real zip code.</div>`;
            if(!document.querySelector('.maids-form .dynamic-quote #gform_page_14_2 #field_14_35 #zipCodeMessage')){
                document.querySelector('.maids-form .dynamic-quote #gform_page_14_2 #field_14_35').insertAdjacentHTML('beforeend', zipCodeError);
            }
            var inputElement = document.querySelector('.maids-form .dynamic-quote #gform_page_14_2 #field_14_35 input');
            if (inputElement && !inputElement.getAttribute('pattern')) {
                inputElement.setAttribute('pattern', '[0-9]*');
                inputElement.setAttribute('maxlength', '5');
            }
            
            var formStep = document.querySelector('#gform_page_14_2');
            if(formStep.style.display != 'none'){
                document.querySelectorAll('form#gform_14 input').forEach(function(input){
                    if (input.placeholder !== '') {
                        input.placeholder = '';
                    }
                });
            }

            function handleRadioButtonChange() {
                if (this.value === 'Recurring Clean' && !document.body.classList.contains('recurring-clean')) {
                    document.body.classList.add('recurring-clean');
                } else if (this.value !== 'Recurring Clean' && document.body.classList.contains('recurring-clean')) {
                    document.body.classList.remove('recurring-clean');
                }
            }

            const radioButtons = document.querySelectorAll('input[name="input_20"]');
            radioButtons.forEach(function(radioButton) {
                radioButton.addEventListener('change', handleRadioButtonChange);
                if (radioButton.checked) {
                    if (radioButton.value === 'Recurring Clean' && !document.body.classList.contains('recurring-clean')) {
                        document.body.classList.add('recurring-clean');
                    }
                }
            });

        }
    }
}
loadTestCode();