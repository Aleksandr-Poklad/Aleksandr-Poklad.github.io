// установливаем обработчик события resize
$( window ).resize(function() {
	$( "content" ).css("width", $( window ).width() );
	$( "content" ).css("height", $( window ).height() );
});    
// вызовем событие resize
$(window).resize();

$(document).ready(function () {

$("#follow").on("click", function () {
		$(".hidden_follow").toggle("display");
	});



});












