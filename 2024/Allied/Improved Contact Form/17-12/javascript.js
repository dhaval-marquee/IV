function loadTestCode() {
    if (!$('body').hasClass('form_iv')) {
        $('body').addClass('form_iv');
        
        // Put your test code here
        $('.free-quote .free-quote-form button').text('Get a Free Quote');
        $('.form_iv .free-quote .free-quote-inner').after($('.form_iv .free-quote form + p'));
        
        $('label[for="Name"]').closest('fieldset').after(`
            <fieldset>
                <label for="select1">I need to move a vehicle</label>
                <select data-val="true" data-val-required="Please select a Dwelling Type" id="select1" name="select1">
                    <option value="" selected>Please Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </fieldset>
        `);
        $('#HasVehicle').closest('fieldset').hide();

        const $selectBox = $('#select1');
        const $checkbox = $('#HasVehicle');

        if ($checkbox.is(':checked')) {
            $selectBox.val('Yes');
        } else if ($checkbox.attr('checked') === undefined) {
            $selectBox.val('');
        } else {
            $selectBox.val('No');
        }

        $selectBox.on('change', function () {
            $checkbox.prop('checked', $selectBox.val() === 'Yes');
        });
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && $('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);