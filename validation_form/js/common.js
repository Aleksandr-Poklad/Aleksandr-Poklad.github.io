$(document).ready(function() {

$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку!");
			$("#form").trigger("reset");
		});
		return false;
	});  



	$(function(){
	'use strict';
	var regexes = {
		email: 	/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
		nickname: /^[а-яА-Яa-zA-Z_0-9]+/,
		password: /^([a-zA-Z0-9@#$%^&+=*.\-_ ]){6,}$/,
		tel: /^[0-9]{5,20}$/
	};
	
	$.each($('input'), function() {
		$(this).on('focusout', function(){
			if(!regexes[$(this).attr('name')].test($(this).val())){
				$(this).addClass('error');
			} else {
				$(this).removeClass('error');
			}
		});
	});
});


	
});






