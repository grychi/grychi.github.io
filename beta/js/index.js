$('document').ready(function () {
    $(function () { $(document).on("click", "a[href*=#]:not([href=#])", function () { if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) { var t = $(this.hash); if (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]"), t.length) return $("html,body").animate({ scrollTop: t.offset().top }, 1e3), !1 } }) });
    $("#aboutIco").hover(function () {
        welStr = "about me"
    }, function () {
        resetWelStr();
    });
    $("#deetsIco").hover(function () {
        welStr = "more details"
    }, function () {
        resetWelStr();
    });
    $("#workIco").hover(function () {
        welStr = "my work"
    }, function () {
        resetWelStr();
    });
    $("#contactIco").hover(function () {
        welStr = "contact me"
    }, function () {
        resetWelStr();
    });
    function resetWelStr() {
        welStr = "welcome";
    }
});