$(document).ready(function(){
//Smooth transition to the lower block
    $("#menu, #button_up, .contact_button").on("click","a", function (event) {
        //cancels standard click-through processing
        event.preventDefault();
        //we take the block identifier from the href attribute
        var href  = $(this).attr('href'),
        //learn the height from the beginning of the page to the block that the anchor refers to
        top = $(href).offset().top;
        //animate the transition to the distance - top for 1500 ms
        $('body,html').animate({scrollTop: top}, 1500);
    });

// menu switch
    $("#menu").on("click", ".tab", function(){
        $("#menu .tab").removeClass("active"); 
        $(this).addClass("active"); 
    });


    (function ($) {
     $(function () {
      $('.menu_button').on('click', function () {
       $(this).closest('.manu_wrap').toggleClass('menu-open');
    });
    });
    })(jQuery);


    $(document).ready(function() {
     $('.line1').addClass("hidden").viewportChecker({
      classToAdd: 'line_1 animated line-1',
      offset: 100
    });
    });
    $(document).ready(function() {
     $('.line2').addClass("hidden").viewportChecker({
      classToAdd: 'line_2 animated line-2',
      offset: 100
    });
    });
    $(document).ready(function() {
     $('.line3').addClass("hidden").viewportChecker({
      classToAdd: 'line_3 animated line-3',
      offset: 100
    });
    });

    $(".slider").owlCarousel({
        loop:true,
        dots:true,
        nav:false,
        items:1,
        autoplay:true,

    })
    $(".video_overlay").on("click", function () {
        $(this).css("display", "none");
    });

});


