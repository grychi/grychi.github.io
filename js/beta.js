var currStr = "";
$(function () {
    window.onkeydown = function (e) {
        if (e.keyCode == 32 && e.target == document.body) {
            e.preventDefault();
        }
    };
    $("#termPlace").load("terminal.html", function (e) {
        window.onscroll = function (e) {
            var h = document.getElementById("home");
            if (!isInView(h)) {
                document.body.classList.add("bodyEven");
            }
            else {
                document.body.classList.remove("bodyEven");
            }
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
            interpret("clear");
            currStr = "";
        })
    })
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
})

function updateTerm() {
    document.getElementById("termBodyInput").textContent = currStr;
    var toScroll = document.getElementById("termBody");
    toScroll.scrollTop = toScroll.scrollHeight;
}

function isInView(el) {
    return (el.offsetTop + el.offsetHeight / 2 > window.pageYOffset &&
        el.offsetTop + el.offsetHeight / 2 < window.pageYOffset + window.innerHeight);
}