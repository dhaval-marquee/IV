var jsonData = {
	"company_state_section_1" : [
        "Offers generous coverage caps",
        "Provides customizable options on deductibles",
        "Covers undetectable pre-existing conditions",
        "In the business for over 5 decades"
    ],
    "company_state_section_2" : [
        "Offers free roof leak coverage",
        "90-Day parts guarantee and 30-day labor guarantee",
        "Coverage without extra fee for homes up to 5000 sq.ft.",
        "Free cancellation up to 30 days"
    ],
    "company_state_section_3" : [
        "Offers coverage for mobile homes",
        "Same-day response on service requests",
        "Discounts for multi-year plans",
        "24-7 customer support"
    ],
    "company_state_section_4" : [
        "Service guarantee of 90 days",
        "24-7 Online customer portal",
        "No limitations on claims",
        "Reputation for customer service"
    ],
    "company_state_section_5" : [
        "Pick your contractor",
        "Perfect for Apartments or rental homes",
        "Offers roof leak coverage",
        "Multiple deductible options"
    ],
    "company_state_section_6" : [
        "Workmanship grantee of 60 days",
        "Provides extensive add-on coverage",
        "Offers coverage without a maintenance record",
        "Accredited with an A- BBB rating"
    ],
    "company_state_section_7" : [
        "180 day workmanship guarantee",
        "Provides free water sensor to detect leaks",
        "Has a digital dashboard for customers",
        "Over 40 years in business"
    ]
}
$('.company_state_section').each(function(e){
    $(this).addClass('company_state_section_'+(e+1))
});
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

$('.align-self-center form button[type="submit"]').each(function(){
    var planDeytails1 = $(this).closest('.company_list_body').next().find('.compare_checkebox');
    $(this).after(planDeytails1)
});


setTimeout(() => {
    $('.company_state_section form input[name="btn_location"]').each(function(){
        var getVal = $(this).attr('value');
        $(this).attr('value',getVal+'_V1');	

    });
}, 2000);