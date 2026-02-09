function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('selectBox_iv')) {
        bodyEle.classList.add('selectBox_iv');
        
        // Put your test code here
        

        var jQisLoaded = setInterval(function () {
            if (typeof jQuery != 'undefined') {
                clearInterval(jQisLoaded);

                function generateList() {
                    var getSelectBox = setInterval(() => {
                        if($('#sizeDropdown').length > 0) {
                            clearInterval(getSelectBox)

                            var newList = '<ul id="listItems">';
                            $('#sizeDropdown option').each(function(){
                                if(!$(this).attr('value') == '') {
                                    var valueee = $(this).text().split('(')[0].replace('½','.5');
                                    newList+='<li value="'+$(this).attr('value')+'">'+valueee+'</li>';
                                }
                            });
                            newList+='</ul>';
                            $('#sizeDropdown').closest('.merce-row').before(newList);
                        }
                    }, 100);
                }
                generateList();

                $(document).on('click', 'h2[class*="ColorSelector_colorSelectorTitl"] + div button', function() {
                    $('#listItems').remove();
                    generateList();
                });

                $(document).on('click', '#listItems li', function(){
                    var checkListValue = $(this).attr('value');
                    console.log(checkListValue);
                    $('#sizeDropdown').val(checkListValue).trigger('change');
                });






                // $('#sizeDropdown option').removeAttr('selected').change();
                // $('#sizeDropdown').find('option[value="22156-5"]').attr('selected','true').change();
                // $('#sizeDropdown').val('22156-5').change()
                // $('#sizeDropdown').attr('value','22156-5').change()












                // $(document).on('click', '#listItems li', function(){
                //     var checkListValue = $(this).attr('value');
                //     console.log(checkListValue);
                //     selectElement('sizeDropdown', checkListValue);
                // });

                // function selectElement(id, valueToSelect) {    
                //     let element = document.getElementById(id);
                //     element.value = valueToSelect;
                // }
                
                // $(document).on('click', '#listItems li', function(){
                //     var checkListValue = $(this).attr('value');
                //     console.log(checkListValue);
                //     $('#sizeDropdown').prop('#sizeDropdown option['+checkListValue+']',checkListValue);

                // });

                
                
        }
    }, 100);
    }
}
loadTestCode();