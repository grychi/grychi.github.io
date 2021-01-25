var aboutStr;
document.addEventListener("DOMContentLoaded", function (e) {
    aboutStr = new wordMixer(document.getElementById('aboutStrShow'));
});

var wordMixer = function (element) {
    this.show = function (s) {
        str = s;
        mix();
    };
    var str = "";
    var pos = 0;
    var timer = null;
    var masking = true;

    function mix() {
        if (!str || str == "") {
            str = "Gary Chi";
        }
        if (masking) {
            pos = element.textContent.length - 1;
            mask();
        }
        else {
            timer = setInterval(reveal, 50);
        }
    }
    function mask() {
        while (pos > 0) {
            var tmpStr = randStr(element.textContent.length - pos);
            element.textContent = element.textContent.substr(0, pos) + tmpStr;
            pos--;
        }
        clearInterval(timer);
        masking = false;
        mix();
    }
    function reveal() {
        var tmpStr = '';
        if (pos < str.length) {
            var c = str.substr(pos, 1);
            tmpStr = randStr(element.textContent.length - pos - 1);
            element.textContent = element.textContent.substr(0, pos) + c + tmpStr;
            pos++;
        }
        else if (pos < element.textContent.length) {
            tmpStr = randStr(element.textContent.length - str.length - 1);
            element.textContent = element.textContent.substr(0, str.length) + tmpStr;
            if (element.textContent.length == str.length) {
                pos++;
            }
        }
        if (pos >= str.length && pos >= element.textContent.length) {
            pos = 0;
            masking = true;
            clearInterval(timer);
        }
    }
    function randStr(length) {
        var tmp = '';
        var charset = 'abcdefghijklmnopqrstuvwxyz';
        for (var i = 0; i < length; i++) {
            tmp += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return tmp;
    }
}