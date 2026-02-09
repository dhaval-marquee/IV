function loadTestCode() {
    if (!document.body.classList.contains('homepage_iv')) {
        document.body.classList.add('homepage_iv');
<div class="additional-info">
  <span class="score">4.5/5</span> 
  <img src="//res.cloudinary.com/spiralyze/image/upload/v1687162040/JupiterOne/5003ResourceLockHero/Frame5640.svg" alt="Review Stars" width="95" height="20"/>
  <span class="ratings">Ratings (250+ Ratings)</span>
</div>
    }
}

let checkCondition = setInterval(function () {
    if (document.body) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
