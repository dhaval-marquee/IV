function loadTestCode() {
    if (!jQuery('body').hasClass('redesignIV')) {
        jQuery('body').addClass('redesignIV');
        
        // Put your test code here
        jQuery('section#topics #list').addClass('topics-list').before(`<div class="main-topics-list-header">
            <h2 class="titleIV">Main Topics</h2>
            <ul id="mainTopicsList"></ul>
        </div>`);

        jQuery('.topics-list span.topic').each(function(i) {
            var listText = jQuery(this).html();
            var topicLink = jQuery(this).closest('a').attr('href');

            jQuery(this).parent('a').addClass('toggleTopics');
            jQuery(this).closest('.top').attr('id','topics'+(i+1));
            jQuery(this).addClass('bg'+(i+1));
            jQuery(this).attr('style', 'background-image: url("https://res.cloudinary.com/ignite-visibility/image/upload/NSB/Topics_Page/bg'+(i+1)+'.jpg") !important;');
            jQuery(this).wrapInner('<span></span>');

            jQuery('#mainTopicsList').append('<li><a href="javascript:;" data-target="topics' + (i + 1) + '">' + listText + '</a></li>');
            jQuery(this).closest('.top').append('<a href="' + topicLink + '" class="viewAllText hideMobile">View All ' + listText + ' Speakers</a>');
            jQuery(this).closest('.top').append('<a href="' + topicLink + '" class="viewAllText showMobile">View All Speakers</a>');
        });

        jQuery('section#topics #list').prepend(`<h2 class="titleIV hideMobile">Subtopics</h2>
            <h2 class="titleIV showMobile">Topics</h2>
            <div class="top active">
                <a href="javascript:;" class="noClick toggleTopics">
                    <div class="topic img bestselling-authors-celebrity">
                        <div class="topic inner bestselling-authors-celebrity"></div>
                    </div>
                    <span class="bestselling-authors-celebrity topic" style="background-image: url(https://res.cloudinary.com/ignite-visibility/image/upload/v1720522680/NSB/Topics_Page/Feature.jpg) !important;">
                        <span>Featured / Most-Popular Topics</span>
                    </span>
                </a>
                <div class="subtopics">
                    <a class="sub" href="/topics/technology-trends-speakers">Tech & Future Trends</a>
                    <a class="sub" href="/topics/technology-trends-speakers/artificial-intelligence">Artificial Intelligence</a>
                    <a class="sub" href="/topics/current-events">Current Events & Politics</a>
                    <a class="sub" href="/topics/economics-finance">Economics & Finance</a>
                    <a class="sub" href="/topics/human-rights-social-change-speakers/diversity-inclusion-equity-speakers">Equity, Diversity, Inclusion (EDI)</a>
                    <a class="sub" href="/topics/leadership-speakers">Leadership & Peak Performance</a>
                    <a class="sub" href="/topics/innovation-change-management-speakers">Innovation & Change Management</a>
                    <a class="sub" href="/topics/motivational-speakers">Motivational & Inspirational Speakers</a>
                    <a class="sub" href="/topics/more-themes/new-speakers">Newest Speakers</a>
                </div>
            </div>`);
        
        jQuery(document).on('click', function(e) {
            var topSpacing = jQuery('header').height() - 30;
            if(e.target.tagName == 'A' && jQuery(e.target).data('target')) {
                var target = jQuery(e.target).data('target');
                jQuery('html, body').animate({
                    scrollTop: jQuery('#'+target).offset().top - topSpacing
                }, 500);
            }

            if ((jQuery(e.target).hasClass('toggleTopics') || jQuery(e.target).closest('.toggleTopics').length > 0) && window.matchMedia("(max-width: 767.98px)").matches) {
                e.preventDefault();
                // Remove 'active' class from closest '.top' and add 'active' class to the clicked element
                jQuery('.top').removeClass('active');
                jQuery(e.target).closest('.top').addClass('active');
            }
        });


    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);