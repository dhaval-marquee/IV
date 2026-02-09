const redirectLinks = [{
    'https://www.nsb.com/topics/bestselling-authors-celebrity/': 'https://www.nsb.com/blog/2024-speaker-author-bestsellers/',
    'https://www.nsb.com/topics/current-events/': 'https://www.nsb.com/canadian-election-speakers-2/',
    'https://www.nsb.com/topics/economics-finance/': 'https://www.nsb.com/financial-economics-speakers/',
    'https://www.nsb.com/topics/educational-speakers/': 'https://www.nsb.com/educational-speakers/',
    'https://www.nsb.com/topics/health-wellness-speakers/': 'https://www.nsb.com/healthcare-speakers/',
    'https://www.nsb.com/topics/human-rights-social-change-speakers/': 'https://www.nsb.com/social-change-speakers/',
    'https://www.nsb.com/topics/leadership-speakers/': 'https://www.nsb.com/leadership-speaker/',
    'https://www.nsb.com/topics/media-entertainment/': 'https://www.nsb.com/platform-plus/hostmcs/',
    'https://www.nsb.com/topics/motivational-speakers/': 'https://www.nsb.com/motivational-inspirational-speakers/',
    'https://www.nsb.com/topics/sports-adventurers/': 'https://www.nsb.com/athlete-speakers/',
    'https://www.nsb.com/topics/technology-trends-speakers/': 'https://www.nsb.com/athlete-speakers/',
    'https://www.nsb.com/topics/youth-campus/': 'https://www.nsb.com/featured-campus-speakers/',
    'https://www.nsb.com/topics/technology-trends-speakers/artificial-intelligence/': 'https://www.nsb.com/artificial-intelligence-speakers/',
    'https://www.nsb.com/topics/bestselling-authors-celebrity/celebrities/': 'https://www.nsb.com/celebrity-speakers-and-authors-for-your-event',
    'https://www.nsb.com/topics/current-events/government-politics/': 'https://www.nsb.com/canadian-election-speakers-2/',
    'https://www.nsb.com/topics/economics-finance/investing/': 'https://www.nsb.com/financial-economics-speakers/',
    'https://www.nsb.com/topics/health-wellness-speakers/healthcare/': 'https://www.nsb.com/healthcare-speakers/',
    'https://www.nsb.com/topics/health-wellness-speakers/mental-health/': 'https://www.nsb.com/mental-health-speakers/',
    'https://www.nsb.com/topics/human-rights-social-change-speakers/humanitarian/': 'https://www.nsb.com/social-change-speakers/',
    'https://www.nsb.com/topics/human-rights-social-change-speakers/black-lives-matter/': 'https://www.nsb.com/black-history-month-speakers/',
    'https://www.nsb.com/topics/human-rights-social-change-speakers/indigenous-speakers/': 'https://www.nsb.com/indigenous-speakers/',
    'https://www.nsb.com/topics/innovation-change-management-speakers/future-futurist-speakers/': 'https://www.nsb.com/future-of-work-speakers/',
    'https://www.nsb.com/topics/leadership-speakers/inspiration-leadership-2/': 'https://www.nsb.com/motivational-inspirational-speakers/',
    'https://www.nsb.com/topics/leadership-speakers/motivation-leadership-2/': 'https://www.nsb.com/motivational-inspirational-speakers/',
    'https://www.nsb.com/topics/more-themes/most-popular/': 'https://www.nsb.com/most-popular-speakers/',
    'https://www.nsb.com/topics/more-themes/womens-voices/': 'https://www.nsb.com/iwd-2024-speakers/',
    'https://www.nsb.com/topics/more-themes/lgbtq-speakers/': 'https://www.nsb.com/lgbtq-speakers/',
    'https://www.nsb.com/topics/motivational-speakers/olympians-sport/': 'https://www.nsb.com/olympic-speakers/',
    'https://www.nsb.com/topics/performance-productivity/inspiration/': 'https://www.nsb.com/motivational-inspirational-speakers/',
    'https://www.nsb.com/topics/performance-productivity/leadership/': 'https://www.nsb.com/leadership-speaker/',
    'https://www.nsb.com/topics/performance-productivity/motivation/': 'https://www.nsb.com/motivational-inspirational-speakers/',
    'https://www.nsb.com/topics/youth-campus/leadership-youth-campus/': 'https://www.nsb.com/leadership-speaker/',
    'https://www.nsb.com/topics/youth-campus/sexuality-youth-campus/': 'https://www.nsb.com/lgbtq-speakers/',
    'https://www.nsb.com/topics/youth-campus/environment/': 'https://www.nsb.com/environment-speakers',
}, ];

const currentUrl = window.location.href.split(/[?#&]/)[0];
const qury_par = window.location.href.split('?')[1];

redirectLinks.forEach((link) => {
    for (const key in link) {
        if (currentUrl == key) {
            if (qury_par) {
                window.location.replace(link[key] + '?' + qury_par);
            } else {
                window.location.replace(link[key]);
            }
        }
    }
});
