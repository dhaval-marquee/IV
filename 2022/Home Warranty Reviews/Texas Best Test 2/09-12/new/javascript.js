var jsonData = {
    // American Home Shield
	"company_state_section_1" : [
        "Offers generous coverage caps",
        "Provides customizable options on deductibles",
        "Covers undetectable pre-existing conditions",
        "In the business for over 5 decades"
    ],
    // Choice Home Warranty
    "company_state_section_2" : [
        "Offers free roof leak coverage",
        "90-Day parts guarantee and 30-day labor guarantee",
        "Coverage without extra fee for homes up to 5000 sq.ft.",
        "Free cancellation up to 30 days"
    ],
    // Select Home Warranty
    "company_state_section_3" : [
        "Offers coverage for mobile homes",
        "Same-day response on service requests",
        "Discounts for multi-year plans",
        "24-7 customer support"
    ],
    // Service Plus
    "company_state_section_4" : [
        "Service guarantee of 90 days",
        "24-7 Online customer portal",
        "No limitations on claims",
        "Reputation for customer service"
    ],
    // America's Preferred Home Warranty
    "company_state_section_5" : [
        "20+ Years Experience",
        "Choose your contractor",
        "Offers various deductible options"
    ],
    // Liberty Home Guard
    "company_state_section_6" : [
        "Workmanship Guarantee of 60 days",
        "Provides extensive add-on coverage",
        "Offers coverage without a maintenance record",
        "Accredited with an A- BBB rating"
    ],
    // Cinch Home Services
    "company_state_section_7" : [
        "180 day workmanship guarantee",
        "Provides free water sensor to detect leaks",
        "Has a digital dashboard for customers",
        "Over 40 years in business"
    ],
    // First Premier
    "company_state_section_8" : [
        "Low overall costs if you have paid the upfront fee",
        "Modern technology and systems",
        "Has over 30 years of experience with HVAC systems"
    ],
    // The Home Services Club
    "company_state_section_9" : [
        "Offers a standard 13 month coverage",
        "Has a 90-day parts and 30-day service recall",
        "Covers utility lines outside home"
    ],
    // First American Home Warranty
    "company_state_section_10" : [
        "Unlimited service calls over the year",
        "Plans start at $28",
        "Covers building & improper installation repairs"
    ]
}

$('.company_list_state_section img[alt="American Home Shield (AHS)"]').closest('.company_state_section').addClass('company_state_section_1');
$('.company_list_state_section img[alt="Choice Home Warranty"]').closest('.company_state_section').addClass('company_state_section_2');
$('.company_list_state_section img[alt="ServicePlus Home Warranty"]').closest('.company_state_section').addClass('company_state_section_4');
$('.company_list_state_section img[alt="Select Home Warranty"]').closest('.company_state_section').addClass('company_state_section_3');
$('.company_list_state_section img[alt="America’s Preferred Home Warranty (APHW)"]').closest('.company_state_section').addClass('company_state_section_5');
$('.company_list_state_section img[alt="Liberty Home Guard"]').closest('.company_state_section').addClass('company_state_section_6');
$('.company_list_state_section img[alt="Cinch Home Services"]').closest('.company_state_section').addClass('company_state_section_7');
$('.company_list_state_section img[alt="First Premier Home Warranty"]').closest('.company_state_section').addClass('company_state_section_8');
$('.company_list_state_section img[alt="The Home Service Club"]').closest('.company_state_section').addClass('company_state_section_9');
$('.company_list_state_section img[alt="First American Home Warranty"]').closest('.company_state_section').addClass('company_state_section_10');




var $i=0;
$.each(jsonData, function(key, value) {
    $('.company_state_section').each(function(){
        if($(this).hasClass(key)) {
            var html="<ul class='list_items'>";
            for (var i = 0; i < value.length; i++) {
                html +="<li>"+value[i]+"</li>";
            }
            html +="</ul>";
            $(this).find('.company_list_body .row > .col-lg-6').addClass('list_items').html(html);
        }
    });
});


$('.write_a_review_btn').each(function(){
    var planDeytails = $(this).closest('.company_list_body').next().find('.plans_details');
    $(this).parent().before(planDeytails)
});

$('.company_list_body .align-self-center form .Cta_btn').each(function(){
    $(this).before(`<a target"_blank" href="https://www.homewarrantyreviews.com/home-warranty-price-estimate/" class="Cta_btn btn d-inline-flex w-100 ahs_top_btn"> Get Free Quote <img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/right-arrow_btn.svg" class="h-auto" width="20" height="20" alt="right arrow" decoding="async" loading="lazy"></a>`);

    $(this).remove();
});



$('.align-self-center .Cta_btn').each(function(){
    var planDeytails1 = $(this).closest('.company_list_body').next().find('.compare_checkebox');
    $(this).after(planDeytails1);
});





$('.company_list_bottom').each(function() {
    console.log($(this).length)

    if($(this).find('.offer_state_block').length == 0) {
        $(this).hide()
    }
});


setTimeout(() => {
    $('.company_state_section form input[name="btn_location"]').each(function(){
        var getVal = $(this).attr('value');
        $(this).attr('value',getVal+'_V1T');	

    });
}, 2000);