function loadTestCode() {
    // Body class
    const tag = 'gastric-balloons';
    if (!document.querySelector('body').classList.contains(tag)) {
        
        // Added class in body
        document.querySelector('body').classList.add(tag);
        // Cleaar currunt content
        var container = document.querySelector('#lp-pom-text-10');
        container.innerHTML = '';
        // Added bullet points
        var ul = document.createElement('ul');
        ul.classList.add('balloons-list');
        var options = ["Non-invasive", "Fully reversible", "No incisions or scars"];
        options.forEach(function(optionText) {
            var li = document.createElement('li');
            li.textContent = optionText;
            ul.appendChild(li);
        });
        container.appendChild(ul);
        // Add Sub content
        var p = document.createElement('p');
        p.textContent = "Just a highly effective 15-minute procedure that involves placing a small silicone balloon in your stomach so you can feel full quicker.";
        p.classList.add('sub-text');
        container.appendChild(p);
        // CTA text
        var button = document.querySelector('#lp-pom-button-193 span');
        button.textContent = "Request a Free Consultation";
    }
}
loadTestCode();