$(document).ready(function() {
	var mountColors = [['#384C65','#1A6570'],['#38557D','#1D6E8B'],['#22367D','#11468A'],['#21A774','#0EBAA0']];
	var useColor;
	var now = new Date();
	if(now.getHours() < 4) {
		useColor=mountColors[3];
	}
	else if(now.getHours() < 8) {
		useColor=mountColors[0];
	}
	else if(now.getHours() < 16) {
		useColor=mountColors[1];
	}
	else if(now.getHours() < 20) {
		useColor=mountColors[2];
	}
	else{
		useColor=mountColors[3];
	}
	var mostLeftMax = 150;
	var mostLeft = Math.floor(Math.random()*10)-50;
	var $canv = $("#canvas");
	$canv.append('<div id="bigCloud" class="cloud" style="top: 30vh; left: -5%; transform:scale(.6);"></div>');
	$canv.append('<div id="mediumCloud" class="cloud" style="top: -10vh; left: -10%; transform:scale(.4);"></div>');
	$canv.append('<div id="smallCloud" class="cloud" style="top: 10vh; left: -5%; transform:scale(.3);"></div>');
	$canv.append('<div id="firstCloud" class="cloud" style="top: -20vh; left: 20%; transform:scale(.5);"></div>');
	var currentScale = 0;
	for(; mostLeft < mostLeftMax; mostLeft+=Math.floor(Math.random()*20)) {
		currentScale = Math.random()*.2+.25;
		$canv.append('<div class="mountain" style="left:' + mostLeft + 'vw; opacity: .4; transform:scale(' + currentScale + '); border-bottom: 75vw solid ' + useColor[0] + ';"></div>');
	}
	for(mostLeft = Math.floor(Math.random()*10)-50; mostLeft < mostLeftMax; mostLeft+=Math.floor(Math.random()*40)) {
		currentScale = Math.random()*.2+.3;
		$canv.append('<div class="mountain" style="left:' + mostLeft + 'vw; transform:scale(' + currentScale + '); border-bottom: 75vw solid ' + useColor[0] + ';"><div class="mountainTop"></div></div>');
	}
	currentScale = Math.random()*.2+.35;
	$canv.append('<div class="mountain" style="left:' + (Math.random()*150-50) + 'vw; transform:scale(' + currentScale + '); border-bottom: 75vw solid #00bcd4;"><div class="mountainTop"></div></div>');
	for(mostLeft = Math.floor(Math.random()*10)-50; mostLeft < mostLeftMax; mostLeft+=Math.floor(Math.random()*20)) {
		currentScale = Math.random()*.2+.08;
		$canv.append('<div class="mountain" style="left:' + mostLeft + 'vw; transform:scale(' + currentScale + '); border-bottom: 75vw solid ' + useColor[1] + ';"></div>');
	}
	var screenTog = true;
	$("#screen").click(function() {
		if(screenTog) {
			$(this).html('<p style="text-align:center; font-size:4vh; text-shadow: 0 0 1em #02edff;"><b><i><br>R</i></b></p>');
		}
		else {
			$(this).html('<p style="text-align:center; font-size:4vh; text-shadow: 0 0 1em #02edff;"><b><i><br>G</i></b></p>');
		}
		screenTog = !(screenTog);
	});
	/*$(document).on('click', '#screen', function() {
		if(screenTog) {
			$(this).html('<p style="text-align:center; font-size:4vh; text-shadow: 0 0 1em #02edff;"><b><i><br>R</i></b></p>');
		}
		else {
			$(this).html('<p style="text-align:center; font-size:4vh; text-shadow: 0 0 1em #02edff;"><b><i><br>G</i></b></p>');
		}
		screenTog = !(screenTog);
	});*/
});