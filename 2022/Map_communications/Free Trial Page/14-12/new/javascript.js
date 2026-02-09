function loadCode() {
  if (!$('body').hasClass('trialPage_test')) {
      $('body').addClass('trialPage_test');
     
   $('.trialPage_test .header h4').before(`<div class="phone_icon">
      <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1670420789/mapcommunications/Free_Trial_Page/phone_icon.png" alt="phone_icon">
    </div>`);   
  $('.trialPage_test .top-wrapper .wrap').html(`<div class="left_part">
    <h1>Let Us Answer Your Calls FREE for 7 Days!</h1>
    <p class="only_des">Stay connected to every customer and get the most out of every phone call with our risk free trial</p>
    <p class="only_mob">Get the most out of every phone call with our risk free trial</p>
      <ul>
          <li>No Credit Card Required</li>
          <li>24/7 Call Answering</li>
          <li>100% US Based</li>
      </ul>
  </div>`);
  $('.trialPage_test .left_part').after($('.trialPage_test #gform_wrapper_5'));
  $('#gform_5 .gform_footer').after($('.free-trial-top+p'));

  $('#field_5_1 input#input_5_1_3').attr('placeholder','First Name');
  $('#field_5_1 input#input_5_1_6').attr('placeholder','Last Name');
  $('#field_5_2 #input_5_2').attr('placeholder','Company Name');
  $('#field_5_3 #input_5_3').attr('placeholder','Phone Number');
  $('#field_5_4 #input_5_4').attr('placeholder','Email');

  $('#field_5_6').after($('#field_5_5'));
   $('.trialPage_test .top-wrapper+#content').addClass('freeTrial')
  

$('#logo a').before($('#mobile-header a'));

  }
}
loadCode();




