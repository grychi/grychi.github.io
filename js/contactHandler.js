function getFormData() {
    var data = {};
    var elements = document.getElementById("cForm").elements;
    var fields = Object.keys(elements).map(function (k) {
        if (elements[k].name !== undefined) {
            return elements[k].name;
        }
    }).filter(function (item, pos, self) {
        return self.indexOf(item) == pos && item;
    });
    fields.forEach(function (k) {
        data[k] = elements[k].value;
    });
    return data;
}
function handleFormSubmit(event) {
    event.preventDefault();
    var data = getFormData();
    var url = event.target.action;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.onreadystatechange = function () {
        document.body.classList.remove("contactActive");
        document.getElementById('divForm').style.display = 'none';
        document.getElementById('divFormSent').style.display = 'block';
        document.getElementById('question').style.display = 'none';
        document.getElementById('check').style.display = 'block';
        return;
    };
    var encoded = Object.keys(data).map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
    xhr.send(encoded);
}
function loaded() {
    var form = document.getElementById('cForm');
    form.addEventListener("submit", handleFormSubmit, false);
};
document.addEventListener('DOMContentLoaded', function (e) {
    loaded();
}, false);
