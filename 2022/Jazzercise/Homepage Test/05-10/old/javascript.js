function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('test_jazzercise')) {
        bodyEle.classList.add('test_jazzercise');
        
        // Put your test code here
        

       //faq section
       $('.test_jazzercise .jumbotron').after(`<div class="faq_section text-center">\ 
       <div class="container">\          
           <h2 class="class_title">Frequently Asked Questions</h2>            
           <ul class="accordion_wrapper">                
               <li>                    
                   <a href="#faq1" class="faq_title collapsed" data-toggle="collapse">What should I wear to class?</a>                    
                   <div id="faq1" class="faq_content collapse">Wear what’s comfortable for you – fitted, flexible fabrics are always a solid start. Supportive cross-trainers are great, but any athletic shoe will work.</div>                
               </li>                
               <li>                    
                   <a href="#faq2" class="faq_title collapsed" data-toggle="collapse">What should I bring to class?</a>                    
                   <div id="faq2" class="faq_content collapse">Your Jazzercise studio is likely to have most equipment needed for the class available, but a mat or towel can be helpful. And of course, water!</div>                
               </li>                
               <li>                    
                   <a href="#faq3" class="faq_title collapsed" data-toggle="collapse">How do I find a location?</a>                    
                   <div id="faq3" class="faq_content collapse">Please visit <a href="/find-a-location">jazzercise.com/find-a-location</a> and type in your zip code.</div>                
               </li>                
               <li>                    
                   <a href="#faq4" class="faq_title collapsed" data-toggle="collapse">Is there a class for beginners?</a>                    
                   <div id="faq4" class="faq_content collapse">Each class format is designed to cater to people of all ages and all fitness levels. If you’re nervous to jump right in, talk to your instructor about modifications or LO classes.</div>                
               </li>                
               <li>                    
                   <a href="#faq5" class="faq_title collapsed" data-toggle="collapse">What if I’m not physically fit?</a>                    
                   <div id="faq5" class="faq_content collapse">That’s okay! Our community is made up of all different people with different abilities and fitness levels. You are welcome here.</div>                
               </li>                
               <li>                    
                   <a href="#faq6" class="faq_title collapsed" data-toggle="collapse">Do I need dance experience?</a>                    
                   <div id="faq6" class="faq_content collapse">No dance experience is required. Around here, we like to call mistakes “accidental solos” and welcome everyone. After a few classes you’ll get the hang of it and start dancing like a seasoned Jazzercise member - and burn more calories in the process!</div>                
               </li>                
               <li>                    
                   <a href="#faq7" class="faq_title collapsed" data-toggle="collapse">What is Jazzercise?</a>                    
                   <div id="faq7" class="faq_content collapse">Jazzercise is the original dance party workout. Our program blends dance with Pilates, yoga, kickboxing and strength training for one 55-minute session that can burn up to 800 calories. Each class format is designed to cater to people of all ages and all fitness levels.</div>                
               </li>                
               <li>                    
                   <a href="#faq8" class="faq_title collapsed" data-toggle="collapse">What kind of music is played in class?</a>                    
                   <div id="faq8" class="faq_content collapse">Music is the bass-line of everything we do. Our in-person playlists showcase a wide range of musical genres including your favorite Top 40 tunes. </div>                
               </li>            
           </ul>        
         </div>    
        </div>`);

        // FEEL AMAZING. AND LOOK EVEN BETTER.
        $(".test_jazzercise div#content-wrapper .bg-white .container").each(function (index) {
            $(this).addClass("section-" + index);
        }); 
        //information box
        $('.test_jazzercise .faq_section').before(`<div class="information">
          <div class="container ">
            <div class="inner-information">
              <div class="info-text">
                <h5>In Studio</h5>
                <p>Nothing beats the energy of an in-person dance party! Get the classic Jazzercise experience with certified instructors and a warm, welcoming community.</p>
                <div class="info-btn"><a href="https://www.jazzercise.com/Classes/start-here">Finda Studio Near You</a></div>
              </div>
              <div class="img-box">
                <div class="img-inn-box"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1657778658/jazzercise/Jazzercise_Classes_Page/job.jpg" alt="In Studio"></div>
              </div>
            </div>
            <div class="inner-information reverse">
              <div class="info-text">
                <h5>On Demand</h5>
                <p>On demand classes are available 24/7 to help you get fit anytime, anywhere. These 10- to 50-minutes classes are designed to get max results on your schedule.</p>
                <div class="info-btn"><a href="https://www.jazzercise.com/Classes/start-here">Get a 2-Week Free Trial</a></div>
              </div>
              <div class="img-box">
                <div class="img-inn-box"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1664873542/jazzercise/Homepage_Test/OnDemand_v2.jpg" alt="On Demand"></div>
              </div>
            </div>
            <div class="inner-information">
              <div class="info-text">
                <h5>Live Stream</h5>
                <p>Join our FitPros LIVE during our high-energy livestream classes. Dance to in-class music from your living room with the community feeling you’ll love.</p>
                <div class="info-btn"><a href="https://www.jazzercise.com/Classes/start-here">Dance With Us Live</a></div>
              </div>
              <div class="img-box">
                <div class="img-inn-box"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1664873539/jazzercise/Homepage_Test/Livestream_Image.jpg" alt="Live Stream"></div>
              </div>
            </div>
          </div>
        </div>`);
        //hero section
        $('.test_jazzercise #ls_solutions_video_2').attr('src', "https://res.cloudinary.com/ignite-visibility/video/upload/v1664873587/jazzercise/Homepage_Test/CRO_HomepageTest_Video_Homepageoriginalnooverlay_1920x1080.mp4");
        $('.test_jazzercise .vide-details-txt h3').text('Crave Your Workout');
        $('.test_jazzercise .vide-details-txt p').text('The most fun and effective way to let loose and get results. Join the dance party today!');
        $('.test_jazzercise .vide-details-txt a').text('Fine a Studio');
        $(".test_jazzercise div#content-wrapper #showImage").removeAttr("style") 
        //hero mobile
        $('.test_jazzercise .ls_home_hero .masthead_video_wrapper').after(`<div class="hero_location"><h3>Find a Location</h3><img class="map_icon" src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/jazzercise/map-icon.png" alt="map"><div class="input-group footerFindClass ">
        <label for="p_lt_ctl10_ucFindClassFooter_userControlElem_txtLocation" id="lblflocationnearyou" class="sr-only">find a class near you</label>
        <input name="p$lt$ctl10$ucFindClassFooter$userControlElem$txtLocation" id="p_lt_ctl10_ucFindClassFooter_userControlElem_txtLocation" class="form-control placeholder-fix fClassFoot" type="search" autocomplete="off" placeholder="Enter City, State, or Zip">
         <div class="pac-container" data-placeidelement="FooterHiddenPlaceId" style="display: none;"></div>
        <span class="input-group-btn footerFind  ">
            <label for="p_lt_ctl10_ucFindClassFooter_userControlElem_ddlDistance" id="p_lt_ctl09_ucFindClassFooter_userControlElem_ddlDistance_ddlSelectDistance" class="sr-only">select distance</label>
            <select name="p$lt$ctl10$ucFindClassFooter$userControlElem$ddlDistance" id="p_lt_ctl10_ucFindClassFooter_userControlElem_ddlDistance" class="fdistanceSelect selectpicker btnFindMiles" style="display: none;">
	          <option value="10">10 miles</option>
	           <option selected="selected" value="25">25 miles</option>
	           <option value="50">50 miles</option>
             </select>
           </span>
           <span class="input-group-btn footerFind sep">
            <span id="p_lt_ctl10_ucFindClassFooter_userControlElem_lblSubmitFindClass" class="sr-only" for="btnSubmitFindClass">Find a location button</span>
            <button onclick="__doPostBack('p$lt$ctl10$ucFindClassFooter$userControlElem$btnSubmitFindClass','')" id="p_lt_ctl10_ucFindClassFooter_userControlElem_btnSubmitFindClass" class="btn btn-default btnFindClass btnFclassFoot" type="button" role="button" aria-label="Find a location button">
                <span class=""></span>
            </button>
        </span>
    </div></div>`);
        

    }
}

loadTestCode();
