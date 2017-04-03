var canvas;
var ctx;
var canvasW;
var canvasH;
var drawLen = 0;

var bgColors = [
  "rgba(244,67,54",
  "rgba(233,3,99",
  "rgba(156,3,176",
  "rgba(103,5,183",
  "rgba(63,81,181",
  "rgba(33,15,243",
  "rgba(3,16,244",
  "rgba(0,18,212",
  "rgba(0,15,136",
  "rgba(76,17,80",
  "rgba(139,95,74",
  "rgba(255,93,7",
  "rgba(255,52,0",
];
var pickColor;
var colorOp = 0.8;

var aniT;
var ani = false;

var offset = 0;
var dx = 1;
var dw = 0;

var dm, ts, lastMX, lastMY;

var welStr = "welcome";
var cycled = false;
var imgCycle = 0;

function drawLight() {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(160, 0);
  ctx.lineTo(160, 160);
  ctx.lineTo(0, 160);
  ctx.closePath();
  ctx.clip();
  ctx.translate(0, 0);
  ctx.translate(0, 0);
  ctx.scale(0.3125, 0.3125);
  ctx.translate(0, 0);
  ctx.strokeStyle = 'rgba(0,0,0,0)';
  ctx.lineCap = 'butt';
  ctx.lineJoin = 'miter';
  ctx.miterLimit = 4;
  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = "rgba(0, 0, 0, 0)";
  ctx.translate(0, 512);
  ctx.scale(0.1, -0.1);
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(2395, 4684);
  ctx.bezierCurveTo(2214, 4657, 2047, 4605, 1888, 4523);
  ctx.bezierCurveTo(1738, 4447, 1622, 4362, 1500, 4240);
  ctx.bezierCurveTo(1292, 4032, 1158, 3789, 1095, 3507);
  ctx.bezierCurveTo(1072, 3408, 1064, 3115, 1080, 2997);
  ctx.bezierCurveTo(1132, 2611, 1318, 2284, 1626, 2035);
  ctx.bezierCurveTo(1731, 1950, 1798, 1879, 1835, 1812);
  ctx.bezierCurveTo(1873, 1744, 1908, 1635, 1916, 1557);
  ctx.lineTo(1923, 1490);
  ctx.lineTo(2561, 1490);
  ctx.lineTo(3200, 1490);
  ctx.lineTo(3200, 1520);
  ctx.bezierCurveTo(3200, 1584, 3233, 1708, 3270, 1785);
  ctx.bezierCurveTo(3324, 1896, 3383, 1966, 3493, 2048);
  ctx.bezierCurveTo(4077, 2487, 4225, 3334, 3831, 3983);
  ctx.bezierCurveTo(3626, 4321, 3289, 4565, 2903, 4656);
  ctx.bezierCurveTo(2812, 4678, 2765, 4682, 2610, 4685);
  ctx.bezierCurveTo(2508, 4687, 2412, 4686, 2395, 4684);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(1920, 1146);
  ctx.bezierCurveTo(1920, 941, 1943, 860, 2024, 779);
  ctx.bezierCurveTo(2066, 736, 2161, 685, 2216, 674);
  ctx.bezierCurveTo(2242, 669, 2252, 659, 2271, 617);
  ctx.bezierCurveTo(2301, 554, 2365, 489, 2427, 458);
  ctx.bezierCurveTo(2496, 425, 2624, 425, 2693, 458);
  ctx.bezierCurveTo(2755, 489, 2819, 554, 2849, 617);
  ctx.bezierCurveTo(2868, 659, 2878, 669, 2904, 674);
  ctx.bezierCurveTo(2956, 684, 3053, 735, 3093, 774);
  ctx.bezierCurveTo(3173, 854, 3200, 945, 3200, 1145);
  ctx.lineTo(3200, 1280);
  ctx.lineTo(2560, 1280);
  ctx.lineTo(1920, 1280);
  ctx.lineTo(1920, 1146);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.restore();
  ctx.restore();
};

