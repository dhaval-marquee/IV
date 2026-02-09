document.querySelectorAll(".tab_iv_tabstitle").forEach(function (button) {
    button.addEventListener("click", function () {
        var tabID = button.getAttribute('data-tab');
        document.querySelectorAll(".tab_iv_tabstitle").forEach(function (removeClass) {
            removeClass.classList.remove('active');
        });
        document.querySelectorAll(".tab_iv_tabscontent_item").forEach(function (removeClass) {
            removeClass.classList.remove('active');
        });
        button.classList.add('active');
        document.querySelector('#tab-' + tabID).classList.add('active');
    });
});
