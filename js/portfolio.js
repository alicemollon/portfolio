$(document).ready(function() {

	var imgCount = 0;
	var noOfImages = $('.work img').length;
	var progressBar = $('.progress__amount');

	var is = $('.work').imagesLoaded()
	.always(function(){
		// When images are loaded fire isotope
		is.isotope({ filter: '.illustration' });
		// Fade out the progress pencil over 1 second
		$('.progress').fadeOut(1000, function() {
			// When the pencil is gone rejig the layout - this is to fix some weird rendering issues
			is.isotope('layout');
			// Fade in the images
			is.fadeTo(2000, 1);
		});
	})
	.progress(function() {
		// As each image loads increment a count
		imgCount++;
		// Calculate the percentage of the images loaded
		percent = imgCount / noOfImages * 100;
		// Set the width of the progress bar to the percent value
		progressBar.css('width', percent + '%');
	})



	$("nav a").on("click", function () {
		var category = $(this).attr("data-category");
		is.isotope({ filter: "div." + category });

		return false;
	});

	//  Lightbox code
	$(".illustration .nudge").on("click", function () {

		$("div#lightbox").fadeIn(250);

		var illustration = $(this).clone().removeClass('nudge')

		$("div#lightbox").html(illustration);
	});

	$("div#lightbox").on("click", function () {
		$("div#lightbox").fadeOut(250);
	});

}); // End of Doc ready should be used for rest of code







