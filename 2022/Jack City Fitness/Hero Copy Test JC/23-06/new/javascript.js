if (!$('body').hasClass('iv_jackcityfitness')) {
	$('body').addClass('iv_jackcityfitness');

	$('.iv_jackcityfitness .banner-module .fourteen-hundred .orange').html($('.iv_jackcityfitness .banner-module .fourteen-hundred .orange').children());
	$('.iv_jackcityfitness .banner-module .fourteen-hundred .h1.white').text('No Memberships. Just Results.');
	$('.iv_jackcityfitness .banner-module .fourteen-hundred .h2.white').text('Come See What Makes Us The #1 Family Owned & Operated Fitness Facility in The Treasure Valley');
	$('.iv_jackcityfitness .banner-module .fourteen-hundred .banner-buttons .orange-border').remove();

	$('.iv_jackcityfitness').css('visibility', 'visible');
}