function drawPuzzle() {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(160, 0);
  ctx.lineTo(160, 160);
  ctx.lineTo(0, 160);
  ctx.closePath();
  ctx.clip();
  ctx.translate(0, 0);
  ctx.translate(0, 0);
  ctx.scale(0.3125, 0.3125);
  ctx.translate(0, 0);
  ctx.strokeStyle = 'rgba(0,0,0,0)';
  ctx.lineCap = 'butt';
  ctx.lineJoin = 'miter';
  ctx.miterLimit = 4;
  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = "rgba(0, 0, 0, 0)";
  ctx.translate(0, 512);
  ctx.scale(0.1, -0.1);
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(2530, 4676);
  ctx.bezierCurveTo(2296, 4611, 2138, 4408, 2136, 4170);
  ctx.bezierCurveTo(2136, 4081, 2161, 3989, 2226, 3851);
  ctx.bezierCurveTo(2279, 3738, 2282, 3700, 2241, 3659);
  ctx.lineTo(2212, 3630);
  ctx.lineTo(1743, 3630);
  ctx.bezierCurveTo(1486, 3630, 1249, 3626, 1216, 3620);
  ctx.bezierCurveTo(1030, 3590, 888, 3445, 859, 3257);
  ctx.bezierCurveTo(853, 3221, 850, 3068, 852, 2913);
  ctx.lineTo(855, 2633);
  ctx.lineTo(885, 2585);
  ctx.bezierCurveTo(947, 2486, 1030, 2470, 1200, 2526);
  ctx.bezierCurveTo(1270, 2549, 1303, 2554, 1390, 2554);
  ctx.bezierCurveTo(1481, 2555, 1505, 2551, 1570, 2527);
  ctx.bezierCurveTo(1700, 2480, 1821, 2368, 1872, 2250);
  ctx.bezierCurveTo(2020, 1908, 1809, 1541, 1438, 1496);
  ctx.bezierCurveTo(1373, 1488, 1239, 1509, 1156, 1541);
  ctx.bezierCurveTo(1062, 1576, 978, 1561, 914, 1496);
  ctx.bezierCurveTo(889, 1472, 868, 1438, 861, 1415);
  ctx.bezierCurveTo(847, 1365, 846, 869, 860, 787);
  ctx.bezierCurveTo(873, 704, 911, 628, 971, 565);
  ctx.bezierCurveTo(1031, 502, 1083, 469, 1159, 446);
  ctx.bezierCurveTo(1208, 432, 1352, 430, 2560, 430);
  ctx.bezierCurveTo(4030, 430, 3955, 427, 4056, 486);
  ctx.bezierCurveTo(4109, 517, 4192, 605, 4220, 659);
  ctx.bezierCurveTo(4270, 758, 4270, 750, 4270, 2020);
  ctx.bezierCurveTo(4270, 2734, 4266, 3228, 4260, 3264);
  ctx.bezierCurveTo(4231, 3444, 4092, 3586, 3911, 3620);
  ctx.bezierCurveTo(3881, 3626, 3696, 3630, 3485, 3630);
  ctx.lineTo(3113, 3630);
  ctx.lineTo(3086, 3655);
  ctx.bezierCurveTo(3048, 3690, 3052, 3728, 3110, 3857);
  ctx.bezierCurveTo(3181, 4017, 3204, 4106, 3197, 4201);
  ctx.bezierCurveTo(3179, 4430, 3024, 4618, 2805, 4675);
  ctx.bezierCurveTo(2735, 4693, 2594, 4693, 2530, 4676);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.restore();
  ctx.restore();
};

