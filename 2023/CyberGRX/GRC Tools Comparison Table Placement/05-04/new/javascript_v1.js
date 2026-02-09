function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('redesign_table')) {
        bodyEle.classList.add('redesign_table');
        
        // Put your test code here
        document.querySelectorAll('.redesign_table h1')[0].nextElementSibling.remove();
        document.querySelectorAll('.redesign_table h1 ~ p img')[0].parentNode.previousElementSibling.style.display = "none";
        document.querySelectorAll('.redesign_table h1 ~ p img')[0].setAttribute('src','//res.cloudinary.com/ignite-visibility/image/upload/f_auto/CyberGRX/GRC-Tools-Comparison-Table-Placement/GRC_Tools_Comparison_Table.jpg');
        document.querySelectorAll('.redesign_table h1')[0].textContent = 'Functional Comparison of CyberGRX and GRC Tools';
        document.querySelectorAll('.redesign_table h1 ~ p img')[0].parentNode.nextElementSibling.textContent = "Don't Take Our Word For It, Compare For Yourself";
        document.querySelectorAll('.redesign_table h1 ~ p img')[0].parentNode.nextElementSibling.nextElementSibling.classList.add('hasCTA');
        document.querySelectorAll('.hasCTA a')[0].classList.add('btn', 'btn-primary', 'btn-next');
        document.querySelectorAll('.hasCTA a')[0].insertAdjacentHTML('beforebegin','<br>');
        document.querySelectorAll('.hasCTA a')[0].nextSibling.remove();


        document.querySelectorAll('.redesign_table h1')[0].after(document.querySelectorAll('.redesign_table h1 ~ p img')[0].parentNode.nextElementSibling.nextElementSibling);

        document.querySelectorAll('.redesign_table h1')[0].after(document.querySelectorAll('.redesign_table h1 ~ p img')[0].parentNode.nextElementSibling);

        document.querySelectorAll('.redesign_table h1')[0].after(document.querySelectorAll('.redesign_table h1 ~ p img')[0].parentNode);
        
    }
}
loadTestCode();