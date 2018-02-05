var canvas;
var ctx;
var canvasW;
var canvasH;

function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	draw();
}
function draw() {
	canvasW = canvas.width;
	canvasH = canvas.height;
	ctx.clearRect(0, 0, canvasW, canvasH);
}
function animateG() {
	draw();
	window.requestAnimationFrame(animateG);
}

document.addEventListener("DOMContentLoaded", function () {
	canvas = document.getElementById("homeCanvas");
	ctx = canvas.getContext("2d");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	window.addEventListener('resize', resizeCanvas, false);
	animateG();
});