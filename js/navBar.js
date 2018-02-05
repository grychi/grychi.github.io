$('document').ready(function () {
    var navStrEl = document.getElementById("navIcoDesc");
    $("#aboutNavIco").hover(function () {
        navStrEl.textContent = "About Me"
    }, function () {
        resetNavStr();
    });
    $("#deetsNavIco").hover(function () {
        navStrEl.textContent = "Details"
    }, function () {
        resetNavStr();
    });
    $("#workNavIco").hover(function () {
        navStrEl.textContent = "My Work"
    }, function () {
        resetNavStr();
    });
    $("#contactNavIco").hover(function () {
        navStrEl.textContent = "Contact Me"
    }, function () {
        resetNavStr();
    });
    function resetNavStr() {
        navStrEl.textContent = "";
    }
});