function loadTestCode() {
    if (!document.querySelector('body').classList.contains('demo_iv')) {
        document.querySelector('body').classList.add('demo_iv');
        


        document.querySelectorAll('h1').forEach(function(title){
            title.innerText = 'Request A Demo'
        });




        document.querySelectorAll('.formbox h3')[0].innerText = 'Book A Quick No-Obligation Demo';


    }
}

loadTestCode();