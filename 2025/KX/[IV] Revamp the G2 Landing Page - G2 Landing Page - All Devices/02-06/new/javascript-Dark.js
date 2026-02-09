function loadTestCode() {
    if (!document.body.classList.contains('iv-revamp-page') && !document.body.classList.contains('iv-revamp-page-v2')) {
        document.body.classList.add('iv-revamp-page');
        document.body.classList.add('iv-revamp-page-v2');

        const ivDatabase = `<div class="iv-database-section">
            <div class="container max-width-standard">
                <div class="iv-database-inner">
                    <div class="iv-database-left">
                        <h3>Don’t let database dpeed hold back <span>your business growth</span></h3>
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
                    <a href="#Contact-Sales" class="iv-get-started button primary pill">Get Started</a>
                    <p>Powered by <img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/KX/NavigationMenuTest/user-Evidence-white.png" alt="User Evidence"></p>
                    <span>**Survey conducted and verified by UserEvidence.</span>
                    <div class="iv-source-link">
                        *** Source: To see how kdb performed in <a href="https://kx.com/resources/demo/high-frequency-data-benchmarking/">independent benchmarks</a> that show similar on replicable data see: <a href="https://github.com/timescale/tsbs">TSBS 2023</a>, <a href="https://www.stacresearch.com/m3">STAC-M3</a>, <a href="https://h2oai.github.io/db-benchmark/">DBops</a>, and <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4342004">Imperial College London Results for High-performance DB benchmarks.</a>
                    </div>
                </div>
            </div>
        </div>`;

        const g2Competitor = document.querySelector('#G2-Competitor-Comparisons');
        if (g2Competitor) {
            g2Competitor.insertAdjacentHTML('beforebegin', ivDatabase);
        }

        document.querySelectorAll('section.include-in-navigation h2, section.include-in-navigation h3').forEach((text) => {
            if (text.textContent.includes('Get up to £75,000')) {
                text.closest('section').classList.add('iv-switch-kx-section');
            }
            if (text.textContent.includes('Built for the most demanding data environments')) {
                text.closest('section').classList.add('iv-built-environment');
            }
            if (text.textContent.includes('Get our ultimate guide to time series databases')) {
                text.closest('section').classList.add('iv-ultimate-book');
            }
            if (text.textContent.includes('For enterprise level time-series databases, KX stands out from the pack')) {
                text.closest('section').classList.add('iv-enterprise-section');
            }
            if (text.textContent.includes('A verified G2 leader for time-series')) {
                text.closest('section').classList.add('iv-verified-g2');
            }
            if (text.textContent.includes('Optimized for real-time and AI workloads')) {
                text.closest('section').classList.add('iv-optimized-section');
            }
            if (text.textContent.includes('G2 Reports')) {
                text.closest('section').classList.add('iv-g2-report-section');
            }
        });

        const contactSales = document.querySelector('#Contact-Sales');
        const ivVerifiedG2 = document.querySelector('.iv-verified-g2');
        if (contactSales && ivVerifiedG2) {
            ivVerifiedG2.after(contactSales);
        }

        const switchKxstarted = document.querySelector('.iv-switch-kx-section .rich-content a.button.primary.pill');
        const switchKxUltimate = document.querySelector('.iv-switch-kx-section .rich-content a.button.primary.outline');

        if (switchKxstarted && switchKxUltimate) {
            switchKxstarted.textContent = 'Get Started';
            switchKxUltimate.textContent = 'Ultimate Guide to Time Series DB';
        }

        const ivTableArrows = `
            <div class="iv-table-arrows">
                <button class="iv-prev-arrow">   
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M20 12H4M10 6L4 12L10 18" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <div class="count"></div>
                <button class="iv-next-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M4 12H20M14 6L20 12L14 18" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>`;

        const arrowTable = document.querySelectorAll('.tabbed-content-block .table-wrapper');
        if (arrowTable) {
            arrowTable.forEach((tableBox) => {
                tableBox.insertAdjacentHTML('afterend', ivTableArrows);
            });
        }

        function initTableSlider() {
            const isMobile = window.innerWidth <= 800;

            document.querySelectorAll('.kx-bar-graphs').forEach((table, tableIndex) => {
                const rows = Array.from(table.querySelectorAll('tr'));
                const totalColumns = rows[0].children.length;
                let currentIndex = 0;

                const arrowsContainer = document.querySelectorAll('.iv-table-arrows')[tableIndex];
                if (!arrowsContainer) return;

                const prevBtn = arrowsContainer.querySelector('.iv-prev-arrow');
                const nextBtn = arrowsContainer.querySelector('.iv-next-arrow');
                const countContainer = arrowsContainer.querySelector('.count');

                const prevClone = prevBtn.cloneNode(true);
                const nextClone = nextBtn.cloneNode(true);
                arrowsContainer.replaceChild(prevClone, prevBtn);
                arrowsContainer.replaceChild(nextClone, nextBtn);

                if (!isMobile) {
                    rows.forEach(row => {
                        Array.from(row.children).forEach(cell => {
                            cell.style.display = 'table-cell';
                        });
                    });
                    prevClone.disabled = false;
                    nextClone.disabled = false;
                    if (countContainer) countContainer.textContent = '';
                    return;
                }

                function updateView() {
                    rows.forEach(row => {
                        Array.from(row.children).forEach((cell, index) => {
                            cell.style.display = index === currentIndex ? 'table-cell' : 'none';
                        });
                    });

                    if (countContainer) {
                        countContainer.textContent = `${currentIndex + 1} of ${totalColumns}`;
                    }

                    prevClone.disabled = currentIndex === 0;
                    nextClone.disabled = currentIndex === totalColumns - 1;
                }

                prevClone.addEventListener('click', () => {
                    if (currentIndex > 0) {
                        currentIndex--;
                        updateView();
                    }
                });

                nextClone.addEventListener('click', () => {
                    if (currentIndex < totalColumns - 1) {
                        currentIndex++;
                        updateView();
                    }
                });

                let startX = 0;
                let isDragging = false;
                const dragThreshold = 30; 
 
                table.addEventListener('touchstart', (e) => {
                    startX = e.touches[0].clientX;
                    isDragging = true;
                });

                table.addEventListener('touchmove', (e) => {
                    if (!isDragging) return;
                    const currentX = e.touches[0].clientX;
                    const diffX = currentX - startX;
                });

                table.addEventListener('touchend', (e) => {
                    if (!isDragging) return;
                    isDragging = false;
                    const endX = e.changedTouches[0].clientX;
                    const diffX = endX - startX;

                    if (Math.abs(diffX) > dragThreshold) {
                        if (diffX > 0 && currentIndex > 0) {
                            currentIndex--;
                            updateView();
                        } else if (diffX < 0 && currentIndex < totalColumns - 1) {
                            currentIndex++;
                            updateView();
                        }
                    }
                });
 
                let mouseDown = false;
                table.addEventListener('mousedown', (e) => {
                    startX = e.clientX;
                    mouseDown = true;
                });

                table.addEventListener('mousemove', (e) => {
                    if (!mouseDown) return;
                });

                table.addEventListener('mouseup', (e) => {
                    if (!mouseDown) return;
                    mouseDown = false;
                    const endX = e.clientX;
                    const diffX = endX - startX;

                    if (Math.abs(diffX) > dragThreshold) {
                        if (diffX > 0 && currentIndex > 0) {
                            currentIndex--;
                            updateView();
                        } else if (diffX < 0 && currentIndex < totalColumns - 1) {
                            currentIndex++;
                            updateView();
                        }
                    }
                });

                updateView();
            });
        }

        window.onload = initTableSlider;
        window.addEventListener('resize', initTableSlider);

        let wasMobile = window.innerWidth <= 800;

        window.addEventListener('resize', () => {
            const isNowDesktop = window.innerWidth > 800;
            if (wasMobile && isNowDesktop) {
                location.reload();
            }
            wasMobile = window.innerWidth <= 800;
        });

        const headerLogo  = document.querySelector('header .navigation .logo a');
        if (headerLogo) {
            headerLogo.setAttribute('href', 'javascript:;');
        }

        const navTabs = document.querySelector('section.tabbed-content-block ul.nav-tabs');
        if (navTabs && navTabs.children.length > 0) { 
            navTabs.appendChild(navTabs.firstElementChild);
 
            const tabButtons = navTabs.querySelectorAll('button.tab');
            tabButtons.forEach((btn, index) => {
                btn.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
            });
        }


    }
}

let checkCondition = setInterval(function () {
    if (document.body) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
