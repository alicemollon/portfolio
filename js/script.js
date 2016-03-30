$(document).ready(function() {

	var imgCount = 0;
	var noOfImages = $('.grid img').length;
	var is = $('.grid').imagesLoaded().always(function() {
		$('.grid').isotope({
		columnWidth: '.grid-sizer',
		itemSelector: '.item',
		percentPosition: true,
		isAnimated: !Modernizr.csstransitions
	});
		
		$('.loader').delay(2000).fadeOut(900, function() {
			is.isotope('layout');
			is.fadeTo(2000, 1);
		});
	})


$('.trigger').on('click', function() {
	$('nav').slideToggle('slow');
	return false;
	});
});



