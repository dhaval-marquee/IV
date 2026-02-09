function loadTestCode() {
    if (!document.querySelector('body').classList.contains('threeStepsIV')) {
        document.querySelector('body').classList.add('threeStepsIV');
        
        // Put your test code here
        const htmlToInsert = `
            <div class="threeStepsSection">
                <h5>Get a Quote in 3 Easy Steps!</h5>
                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1722577778/mosquito-authority/three-steps/mosquito-authority-3-step-new.png" alt="Steps">
                <ul class="threeSteps">
                    <li>Find the location closest to you</li>
                    <li>Click "View Location" on your preferred location</li>
                    <li>Fill out the short form on that location page to get a free quote</li>
                </ul>
            </div>
        `;

        if (document.querySelector('.threeStepsIV #page')) {
            document.querySelector('.threeStepsIV #page').insertAdjacentHTML('afterend', htmlToInsert);
        }

        var getForm = setInterval(() => {
            
            if(document.querySelectorAll('.threeStepsIV .sb-search-form > form').length > 0) {
                clearInterval(getForm);
                document.querySelector('.threeStepsIV .sb-search-form > form').insertAdjacentHTML('beforebegin', htmlToInsert);
            }
        }, 100);

    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0 && document.querySelectorAll('#page').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);