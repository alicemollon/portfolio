$(document).ready(function() {


	var is = $("section#images").imagesLoaded()
	.always(function(){
		is.isotope({ filter: ".illustration" });
		is.fadeTo(2000, 1)
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







