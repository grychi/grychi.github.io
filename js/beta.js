var currStr = "";
$(function () {
    window.onkeydown = function (e) {
        if (e.keyCode == 32 && e.target == document.body) {
            e.preventDefault();
        }
    };
    $("#termPlace").load("terminal.html", function (e) {
        currStr = "hello";
        interpret("hello");
        currStr = "";
        document.addEventListener("keypress", function (e) {
            if (e.keyCode == 13) { //enter
                currStr = currStr.trim();
                interpret(currStr);
                currStr = "";
            }
            else {
                currStr += String.fromCharCode(e.keyCode);
            }
            updateTerm();
        });
        document.addEventListener("keydown", function (e) {
            if (e.keyCode == 32) { // space
                currStr += String.fromCharCode(e.keyCode);
            }
            else if (e.keyCode == 8) { //backspace
                currStr = currStr.slice(0, -1);
            }
            updateTerm();
        });
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