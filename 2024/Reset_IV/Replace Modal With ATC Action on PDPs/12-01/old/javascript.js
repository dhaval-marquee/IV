document.addEventListener("click", function (e) {
    if (e.target.id == "book-now-top" || e.target.closest('#book-now-top')) {
        document.querySelector('#addtocartpopupModal .popup-addtocart').click();
    }
});