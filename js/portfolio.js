$(window).load(function () {

	$(".loading").delay(5000).fadeOut(500);

	$("section#images").isotope({ filter: ".illustration" });


	var $section = $('#images').isotope({

	})

	$("nav a").on("click", function () {

		var category = $(this).attr("data-category");
		$("section#images").isotope({ filter: "div." + category });


		return false;

	});

	$(".reset").on("click", function () {

	$("section#images").isotope({ filter: "*" });

	$("nav a#illustration").fadeOut();

	return false;

	});

		



$("div.illustration img").on("click", function () {

	$("div#lightbox").fadeIn(250);

	var imageSrc = $(this).attr("src");

	$("div#lightbox img").attr("src", imageSrc); 

	});

$("div#lightbox").on("click", function () {
	$("div#lightbox").fadeOut(250);
});

});





