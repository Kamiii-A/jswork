function stat() {
    let str = document.getElementById("str").value
    let obj = {}
    let shuzu  = str.split("")
    // console.log(shuzu.sort())
    shuzu = shuzu.sort()
    for (let i = 0; i < str.length; ++i) {
        // console.log(str);
        let linshi = shuzu[i]
        // console.log(obj[linshi] = 1)
        obj[linshi] = (obj [linshi] + 1) || 1;
    }
    document.getElementById("result").innerText = JSON.stringify(obj)
}
