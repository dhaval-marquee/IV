function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-ratings')) {
        document.querySelector('body').classList.add('iv-ratings');
        
        const ratingsSec = `
        <div class="iv-ratings-sec">
            <div class="stars" bis_skin_checked="1">
                <span class="star-image">
                    <img alt="star" src="/ResourcePackages/Allied/assets/house-hold_dist/img/star.png" data-sf-ec-immutable="">
                    <img alt="star" src="/ResourcePackages/Allied/assets/house-hold_dist/img/star.png" data-sf-ec-immutable="">
                    <img alt="star" src="/ResourcePackages/Allied/assets/house-hold_dist/img/star.png" data-sf-ec-immutable="">
                    <img alt="star" src="/ResourcePackages/Allied/assets/house-hold_dist/img/star.png" data-sf-ec-immutable="">
                    <img alt="star" src="/ResourcePackages/Allied/assets/house-hold_dist/img/star.png" data-sf-ec-immutable="">
                </span>
                <span class="star-text">Average Rating: 4.6/5&nbsp;based on 12,096 customer reviews</span>
            </div>
        </div>`;

        document.querySelector('.free-quote .free-quote-inner').insertAdjacentHTML("afterend", ratingsSec);

    }
}

loadTestCode();