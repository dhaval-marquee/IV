
// Wait for form to load
const checkCondition = setInterval(function () {
    if (document.querySelectorAll("#contact form").length > 0) {
        clearInterval(checkCondition);
        
        document.querySelector('.tel-info p').innerHTML = `Click <a href="https://onesource.passporthealth.com/_members/Home/Login.aspx" style="text-decoration: underline;" target="_self">here to login</a> or call <a href="tel:+18338121015" style="text-decoration: underline;">833-812-1015</a> for OneSource login help.`;
    }
}, 200);
