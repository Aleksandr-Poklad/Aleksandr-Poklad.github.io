
$(document).ready(function () {
    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 1500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    $('nav a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            $('nav ul li a').removeClass("active");
            currentLink.addClass("active");
        }
        else{
            currentLink.removeClass("active");
        }
    });
}



$(window).scroll(function () {
    parallax();
})
function parallax() {
    var wScroll = $(window).scrollTop();
    $(".parallax_bg").css("background-position", "center "+(wScroll*0.75)+"px");
    $(".parallax_box").css("top", -130+(wScroll*0.17)+"px");
}


$(document).ready(function(){


    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  //   particlesJS.load('particles-js', 'libs/particles/config.json', function() {
  //     console.log('callback - particles.js config loaded');
  // });


(function ($) {
    $(function () {
        $(".menu_button").on("click", function () {
            $("#menu").slideToggle();
            $(this).closest(".manu_wrap").toggleClass("menu-open");   
        });
    });
})(jQuery);

});



