function observerForLoadingBlock(){
 
    // observer binding
    var target = document.querySelectorAll('.business-container')[0];
 
    const config = {
        childList: true, characterData: true, subtree: true, attributes: true,
    };
 
    var running = false; 
    var t;
 
    const callback = function(mutationsList, observer) {
        for (let mutation of mutationsList) {
 
            if(running) return;
            
            // Put code here
            console.log('workinggggggggg')
            document.querySelectorAll('.heading-actions')[0].innerHTML = '<h1 class="text-center">Lets Get Started!</h1>' 
 
            running = true;
            setTimeout(function(){running = false;}, 100);
 
 
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(target, config);
 
 
    // End observer binding
}
observerForLoadingBlock();
