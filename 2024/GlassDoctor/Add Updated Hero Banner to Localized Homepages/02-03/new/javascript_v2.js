function loadTestCode() {
    const tag = 'homeSubPage';
    if (!document.querySelector('body').classList.contains(tag)) {
        document.querySelector('body').classList.add(tag);

        var pageHeading = document.querySelector(`.${tag} h1`).innerText;

        const heroSectionCode = `<div class="hero-section">
            <div class="hero-container">
                <div class="content-box">
                    <h1>${pageHeading}</h1>
                    <a href="javascript:;" class="btn btn-secondary hero-btn">Request Job Estimate</a>
                </div>
                <picture class="hero-bg" data-picture-mapping="slideshow" class="picture-placeholder picture-nolazyload img-responsive picture-noplaceholder">
                    <source srcset="https://glassdoctor.com/sites/default/files/mdg_hero_image_neighborly_truck_767.webp" media="(max-width: 767px)"></source>
                    <source srcset="https://glassdoctor.com/sites/default/files/styles/enterprise_slideshow_medium/public/mdg_hero_image_neighborly_truck.webp?itok=gw6htv3F 1x" media="(min-width: 768px) and (max-width: 991px)"></source>
                    <source srcset="https://glassdoctor.com/sites/default/files/styles/enterprise_slideshow_large/public/mdg_hero_image_neighborly_truck.webp?itok=g0qnO4nD 1x" media="(min-width: 992px) and (max-width: 1199px)"></source>
                    <source srcset="https://glassdoctor.com/sites/default/files/styles/enterprise_slideshow_full/public/mdg_hero_image_neighborly_truck.webp?itok=yEM_jkZc 1x" media="(min-width: 1200px)"></source>
                    <img data-picture-mapping="slideshow" class="picture-placeholder picture-nolazyload img-responsive picture-noplaceholder" srcset="https://glassdoctor.com/sites/default/files/styles/enterprise_slideshow_full/public/mdg_hero_image_neighborly_truck.webp?itok=yEM_jkZc 2160w" alt="Glass Doctor Tech standing in front of company truck. Glass Doctor A Neighborly Company." title="">
                </picture>
            </div>
        </div>`

        function heroSection() {
            if(!document.querySelector('.hero-section')){
                document.querySelector(`.${tag} #header-navigation`).insertAdjacentHTML('afterend', heroSectionCode);
            }
            if(!document.querySelector(`.${tag}-lcp-img`)){
                document.querySelector(`.${tag} .picture-container picture.picture-lcp`).parentElement.classList.add(`${tag}-lcp-img`)
            }

            document.querySelector(`.hero-btn`).addEventListener('click', function(){
                document.querySelector('.region-sidebar-second .entity-bean a.btn.btn-secondary').click();
            })
        }
        if(!location.href.includes('?fid')){
            heroSection();
        }
    }
}
loadTestCode();