$(document).ready(function() {

	$("#button").click(function() {
		$(".hide_content").slideToggle();
	});

	$(".block_item").not(":first").hide();
	$(".wrap_block .tab").click(function() {
	$(".wrap_block .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".block_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


});