function loadTestCode() {
    if (!document.querySelector('body').classList.contains('cart_iv')) {
        document.querySelector('body').classList.add('cart_iv');

        const apartmentLabel = document.querySelector('label[for="checkout_attributes_apartment"]');
        if (apartmentLabel) {
            apartmentLabel.textContent = 'What is your room or apartment number?';
            const apartmentField = apartmentLabel.closest('.field');
            const firstNameField = document.querySelector('label[for="first-name"]').closest('.field');
            if (apartmentField && firstNameField) {
                firstNameField.parentNode.insertBefore(apartmentField, firstNameField);
            }
        }

        const appointmentDateLabel = document.querySelector('label[for="checkout_attributes_appointmentdate"]');
        if (appointmentDateLabel) {
            appointmentDateLabel.textContent = 'When would you like us to come for your service?';
        }

        const appointmentTimeLabel = document.querySelector('label[for="checkout_attributes_appointmenttime"]');
        if (appointmentTimeLabel) {
            appointmentTimeLabel.textContent = 'Please select what time you’d like us to come:';
        }

    }
}

loadTestCode();