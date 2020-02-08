var dCanvas, dCtx, dCanvasW, dCanvasH, hexagons;

var deetsHex = [
    ["HTML", "255,87,34"],
    ["CSS", "3,169,244"],
    ["JS", "255,193,7"],
    ["C++", "63,81,181"],
    ["Java", "244,67,54"],
    ["Python", "33,150,243"],
    ["Git", "96,125,139"],
    ["MySQL", "76,175,80"],
    ["PHP", "103,58,183"],
    ["Go", "0,188,212"]
]
var deetsHexSet = new Set();

// x, y, alpha, [text, rgb]
function resetHex() {
    hexagons = [
        [1, 3, 0, []],
        [1, 5, 0, []],
        [2, 2, 0, []],
        [2, 4, 0, []],
        [2, 6, 0, []],
        [3, 3, 0, []],
        [3, 5, 0, []]
    ];
}

function showHex(x, y, c, t = "", l = dCanvasH / 6.8) {
    dCtx.beginPath();
    dCtx.moveTo(x + l * Math.cos(0), y + l * Math.sin(0));
    for (var s = 0; s <= 6; s++) {
        dCtx.lineTo(x + l * Math.cos(s * 2 * Math.PI / 6), y + l * Math.sin(s * 2 * Math.PI / 6));
    }
    dCtx.shadowBlur = 12;
    dCtx.shadowColor = "#607D8B";
    dCtx.fillStyle = c;
    dCtx.fill();
    dCtx.shadowBlur = 0;
    dCtx.shadowColor = "rgba(0,0,0,0)";
    dCtx.font = "bold 2em Catamaran";
    dCtx.fillStyle = "white";
    dCtx.textAlign = "center";
    dCtx.fillText(t, x, y + 8);
}

function dResizeCanvas() {
    var w = document.getElementById("dCanvasWrap");
    dCanvas.width = w.clientHeight * 2;
    dCanvas.height = w.clientWidth * 2;
    dCanvasW = dCanvas.width;
    dCanvasH = dCanvas.height;
    deetsHexSet.clear();
    resetHex();
    dHex = Math.floor(Math.random() * hexagons.length);
    for (var i = 0; i < hexagons.length; i++) {
        hexagons[i][2] = Math.random() * 8;
        hexagons[i][3] = renewHex();
    }
}

function renewHex() {
    var hexText = deetsHex[Math.floor(Math.random() * deetsHex.length)];
    while (deetsHexSet.has(hexText)) {
        var hexText = deetsHex[Math.floor(Math.random() * deetsHex.length)];
    }
    deetsHexSet.add(hexText);
    return hexText;
}

function dDraw() {
    dCtx.clearRect(0, 0, dCanvasW, dCanvasH);
    var xOffset = dCanvasW / 16;
    for (var i = 0; i < hexagons.length; i++) {
        var currHex = hexagons[i];
        if (currHex[2] < 0) {
            deetsHexSet.delete(currHex[3]);
            currHex[2] = Math.random() * 6 + 6;
            currHex[3] = renewHex();
        }
        showHex(xOffset + currHex[0] * dCanvasW / 4.2, currHex[1] * dCanvasH / 7, "rgba(" + currHex[3][1] + "," + currHex[2] + ")", currHex[3][0]);
        currHex[2] -= 0.02;
    }
}

function animateD() {
    dDraw();
    window.requestAnimationFrame(animateD);
}

document.addEventListener("DOMContentLoaded", function () {
    dCanvas = document.getElementById("deetsCanvas");
    dCtx = dCanvas.getContext("2d");
    window.addEventListener('resize', dResizeCanvas, false);
    dResizeCanvas();
    animateD();
});