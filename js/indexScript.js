$(document).ready(function() {
	
	$("#skills").click(function() {
		hideAllRes();
		$("#skillsCont").css("display","block");
	});
	$("#tools").click(function() {
		hideAllRes();
		$("#toolsCont").css("display","block");
	});
	$("#exp").click(function() {
		hideAllRes();
		$("#expCont").css("display","block");
	});
	
	$("#burger").click(function() {
		$(this).toggle();
		$("#close").toggle();
		$("#mMenu").toggle();
	});
	$("#close").click(function() {
		$(this).toggle();
		$("#burger").toggle();
		$("#mMenu").toggle();
	});
	$("#mMenu").click(function() {
		$(this).toggle();
		$("#close").toggle();
		$("#burger").toggle();
	});
	
});

function hideAllRes() {
	$("#skillsCont").css("display","none");
	$("#toolsCont").css("display","none");
	$("#expCont").css("display","none");
}