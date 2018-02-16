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
    $("#menu a").click(toggleMenu);
    $("#screen").click(function (e) {
        if (this.textContent.trim() != "G") {
            this.textContent = "G";
        }
        else {
            this.textContent = "R";
        }
    });
});

function handleSecret(e) {
    if (e.target.id == "termHeadNavLeft" && currSeq % 2 == 0 || e.target.id == "termHeadNavRight" && currSeq % 2 == 1) {
        currSeq++;
        if (currSeq == 4) {
            revealSecret();
        }
    }
    else if (currSeq < 4) {
        if (e.target.id == "termHeadNavLeft") {
            currSeq = 1;
        }
        else {
            currSeq = 0;
        }
    }
}
function revealSecret() {
    var secretEl = document.getElementById("theSecret");
    secretEl.textContent = atob(secretEl.textContent);
    secretEl.style.display = "block";
}