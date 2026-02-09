function loadTestCode() {
    if (!document.body.classList.contains('iv-revamp-page')) {
        document.body.classList.add('iv-Homepage');

        const ivDatabase = `<div class="iv-database-section">
            <div class="container max-width-standard">
                <div class="iv-database-inner">
                    <div class="iv-database-left">
                        <h3>Don’t let database speed hold back <span>your business growth</span></h3>
                        <p>58% of KX users purchased KX because they were experiencing "Difficulty Scaling"</p>
                        <span>“You have to justify not using kdb.”</span>
                        <div class="iv-job-position">
                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/KX/NavigationMenuTest/leadAuthorImg.png" alt="Senior Technology Lead">
                            <div class="iv-job-position-inner">
                                <h6>Senior Technology Lead</h6>
                                <span>Large Enterprise Capital Markets Company</span>
                            </div>
                        </div>
                    </div>
                    <div class="iv-database-right">
                        <div class="iv-box-item">
                            <h3>67%</h3>
                            <p>of customers that switched to KX saw a 50%+ increase in operational efficiency</p>
                            <span>by surveyed users**</span>
                        </div>
                        <div class="iv-box-item">
                            <h3>25X</h3>
                            <p>Faster than TimeScale</p>
                            <span>Performed in independent benchmarks ***</span>
                        </div>
                        <div class="iv-box-item">
                            <h3>9X</h3>
                            <p>Faster than Influx</p>
                            <span>Performed in independent benchmarks ***</span>
                        </div>
                        <div class="iv-box-item">
                            <h3>5X</h3>
                            <p>Faster than QuestDB</p>
                            <span>Performed in independent benchmarks ***</span>
                        </div>
                    </div>
                </div>
                <div class="iv-poweredby-section">
                    <p><a class="button primary pill iv-get-started" href="/resources/analyst-content/benchmark-report-high-frequency-data-benchmarking/">Read benchmark report</a></p>
                    <p>Powered by <img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/KX/NavigationMenuTest/user-Evidence-white.png" alt="User Evidence"></p>
                    <span>**Survey conducted and verified by UserEvidence.</span>
                    <div class="iv-source-link">
                        *** Source: To see how kdb performed in <a href="https://kx.com/resources/demo/high-frequency-data-benchmarking/">independent benchmarks</a> that show similar on replicable data see: <a href="https://github.com/timescale/tsbs">TSBS 2023</a>, <a href="https://www.stacresearch.com/m3">STAC-M3</a>, <a href="https://h2oai.github.io/db-benchmark/">DBops</a>, and <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4342004">Imperial College London Results for High-performance DB benchmarks.</a>
                    </div>
                </div>
            </div>
        </div>`;

        const g2Competitor = document.querySelector('.partner-logos.introLeft');
        if (g2Competitor) {
            g2Competitor.insertAdjacentHTML('beforebegin', ivDatabase);
        }

        document.querySelector('.home section.home-banner .copy p > a').id = 'scrollDown';
        document.querySelector('.home section.home-banner .copy p > a').setAttribute('href','javascript:void(0)');


        jQuery(document).on('click', '#scrollDown', function (e) {
            e.preventDefault();

            const target = jQuery('.iv-database-section');

            if (target.length) {
                jQuery('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, 'swing');
            } else {
                console.warn('.iv-database-section not found.');
            }
        });
    }
}

let checkCondition = setInterval(function () {
    if (document.body) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
