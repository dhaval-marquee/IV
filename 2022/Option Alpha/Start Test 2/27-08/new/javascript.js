var jQisLoaded = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQisLoaded);
        
        if (!$('body').hasClass('test_iv')) {
            $('body').addClass('test_iv');
            
            // Put your test code here
            $('.test_iv .form-wrapper').prev().addClass('title_wrapper');
            $('.test_iv .title_wrapper h1.heading-medium').text('Welcome to Option Alpha');
            $('.test_iv .title_wrapper h1.heading-medium').parent().next().text('Create your account to get instant autotrading access and start your free 30-day trial.');
            $('.test_iv .title_wrapper h1.heading-medium').parent().next().after('<br><p class="text-size-medium"><b>No Credit Card &nbsp; &bullet; &nbsp; No Commitment</b></p>');
            $('.test_iv #btnSignupSubmit').attr('value','Create my free account');
        
            document.getElementsByTagName("body")[0].style.visibility = "visible";
        }
    } 
}, 100);

setTimeout(() => {
    document.getElementsByTagName("body")[0].style.visibility = "visible";
}, 3000);