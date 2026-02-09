function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-pricing-plan')) {
        document.querySelector('body').classList.add('iv-pricing-plan');

        document.querySelectorAll('.iv-pricing-plan .pricing-chart').forEach(function(plan){
            if(plan.querySelector('.mostPopular')){
                plan.classList.add('most-popular-plan');
            }
        });
        
    
    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
