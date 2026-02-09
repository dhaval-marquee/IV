function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('dropdown_test')) {
        bodyEle.classList.add('dropdown_test');
        
        // Put your test code here
        $('#pdp-grid__options .pdp-options__button-container').eq(0).html(`<div class="select_wrapper">
            <div class="custom_selectBox">
                <label>Storage</label>
                <select onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">
                    <option value=""> Select Size </option>
                    <option value="https://eshop.macsales.com/item/OWC/MSTK3UK000/"> 0 TB </option>
                </select>
            </div>
        </div>`);

        $('#pdp-grid__options .pdp-options__button-container').eq(1).html(`<div class="select_wrapper">
            <div class="custom_selectBox">
                <label>Storage</label>
                <select onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">
                    <option value=""> Select Size </option>
                    <option value="https://eshop.macsales.com/item/OWC/MSTK3H7T1.0/"> 1 TB </option>
                    <option value="https://eshop.macsales.com/item/OWC/MSTK3H7T2.0/"> 2 TB </option>
                    <option value="https://eshop.macsales.com/item/OWC/MSTK3H7T4.0/"> 4 TB </option>
                    <option value="https://eshop.macsales.com/item/OWC/MSTK3H7T6.0/"> 6 TB </option>
                    <option value="https://eshop.macsales.com/item/OWC/MSTK3H7T8.0/"> 8 TB </option>
                    <option value="https://eshop.macsales.com/item/OWC/MSTK3H7T12.0/"> 12 TB </option>
                    <option value="https://eshop.macsales.com/item/OWC/MSTK3H7T14.0/"> 14 TB </option>
                    <option value="https://eshop.macsales.com/item/OWC/MSTK3H7T16.0/"> 16 TB </option>
                    <option value="https://eshop.macsales.com/item/OWC/MSTK3H7T18.0/"> 18 TB </option>
                    <option value="https://eshop.macsales.com/item/OWC/MSTK3H7T20.0/"> 20 TB </option>
                </select>
            </div>
        </div>`);

        var currentPage = window.location.pathname;
        $('.custom_selectBox option').each(function(){
            if($(this).attr('value').indexOf(currentPage) > -1) {
                console.log(currentPage);
                $(this).attr('selected','selected');
                $(this).find('option[value=""]').remove();
            }
        });
    }
}
loadTestCode();