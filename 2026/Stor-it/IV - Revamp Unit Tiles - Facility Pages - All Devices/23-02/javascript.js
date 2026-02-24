function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-UnitTiles')) {
        document.querySelector('body').classList.add('iv-UnitTiles');


        var getClassInterval = setInterval(function(){
            if(document.querySelectorAll('.unitCellRightGroup .facilityName').length > 0){
                clearInterval(getClassInterval);

                    document.querySelectorAll('.unitCellRightGroup .facilityName').forEach((el, i) => {
                    const link = document.querySelectorAll('#containerPreview a.unitSeeStorage')[i];
                    if (link) {
                        el.after(link);
                    }
                });
            }
        },500);

        document.querySelectorAll('.unitCellRightGroup .unitsCellMid').forEach(el => {
            el.insertAdjacentHTML('afterend', `<div class="contentDiscountUnitWrapper"></div>`);
        });

        document.querySelectorAll('.contentDiscountUnitWrapper').forEach(wrapper => {
            const parent = wrapper.closest('.unitCellRightGroup');
            const discount = parent?.querySelector('.contentDiscountUnit');
            if (discount) {
                wrapper.appendChild(discount);
            }
        });
            
        
    }
}

const checkCondition = setInterval(function() {
    if (document.querySelector('body')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);