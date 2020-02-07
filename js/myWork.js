var workQuickView = {
    "Capital One": {
        "link": "https://www.capitalone.com",
        "icon": "c1.png",
        "prev": "c1.png",
        "tags": ["AWS", "Angular", "Spring Boot"],
        "desc": "I currently work at Capital One as a full-stack software engineer. I have developed and released features for its web platform, managed infrastructure and deployed applications on AWS, worked with managed pipelines, monitored logs and created tools to better analyze data. I am also excited to be rotating into a new role soon and I will be doing cyber-security related work.",
        "imgs": []
    },
    "NYC DoITT": {
        "link": "http://www.nyc.gov/nychope",
        "icon": "nychope.svg",
        "prev": "nychope.svg",
        "tags": ["AngularJS", "CMS", "Oracle SQL", "Spring Boot", "Hibernate"],
        "desc": "I interned at New York City Department of Information Technology & Telecommunications and worked on a project called NYC Hope. I've added features to the API built with Spring Boot + Hibernate which retrieved content from its content management system. I have optimized SQL queries to improve performance. I also added functionality to the AngularJS application and refactored components.",
        "imgs": []
    },
    "NYU IT": {
        "link": "https://www.nyu.edu/it/laguardia-co-op",
        "icon": "nyu.png",
        "prev": "nyu1.png",
        "tags": ["Google Apps Script", "Flask"],
        "desc": "I worked as a Student Technology Assistant at the New York University Information Technology department. I created a web application and used Google Apps Script to automate tasks. I have also led workshops to educate and engage others in web development.",
        "imgs": ["nyu0.png", "nyu1.png", "nyu2.png"]
    },
    "Matui": {
        "link": "/matui",
        "icon": "mat.png",
        "prev": "mat.png",
        "tags": ["Node.js", "Electron"],
        "desc": "This is my experiment of building a browser to understand developing desktop applications more indepth. The browser offers an intuitive minimalistic user interface, simple tab management, search suggestions, pinning options, and a dark theme. Matui uses Chromium and Node.js technologies and is built with Electron.",
        "imgs": ["mat0.png", "mat1.png", "mat2.png", "mat3.png"]
    },
    "ColorPot": {
        "link": "/ColorPot",
        "icon": "cp.png",
        "prev": "cp.png",
        "tags": ["Electron"],
        "desc": "It an experiment for building a desktop application using material design. The tool allows for manipulation of multiple colors at the same time. It also provides smart color interpretation, generates color suggestions, and offers theme recommendations.",
        "imgs": ["cp0.png", "cp1.png", "cp2.png", "cp3.png"]
    },
    "garychi.dev": {
        "link": "/",
        "icon": "g.png",
        "prev": "web1.png",
        "tags": ["JQuery", "HTML5"],
        "desc": "My personal webpage built from scratch to tell the world about me. It also serves as a playing ground for my front-end development and my designs. I try to keep my webpage simple yet still demonstrative of my capabilities. It is hosted with GitHub Pages. Also, there are a few easter eggs, so enjoy exploring!",
        "imgs": ["web1.png"]
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
            crazyCodeText = crazyCodeTextLines.join('\n');
        }
        document.getElementById("typing").textContent = crazyCodeText;
    }
    window.requestAnimationFrame(animateCrazyCode);
}