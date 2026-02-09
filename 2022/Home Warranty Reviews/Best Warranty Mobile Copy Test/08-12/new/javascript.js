function initCode() {
    jQuery(document).ready(function (jQuery) {
        if (!jQuery('body').hasClass('mobile_redesign_test')) {
            jQuery('body').addClass('mobile_redesign_test');
            jQuery(".mobile_redesign_test section > div").each(function (index) {
                jQuery(this).addClass("mob-" + index);
            });
            jQuery(".mobile_redesign_test .mob-0 > p").each(function (index) {
                jQuery(this).addClass("title-" + index);
            });
            jQuery(".mobile_redesign_test .mob-0 > h2").each(function (index) {
                jQuery(this).addClass("heading-" + index);
            });
            jQuery(".mobile_redesign_test .offer_company_list").each(function (index) {
                jQuery(this).addClass("offer_company_list_" + index);
            });

            $('.offer_company_list_0 .offer_company_block a .company_name').each(function() {
                $(this).parent().next().remove();
                $(this).parent().remove();
            });


            $('.mobile_redesign_test p.title-0').replaceWith('<p class="sub-title text-center">This is the list of <b> best home warranty companies for December 2022 </b> as reviewed by the editors of <b>HomeWarrantyReviews.com.</b></p>');
            $('.mobile_redesign_test .company_list_jumplink ul li').contents().filter(function () {
                return this.nodeType === Node.TEXT_NODE;
            }).remove();
            jQuery(".mobile_redesign_test .company_list_jumplink ul li").each(function (index) {
                jQuery(this).addClass("list_" + index);
            });
            $('.company_list_jumplink .list_0 a').text('Best for Comprehensive Coverage');
            $('.company_list_jumplink .list_1 a').text('Best for Contractor Network');
            $('.company_list_jumplink .list_2 a').text('Best for Customer Service');
            $('.company_list_jumplink .list_3 a').text('Best for Affordable Premium');
            $('.company_list_jumplink .list_4 a').text('Best Response Time');
            $('.company_list_jumplink .list_5 a').text('Best for Multi-Family Homes');
            $('.company_list_jumplink .list_6 a').text('Best for Real Estate Deals');
            $('.company_list_jumplink .list_7 a').text('Best for Overall Claims Process');
            $('.company_list_jumplink .list_8 a').text('Best low Monthly Premium');
            $('.company_list_jumplink .list_9 a').text('Best Customer Satisfaction');

            //end How Mobile IV Therapy Works            
        }
    });
}

// Load code just for Mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {

    initCode();


}
// Load code just for Mobile over