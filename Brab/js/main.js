
$(document).ready(function(){
	
	//Smooth transition to the lower block
    $("#menu").on("click","a", function (event) {
        //cancels standard click-through processing
        event.preventDefault();
        //we take the block identifier from the href attribute
        var href  = $(this).attr('href'),
        //learn the height from the beginning of the page to the block that the anchor refers to
        top = $(href).offset().top;
        //animate the transition to the distance - top for 1500 ms
        $('body,html').animate({scrollTop: top}, 1500);
    });
	
	
    (function ($) {
     $(function () {
      $('.menu-button').on('click', function () {
       $(this).closest('.menu-wrap').toggleClass('menu-open');
    });
    });
    })(jQuery);
	
	$(".slider").owlCarousel({
        loop:true,
        dots:true,
		dotsEach:true,
        nav:true,
        items:1,
        autoplay:true,
		navText: ["<img src='img/arrow_left.png'>", "<img src='img/arrow_right.png'>"],

    })
	
})