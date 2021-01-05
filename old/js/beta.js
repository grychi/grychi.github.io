// (c) 2018, Gary Chi

var currStr = "";
var currSeq = 0;
var menuOpened = false;
$(function () {
    window.onkeydown = function (e) {
        if (e.keyCode == 32 && e.target == document.body) {
            e.preventDefault();
        }
    };
    $("#termPlace").load("terminal.html", function (e) {
        window.onscroll = function (e) {
            readjust();
        }
        window.onresize = function (e) {
            readjust();
        }
        currStr = "Gary Chi";
        display('Software Engineer at Capital One', '\n');
        currStr = "";
        document.addEventListener("keypress", function (e) {
            if (!document.activeElement.required) {
                if (e.keyCode == 13) { //enter
                    currStr = currStr.trim();
                    interpret(currStr);
                    currStr = "";
                }
                else {
                    currStr += String.fromCharCode(e.keyCode);
                }
                updateTerm();
            }
        });
        document.addEventListener("keydown", function (e) {
            if (!document.activeElement.required) {
                if (e.keyCode == 32) { // space
                    currStr += String.fromCharCode(e.keyCode);
                }
                else if (e.keyCode == 8) { //backspace
                    currStr = currStr.slice(0, -1);
                }
                updateTerm();
            }
        });
        if (document.getElementById("termBodyOutput")) {
            document.getElementById("termHeadNavLeft").addEventListener("click", handleSecret);
            document.getElementById("termHeadNavRight").addEventListener("click", handleSecret);
            document.getElementById("termHeadNavClose").addEventListener("click", function (e) {
                toggleTerm(false);
            });
        }
        document.getElementById("quickViewTerm").addEventListener("click", function (e) {
            toggleTerm(true);
        });
    })
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        scrollTo(target);
    });
    document.addEventListener("keyup", function (e) {
        if (document.getElementById("writing").value != "") {
            document.getElementById("helper").textContent = "lightbulb_outline";
            document.body.classList.add("contactActive");
        }
        else {
            document.getElementById("helper").textContent = "help";
            document.body.classList.remove("contactActive");
        }
    });
    document.getElementById("mobileMenu").addEventListener("click", toggleMenu);
    document.getElementById("modal").addEventListener("click", function (e) {
        if (e.target == this) {
            closeModal();
        }
    });
    readjust();
})
function readjust() {
    var h = document.getElementById("home");
    if (!isInView(h)) {
        document.body.classList.add("bodyEven");
    }
    else {
        document.body.classList.remove("bodyEven");
    }
    var h = document.getElementById("home");
    var l = document.getElementById("logo");
    if (!menuOpened) {
        if (h.offsetTop + h.offsetHeight - l.offsetHeight < window.pageYOffset) {
            document.body.classList.add("invert");
            // document.getElementById("bgSlant").classList.remove("bgSlantUnder");
            // document.getElementById("bgSlant").classList.add("bgSlantOver");
        }
        else {
            document.body.classList.remove("invert");
            document.getElementById("bgSlant").classList.remove("bgSlantOver");
            document.getElementById("bgSlant").classList.add("bgSlantUnder");
        }
    }
}

function toggleMenu() {
    var menuMob = document.getElementById("menu");
    var menuBurg = document.getElementById("mobileMenuBurger");
    var menuClose = document.getElementById("mobileMenuClose");
    if (menuBurg.style.display == "" || menuBurg.style.display == "block") {
        menuBurg.style.display = "none";
        menuClose.style.display = "block";
        menuMob.style.right = 0;
        document.body.classList.remove("invert");
    }
    else {
        menuBurg.style.display = "block";
        menuClose.style.display = "none";
        menuMob.style.right = "-120%";
        var h = document.getElementById("home");
        var l = document.getElementById("logo");
        if (h.offsetTop + h.offsetHeight - l.offsetHeight < window.pageYOffset) {
            document.body.classList.add("invert");
        }
    }
    menuOpened = !menuOpened;
}

