
//检测用户输入的内容注册并登陆
function checkpassword() {
    var password = prompt('请输入密码以注册并登陆！输入空密码将无法注册！');
    if (password != '' && password != null) {
        alert('注册成功!');
        var register = document.getElementById("button_register");
        var talkingroom = document.getElementById("button_talkingroom");
        register.setAttribute("disabled", "");
        talkingroom.removeAttribute("disabled");
    }
}
//控制按钮变色
function color(str) {
    document.body.style.backgroundColor = str;
}