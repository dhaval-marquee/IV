if (!$('body').hasClass('iv_materials')) {
    $('body').addClass('iv_materials');
    
    $('body.iv_materials').css("background-color","#FFF")
    $('.iv_materials .Main-content .sqs-layout .sqs-col-12').addClass('sqs-col-6').removeClass('sqs-col-12');
    $('.iv_materials .Main-content .sqs-layout .sqs-col-6').before('<div class="col span-12 sqs-col-6">'+
        '<div class="sqs-block code-block sqs-block-code">'+
            '<div class="demo-block">'+
                '<div class="demo-content">'+
                    '<div class="shogun-heading-component">'+
                        '<h2>See Our Waterjet In Action</h2>'+
                    '</div>'+
                    '<div class="shg-rich-text shg-theme-text-content">'+
                        '<h3><span>Let us show you why the Wazer desktop waterjet can help you save time and money all while delivering the precise and detailed results you need</span></h3>'+
                    '</div>'+
                    '<h3>What you get:</h3>'+
                    '<ul>'+
                        '<li>A 1-on-1 demo customized to your needs and uses cases</li>'+
                        '<li>A live, interactive test-cutting</li>'+
                        '<li>All your questions answered by one of our waterjet experts</li>'+
                    '</ul>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>')
    
    $('.iv_materials .Main-content').append('<div class="row sqs-row">'+
	    '<div class="col span-12 sqs-col-12">'+
	        '<div class="demo-client-logos">'+
	            '<h3>Industry Recognized Performance</h3>'+
	            '<div class="image-wrapper">'+
	                '<img src="https://i.shgcdn.com/692a08c3-9a3d-4cd7-ac7d-c054ba66fe19/-/format/auto/-/preview/3000x3000/-/quality/lighter/"  alt="client-logos" class="shogun-image">'+
	            '</div>'+
	        '</div>'+
	    '</div>'+
	'</div>')
    
    $('.iv_materials .sqs-block.spacer-block').remove();
    $('.iv_materials a[title="Powered by Formstack"]').parent().remove();
    // $('.iv_materials .fsBody .fsForm h2').text('Request Your Live 1-on-1 Demo')
    
    $('.iv_materials form #fsRow3922449-7').remove();
    $('.iv_materials form .fsSection div[fs-field-validation-name="Company / Organization"]').closest('.fsRow').addClass('company-name-field-block');
    $('.iv_materials input[aria-label="First Name"]').closest('.fsRow').addClass('name-field-block');
    $('.iv_materials form .fsSection input[type="email"]').closest('.fsRow').addClass('email-field-block');
    $('.iv_materials form .fsSection input[type="tel"]').closest('.fsRow').addClass('phone-field-block');
    $('.iv_materials form .fsSection div[fs-field-validation-name="Custom Cut Material"]').closest('.fsRow').addClass('custom-material-block');
    
    // reorder form child function
    $.fn.orderChildren = function(order) {
		this.each(function() {
			var el = $(this);
			for(var i = order.length - 1; i >= 0; i--) {
				el.prepend(el.children(order[i]));
			}
		});
		return this;
	};
	// reorder form function calling
	$(".iv_materials form .fsSection:nth-child(2)").orderChildren([
		".fsSectionHeader",
		".company-name-field-block",
		".name-field-block",
		".email-field-block",
		".phone-field-block",
		".custom-material-block"
	]);
	
	$('.iv_materials .fsForm .fsSubmit input').attr('value','Book Your Demo Now')
	
	function updateData() {
		if ($(window).width() >= 992) {
	        var formHeight = $('.iv_materials .fsBody .fsForm').outerHeight();
	        $('.iv_materials .demo-block > .demo-content').css("min-height", formHeight + 'px');
		} else if ($(window).width() <= 991) {
			$('.iv_materials .demo-block > .demo-content').css("min-height", 'auto');
		}
    }
    updateData();

    var waitForFinalEvent = (function () {
        var timers = {};
        return function (callback, ms, uniqueId) {
            if (!uniqueId) {
                uniqueId = "Don't call this twice without a uniqueId";
            };
            if (timers[uniqueId]) {
                clearTimeout(timers[uniqueId]);
            };
            timers[uniqueId] = setTimeout(callback, ms);
        };
    })();

    $(window).resize(function () {
        waitForFinalEvent(function () {
            updateData();
        }, 500);
    });
    $(window).on('scroll', function () {
        updateData();
    });

    $('body.iv_materials').css('visibility', 'visible');
};