function drawPalette() {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(160, 0);
  ctx.lineTo(160, 160);
  ctx.lineTo(0, 160);
  ctx.closePath();
  ctx.clip();
  ctx.translate(0, 0);
  ctx.translate(0, 0);
  ctx.scale(0.3125, 0.3125);
  ctx.translate(0, 0);
  ctx.strokeStyle = 'rgba(0,0,0,0)';
  ctx.lineCap = 'butt';
  ctx.lineJoin = 'miter';
  ctx.miterLimit = 4;
  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = "rgba(0, 0, 0, 0)";
  ctx.translate(0, 512);
  ctx.scale(0.1, -0.1);
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(2355, 4470);
  ctx.bezierCurveTo(1862, 4414, 1406, 4171, 1092, 3795);
  ctx.bezierCurveTo(605, 3214, 503, 2409, 831, 1730);
  ctx.bezierCurveTo(1126, 1119, 1706, 715, 2387, 649);
  ctx.bezierCurveTo(2540, 634, 2631, 641, 2695, 671);
  ctx.bezierCurveTo(2798, 720, 2868, 822, 2878, 936);
  ctx.bezierCurveTo(2884, 1019, 2861, 1090, 2799, 1172);
  ctx.bezierCurveTo(2739, 1253, 2720, 1303, 2720, 1386);
  ctx.bezierCurveTo(2720, 1513, 2784, 1616, 2898, 1672);
  ctx.lineTo(2965, 1705);
  ctx.lineTo(3280, 1711);
  ctx.bezierCurveTo(3612, 1718, 3645, 1722, 3781, 1773);
  ctx.bezierCurveTo(4083, 1887, 4314, 2122, 4419, 2424);
  ctx.bezierCurveTo(4479, 2594, 4493, 2762, 4465, 2972);
  ctx.bezierCurveTo(4393, 3517, 4041, 3987, 3505, 4255);
  ctx.bezierCurveTo(3292, 4361, 3106, 4421, 2885, 4455);
  ctx.bezierCurveTo(2764, 4474, 2466, 4482, 2355, 4470);
  ctx.closePath();
  ctx.moveTo(2140, 4031);
  ctx.bezierCurveTo(2217, 4002, 2274, 3949, 2311, 3874);
  ctx.bezierCurveTo(2445, 3602, 2158, 3315, 1886, 3449);
  ctx.bezierCurveTo(1741, 3520, 1673, 3689, 1727, 3846);
  ctx.bezierCurveTo(1749, 3911, 1846, 4010, 1910, 4033);
  ctx.bezierCurveTo(1974, 4055, 2078, 4054, 2140, 4031);
  ctx.closePath();
  ctx.moveTo(3206, 4033);
  ctx.bezierCurveTo(3273, 4010, 3370, 3913, 3393, 3846);
  ctx.bezierCurveTo(3432, 3732, 3404, 3597, 3326, 3516);
  ctx.bezierCurveTo(3145, 3330, 2848, 3409, 2784, 3662);
  ctx.bezierCurveTo(2745, 3811, 2830, 3973, 2977, 4030);
  ctx.bezierCurveTo(3038, 4054, 3140, 4055, 3206, 4033);
  ctx.closePath();
  ctx.moveTo(1518, 3170);
  ctx.bezierCurveTo(1626, 3123, 1704, 3002, 1704, 2880);
  ctx.bezierCurveTo(1704, 2759, 1626, 2638, 1518, 2589);
  ctx.bezierCurveTo(1438, 2554, 1325, 2555, 1248, 2593);
  ctx.bezierCurveTo(1143, 2644, 1080, 2739, 1072, 2855);
  ctx.bezierCurveTo(1067, 2940, 1080, 2993, 1123, 3056);
  ctx.bezierCurveTo(1212, 3188, 1371, 3234, 1518, 3170);
  ctx.closePath();
  ctx.moveTo(3874, 3166);
  ctx.bezierCurveTo(3934, 3137, 3987, 3084, 4022, 3018);
  ctx.bezierCurveTo(4041, 2982, 4045, 2960, 4045, 2880);
  ctx.bezierCurveTo(4045, 2800, 4041, 2778, 4022, 2742);
  ctx.bezierCurveTo(3987, 2676, 3934, 2623, 3872, 2593);
  ctx.bezierCurveTo(3795, 2555, 3682, 2554, 3603, 2589);
  ctx.bezierCurveTo(3541, 2617, 3467, 2692, 3438, 2758);
  ctx.bezierCurveTo(3409, 2823, 3409, 2937, 3437, 3002);
  ctx.bezierCurveTo(3462, 3056, 3531, 3135, 3574, 3157);
  ctx.bezierCurveTo(3671, 3208, 3782, 3211, 3874, 3166);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.restore();
  ctx.restore();
};

