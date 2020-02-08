// (c) 2018, Gary Chi

var canvas, ctx, canvasW, canvasH;
var colors = ["#607D8B", "#03A9F4", "#673AB7", "#00BCD4", "#9C27B0"];
//x, y, color, direction, delta, wait
var squares = [];

//x, int x position
//y, int y position
//l, int length
//c, string color
//r, int radius
function showSq(x, y, c, l = 40, r = 10) {
	ctx.beginPath();
	ctx.moveTo(x + r, y);
	ctx.lineTo(x + l - r, y);
	ctx.quadraticCurveTo(x + l, y, x + l, y + r);
	ctx.lineTo(x + l, y + l - r);
	ctx.quadraticCurveTo(x + l, y + l, x + l - r, y + l);
	ctx.lineTo(x + r, y + l);
	ctx.quadraticCurveTo(x, y + l, x, y + l - r);
	ctx.lineTo(x, y + r);
	ctx.quadraticCurveTo(x, y, x + r, y);
	ctx.closePath();
	ctx.fillStyle = c;
	ctx.fill();
}

function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	canvasW = canvas.width;
	canvasH = canvas.height;
	squares = [];
	for (var j = -60; j < canvasW + 60; j += Math.random() * 80 + 60) {
		for (var k = -60; k < canvasH + 60; k += Math.random() * 80 + 60) {
			squares.push([
				j + Math.floor(Math.random() * 10 + 30),
				k + Math.floor(Math.random() * 10) + 30,
				colors[Math.floor(Math.random() * colors.length)],
				Math.floor(Math.random() * 4),
				Math.floor(Math.random() * 20),
				Math.floor(Math.random() * 30)]);
		}
	}
}
function draw() {
	ctx.clearRect(0, 0, canvasW, canvasH);
	for (var i = 0; i < squares.length; i++) {
		var currSq = squares[i];
		var del = Math.pow(currSq[4], 2) / 160;
		switch (currSq[3]) {
			case 0:
				currSq[0] += del;
				break;
			case 1:
				currSq[1] += del;
				break;
			case 2:
				currSq[0] -= del;
				break;
			case 3:
				currSq[1] -= del;
				break;
			default:
				currSq[3] = Math.floor(Math.random() * 4);
		}
		if (currSq[5] > 0) {
			currSq[5]--;
		}
		else {
			currSq[4]++;
			currSq[4] = currSq[4] % 30;
			if (!currSq[4]) {
				currSq[3] = Math.floor(Math.random() * 4);
				currSq[5] = 30;
			}
		}
		showSq(currSq[0], currSq[1], currSq[2]);
	}
}
function animateG() {
	draw();
	window.requestAnimationFrame(animateG);
}

document.addEventListener("DOMContentLoaded", function () {
	canvas = document.getElementById("homeCanvas");
	ctx = canvas.getContext("2d");
	window.addEventListener('resize', resizeCanvas, false);
	resizeCanvas();
	animateG();
});