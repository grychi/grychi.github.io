var workQuickView = {
    "NYU IT": {
        "link": "https://www.nyu.edu/it/laguardia-co-op",
        "icon": "nyu.png",
        "prev": "nyu1.png",
        "tags": ["Google Apps Script", "Flask"],
        "desc": "I worked as a Student Technology Assistant. I used Google Apps Script to create an application and automated tasks. I have also led workshops to educate and engage others in web development.",
        "imgs": ["nyu0.png", "nyu1.png", "nyu2.png"]
    },
    "Matui": {
        "link": "/matui",
        "icon": "mat.png",
        "prev": "mat.png",
        "tags": ["Node.js", "Electron"],
        "desc": "This is my experiment building a browser to understand building desktop applications more indepth. It offers an intuitive minimalistic user interface, simple tab management, search suggestions, pinning options, and a dark theme. Matui uses Chromium and Node.js technologies and is built with Electron.",
        "imgs": ["mat0.png", "mat1.png", "mat2.png", "mat3.png"]
    },
    "Capital One": {
        "link": "",
        "icon": "c1.png",
        "prev": "c1.png",
        "tags": ["AWS", "Angular", "Spring Boot"],
        "desc": "I currently work at Capital One as a full-stack software developer. I have developed and released features for its web platform, managed infrastructure and deployed applications on AWS, monitored logs and created tools to better analyze data. I am excited to be working in cyber security soon.",
        "imgs": []
    },
    "garychi.me": {
        "link": "/",
        "icon": "g.png",
        "prev": "web1.png",
        "tags": ["JQuery", "HTML5"],
        "desc": "My personal webpage built from scratch to tell the world about me. It also serves as a playing ground for my front-end development and my designs. I try to keep my webpage simple but still demonstrative of my capabilities. It is hosted with GitHub Pages. Also, there are a few easter eggs, so enjoy exploring!",
        "imgs": ["web1.png"]
    },
    "Pokemon GR": {
        "link": "https://github.com/grychi",
        "icon": "pgr.png",
        "prev": "pgr0.png",
        "tags": ["ActionScript 3"],
        "desc": "This is a personal fangame created using ActionScript3.0. I do not own or work for Pokemon/ Nintendo/ Creatures Inc./ GAME FREAK inc. No copyright infringement is intended. All rights belong to their original owner.",
        "imgs": ["pgr0.png", "pgr1.png", "pgr2.png", "pgr3.png"]
    },
    "ColorPot": {
        "link": "/ColorPot",
        "icon": "cp.png",
        "prev": "cp.png",
        "tags": ["Electron"],
        "desc": "It is my experiment building a desktop application using material design. The tool allows for manipulation of multiple colors at the same time. It also provides smart color interpretation, generates color suggestions, and offers theme recommendations.",
        "imgs": ["cp0.png", "cp1.png", "cp2.png", "cp3.png"]
    }
}
$('document').ready(function () {
    for (var i in workQuickView) {
        appendWorkCard(i);
    }
    window.requestAnimationFrame(animateCrazyCode);
});

function appendWorkCard(s) {
    /*
    <div class="workCard">
        <div class="workCardImg"></div>
        <div class="workCardText"></div>
    </div>
    */
    var currCard = workQuickView[s];

    var c = document.createElement("div");
    c.classList.add("noselect");
    c.classList.add("workCard");
    var p = document.createElement("div");
    p.classList.add("workCardImg");
    p.style.backgroundImage = 'url("img/' + currCard.prev + '")';
    var t = document.createElement("div");
    t.classList.add("workCardText");
    t.textContent = s;
    c.appendChild(p);
    c.appendChild(t);
    c.addEventListener("click", function (e) {
        openModal(s, "img/" + currCard.icon, currCard.link, currCard.tags, currCard.desc, currCard.imgs, "img/");
    })
    document.getElementById("workShowcase").appendChild(c);
}

var animationSequence = 0;
var crazyCodeIndex = 0;
var crazyCode = `let project = new Project;
startProject();

function startProject() {
  project.idea = startThinking();
  if (project.idea != null) {
    doTheWork();
  }
}

function doTheWork() {
  coding(project);
  let itWorks = test(project);
  if (itWorks) {
    project.done = true;
  }
  else {
    let shouldTryAgain = Math.floor(Math.random() * 2);
    if (shouldTryAgain) {
      retry(project);
    }
    else {
      startProject();
    }
  }
}

`;

function animateCrazyCode() {
    animationSequence = (animationSequence + 1) % 4;
    if (!animationSequence) {
        let crazyCodeText = document.getElementById("typing").textContent += crazyCode[crazyCodeIndex];
        crazyCodeIndex = (crazyCodeIndex + 1) % crazyCode.length;
        let crazyCodeTextLines = crazyCodeText.split('\n');
        if (crazyCodeTextLines.length > 15) {
            crazyCodeTextLines.shift();
            console.log(crazyCodeTextLines);
            crazyCodeText = crazyCodeTextLines.join('\n');
        }
        document.getElementById("typing").textContent = crazyCodeText;
    }
    window.requestAnimationFrame(animateCrazyCode);
}