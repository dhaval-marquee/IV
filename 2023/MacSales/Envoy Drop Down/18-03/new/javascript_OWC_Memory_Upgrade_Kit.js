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
                    <option value="https://eshop.macsales.com/item/OWC/1600DDR3S4GB/"> 4 GB </option>
                    <option value="https://eshop.macsales.com/item/OWC/1600DDR3S08S/"> 8 GB </option>
                    <option value="https://eshop.macsales.com/item/OWC/1600DDR3S12S/"> 12 GB </option>
                </select>
            </div>
        </div>`);

        $('#pdp-grid__options .pdp-options__button-container').eq(1).html(`<div class="select_wrapper">
            <div class="custom_selectBox">
                <label>Storage</label>
                <select onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">
                    <option value=""> Select Size </option>
                    <option value="https://eshop.macsales.com/item/OWC/1600DDR3S8GB/"> 8 GB </option>
                    <option value="https://eshop.macsales.com/item/OWC/1600DDR3S12S/"> 12 GB </option>
                    <option value="https://eshop.macsales.com/item/OWC/1600DDR3S16P/"> 16 GB </option>
                    <option value="https://eshop.macsales.com/item/OWC/1600DDR3S32S/"> 32 GB </option>
                    <option value="https://eshop.macsales.com/item/OWC/1600DDR3S48S/"> 48 GB </option>
                </select>
            </div>
        </div>`);

        $('#pdp-grid__options .pdp-options__button-container').eq(2).html(`<div class="select_wrapper">
            <div class="custom_selectBox">
                <label>Storage</label>
                <select onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">
                    <option value=""> Select Size </option>
                    <option value="https://eshop.macsales.com/item/OWC/1600DDR3S16G/"> 16 GB </option>
                    <option value="https://eshop.macsales.com/item/OWC/1600DDR3S32P/"> 32 GB </option>
                    <option value="https://eshop.macsales.com/item/OWC/1600DDR3S48S/"> 48 GB </option>
                    <option value="https://eshop.macsales.com/item/OWC/1600DDR3S64S/"> 64 GB </option>
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