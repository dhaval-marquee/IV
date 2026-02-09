document.addEventListener("click", function (e) {
    if (e.target.id == "book-now-top" || e.target.closest('#book-now-top') || e.target.closest('#book-now-bottom')) {

        var getPopup = setInterval(() => {
            if(document.querySelectorAll('.modal.show[id*="addtocartpopupModal"] .popup-addtocart').length > 0) {
                clearInterval(getPopup);
                document.querySelectorAll('.modal.show[id*="addtocartpopupModal"] .popup-addtocart')[0].click();
            }
        }, 100);
    }
});