function drawHeart() {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(160, 0);
  ctx.lineTo(160, 160);
  ctx.lineTo(0, 160);
  ctx.closePath();
  ctx.clip();
  ctx.translate(0, 0);
  ctx.translate(0, 0);
  ctx.scale(0.3125, 0.3125);
  ctx.translate(0, 0);
  ctx.strokeStyle = 'rgba(0,0,0,0)';
  ctx.lineCap = 'butt';
  ctx.lineJoin = 'miter';
  ctx.miterLimit = 4;
  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = "rgba(0, 0, 0, 0)";
  ctx.translate(0, 512);
  ctx.scale(0.1, -0.1);
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(1518, 4390);
  ctx.bezierCurveTo(1044, 4334, 662, 4029, 526, 3595);
  ctx.bezierCurveTo(474, 3429, 465, 3360, 465, 3130);
  ctx.bezierCurveTo(465, 2949, 469, 2894, 489, 2785);
  ctx.bezierCurveTo(536, 2522, 587, 2364, 704, 2130);
  ctx.bezierCurveTo(866, 1805, 1067, 1533, 1375, 1224);
  ctx.bezierCurveTo(1692, 907, 2086, 605, 2473, 386);
  ctx.lineTo(2610, 308);
  ctx.lineTo(2702, 360);
  ctx.bezierCurveTo(3406, 759, 4026, 1322, 4369, 1872);
  ctx.bezierCurveTo(4636, 2300, 4754, 2688, 4754, 3135);
  ctx.bezierCurveTo(4753, 3342, 4738, 3447, 4684, 3610);
  ctx.bezierCurveTo(4553, 4002, 4233, 4281, 3810, 4371);
  ctx.bezierCurveTo(3677, 4399, 3445, 4402, 3332, 4376);
  ctx.bezierCurveTo(3146, 4335, 2999, 4266, 2867, 4160);
  ctx.bezierCurveTo(2779, 4090, 2684, 3983, 2642, 3908);
  ctx.bezierCurveTo(2627, 3881, 2612, 3860, 2609, 3860);
  ctx.bezierCurveTo(2606, 3860, 2593, 3878, 2581, 3901);
  ctx.bezierCurveTo(2499, 4047, 2342, 4188, 2165, 4276);
  ctx.bezierCurveTo(1954, 4380, 1747, 4416, 1518, 4390);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.restore();
  ctx.restore();
};

function drawSVG(svgData) {
  var DOMURL = window.URL || window.webkitURL || window;
  var img = new Image();
  var svg = new Blob([svgData], { type: 'image/svg+xml' });
  var url = DOMURL.createObjectURL(svg);
  img.onload = function () {
    var imgW = (canvasW - img.width) / 2;
    var imgH = (canvasH - img.height) / 2;
    ctx.drawImage(img, imgW, imgH);
    DOMURL.revokeObjectURL(url);
  }
  img.src = url;
}

function drawImagee(img) {
  var imgW = (canvasW - img.width) / 2;
  var imgH = (canvasH - img.height) / 2;
  ctx.drawImage(img, imgW, imgH, drawLen, drawLen);
  var imgData = ctx.getImageData(0, 0, imgW, imgH);
  var data = imgData.data;
  for (var i = 0; i < data.length; i += 4) {
    data[i] = 255;
    data[i + 1] = 255;
    data[i + 2] = 255;
  }
  ctx.putImageData(imgData, 0, 0);
}

