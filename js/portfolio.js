$(window).load(function () {

	$('html, body').css({ 'overflow': 'hidden', 'height': '100%' });

	$(".loading").delay(3000).fadeOut(500);

	$('html, body').removeAttr('style');

	$("section#images").isotope({ filter: ".illustration" });


	var $section = $('#images').isotope({
$(document).ready(function() {

	})

	$("nav a").on("click", function () {

		var category = $(this).attr("data-category");
		$("section#images").isotope({ filter: "div." + category });


		return false;

	});



	//  Lightbox code
	$("div.illustration img").on("click", function () {

		$("div#lightbox").fadeIn(250);

		var imageSrc = $(this).attr("src");

		$("div#lightbox img").attr("src", imageSrc);

		});

	$("div#lightbox").on("click", function () {
		$("div#lightbox").fadeOut(250);
	});

}); // End of Doc ready should be used for rest of code







