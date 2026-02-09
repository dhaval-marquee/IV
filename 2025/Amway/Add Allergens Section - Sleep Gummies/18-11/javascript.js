function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-allergensTab')) {
        document.querySelector('body').classList.add('iv-allergensTab');

        document.querySelector('#productPageAccordion .amw-accordion__panel:has(#ingredients)').insertAdjacentHTML('afterend',`<div class="panel amw-accordion__panel">
            <div class="amw-accordion__heading" id="allergens">
                <a class="amw-accordion__toggle-row collapsed" data-toggle="collapse" href="#allergensBody" aria-expanded="false"
                    aria-controls="allergensBody" role="link">
                    <span class="amw-accordion__toggle-col amw-accordion__icon" aria-hidden="true">
                        <span class="icon-document"></span>
                    </span>
                    <span class="amw-accordion__toggle-col amw-accordion__title">Allergens</span>
                    <span class="amw-accordion__toggle-col amw-accordion__icon amw-accordion__icon--toggle" aria-hidden="true">
                        <span class="amw-accordion__icon-noncollapsed icon-chevron-up-brand"></span>
                        <span class="amw-accordion__icon-collapsed icon-chevron-down-brand"></span>
                    </span>
                </a>
            </div>
            <div id="allergensBody" class="amw-accordion__collapse collapse" aria-labelledby="allergens" style="">
                <div>
                    <div class="amw-page-pdp__tab-allergens">
                        <ul class="d-flex flex-column flex-nmd-row amw-page-pdp__icon-container flex-wrap xss-mt-10 nmd-mt-5 xss-pl-0">
                            <li class="d-flex amw-page-pdp__icon-container-inner">
                                <img alt="" class="js-lozad"
                                    src="/medias/DairyFree.svg?context=bWFzdGVyfHJvb3R8NDU0N3xpbWFnZS9zdmcreG1sfGhiMi9oODYvODkxNDYyMTI2Nzk5OC5zdmd8MGFjOTcxODE4MmM3ODFlZjAwN2QxYzI1NDhhZTRkN2FhYWYzZjRjNTM1ZGZiZTBjMWZiNGFiMWZkY2I0NmE2Zg"
                                    height="60" data-loaded="true">
                                <span class="amw-page-pdp__icon-title">
                                    Dairy Free</span>
                            </li>
                            <li class="d-flex amw-page-pdp__icon-container-inner">
                                <img alt="" class="js-lozad"
                                    src="/medias/EggFree.svg?context=bWFzdGVyfHJvb3R8MjEyNHxpbWFnZS9zdmcreG1sfGgxZi9oZWQvODkxNDYyMTMzMzUzNC5zdmd8YjYwYmE5NTI0YzAxMDc2ZWU2NDE3NWI2ZDY0OTEyYTkzMzVmNWQ3MjllMGI2OGM2MWU0MzQxY2Y3ZTRjNThmYw"
                                    height="60" data-loaded="true">
                                <span class="amw-page-pdp__icon-title">
                                    Egg Free</span>
                            </li>
                            <li class="d-flex amw-page-pdp__icon-container-inner">
                                <img alt="" class="js-lozad"
                                    src="/medias/GlutenFree.svg?context=bWFzdGVyfHJvb3R8MzY3MXxpbWFnZS9zdmcreG1sfGgxYS9oYmIvODkxNDYyMTM5OTA3MC5zdmd8YmIwYzQ4Yzc1OGQ4MjZkNWNhYjAwOGM2N2Q4OGFhODdlMzJkNTBhMWRiZDg2NDk2YWMzMjA2ODg1ZmYxZGJlZg"
                                    height="60" data-loaded="true">
                                <span class="amw-page-pdp__icon-title">
                                    Gluten Free</span>
                            </li>
                            <li class="d-flex amw-page-pdp__icon-container-inner">
                                <img alt="" class="js-lozad"
                                    src="/medias/HFCSFree.svg?context=bWFzdGVyfHJvb3R8MzI0MHxpbWFnZS9zdmcreG1sfGgyOS9oODEvODkxNDYyMTQ2NDYwNi5zdmd8MTJjM2ZiMjJkNzNjMzE5OTU3ZDc2M2IxZTRkOGFmYTcyYjk5ZjQ0MTRhMmM1MWY5YWI2YTBjZGYwYWY2NzE1Nw"
                                    height="60" data-loaded="true">
                                <span class="amw-page-pdp__icon-title">
                                    High Fructose Corn Syrup Free</span>
                            </li>
                            <li class="d-flex amw-page-pdp__icon-container-inner">
                                <img alt="" class="js-lozad"
                                    src="/medias/NoArtificials.svg?context=bWFzdGVyfHJvb3R8MjI4NnxpbWFnZS9zdmcreG1sfGhlOS9oYWQvODkxNDYyMTY5Mzk4Mi5zdmd8MzBiMDg0MmQwYTg4YTRkZmRhNjZiMjZmYjY4ZjQ1YjhhYzhkZWFmZDgyOTBiZGE1MjM4ZjdhNzY3OGYxNTY5Nw"
                                    height="60" data-loaded="true">
                                <span class="amw-page-pdp__icon-title">
                                    No Artificial Flavors, Colors, Preservatives</span>
                            </li>
                            <li class="d-flex amw-page-pdp__icon-container-inner">
                                <img alt="" class="js-lozad"
                                    src="/medias/PeanutFree.svg?context=bWFzdGVyfHJvb3R8Mjg0OXxpbWFnZS9zdmcreG1sfGgyMy9oYmUvODkxNDYyMTg1NzgyMi5zdmd8ZTZkNTdlOWUwNGIwMThkNjcwNTUwYTE0NDc2ZWYyZTgxOWNhMDA0NDVhN2Q1MzhlODgwNjQxODY3ZTlkMzZlMA"
                                    height="60" data-loaded="true">
                                <span class="amw-page-pdp__icon-title">
                                    Peanut Free</span>
                            </li>
                            <li class="d-flex amw-page-pdp__icon-container-inner">
                                <img alt="" class="js-lozad"
                                    src="/medias/ShellfishFree.svg?context=bWFzdGVyfHJvb3R8Mzg3MHxpbWFnZS9zdmcreG1sfGhiMi9oNmIvODkxNDYyMTkyMzM1OC5zdmd8OWJjNjNiYjkzYzM4ZDFjMWZmZmMxYTVmNWE0Y2JmM2ViN2VjZGQ2MWFiZDk5YTdiZTBhNWQ4YjdiZWNhNDQ3Yw"
                                    height="60" data-loaded="true">
                                <span class="amw-page-pdp__icon-title">
                                    Shellfish Free</span>
                            </li>
                            <li class="d-flex amw-page-pdp__icon-container-inner">
                                <img alt="" class="js-lozad"
                                    src="/medias/SoyFree.svg?context=bWFzdGVyfHJvb3R8NDAzOHxpbWFnZS9zdmcreG1sfGgxNy9oNzQvODkxNDYyMTk4ODg5NC5zdmd8NzI0OGFjOGMyMTU2MTEzZDE1MDI4MGNlMTkzNmU1OGQ3NzZmZGMzOWQ3ODVjMGZkNzdhMjRlZDJkZjlmMTgwOA"
                                    height="60" data-loaded="true">
                                <span class="amw-page-pdp__icon-title">
                                    Soy Free</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>`);
    }
}

// Run script when body exists
var checkCondition = setInterval(function () {
    if (document.querySelector('body')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 500);