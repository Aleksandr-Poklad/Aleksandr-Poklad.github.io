$(document).ready(function() {

	$(".manuButton").click(function() {
		$(".nav ul").slideToggle();
	})

	$("#menu").on("click", ".tab", function(){
        $("#menu .tab").removeClass("active"); //удаляем класс во всех вкладках
        $(this).addClass("active"); //добавляем класс текущей (нажатой)
      });
	
	var btnPrev = document.querySelector('.buttonSlider .prev');
	var btnNext = document.querySelector('.buttonSlider .next');
	var images = document.querySelectorAll('#slider .photos li');
	var i = 0;

	btnPrev.onclick = function() {
		images[i].className = '';
		i--;
		if(i<0) {
			i = images.length - 1;
		}
		images[i].className = 'showed';
	}

	btnNext.onclick = function() {
		images[i].className = '';
		i++;
		if(i>=images.length) {
			i = 0;
		}
		images[i].className = 'showed';
	}




});