var currStr = "";
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
        var gDesc = ['Software Developer',
            'UI/UX Designer',
            'Student at NYU'];
        display(gDesc, '\n');
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
        document.getElementById("termHeadNavClose").addEventListener("click", function (e) {
            document.getElementById("terminal").classList.add("termHide");
        })
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