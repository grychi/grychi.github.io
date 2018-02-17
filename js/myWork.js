var workQuickView = {
    "NYU IT": {
        "link": "https://www.nyu.edu/it/laguardia-co-op",
        "icon": "nyu.png",
        "prev": "nyu1.png",
        "tags": ["Google Apps Script", "Flask"],
        "desc": "I work at the LaGuardia Co-op as a Student Technology Assistant. I have automated common tasks and routine activities using Google Apps Script to create a more efficient workplace. I helped create a system to manage lending items. I have also led workshops to educate and engage others in web development.",
        "imgs": ["nyu0.png", "nyu1.png", "nyu2.png"]
    },
    "Matui": {
        "link": "/matui",
        "icon": "mat.png",
        "prev": "mat2.png",
        "tags": ["Node.js", "Electron"],
        "desc": "A cross platform web browser with material design user interface. Its significant redesign of the modern browser offers an intuitive minimalistic user interface, simple tab management, search suggestions, pinning options, and a dark theme. Matui uses Chromium and Node.js technologies and is built with Electron.",
        "imgs": ["mat0.png", "mat1.png", "mat2.png", "mat3.png"]
    },
    "garychi.me": {
        "link": "/",
        "icon": "g.png",
        "prev": "web1.png",
        "tags": ["JQuery", "HTML5"],
        "desc": "My personal one-page built from scratch to tell the world about me. It also serves as a playing ground for my front-end development and my designs. I try to keep my webpage simple, but demonstrative of my web capabilities. It is hosted with GitHub Pages.",
        "imgs": ["web1.png"]
    },
    "U-Start": {
        "link": "http://ustart.today",
        "icon": "u.png",
        "prev": "u1.png",
        "tags": ["React", "Cordova", "Bootstrap"],
        "desc": "U-Start is a platform for entrepreneurs and students in higher education to showcase their skills and talents, find inspiration, and develop projects collaboratively. The Go programming language is used to handle server requests. Web interface is built with Bootstrap framework. Mobile applications are in development.",
        "imgs": ["u0.png", "u1.png"]
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
        "prev": "cp0.png",
        "tags": ["Electron"],
        "desc": "An elegant and easy-to-use color tool for UI designers, digital artists, front-end developers, and anyone who wants to play with colors. The tool allows for manipulation of multiple colors at the same time. It also provides smart color interpretation, generates color suggestions, and offers theme recommendations.",
        "imgs": ["cp0.png", "cp1.png", "cp2.png", "cp3.png"]
    }
}
$('document').ready(function () {
    for (var i in workQuickView) {
        appendWorkCard(i);
    }
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