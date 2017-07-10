$(document).ready(function() {

	$("#project_grid").mixItUp();

	$(".s_projects li").click(function() {
		$(".s_projects li").removeClass("active");
		$(this).addClass("active");
	});



	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({type:"inline", midClick: true});

	$(".home_text h1").animated("fadeInLeft", "fadeOutUp");
	$(".home_text p").animated("fadeInRight", "fadeOutDown");
	$(".section_header").animated("fadeInUp", "fadeOutDown");

	$(".anim_left").animated("fadeInLeft", "fadeOutDown");
	$(".anim_right").animated("fadeInRight", "fadeOutDown");
	$(".anim_zoom_right").animated("zoomInRight", "zoomOutDown");
	$(".anim_zoom_left").animated("zoomInLeft", "zoomOutDown");

	$(".left_res .res_item").animated("fadeInLeft", "fadeOutDown");
	$(".right_res .res_item").animated("fadeInRight", "fadeOutDown");




	var owl = $(".carousel");
	owl.owlCarousel({
		items : 1,
		autoHeight : true,
		autoPlay : true
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});




	 function heightDetect() {
	 	$(".main_head").css("height", $(window).height());
	 };
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	
	$(".toggle_menu").click(function() {
  $(".sandwich").toggleClass("active");
});

	$(".top_menu li a").click(function() {
		$(".top_menu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	}).append("<span>");

	$(".toggle_menu").click(function() {
		if ($(".top_menu").is(":visible")) {
			$(".home_text").removeClass("h_opasi");
			$(".top_menu").fadeOut(600);
			$(".top_menu li a").removeClass("fadeInUp animated");
		}
		else {
			$(".home_text").addClass("h_opasi");
			$(".top_menu").fadeIn(600);
			$(".top_menu li a").addClass("fadeInUp animated");
		}	
	});

	$("input, select, textarea").jqBootstrapValidation();

	$(".top_menu ul a").mPageScroll2id();
});
$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});