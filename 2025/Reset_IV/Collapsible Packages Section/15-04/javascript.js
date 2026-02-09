function loadTestCode() {
    if (!document.body.classList.contains('iv-packages')) {
        document.body.classList.add('iv-packages');

        const packages = document.querySelectorAll('.package');

        if(packages){
            packages.forEach(pkg => {
                const header = pkg.querySelector('.package__header');
                
                const headerIcon = header.querySelector('.package-icon');
                const packageTitle = header.querySelector('.package-title');
                const packageCategory = header.querySelector('.package-category');
                
                const headerContain = document.createElement('div');
                headerContain.className = 'package__contain';
                
                if (headerIcon) headerContain.appendChild(headerIcon);
                if (packageTitle) headerContain.appendChild(packageTitle);
                if (packageCategory) headerContain.appendChild(packageCategory);
                
                header.appendChild(headerContain);
                
                const newSection = pkg.querySelector('.package__contain');
                const headerCategory = document.createElement('div');
                headerCategory.className = 'package__category';
    
                if (packageCategory) headerCategory.appendChild(packageCategory);
    
                newSection.appendChild(headerCategory);
                // Create toggle button with span
                const toggleBtn = document.createElement('button');
                toggleBtn.className = 'toggle-details';
    
                const toggleText = document.createElement('span');
                toggleText.textContent = 'View Details';
                toggleText.className = 'toggle-details__text';
    
                toggleBtn.appendChild(toggleText);
    
                const body = pkg.querySelector('.package__body');
                const footer = pkg.querySelector('.package__footer');
                const price = pkg.querySelector('.package__price');
    
                const collapsible = document.createElement('div');
                collapsible.className = 'package__collapsible';
                collapsible.style.display = 'none';
    
                if (body) collapsible.appendChild(body);
                if (footer) collapsible.appendChild(footer);
                if (price) collapsible.appendChild(price);
    
                headerCategory.appendChild(toggleBtn);
                pkg.appendChild(collapsible);
    
                toggleBtn.addEventListener('click', () => {
                    const isVisible = collapsible.style.display === 'block';
                    collapsible.style.display = isVisible ? 'none' : 'block';
                    toggleText.textContent = isVisible ? 'View Details' : 'Hide Details';
                });
            });
        }

    }
}

// Check condition and initialize the code
const checkCondition = setInterval(() => {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
