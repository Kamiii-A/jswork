document.write("<p>金字塔</p>");
var lever = prompt("请设置金字塔的层数");
lever = parseFloat(lever) && Number(lever);
if (isNaN(lever)) {
    alert("金字塔的层数只能是数字！！！");
    var lever = prompt("请设置金字塔的层数");
    lever = parseFloat(lever) && Number(lever);
}
for (var i = 1; i <= lever; ++i) {
    var blank = lever - i;
    for (var k = 0; k < blank; ++k) {
        document.write("&nbsp");
    }
    var star = i * 2 - 1;
    for (var j = 0; j < star; ++j) {
        document.write("*");
    }
    document.write("<br>");
}

var str = "<table border='1'>"
for (var i = 1; i < 10; ++i) {
    str += "<tr>"
    for (var j = 1; j <= i; ++j) {
        str += "<td>" + j + "*" + i + "=" + (j * i) + "</td>"
    }
    str += "<tr>";
}
str += "</table>";
var a = document.getElementById("table");
a.innerHTML = str;