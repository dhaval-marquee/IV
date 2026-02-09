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

function serviceField(){
    const location = document.querySelector("#cusomer-cart-details .site-footer__newsletter .checkpostcodeform");
    const cartForm = document.querySelector('.cart-implementation');
    if(location && cartForm && !document.querySelector('.cart-form') && (document.querySelector('.resident-delivery-wrap').style.display == '' || document.querySelector('.resident-delivery-wrap').style.display == 'block')){
        document.querySelector("#cusomer-cart-details .resident-type-wrapper .fieldset").insertAdjacentElement("afterbegin" , location)
        cartForm.classList.add('cart-form')
    }
}

function loadTestCode() {
    if (!document.querySelector('body').classList.contains('cart_iv')) {
        document.querySelector('body').classList.add('cart_iv');


        if(document.querySelector('.resident-delivery-wrap').style.display == '' || document.querySelector('.resident-delivery-wrap').style.display == 'block'){
            serviceField();
        }

        var targetElement = document.querySelector('#cusomer-cart-details');
        observerElm(targetElement, function(mutationsList, observer) {
            serviceField();
        });
        

        const apartmentLabel = document.querySelector('label[for="checkout_attributes_apartment"]');
        if (apartmentLabel) {
            apartmentLabel.textContent = 'Apartment or hotel room number';
            const apartmentField = apartmentLabel.closest('.field');
            const firstNameField = document.querySelector('label[for="first-name"]').closest('.field');
            if (apartmentField && firstNameField) {
                firstNameField.parentNode.insertBefore(apartmentField, firstNameField);
            }
        }
        const dateLable = `<label class="field__label" for="checkout_attributes_appointmentdate">Date</label>`
        document.querySelector('.cart-form .field#date-wrapper .field__input-wrapper').insertAdjacentHTML('afterbegin' , dateLable)

        const appointmentDateLabel = document.querySelector('label[for="checkout_attributes_appointmentdate"]');
        if (appointmentDateLabel) {
            appointmentDateLabel.textContent = 'When would you like us to come for your service?';
        }

        const appointmentTimeLabel = document.querySelector('label[for="checkout_attributes_appointmenttime"]');
        if (appointmentTimeLabel) {
            appointmentTimeLabel.textContent = 'Please select what time you’d like us to come:';
        }

        const nameLabel = document.querySelector('label[for="first-name"]');
        if(nameLabel){
            nameLabel.textContent = "Please enter your name";
            nameLabel.closest('.field').classList.add('full-name')
        }

        const preferredPhoneNumber = document.querySelector('label[for="checkout_attributes_phone"]');
        if(preferredPhoneNumber){
            preferredPhoneNumber.textContent = "Preferred phone number";
        }

        const EmailAddressLabel = document.querySelector('label[for="checkout_attributes_email"]');
        if(EmailAddressLabel){
            EmailAddressLabel.textContent = "Email address";
        }

        const likeLabel = document.querySelector('label[for="checkout_attributes_appointmentdate"]');
        if(likeLabel){
            likeLabel.textContent = "When would you like us to come?";
        }

        const timeLabel = document.querySelector('label[for="checkout_attributes_appointmenttime"]');
        if(timeLabel){
            timeLabel.textContent = "Time:";
        }


        const hotel = document.querySelector('#checkout_attributes_apartment');
        if(hotel){
            hotel.placeholder = 'Enter room or apartment number'
        }

        const phone = document.querySelector('#checkout_attributes_phone');
        if(phone){
            phone.placeholder = 'Phone number'
        }

        const email = document.querySelector('#checkout_attributes_email');
        if(email){
            email.placeholder = 'Email address'
        }

        const additional = document.querySelector('#checkout_attributes_additional');
        if(additional){
            additional.placeholder = 'Additional note'
        }

    }
}

loadTestCode();