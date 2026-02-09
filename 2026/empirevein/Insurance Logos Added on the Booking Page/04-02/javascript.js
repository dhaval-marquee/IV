function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-insurance-logos')) {
        document.querySelector('body').classList.add('iv-insurance-logos');

        const insuranceLogos = [
            {
                src: "https://empirevein.com/wp-content/uploads/Picture1.png",
                width: 509,
                height: 99
            },
            {
                src: "https://empirevein.com/wp-content/uploads/Picture12.png",
                width: 326,
                height: 155
            },
            {
                src: "https://empirevein.com/wp-content/uploads/Picture4.jpg",
                width: 299,
                height: 168
            },
            {
                src: "https://empirevein.com/wp-content/uploads/alphacaremedicalgroup_logo.jpg",
                width: 200,
                height: 62
            },
            {
                src: "https://empirevein.com/wp-content/uploads/cigna-logo.jpg",
                width: 200,
                height: 87
            },
            {
                src: "https://empirevein.com/wp-content/uploads/lasallemedicalgroup_logo.jpg",
                width: 200,
                height: 59
            },
            {
                src: "https://empirevein.com/wp-content/uploads/Picture23.png",
                width: 331,
                height: 152
            },
            {
                src: "https://empirevein.com/wp-content/uploads/Picture24.png",
                width: 317,
                height: 159
            },
            {
                src: "https://empirevein.com/wp-content/uploads/Picture25.png",
                width: 358,
                height: 141
            }
        ];

        const logoListHTML = insuranceLogos
        .map(logo => `<li><img  src="${logo.src}"  width="${logo.width}"  height="${logo.height}" loading="lazy" decoding="async" fetchpriority="low" alt=""></li>`).join("");



        const titalInsurance = `
            <h2 class="iv-title-insurance">We Accept Most Insurance Plans</h2>
            <p class="iv-subtitle-insurance">Get the care you need without worrying about unexpected costs.</p>

            <div class="iv-logos-insurance">
                <ul>
                    ${logoListHTML}
                </ul>
            </div>

        <p class="iv-body-text">and many more!</p>`;

        document.querySelector('.iv-insurance-logos .kt-inside-inner-col .wp-block-list + p').insertAdjacentHTML('afterend', titalInsurance);


    }
}

loadTestCode();