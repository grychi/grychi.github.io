document.addEventListener("DOMContentLoaded",function(){function t(){$("#defaultCont").css("display","none"),$("#skillsCont").css("display","none"),$("#toolsCont").css("display","none"),$("#expCont").css("display","none"),$("#bonusCont").css("display","none"),$("#resChange").html("")}function s(){$("#resChange").html('<table><tr><th></th><th>Mastery</th></tr><tr><td>HTML/CSS</td><td><span class="stars">★★★★☆</span></td></tr><tr><td>JavaScript</td><td><span class="stars">★★★★☆</span></td></tr><tr><td>C++</td><td><span class="stars">★★★★★</span></td></tr><tr><td>Java</td><td><span class="stars">★★★★☆</span></td></tr></table>')}function a(){$("#resChange").html('<table><tr><th></th><th>Mastery</th></tr><tr><td>Git</td><td><span class="stars">★★★★☆</span></td></tr><tr><td>Adobe CC</td><td><span class="stars">★★★★☆</span></td></tr><tr><td>Atom</td><td><span class="stars">★★★☆☆</span></td></tr><tr><td>Visual Studio</td><td><span class="stars">★★★★☆</span></td></tr></table>')}function e(){$("#resChange").html("<br><p>Here is a growing list of some of my educational and professional experiences, which includes related courses taken, internships, commissions, and volunteer work. Click on an item to see more information.</p>")}function n(){$("#resChange").html("<br><p>Here are some other things I do that are not directly related to computer science. However, I believe these other skills enrich me, providing background for better understanding and fostering creativity. Click on an item to see more details.</p>")}var r=!1,i=!1;$("#skills").click(function(){t(),$("#skillsCont").css("display","block"),s()}),$("#tools").click(function(){t(),$("#toolsCont").css("display","block"),a()}),$("#exp").click(function(){t(),$("#expCont").css("display","block"),e()}),$("#bonus").click(function(){t(),$("#bonusCont").css("display","block"),n()}),$("#skillA").click(function(){$("#resChange").html('<table><tr><th></th><th>Mastery</th></tr><td>HTML</td><td><span class="stars">★★★★☆</span></td></tr></table><p>I code HTML to make websites like the one you\'re seeing right now. I know this is only a static webpage, which I recognize does not show much. I plan on building a web-application soon to demonstrate my skillset.</p>')}),$("#skillB").click(function(){$("#resChange").html('<table><tr><th></th><th>Mastery</th></tr><td>CSS</td><td><span class="stars">★★★★☆</span></td></tr></table><p>I code using CSS fairly well. E Everything seen on this website is done through css, including all the layout, shapes and animations shown. I have not used any CSS frameworks yet. However, I will be trying Bootstrap soon.</p>')}),$("#skillC").click(function(){$("#resChange").html('<table><tr><th></th><th>Mastery</th></tr><tr><td>JavaScript</td><td><span class="stars">★★★★☆</span></td></tr><tr><td>jQuery</td><td><span class="stars">★★★★☆</span></td></tr></table><p>I am proficient in JavaScript and I often use it for front-end DOM manipulation to create interactive sites. I am not as experienced in using JavaScript for back-end development. However, I am willing to learn. As of now, the only JS framework I\'m familiar with is jQuery, but I plan to learn AngularJS soon.</p>')}),$("#skillD").click(function(){$("#resChange").html('<table><tr><th></th><th>Mastery</th></tr><tr><td>C++</td><td><span class="stars">★★★★★</span></td></tr></table><p>Because NYU\'s computer science curriculum is taught mainly in C++, I have a deeper understanding of the language and its uses. I am still learning, but I believe I have a good grasp of using the language properly by handling memory correctly and being efficient.</p>')}),$("#skillE").click(function(){$("#resChange").html('<table><tr><th></th><th>Mastery</th></tr><tr><td>Java</td><td><span class="stars">★★★★☆</span></td></tr></table><p>Java was my first language where I learned some basics of programming. Much of what I\'ve done is simple practice with programming. I have created a number of programs to experiment with Java such as a basic chatbot, a small command prompt game, and GUIs for some programs.</p>')}),$("#skillF").click(function(){$("#resChange").html('<table><tr><th></th><th>Mastery</th></tr><tr><td>Python</td><td><span class="stars">★★★★☆</span></td></tr></table><p>I use Python often to quickly script algorithms to solve mathematical problems (for <a href="https://projecteuler.net/">Project Euler</a>), automatically generate data or files, and other small tasks I may need. I have also created a small game with <a href="http://www.pygame.org/">PyGame</a> modules.</p>')}),$("#skillG").click(function(){$("#resChange").html('<table><tr><th></th><th>Mastery</th></tr><tr><td>ActionScript</td><td><span class="stars">★★★★☆</span></td></tr></table><p>I make flash games with ActionScript (I prefer 3.0). Although I have only recently used AS, I am quite comfortable with the language since it is very similar to Java. I am no expert, but I believe I have a good idea of how the language works internally.</p>')}),$("#skillH").click(function(){$("#resChange").html('<table><tr><th></th><th>Mastery</th></tr><tr><td>SQL</td><td><span class="stars">★★★☆☆</span></td></tr></table><p>I have a basic understanding of the use of SQL and I can manipulate and transform data with SQL. I will need to use SQL more often to be more comfortable with it.</p>')}),$("#skillI").click(function(){$("#resChange").html('<table><tr><th></th><th>Mastery</th></tr><tr><td>PHP</td><td><span class="stars">★★★☆☆</span></td></tr></table><p>I have gone through the lessons and done the work to complete <a href="https://www.codecademy.com/">Codecademy</a>\'s PHP course. I do not have a lot of experience with PHP, but I am willing to become more well-versed in it as needed.</p>')}),$("#skillJ").click(function(){$("#resChange").html('<table><tr><th></th><th>Mastery</th></tr><tr><td>Ruby</td><td><span class="stars">★★★☆☆</span></td></tr></table><p>I have used Ruby with the help of some Googling and reading API documentations, but I am not completely familiar with the language. I am still practicing with it.</p>')}),$("#skillsMore").click(function(){r?($("#skillsHide").css("display","none"),s(),$(this).html("+")):($("#resChange").html('<table><tr><th></th><th>Mastery</th></tr><tr><td>HTML/CSS</td><td><span class="stars">★★★★☆</span></td></tr><tr><td>JavaScript</td><td><span class="stars">★★★★☆</span></td></tr><tr><td>C++</td><td><span class="stars">★★★★★</span></td></tr><tr><td>Java</td><td><span class="stars">★★★★☆</span></td></tr><tr><td>Python</td><td><span class="stars">★★★★☆</span></td></tr><tr><td>ActionScript</td><td><span class="stars">★★★★☆</span></td></tr><tr><td>SQL</td><td><span class="stars">★★★☆☆</span></td></tr><tr><td>PHP</td><td><span class="stars">★★★☆☆</span></td></tr><tr><td>Ruby</td><td><span class="stars">★★★☆☆</span></td></tr></table>'),$("#skillsHide").css("display","inline"),$(this).html("-")),r=!r}),$("#toolA").click(function(){$("#resChange").html('<table><tr><th></th><th>Mastery</th></tr><tr><td>Git</td><td><span class="stars">★★★★☆</span></td></tr></table><p>For version control, I use GitHub (you can <a href="https://github.com/therealgary">click here</a> to see my profile, although it\'s pretty fresh). I will be working on more public projects. Also, I have not needed the use of <a href="https://bitbucket.org/">BitBucket</a> yet, but I think it can be useful.</p>')}),$("#toolB").click(function(){$("#resChange").html('<table><tr><th></th><th>Mastery</th></tr><tr><td>Dreamweaver</td><td><span class="stars">★★★★★</span></td></tr><tr><td>Illustrator</td><td><span class="stars">★★★★★</span></td></tr><tr><td>Photoshop</td><td><span class="stars">★★★★☆</span></td></tr><tr><td>Animate</td><td><span class="stars">★★★★★</span></td></tr></table><p>I often use Dreamweaver to build web things. I make digital graphics using Illustrator. I adjust images in Photoshop (occasionally). I create flash games and animations with Animate. (And yes, I can use Adobe CS4 and up!)</p>')}),$("#toolC").click(function(){$("#resChange").html('<table><tr><th></th><th>Mastery</th></tr><tr><td>Atom</td><td><span class="stars">★★★☆☆</span></td></tr><tr><td>Notepad++</td><td><span class="stars">★★★★☆</span></td></tr><tr><td>Sublime</td><td><span class="stars">★★★★☆</span></td></tr></table><p>I use Atom as my primary text editor. I like it because it allows heavy customization for additional functionality. I also use Notepad++ and Sublime.</p>')}),$("#toolD").click(function(){$("#resChange").html('<table><tr><th></th><th>Mastery</th></tr><tr><td>Visual Studio</td><td><span class="stars">★★★★☆</span></td></tr><tr><td>Visual Studio Code</td><td><span class="stars">★★★☆☆</span></td></tr></table><p>I use Visual Studios as my IDE for C++ programming and debugging. I use it for other programming as well sometimes. I also use Visual Studio Code, which is very similar to Atom.</p>')}),$("#toolE").click(function(){$("#resChange").html('<table><tr><th></th><th>Mastery</th></tr><tr><td>Windows</td><td><span class="stars">★★★★★</span></td></tr><tr><td>Linux</td><td><span class="stars">★★★★☆</span></td></tr></table><p>I use Windows and Linux as my computer operating systems. I am most familiar with Debian-based Linux, but I have also tried using Arch-based and other distributions. I often code and compile in Linux.</p>')}),$("#toolF").click(function(){$("#resChange").html('<table><tr><th></th><th>Mastery</th></tr><tr><td>Microsoft Office</td><td><span class="stars">★★★★★</span></td></tr><tr><td>WPS Office</td><td><span class="stars">★★★★☆</span></td></tr><tr><td>OpenOffice</td><td><span class="stars">★★★★☆</span></td></tr></table><p>I have used MS Office for many purposes. I have made games using animations and triggers in PowerPoint, a simple chatbot using logic in Excel, a tic-tac-toe game, some graphics/GIFs, etc. Of course, there are better tools to use and it is not what an office suite is intended for, but I was trying things. I am also comfortable using other office suites.</p>')}),$("#toolG").click(function(){$("#resChange").html('<table><tr><th></th><th>Mastery</th></tr><tr><td>GIMP</td><td><span class="stars">★★★★☆</span></td></tr><tr><td>Paint.NET</td><td><span class="stars">★★★★★</span></td></tr></table><p>When I\'m not using Photoshop or Illustrator, I use GIMP for image manipulation. Sometimes, I script to change multiple images at once for efficiency. I also use Paint.NET to create graphics and sprites.</p>')}),$("#toolH").click(function(){$("#resChange").html('<table><tr><th></th><th>Mastery</th></tr><tr><td>Android</td><td><span class="stars">★★★★☆</span></td></tr><tr><td>RemixOS</td><td><span class="stars">★★★★☆</span></td></tr></table><p>For mobile OS, I use Android. I root my Android devices and use CyanogenMod because I like its customization. I also like using RemixOS (for fun). Please note, I do not use Android for testing purposes. I do not make custom ROMs or apps but it is something I will explore. I am simply an avid Android user (for now).</p>')}),$("#toolsMore").click(function(){i?($("#toolsHide").css("display","none"),a(),$(this).html("+")):($("#resChange").html('<table><tr><th></th><th>Mastery</th></tr><tr><td>Git</td><td><span class="stars">★★★★☆</span></td></tr><tr><td>Adobe CC</td><td><span class="stars">★★★★☆</span></td></tr><tr><td>Atom</td><td><span class="stars">★★★☆☆</span></td></tr><tr><td>Visual Studio</td><td><span class="stars">★★★★☆</span></td></tr><tr><td>Microsoft Office</td><td><span class="stars">★★★★★</span></td></tr><tr><td>GIMP</td><td><span class="stars">★★★★☆</span></td></tr></table>'),$("#toolsHide").css("display","inline"),$(this).html("-")),i=!i}),$("#expA").click(function(){$("#resChange").html("<br><p>The courses I take at NYU helps further my understanding in computer science. I have finished taking Data Structures and Algorithms course and I have a fair understanding of time and space complexity. I am registered to take Computer Architecture and Organization this upcoming fall semester.</p>")}),$("#expB").click(function(){$("#resChange").html('<br><p>FindU is a small startup that was founded in 2014. It was meant to be a platform to help students develop and realize their individuality, leading to their careers. While working with their team, I was responsible for the majority of front-end web development along with some back-end work.</p>')}),$("#expC").click(function(){$("#resChange").html('<br><p>I have tutored students in Bensonhurst, Brooklyn at Pegasus Learning Center. Not much computer science here, but if you\'d like more details, <a href="#contact">send me a message</a>.</p>')}),$("#expMore").click(function(){$("#resChange").html('<br><p>Think I can help with something? As I am pursuing experiential learning opportunities, I\'d be glad to hear the goals you have in mind, and I am willing to work hard and assist in achieving these goals. Even if you aren\'t looking for a front-end web developer or graphic designer, I would still appreciate learning about the opportunity. I am a full-time student, so hopefully, we can work out a schedule. If all is well, <a href="#contact">leave me a message</a> and we can discuss further.</p>')}),$("#bonusA").click(function(){$("#resChange").html('<div style="width:35vh; height: 35vh; margin: 0 auto; background-image:url(img/art.png); background-size: 100% 100%;"></div><p>I like to design. I also often draw things. Here is a small sample of some of my sketches.</p>.')}),$("#bonusB").click(function(){$("#resChange").html('<div id="pianoCanvas"><div id="piano"><div id="stand"></div><div id="kContain"><div class="pKeysA"><div class="pKeyA"></div></div><div class="pKeysB"><div class="pKeyB"></div></div><div class="pKeysA"><div class="pKeyA"></div></div><div class="pKeysB"><div class="pKeyB"></div></div><div class="pKeysA"><div class="pKeyA"></div></div><div class="pKeysB"><div class="pKeyB"></div></div></div><div id="legs"></div><div id="pedal"></div></div></div><p>I have passed my <a href="http://us.abrsm.org/en/our-exams/what-is-a-graded-music-exam/">ABRSM Grade 8 Examination</a> in 2015. I continue to play piano as a hobby.</p>')}),$("#bonusC").click(function(){$("#resChange").html('<br><p>I have explored the electrical engineering field from classes dealing with digital logic. I have designed and built circuit systems. I have played with Arduino and written code in Verilog (a hardware description language). I believe this area of knowledge of how software and hardware work together ultimately strengthens my understanding in computer science.</p>')})});
