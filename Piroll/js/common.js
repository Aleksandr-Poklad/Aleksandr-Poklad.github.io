$(document).ready(function(){
//Плавный переход к нижнему блоку
    $("#menu, #button_up, .contact_button").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

// Переключатель меню
$("#menu").on("click", ".tab", function(){
        $("#menu .tab").removeClass("active"); 
        $(this).addClass("active"); 
      });

    // $(".menu_button").click(function() {
    //     $(".nav ul").slideToggle();
    // });
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


    $('.slider').owlCarousel({
    loop:true,
    dots:true,
    nav:false,
    items:1,
    autoplay:true,
   
})


  });

document.querySelector(".video_overlay").onclick = function(){
    	this.style.display = "none";
    }

