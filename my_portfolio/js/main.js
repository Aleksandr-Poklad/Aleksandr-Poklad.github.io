//Плавный переход к нижнему блоку
$(document).ready(function(){


        /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'libs/particles/config.json', function() {
      console.log('callback - particles.js config loaded');
    });


    $("#menu").on("click","a", function (event) {
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
        $("#menu .tab").removeClass("active"); //удаляем класс во всех вкладках
        $(this).addClass("active"); //добавляем класс текущей (нажатой)
    });

    $(".menu_button").click(function() {
        $(".nav ul").slideToggle();
    });







});
