function loadTestCode() {
    if (!jQuery('body').hasClass('reviewIV')) {
        jQuery('body').addClass('reviewIV');
        
        // Put your test code here
        jQuery('#tab5').addClass('reviewTab');
        jQuery('.reviewTab .leaveAReviewWrapper').addClass('addReview');
        jQuery('.reviewTab .reviewRating').closest('td').wrapInner('<div class="ratingContent"></div>');
        jQuery('.reviewTab h2 strong').text('Our Curated Reviews!');

        jQuery('.reviewTab .ratingContent').each(function() {
            jQuery(this).find('.reviewRating').wrap('<div class="ratingTop" data-attr-letter="'+jQuery(this).find('.reviewAuthor em').text().trim().charAt(0)+'"></div>');
            jQuery(this).find('.reviewAuthor').prependTo(jQuery(this).find('.ratingTop'));
            jQuery(this).find('.reviewDate').appendTo(jQuery(this).find('.ratingTop'));
            jQuery(this).find('.reviewAuthor').append('<span class="googleText">on Google</span>');
            jQuery(this).wrapInner('<div class="ratingRight"></div>');
        });

        
        jQuery('.reviewTab .reviewDate').each(function() {
            let reviewDateText = jQuery(this).text();
            let reviewDate = new Date(reviewDateText);
            let currentDate = new Date();
            let timeDifference = currentDate - reviewDate;
            let dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            if (dayDifference > 0 && dayDifference <= 9) {
                jQuery(this).text(dayDifference + " days ago");
            }
        });

        var totalWidth = 0;
        var count = 0;
        var fiveStarCount = 0;
        var fourStarWidth = 0;
        var threeStarWidth = 0;
        var twoStarWidth = 0;
        var oneStarWidth = 0;

        jQuery('.star-ratings-css .star-ratings-css-top').each(function() {
            var width = jQuery(this).css('width');
                width = parseFloat(width);
                totalWidth += width;
                count++;

            var checkWidth = jQuery(this).attr('style').replace('width: ', '').replace('%', '');
            checkWidth = parseFloat(checkWidth);

            if (checkWidth == 100) {
                fiveStarCount++
            } else if (checkWidth >= 80 && checkWidth < 100) {
                fourStarWidth++
            } else if (checkWidth >= 60 && checkWidth < 80) {
                threeStarWidth++
            } else if (checkWidth >= 40 && checkWidth < 60) {
                twoStarWidth++
            } else if (checkWidth >= 20 && checkWidth < 40) {
                oneStarWidth++
            }
        });

        console.log(fiveStarCount);
        console.log(fourStarWidth);
        console.log(threeStarWidth);
        console.log(twoStarWidth);
        console.log(oneStarWidth);

        var fiveStarWidth = (fiveStarCount / count) * 100;
        var fourStarWidth = (fourStarWidth / count) * 100;
        var threeStarWidth = (threeStarWidth / count) * 100;
        var twoStarWidth = (twoStarWidth / count) * 100;
        var oneStarWidth = (oneStarWidth / count) * 100;


        const reviewsText = jQuery('#reviews_theme_1 .reviewTable tr.facReview').length;
        var averageWidth = totalWidth / count;
        var starRating = (averageWidth / 20).toFixed(1);
        jQuery('.reviewTab h2').append(`<div class="addReviewContent">
            <div class="addReviewLeft">
                <h3><b>${starRating}</b></h3>
                <div>
                    <div class="reviewRating"><div class="candee rating"><div class="star-ratings-css"><div class="star-ratings-css-top text_color_1" style="width: ${averageWidth}%"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div><div class="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div></div></div></div>
                    <p>${reviewsText} reviews</p>
                </div>
            </div>
            <div class="addReviewCenter">
                <ul>
                    <li>
                        <p>5</p>
                        <div class="reviewProgressBar">
                            <div class="progress-bar" style="width: ${fiveStarWidth}%"></div>
                        </div>
                    </li>
                    <li>
                        <p>4</p>
                        <div class="reviewProgressBar">
                            <div class="progress-bar" style="width: ${fourStarWidth}%"></div>
                        </div>
                    </li>
                    <li>
                        <p>3</p>
                        <div class="reviewProgressBar">
                            <div class="progress-bar" style="width: ${threeStarWidth}%"></div>
                        </div>
                    </li>
                    <li>
                        <p>2</p>
                        <div class="reviewProgressBar">
                            <div class="progress-bar" style="width: ${twoStarWidth}%"></div>
                        </div>
                    </li>
                    <li>
                        <p>1</p>
                        <div class="reviewProgressBar">
                            <div class="progress-bar" style="width: ${oneStarWidth}%"></div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="addReviewRight"></div>
        </div>`);

        jQuery('.addReviewRight').append(jQuery('.leaveReview').html('Write a review'))


    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);