function toggleTerm(a) {
    var t = document.getElementById("terminal");
    var q = document.getElementById("quickViewText");
    if (a == null) {
        t.classList.toggle("termHide");
        t.classList.toggle("termShow");
        q.classList.toggle("termHide");
        q.classList.toggle("termShow");
    }
    else if (a) {
        t.style.visibility = "visible";
        t.style.zIndex = 1;
        q.style.visibility = "hidden";
        q.style.zIndex = -1;
    }
    else {
        t.style.visibility = "hidden";
        t.style.zIndex = -1;
        q.style.visibility = "visible";
        q.style.zIndex = 1;
    }
}
function updateTerm() {
    document.getElementById("termBodyInput").textContent = currStr;
    var toScroll = document.getElementById("termBody");
    toScroll.scrollTop = toScroll.scrollHeight;
}

function isInView(el) {
    return (el.offsetTop + el.offsetHeight / 2 > window.pageYOffset &&
        el.offsetTop + el.offsetHeight / 2 < window.pageYOffset + window.innerHeight);
}

/*
function scrollTo(a) {
    document.getElementById(a).scrollIntoView({ behaviour: 'smooth' });
}
*/
function scrollTo(a) {
    var $target = $(a);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 800, 'swing', function () {
        window.location.hash = a;
    });
}

// ico: string, path to icon
// title: string, title in header
// link: string, url to project
// tags: string array, tags
// desc: string, description
// imgs: string array, image file name
// imgDir: string, image directory
function openModal(title = "", ico = "", link = "", tags = [], desc = "", imgs = [], imgDir = "") {
    document.getElementById("modal-title-text").textContent = title;
    document.getElementById("modal-icon").style.backgroundImage = 'url("' + ico + '")';

    var placeLink = document.getElementById("modal-title-link");
    clearInner(placeLink);
    var tmpLink = document.createElement("a");
    if (link.includes("//")) {
        tmpLink.textContent = link.substr(link.indexOf("//") + 2, link.length);
    }
    else {
        tmpLink.textContent = link;
    }
    tmpLink.href = link;
    placeLink.appendChild(tmpLink);

    var placeList = document.getElementById("modal-tags-list");
    clearInner(placeList);
    for (var i = 0; i < tags.length; i++) {
        var tmpItem = document.createElement("li");
        tmpItem.textContent = tags[i];
        /*
        tmpItem.addEventListener("click", function (e) {
            ddgToModal(e, tmpItem.textContent);
        });
        */
        placeList.appendChild(tmpItem);
    }

    var modalDesc = document.getElementById("modal-desc")
    modalDesc.textContent = desc;

    var placeImg = document.getElementById("modal-imgs");
    clearInner(placeImg);
    var textImg = document.createElement("div");
    textImg.addEventListener("click", function (e) {
        modalDesc.textContent = desc;
    });
    textImg.classList.add("modal-img");
    textImg.classList.add("noselect");
    textImg.style.backgroundColor = "#00BCD4";
    textImg.innerHTML = '<i class="material-icons">subject</i>';
    placeImg.appendChild(textImg);
    for (var i = 0; i < imgs.length; i++) {
        var tmpImg = document.createElement("div");
        showModalImg(tmpImg, i);
        tmpImg.classList.add("modal-img");
        tmpImg.style.backgroundImage = 'url("' + imgDir + imgs[i] + '")';
        placeImg.appendChild(tmpImg);
    }

    function showModalImg(el, a) {
        var tmpImg = el;
        tmpImg.addEventListener("click", function (e) {
            modalDesc.textContent = "";
            var tmpShowImg = document.createElement("img");
            tmpShowImg.src = imgDir + imgs[a];
            tmpShowImg.style.width = "100%";
            modalDesc.appendChild(tmpShowImg);
        });
    }

    document.getElementById("modal").style.left = 0;
    document.body.classList.add("noscroll");
}
function closeModal() {
    document.getElementById("modal").style.left = "-100%";
    document.body.classList.remove("noscroll");
}
function clearInner(a) {
    while (a.firstChild) {
        a.removeChild(a.firstChild);
    }
}
