function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-TrialPage')) {
        document.querySelector('body').classList.add('iv-TrialPage');
        
        document.querySelector('.iv-TrialPage section.first .encapsulated-rich-content.item-1').after(document.querySelector('.iv-TrialPage section.first + section .encapsulated-rich-content'));

        document.querySelector('.iv-TrialPage section.first h3#book-a-demo').textContent = 'Unlock the full power of your free trial by booking a Free Demo today!';
    }
}
var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);