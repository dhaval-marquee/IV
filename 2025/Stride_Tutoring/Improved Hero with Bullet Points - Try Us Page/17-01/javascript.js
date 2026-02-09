function loadTestCode() {
  if (!jQuery('body').hasClass('hero_iv')) {
      jQuery('body').addClass('hero_iv');

      // Add the class
      jQuery('.main-content .first-section').addClass('hero-sec').find('.wpb_wrapper').addClass('hero-content');
      jQuery('.hero_iv .main-content .hero-sec .dark .vc_col-sm-6').addClass('col-12');

      // Update the h1 content
      jQuery('.hero_iv .main-content .hero-sec .nectar-highlighted-text h1').html(`Start Your Child’s Path to <em class="animated hero-desktop">Academic Excellence<svg class="nectar-scribble basic-underline" viewBox="-400 -55 730 60" preserveAspectRatio="none"><path style="animation-duration: 1.8s;" d="m -383.25 -6 c 55.25 -22 130.75 -33.5 293.25 -38 c 54.5 -0.5 195 -2.5 401 15" stroke="#fd762b" pathLength="1" stroke-width="20" fill="none"></path></svg></em>
        
        <em class="animated hero-mobile">Academic <svg class="nectar-scribble basic-underline" viewBox="-400 -55 730 60" preserveAspectRatio="none"><path style="animation-duration: 1.8s;" d="m -383.25 -6 c 55.25 -22 130.75 -33.5 293.25 -38 c 54.5 -0.5 195 -2.5 401 15" stroke="#fd762b" pathLength="1" stroke-width="20" fill="none"></path></svg></em>
        <em class="animated hero-mobile">Excellence<svg class="nectar-scribble basic-underline" viewBox="-400 -55 730 60" preserveAspectRatio="none"><path style="animation-duration: 1.8s;" d="m -383.25 -6 c 55.25 -22 130.75 -33.5 293.25 -38 c 54.5 -0.5 195 -2.5 401 15" stroke="#fd762b" pathLength="1" stroke-width="20" fill="none"></path></svg></em>
      Today`);
     
      // Update the h2 content
      jQuery(".hero_iv .main-content .hero-sec .nectar-highlighted-text h2").html(`Start Your Child’s Path to <em class="animated hero-desktop">Academic Excellence <svg class="nectar-scribble basic-underline" viewBox="-400 -55 730 60" preserveAspectRatio="none"><path style="animation-duration: 1.8s;" d="m -383.25 -6 c 55.25 -22 130.75 -33.5 293.25 -38 c 54.5 -0.5 195 -2.5 401 15" stroke="#fd762b" pathLength="1" stroke-width="20" fill="none"></path></svg></em>
      
        <em class="animated hero-mobile">Academic <svg class="nectar-scribble basic-underline" viewBox="-400 -55 730 60" preserveAspectRatio="none"><path style="animation-duration: 1.8s;" d="m -383.25 -6 c 55.25 -22 130.75 -33.5 293.25 -38 c 54.5 -0.5 195 -2.5 401 15" stroke="#fd762b" pathLength="1" stroke-width="20" fill="none"></path></svg></em>
        <em class="animated hero-mobile">Excellence<svg class="nectar-scribble basic-underline" viewBox="-400 -55 730 60" preserveAspectRatio="none"><path style="animation-duration: 1.8s;" d="m -383.25 -6 c 55.25 -22 130.75 -33.5 293.25 -38 c 54.5 -0.5 195 -2.5 401 15" stroke="#fd762b" pathLength="1" stroke-width="20" fill="none"></path></svg></em>
      Today`);
      
      // Update the paragraph content
      jQuery('.hero-sec .nectar-responsive-text p').text('Discover a learning experience tailored to your child’s needs, with access to top-tier tutors from the comfort of home.');

      // Add a new div with ul li after .nectar-responsive-text
      jQuery('.hero-sec .nectar-responsive-text').after(`
          <div class="additional-info">
              <ul>
                  <li>Tailored lessons for your child’s learning pace and style.</li>
                  <li>Boost grades and knowledge with structured support.</li>
                  <li>Work with certified, vetted teachers for quality and safety.</li>
              </ul>
          </div>`);
    }
}

var checkCondition = setInterval(function() {
  if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
      clearInterval(checkCondition);
      loadTestCode();
  }
}, 100);