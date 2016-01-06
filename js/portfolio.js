

		is.fadeTo(2000, 1)



	$("nav a").on("click", function () {

		var category = $(this).attr("data-category");
		$("section#images").isotope({ filter: "div." + category });

		return false;
	});

}); // End of window load

$(document).ready(function() {

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







