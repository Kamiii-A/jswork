function calculate() {
    let num = document.getElementById("num").value
    num = parseInt(num) && Number(num)
    if (!isNaN(num)) {
        document.getElementById("pai").value = pi(num)
    }
}
function fact(n) {
    let sum = 1
    for (let i = 1; i <= n; ++i) {
        sum *= i
    }
    return sum
}
function odd(n) {
    let sum = 1
    for (let i = 1; i <= n;++i) {
        sum *= 2*i+1
    }
    return sum
}
function pi(num) {
    let sum = 0
    for (let i = 0; i <= num; ++i) {
        var dividend = fact(i)
        var divisor = odd(i)
        sum += dividend / divisor
    }
    console.log(dividend);
    console.log(divisor);
    console.log(sum);
    return sum * 2
}
calculate()