function draw() {
  canvasW = canvas.width;
  canvasH = canvas.height;
  if (canvasH > canvasW) {
    drawLen = canvasW / 5;
  }
  else {
    drawLen = canvasH / 5;
  }

  ctx.clearRect(0, 0, canvasW, canvasH);
  ctx.fillStyle = pickColor + "," + colorOp + ")";
  ctx.fillRect(0, 0, canvasW, canvasH);

  var showStr = "i am gary chi";
  if (dx > 10) {
    showImg();
    switch (imgCycle) {
      case 0:
        showStr = "I am imaginative";
        break;
      case 1:
        showStr = "I am analytical";
        break;
      case 2:
        showStr = "I am artistic";
        break;
      case 3:
        showStr = "I am passionate";
        break;
    }
  }

  ctx.font = "bold 2em Catamaran";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText(welStr, canvasW / 2, canvasH * 0.08);
  ctx.fillText(showStr, canvasW / 2, canvasH * 0.92);

  ctx.save();
  ctx.translate(canvasW / 2, canvasH / 2);
  ctx.rotate(dw * Math.PI / 180);

  //arcs
  anArc(0, 0.5 * Math.PI, drawLen, "white", offset, offset);
  anArc(0.5 * Math.PI, Math.PI, drawLen, "white", -offset, offset);
  anArc(Math.PI, 1.5 * Math.PI, drawLen, "white", -offset, -offset);
  anArc(1.5 * Math.PI, 2 * Math.PI - 0.27, drawLen, "white", offset, -offset);
  //line
  aLine(drawLen, "white", offset, offset);

  ctx.restore();
}

function showImg() {
  ctx.save();
  ctx.translate(canvasW / 2 - 80, canvasH / 2 - 80);
  switch (imgCycle) {
    case 0:
      drawLight();
      break;
    case 1:
      drawPuzzle();
      break;
    case 2:
      drawPalette();
      break;
    case 3:
      drawHeart();
      break;
  }
  ctx.restore();
}

function anArc(start, end, drawLen, fill, offX, offY) {
  ctx.beginPath()
  ctx.arc(offX, offY, drawLen, start, end, false);
  ctx.arc(offX, offY, drawLen / 1.23, end, start, true);
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
}

function aLine(drawLen, fill, offX, offY) {
  ctx.moveTo(drawLen + offX, offY);
  ctx.beginPath();
  ctx.lineTo(offX, offY);
  ctx.lineTo(offX, 0.187 * drawLen + offY);
  ctx.lineTo(0.95 * drawLen + offX, 0.187 * drawLen + offY);
  ctx.lineTo(0.95 * drawLen + offX, offY);
  ctx.closePath();
  ctx.fillStyle = "white";
  ctx.fill();
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  draw();
}

function mouseG() {
  clearTimeout(aniT);
  ani = true;
  aniT = setTimeout(mouseS, 200);

  dw += .1;
}

function mouseS() {
  ani = false;
}

function animateG() {
  if (ani) {
    cycled = false;
    if (dm > 1000) {
      dx += 8;
    }
    else if (dm > 100) {
      dx += 4;
    }
    else if (dm > 20) {
      dx += 2;
    }
    else {
      dx += 1;
    }
  }
  else if (dx > 1) {
    dx -= 1;
  }
  else {
    dx = 1;
    if (!cycled) {
      imgCycle += 1;
      imgCycle %= 4;
      cycled = !cycled;
    }
  }
  offset = 50 * Math.log(Math.sqrt(Math.sqrt(dx)));
  dw += 1 / 10;
  dw %= 360;
  draw();

  window.requestAnimationFrame(animateG);
}

document.addEventListener("DOMContentLoaded", function () {
  pickColor = bgColors[parseInt(Math.random() * bgColors.length)];
  canvas = document.getElementById("welcome");
  ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  window.addEventListener('resize', resizeCanvas, false);
  canvas.addEventListener("mousemove", mouseG)
  canvas.addEventListener("mousemove", function (e) {
    if (ts == null) {
      ts = Date.now();
      lastMX = e.screenX;
      lastMY = e.screenY;
      return;
    }

    var now = Date.now();
    var dmt = now - ts;
    var dmx = e.screenX - lastMX;
    var dmy = e.screenY - lastMY;
    var speedX = Math.round(dmx / dmt * 100);
    var speedY = Math.round(dmy / dmt * 100);
    dm = Math.abs(speedX) + Math.abs(speedY);

    ts = now;
    lastMX = e.screenX;
    lastMY = e.screenY;
  });
  draw();
  animateG();
});