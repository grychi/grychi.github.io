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
    $("#workCanvas").click(function (e) {
        let screen = document.getElementById("screen");
        if (screen.textContent.trim() != "G") {
            screen.textContent = "G";
        }
        else {
            screen.textContent = "R";
        }
    });
    $("#deets li").click(function (e) {
        var q = e.target.textContent;
        if (e.target.dataset.query) {
            q = e.target.dataset.query;
        }
        ddgToModal(e, q);
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
    try {
        secretEl.textContent = atob(secretEl.textContent);
        secretEl.style.display = "block";
        return "Oh, you sneaky.";
    }
    catch (e) {
        return "Nope nope.";
    }
}

function ddgToModal(e, q) {
    var appName = "grychigithub";
    q = q.trim();
    q = q.toLowerCase();
    q = encodeURIComponent(q);
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            res = JSON.parse(this.responseText);
            if (res && res.AbstractText) {
                var tmpImg = res.Image;
                if (tmpImg == "") {
                    tmpImg = "img/ddg.svg"
                }
                openModalSimple(e.target.textContent, tmpImg, res.Entity, res.AbstractText, '<a href="https://duckduckgo.com/" target="_blank" style="padding: 1em;">Results from DuckDuckGo</a>');
            }
        }
    };
    appName = '';
    var charset = 'abcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < 8; i++) {
        appName += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    xml.open("GET", "https://api.duckduckgo.com/?q=" + q + "&format=json&no_html=1&skip_disambig=1&t=" + appName, true);
    xml.send();
}

// title: string, title in header
// ico: string, icon path
// sub: string, subtag
// desc: string, description
// foot: string, html of foot
function openModalSimple(title = "", ico = "", sub = "", desc = "", foot = "") {
    document.getElementById("modal-title-text").textContent = title;
    document.getElementById("modal-icon").style.backgroundImage = 'url("' + ico + '")';
    var placeSub = document.getElementById("modal-title-link");
    clearInner(placeSub);
    var tmpLink = document.createElement("p");
    tmpLink.textContent = sub;
    placeSub.appendChild(tmpLink);

    var modalDesc = document.getElementById("modal-desc")
    modalDesc.textContent = desc;
    var placeList = document.getElementById("modal-tags-list");
    placeList.textContent = "";
    var placeFoot = document.getElementById("modal-imgs");
    placeFoot.textContent = "";
    placeFoot.innerHTML = foot;

    document.getElementById("modal").style.left = 0;
    document.body.classList.add("noscroll");
}