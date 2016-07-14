document.addEventListener('DOMContentLoaded', function () {
	
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
	$(".mMenu").click(function() {
		$("#mMenu").toggle();
		$("#close").toggle();
		$("#burger").toggle();
	});
	
	var skillsShow = false;
	var toolsShow = false;
	
	$("#skills").click(function() {
		hideAllRes();
		$("#skillsCont").css("display","block");
		showSkills();
	});
	$("#tools").click(function() {
		hideAllRes();
		$("#toolsCont").css("display","block");
		showTools();
	});
	$("#exp").click(function() {
		hideAllRes();
		$("#expCont").css("display","block");
		showExp();
	});
	$("#bonus").click(function() {
		hideAllRes();
		$("#bonusCont").css("display","block");
		showBonus();
	});
	
	$("#skillA").click(function() {
		$("#resChange").html(`
			<table>
				<tr>
					<th></th>
					<th>Mastery</th>
				</tr>
				<td>HTML</td>
					<td><span class="stars">★★★★☆</span></td>
				</tr>
			</table>
			<p>I code HTML to make websites like the one you're seeing right now. I know this is only a static website, which I recognize does not show much. I plan on building a web-application soon to demonstrate my skillset.</p>
		`);
	});
	$("#skillB").click(function() {
		$("#resChange").html(`
			<table>
				<tr>
					<th></th>
					<th>Mastery</th>
				</tr>
				<td>CSS</td>
					<td><span class="stars">★★★★☆</span></td>
				</tr>
			</table>
			<p>I code using CSS fairly well. Everything on this website (except for the screenshots in the Projects section) is done through CSS. This includes all the layout, shapes and animations shown. I have not used any CSS frameworks yet. However, I will be trying Bootstrap soon.</p>
		`);
	});
	$("#skillC").click(function() {
		$("#resChange").html(`
			<table>
				<tr>
					<th></th>
					<th>Mastery</th>
				</tr>
				<tr>
					<td>JavaScript</td>
					<td><span class="stars">★★★★☆</span></td>
				</tr>
				<tr>
					<td>jQuery</td>
					<td><span class="stars">★★★★☆</span></td>
				</tr>
			</table>
			<p>I am proficient in JavaScript and I often use it for front-end DOM manipulation to create interactive sites. I am not as experienced in using JavaScript for back-end development. However, I am willing to learn. As of now, the only JS framework I'm familiar with is jQuery, but I plan to learn AngularJS soon.</p>
		`);
	});
	$("#skillD").click(function() {
		$("#resChange").html(`
			<table>
				<tr>
					<th></th>
					<th>Mastery</th>
				</tr>
				<tr>
					<td>C++</td>
					<td><span class="stars">★★★★★</span></td>
				</tr>
			</table>
			<p>Because NYU's computer science curriculum is taught mainly in C++, I have a deeper understanding of the language and its uses. I am still learning, but I believe I have a good grasp for using the language properly by handling memory correctly and being efficient.</p>
		`);
	});
	$("#skillE").click(function() {
		$("#resChange").html(`
			<table>
				<tr>
					<th></th>
					<th>Mastery</th>
				</tr>
				<tr>
					<td>Java</td>
					<td><span class="stars">★★★★☆</span></td>
				</tr>
			</table>
			<p>Java was my first language where I learned some basics of programming. Much of what I've done is simple practice with programming. I have created a number of programs to experiement with Java such as a basic chatbot, a small command prompt game, and GUIs for some programs.</p>
		`);
	});
	$("#skillF").click(function() {
		$("#resChange").html(`
			<table>
				<tr>
					<th></th>
					<th>Mastery</th>
				</tr>
				<tr>
					<td>Python</td>
					<td><span class="stars">★★★★☆</span></td>
				</tr>
			</table>
			<p>I use Python often to quickly script algorithms to solve mathematical problems (for <a href="https://projecteuler.net/">Project Euler</a>), automatically generate data or files, and other small tasks I may need. I have also created a small game with <a href="http://www.pygame.org/">PyGame</a> modules.</p>
		`);
	});
	$("#skillG").click(function() {
		$("#resChange").html(`
			<table>
				<tr>
					<th></th>
					<th>Mastery</th>
				</tr>
				<tr>
					<td>ActionScript</td>
					<td><span class="stars">★★★★☆</span></td>
				</tr>
			</table>
			<p>I make flash games with ActionScript (I prefer 3.0). Although I have only recently used AS, I am quite comfortable with the language since it is very similiar to Java. I am no expert, but I believe I have a good idea of how the language works internally.</p>
		`);
	});
	$("#skillH").click(function() {
		$("#resChange").html(`
			<table>
				<tr>
					<th></th>
					<th>Mastery</th>
				</tr>
				<tr>
					<td>SQL</td>
					<td><span class="stars">★★★☆☆</span></td>
				</tr>
			</table>
			<p>I have a basic understanding of the use of SQL and I can manipulate and transform data with SQL. I will need to use SQL more often to be more comfortable with it.</p>
		`);
	});
	$("#skillI").click(function() {
		$("#resChange").html(`
			<table>
				<tr>
					<th></th>
					<th>Mastery</th>
				</tr>
				<tr>
					<td>PHP</td>
					<td><span class="stars">★★★☆☆</span></td>
				</tr>
			</table>
			<p>I have went through the lessons and done the work to complete <a href="https://www.codecademy.com/">Codecademy</a>'s PHP course. I do not have a lot of experience with PHP, but I am willing to become more well-versed in it as needed.</p>
		`);
	});
	$("#skillJ").click(function() {
		$("#resChange").html(`
			<table>
				<tr>
					<th></th>
					<th>Mastery</th>
				</tr
				<tr>
					<td>Ruby</td>
					<td><span class="stars">★★★☆☆</span></td>
				</tr>
			</table>
			<p>I have used Ruby with the help of some Googling and reading API documentations, but I am not completely familiar with the language. I am still practicing with it.</p>
		`);
	});
	$("#skillsMore").click(function() {
		if(!skillsShow) {
			$("#resChange").html(`
				<table>
					<tr>
						<th></th>
						<th>Mastery</th>
					</tr>
					<tr>
						<td>HTML/CSS</td>
						<td><span class="stars">★★★★☆</span></td>
					</tr>
					<tr>
						<td>JavaScript</td>
						<td><span class="stars">★★★★☆</span></td>
					</tr>
					<tr>
						<td>C++</td>
						<td><span class="stars">★★★★★</span></td>
					</tr>
					<tr>
						<td>Java</td>
						<td><span class="stars">★★★★☆</span></td>
					</tr>
					<tr>
						<td>Python</td>
						<td><span class="stars">★★★★☆</span></td>
					</tr>
					<tr>
						<td>ActionScript</td>
						<td><span class="stars">★★★★☆</span></td>
					</tr>
					<tr>
						<td>SQL</td>
						<td><span class="stars">★★★☆☆</span></td>
					</tr>
					<tr>
						<td>PHP</td>
						<td><span class="stars">★★★☆☆</span></td>
					</tr>
					<tr>
						<td>Ruby</td>
						<td><span class="stars">★★★☆☆</span></td>
					</tr>
				</table>
			`);
			$("#skillsHide").css("display", "inline");
			$(this).html('-');
		}
		else {
			$("#skillsHide").css("display", "none");
			showSkills();
			$(this).html('+');
		}
		skillsShow = !skillsShow;
	});
	
	$("#toolA").click(function() {
		$("#resChange").html(`
			<table>
				<tr>
					<th></th>
					<th>Mastery</th>
				</tr>
				<tr>
					<td>Git</td>
					<td><span class="stars">★★★★☆</span></td>
				</tr>
			</table>
			<p></p>
		`);
	});	
	$("#toolB").click(function() {
		$("#resChange").html(`
			<table>
				<tr>
					<th></th>
					<th>Mastery</th>
				</tr>
				<tr>
					<td>Dreamweaver</td>
					<td><span class="stars">★★★★★</span></td>
				</tr>
				<tr>
					<td>Illustrator</td>
					<td><span class="stars">★★★★★</span></td>
				</tr>
				<tr>
					<td>Photoshop</td>
					<td><span class="stars">★★★★☆</span></td>
				</tr>
				<tr>
					<td>Animate</td>
					<td><span class="stars">★★★★★</span></td>
				</tr>
			</table>
			<p>I often use Dreamweaver to build web things. I make digital graphics using Illustrator. I adjust images in Photoshop (occassionally). I create flash games and animations with Animate. (And yes, I can use Adobe CS4 and up!)</p>
		`);
	});
	$("#toolC").click(function() {
		$("#resChange").html(`
			<table>
				<tr>
					<th></th>
					<th>Mastery</th>
				</tr>
				<tr>
					<td>Atom</td>
					<td><span class="stars">★★★☆☆</span></td>
				</tr>
				<tr>
					<td>Notepad++</td>
					<td><span class="stars">★★★★☆</span></td>
				</tr>
				<tr>
					<td>Sublime</td>
					<td><span class="stars">★★★★☆</span></td>
				</tr>
			</table>
			<p>I use Atom as my primary text editor. I like it because it allows heavy customization for additional functionality. I also use Notepad++ and Sublime.</p>
		`);
	});
	$("#toolD").click(function() {
		$("#resChange").html(`
			<table>
				<tr>
					<th></th>
					<th>Mastery</th>
				</tr>
				<tr>
					<td>Visual Studio</td>
					<td><span class="stars">★★★★☆</span></td>
				</tr>
				<tr>
					<td>Visual Studio Code</td>
					<td><span class="stars">★★★☆☆</span></td>
				</tr>
			</table>
			<p>I use Visual Studios as my IDE for C++ programming and debugging. I use it for other programming as well sometimes. I also use Visual Studio Code, which is very similiar to Atom.</p>
		`);
	});
	$("#toolE").click(function() {
		$("#resChange").html(`
			<table>
				<tr>
					<th></th>
					<th>Mastery</th>
				</tr>
				<tr>
					<td>Windows</td>
					<td><span class="stars">★★★★★</span></td>
				</tr>
				<tr>
					<td>Linux</td>
					<td><span class="stars">★★★★☆</span></td>
				</tr>
			</table>
			<p>I use Windows and Linux as my computer operating systems. I am most familiar with Debian-based Linux, but I have also tried using Arch-based and other distributions. I often code and compile in Linux.</p>
		`);
	});
	$("#toolF").click(function() {
		$("#resChange").html(`
			<table>
				<tr>
					<th></th>
					<th>Mastery</th>
				</tr>
				<tr>
					<td>Microsoft Office</td>
					<td><span class="stars">★★★★★</span></td>
				</tr>
				<tr>
					<td>WPS Office</td>
					<td><span class="stars">★★★★☆</span></td>
				</tr>
				<tr>
					<td>OpenOffice</td>
					<td><span class="stars">★★★★☆</span></td>
				</tr>
			</table>
			<p>I have used MS Office for many purposes. I have made games using animations and triggers in PowerPoint, a simple chatbot using logic in Excel, a tic-tac-toe game, some graphics and GIFs, etc. Ofcourse, there are better tools to use and it is not what an office suite is intended for, but I was trying things. I am also comfortable using other office suites.</p>
		`);
	});
	$("#toolG").click(function() {
		$("#resChange").html(`
			<table>
				<tr>
					<th></th>
					<th>Mastery</th>
				</tr>
				<tr>
					<td>GIMP</td>
					<td><span class="stars">★★★★☆</span></td>
				</tr>
				<tr>
					<td>Paint.NET</td>
					<td><span class="stars">★★★★★</span></td>
				</tr>
			</table>
		`);
	});
	$("#toolH").click(function() {
		$("#resChange").html(`
			<table>
				<tr>
					<th></th>
					<th>Mastery</th>
				</tr>
				<tr>
					<td>Android</td>
					<td><span class="stars">★★★★☆</span></td>
				</tr>
				<tr>
					<td>RemixOS</td>
					<td><span class="stars">★★★★☆</span></td>
				</tr>
			</table>
			<p>For mobile OS, I use Android. I root my Android devices and use CyanogenMod because I like its customization. I also like using RemixOS (for fun). Please note, I do not use Android for testing purposes. I do not make custom ROMs or apps but it is something I will explore. I am simply an avid Android user (for now).</p>
		`);
	});
	$("#toolsMore").click(function() {
		if(!toolsShow) {
			$("#resChange").html(`
				<table>
					<tr>
						<th></th>
						<th>Mastery</th>
					</tr>
					<tr>
						<td>Git</td>
						<td><span class="stars">★★★★☆</span></td>
					</tr>
					<tr>
						<td>Adobe CC</td>
						<td><span class="stars">★★★★☆</span></td>
					</tr>
					<tr>
						<td>Atom</td>
						<td><span class="stars">★★★☆☆</span></td>
					</tr>
					<tr>
						<td>Visual Studio</td>
						<td><span class="stars">★★★★☆</span></td>
					</tr>
					<tr>
						<td>Microsoft Office</td>
						<td><span class="stars">★★★★★</span></td>
					</tr>
					<tr>
						<td>GIMP</td>
						<td><span class="stars">★★★★☆</span></td>
					</tr>
					<tr>
						<td>Android</td>
						<td><span class="stars">★★★★☆</span></td>
					</tr>
				</table>
			`);
			$("#toolsHide").css("display", "inline");
			$(this).html('-');
		}
		else {
			$("#toolsHide").css("display", "none");
			showTools();
			$(this).html('+');
		}
		toolsShow = !toolsShow;
	});
	
	$("#expA").click(function() {
		$("#resChange").html(`
			<br><p>The courses I take at NYU helps further my understanding in computer science. I have finished taking Data Sctructures and Algorithms course and I have a fair understanding of time and space complexity. I will be taking Computer Architecture and Organization this upcoming semester.</p>
		`);
	});
	$("#expB").click(function() {
		$("#resChange").html(`
			<br><p>FindU is a small startup that was founded in 2014. While working with their team, I did a majority of front-end web development work along with some back-end.</p>
		`);
	});
	$("#expMore").click(function() {
		$("#resChange").html(`
			<p></p>
		`);
	});
	
	$("#bonusA").click(function() {
		$("#resChange").html(`
			<div style="width:35vh; height: 35vh; background-image:url(img/art.png); background-size: 100% 100%;"></div>
			<p>I like to design. I also often sketch. Here is a sample of some of my works.</p>.
		`);
	});
	$("#bonusB").click(function() {
		$("#resChange").html(`
			
		`);
	});
	$("#bonusC").click(function() {
		$("#resChange").html(`
			
		`);
	});
	
	function hideAllRes() {
		$("#defaultCont").css("display","none");
		$("#skillsCont").css("display","none");
		$("#toolsCont").css("display","none");
		$("#expCont").css("display","none");
		$("#bonusCont").css("display","none");
		$("#resChange").html('');
	}

	function showSkills() {
		$("#resChange").html(`
			<table>
				<tr>
					<th></th>
					<th>Mastery</th>
				</tr>
				<tr>
					<td>HTML/CSS</td>
					<td><span class="stars">★★★★☆</span></td>
				</tr>
				<tr>
					<td>JavaScript</td>
					<td><span class="stars">★★★★☆</span></td>
				</tr>
				<tr>
					<td>C++</td>
					<td><span class="stars">★★★★★</span></td>
				</tr>
				<tr>
					<td>Java</td>
					<td><span class="stars">★★★★☆</span></td>
				</tr>
			</table>
		`);
	}
	function showTools() {
		$("#resChange").html(`
			<table>
				<tr>
					<th></th>
					<th>Mastery</th>
				</tr>
				<tr>
					<td>Git</td>
					<td><span class="stars">★★★★☆</span></td>
				</tr>
				<tr>
					<td>Adobe CC</td>
					<td><span class="stars">★★★★☆</span></td>
				</tr>
				<tr>
					<td>Atom</td>
					<td><span class="stars">★★★☆☆</span></td>
				</tr>
				<tr>
					<td>Visual Studio</td>
					<td><span class="stars">★★★★☆</span></td>
				</tr>
			</table>
		`);
	}
	function showExp() {
		$("#resChange").html(`
			<br><p></p>
		`);
	}
	function showBonus() {
		$("#resChange").html(`
			<br><p>Here are some other things I do that are not directly related to coding or computer science. Click on an item to see more details.</p>
		`);
	}
});