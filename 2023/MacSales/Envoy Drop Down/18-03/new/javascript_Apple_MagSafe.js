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
                    <option value="https://eshop.macsales.com/item/Apple/MB283LLA/"> 45W </option>
                </select>
            </div>
        </div>`);

        $('#pdp-grid__options .pdp-options__button-container').eq(1).html(`<div class="select_wrapper">
            <div class="custom_selectBox">
                <label>Storage</label>
                <select onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">
                    <option value=""> Select Size </option>
                    <option value="https://eshop.macsales.com/item/Apple/MC461LLA/"> 60W </option>
                </select>
            </div>
        </div>`);

        $('#pdp-grid__options .pdp-options__button-container').eq(2).html(`<div class="select_wrapper">
            <div class="custom_selectBox">
                <label>Storage</label>
                <select onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">
                    <option value=""> Select Size </option>
                    <option value="https://eshop.macsales.com/item/Apple/MC556LLA/"> 85W </option>
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