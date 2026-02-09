function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('payer_list_iv')) {
        bodyEle.classList.add('payer_list_iv');
        
        // Put your test code here
        document.querySelectorAll('.payer_list_iv .columnBoxes')[3].classList.add('payer_list_section');
        document.querySelectorAll('.payer_list_iv .payer_list_section')[0].children[0].classList.add('column-boxes--gray-boxes');

        document.querySelector('.payer_list_section + .contentBlock').classList.add('hidden');

        document.querySelector('.payer_list_section .par-comp-meta h2').textContent = 'Health Payer Lists';
        document.querySelector('.payer_list_section .par-comp-meta h3').textContent = 'Explore Our Vast Up-To-Date Payer, Managed Care, 3rd Party Admins, and Government Agency Connections';

        var pageURL = "https://www.experian.com/healthcare/about/lists-of-healthcare-insurance-payers";
        var container = document.querySelector('.payer_list_section .clickable-boxes');

        fetch(pageURL)
        .then(response => response.text())
        .then(data => {
            var tempElement = document.createElement('div');
            tempElement.innerHTML = data;
            var newContent = tempElement.querySelector('.columnBoxes .column-boxes-4');

            container.classList.add('no-borders');
            container.classList.remove('clickable-boxes');
            container.innerHTML = newContent.innerHTML;

            var buttons = document.querySelectorAll('.payer_list_section .box-bottom a');
            var titles = document.querySelectorAll('.payer_list_section .box-top h3');

            if (titles.length >= buttons.length && titles.length >= 3) {
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].innerHTML = titles[i].innerHTML + ' (PDF)';
            }
            }
        })
        .catch(error => console.error('Error fetching content:', error));

    }
}
loadTestCode();