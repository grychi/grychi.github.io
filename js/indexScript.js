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
});

function hideAllRes() {
	$("#skillsCont").css("display","none");
	$("#toolsCont").css("display","none");
	$("#expCont").css("display","none");
}