function loadTestCode() {
    if (!$('body').hasClass('comparison_iv')) {
        $('body').addClass('comparison_iv');

        $('#productPageAccordion').parent().after(`<div class="comparison-section">
            <div class="container">
                <h2 class="section-title">Which protein IS RIGHT FOR ME?</h2>
                <h4 class="subtitle">Use our comparison chart to help find the right fit.</h4>
                <div class="comparison-table">
                    <table cellpadding="0" cellspacing="0" id="comparisonTable">
                        <thead>
                            <tr class="product-image">
                                <th></th>
                                <th>
                                    <h3>This item</h3>
                                    <a href="https://www.amway.com/en_US/Nutrilite%E2%84%A2-Organics-All-in-One-Meal-Powder-%E2%80%93-Berry-p-318672?backRef=aHR0cHM6Ly93d3cuYW13YXkuY29tL2VuX1VTL3NlYXJjaC8/dGV4dD1udXRyaWxpdGUrb3JnYW5pY3MmaW5pdGlhbFBhZ2U9MQ==">
                                        <img src="/medias/318672-en-US-690px-01?context=bWFzdGVyfGltYWdlc3wxMzU0MzN8aW1hZ2UvcG5nfHN5cy1tYXN0ZXIvaW1hZ2VzL2gyYS9oNmQvOTc0MjY0NzAwMTExOC8zMTg2NzItZW4tVVMtNjkwcHgtMDF8Nzk5ZGMyZjM5ZDg1ZGY1MTg0ZDFmYzM4ZTAxZjNjM2U5MTBhYTc1YWNiM2FjMjQ2OGQ5MzEzMTNlYTNjMWFjYw" alt="Product 1"/>
                                    </a>
                                </th>
                                <th>
                                    <h3>This item</h3>
                                    <a href="https://www.amway.com/en_US/Nutrilite%E2%84%A2-Organics-Plant-Protein-Powder-%E2%80%93-Unflavored-%28125925%29-p-125925">
                                        <img src="/medias/125925-en-US-690px-01?context=bWFzdGVyfGltYWdlc3w2MTQwNTJ8aW1hZ2UvcG5nfHN5cy1tYXN0ZXIvaW1hZ2VzL2g1Zi9oZTAvOTY0MzI1MTA3MzA1NC8xMjU5MjUtZW4tVVMtNjkwcHgtMDF8YzViYWRjYjliYTBhNDg5YjYzMGQxMDM2ZWI4NjQ2YzYzOTFmMGU1Y2I5MmFkNjIzYTNlYjEzNDJmYWQ5NzZjYg" alt="Product 2"/>
                                    </a>
                                </th>
                                <th>
                                    <h3>This item</h3>
                                    <a href="https://www.amway.com/en_US/XS%E2%84%A2-Protein-Pods-%E2%80%93-Vanilla-p-300855?backRef=aHR0cHM6Ly93d3cuYW13YXkuY29tL2VuX1VTL3NlYXJjaC8/dGV4dD14cytwcm90ZWluK3BvZHMmaW5pdGlhbFBhZ2U9MQ==">
                                        <img src="/medias/300855-en-US-690px-01?context=bWFzdGVyfGltYWdlc3w4NjA1OXxpbWFnZS9wbmd8aW1hZ2VzL2g4Yy9oZDEvOTM1NTM4ODI4OTA1NC5wbmd8YjAwOTlhMjZlMDg4YjhhNmMwODM1NDNkZjlkMjM5MGUxZWU3NjgyNzFiN2ZiYzEzOGFkYThkN2E1MTE3ZTA5MQ" alt="Product 3"/>
                                    </a>
                                </th>
                            </tr>
                            <tr class="product-title">
                                <th></th>
                                <th>Nutrilite Organics All-in-One Meal Powders</th>
                                <th>Nutrilite Organics Plant Protein Powder</th>
                                <th>XS Protein Pods</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="label"><strong>Benefits</strong></td>
                                <td>Provides nutrients needed for a balanced meal to support a healthy lifestyle*</td>
                                <td>Supports general wellness*</td>
                                <td>Helps build lean muscle*</td>
                            </tr>
                            <tr>
                                <td class="label"><strong>Grams of Protein</strong></td>
                                <td>20 g</td>
                                <td>21 g</td>
                                <td>20 g</td>
                            </tr>
                            <tr>
                                <td class="label"><strong>Protein Source</strong></td>
                                <td>Peas & brown rice</td>
                                <td>Peas, brown rice & chia seeds</td>
                                <td>Whey protein isolate</td>
                            </tr>
                            <tr>
                                <td class="label"><strong>Complete Protein A Protein that contains all essential amino acids in a sufficient quantity that the body requires daily.</strong></td>
                                <td>Yes</td>
                                <td>No, but all nine essential amino acids are present</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td class="label"><strong>Vitamins & Minerals</strong></td>
                                <td>25 vitamins & minerals</td>
                                <td>No</td>
                                <td>3 minerals</td>
                            </tr>
                            <tr>
                                <td class="label"><strong>Grams of Fiber</strong></td>
                                <td>6 g</td>
                                <td>0 g</td>
                                <td>0 g</td>
                            </tr>
                            <tr>
                                <td class="label"><strong>Carbohydrates</strong></td>
                                <td>14 g<br>Green banana flour as the main source of Carbohydrate</td>
                                <td>4 g</td>
                                <td>&lt; 1 g</td>
                            </tr>
                            <tr>
                                <td class="label"><strong>Calories</strong></td>
                                <td>200</td>
                                <td>145</td>
                                <td>90</td>
                            </tr>
                            <tr>
                                <td class="label"><strong>Vegan</strong></td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td class="label"><strong>USDA Organic</strong></td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td class="label"><strong>Non-GMO</strong></td>
                                <td>Yes (Non-GMO Project Verified)</td>
                                <td>Yes (Non-GMO Project Verified)</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td class="label"><strong>Summary</strong></td>
                                <td>Best suited for customers looking to replace a healthy meal with a convenient, nutritionally complete option for on the go.*</td>
                                <td>Best suited for customers looking to increase their daily protein intake to support overall wellness.*</td>
                                <td>Best suited for customers looking to build lean muscle to support their fitness and exercise goals.*</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p class="note">*This statement has not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. †Does not contain genetically engineered ingredients.</p>
            </div>
        </div>`);

        var currentPage = window.location.href.split('?')[0].split('#')[0];

        if (
            currentPage === 'https://www.amway.com/en_US/Nutrilite%E2%84%A2-Organics-All-in-One-Meal-Powder-%E2%80%93-Berry-p-318672' || 
            currentPage === 'https://www.amway.com/en_US/Nutrilite%E2%84%A2-Organics-All-in-One-Meal-Powder-%E2%80%93-Vanilla-p-318671' || 
            currentPage === 'https://www.amway.com/en_US/Nutrilite%E2%84%A2-Organics-All-in-One-Meal-Powder-%E2%80%93-Chocolate-p-318670'
        ) {
            console.log('Product 1');
            document.querySelector('#comparisonTable').classList.add('product-1');
        } else if (
            currentPage === 'https://www.amway.com/en_US/Nutrilite%E2%84%A2-Organics-Plant-Protein-Powder-%E2%80%93-Unflavored-%28125925%29-p-125925' || 
            currentPage === 'https://www.amway.com/en_US/Nutrilite%E2%84%A2-Organics-Plant-Protein-Powder-%E2%80%93-Vanilla-p-125923' || 
            currentPage === 'https://www.amway.com/en_US/Nutrilite%E2%84%A2-Organics-Plant-Protein-Powder-%E2%80%93-Chocolate-p-125921'
        ) {
            console.log('Product 2');
            document.querySelector('#comparisonTable').classList.add('product-2');
        } else if (
            currentPage === 'https://www.amway.com/en_US/XS%E2%84%A2-Protein-Pods-%E2%80%93-Chocolate-p-300856' || 
            currentPage === 'https://www.amway.com/en_US/XS%E2%84%A2-Protein-Pods-%E2%80%93-Vanilla-p-300855' || 
            currentPage === 'https://www.amway.com/en_US/Amway---XS%E2%84%A2-Protein-Pods-%E2%80%93-Strawberry-p-308599'
        ) {
            console.log('Product 3');
            document.querySelector('#comparisonTable').classList.add('product-3');
        }
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);