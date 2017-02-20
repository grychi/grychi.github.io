var lastScrollTop = 0;

$('document').ready(function () {
    
    $("#navMain").hover(function () {
        $("#theDes").html("Overview");
    },
        function () {
            resetDes();
        });
    $("#navEdu").hover(function () {
        $("#theDes").html("Education");
    },
        function () {
            resetDes();
        });
    $("#navWork").hover(function () {
        $("#theDes").html("Work Experience");
    },
        function () {
            resetDes();
        });
    $("#navIntHob").hover(function () {
        $("#theDes").html("Interests & Hobbies");
    },
        function () {
            resetDes();
        });
    $("#navLife").hover(function () {
        $("#theDes").html("My Life");
    },
        function () {
            resetDes();
        });

    $("#Main").css("display", "block");

    $(".navTab").click(function () {
        $(".toShow").css("display", "none");
        var aClick = $(this).attr('id');
        var show = aClick.substring(3);
        $("#" + show).css("display", "block");
    });
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            $(".transform-transition").addClass("transform-active");
        } else {
            $(".transform-transition").removeClass("transform-active");
        }
        lastScrollTop = st;
    });
});
function resetDes() {
    $("#theDes").html("");
}