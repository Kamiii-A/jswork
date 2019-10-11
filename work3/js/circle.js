function input() {
    var r = document.getElementById("r").value;
    r = parseFloat(r) && Number(r);
    if (!isNaN(r)) {
        if (r == 0) {
            alert("半径为0的圆没有意义对吧。");
            document.getElementById("r").value = "请删掉我然后重新输入";
            input();
        }
        var cir = 2 * r * Math.PI;
        var area = r * r * Math.PI;
        document.getElementById("cir").value = cir.toFixed(2);
        document.getElementById("area").value = area.toFixed(2);
    }
    else {
        alert("请给我一个正确的半径。");
    }
}