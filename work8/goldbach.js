// function goldbach(){
//     let shuzi1 = 2
//     let shuzi2 = 2
//     let number = parseInt(document.getElementById("odd").value)

//     str = ''
//     if(isNaN(number)){
//         alert("请输入数字")
//         return false
//     }
//     if(number % 2 != 0){
//         alert("请输入大于2的偶数")
//         return false
//     }
//     shuzi1 = sushu(shuzi1)
//     shuzi2 = sub_sushu(shuzi2)
//     num(shuzi1,shuzi2)
//     return 
// }
// function sushu(shuzi){
//     let number = parseInt(document.getElementById("odd").value)
//     for(let i = shuzi ; i <= number; i++){
//         for(let j = 2 ; j < i ; j++){
//             if(i % j == 0){
//                 break
//             }
//             if(j == i-1){
//                 return i
//             }
//         }
//     }
// }
// function sub_sushu(shuzi){
//     let number = parseInt(document.getElementById("odd").value)
//     for(let i = number-shuzi ; i >= 2; i--){
//         for(let j = 2 ; j < i ; j++){
//             if(i % j == 0){
//                 break
//             }
//             if(j == i-1){
//                 return i
//             }
//         }
//     }
// }
// function num(shuzi1,shuzi2){
//     let number = document.getElementById("odd").value
//     console.log(number)
//     if((shuzi1 + shuzi2) == Number(number)){
//         str += '<p>' + number + "可以拆分为两个素数" + shuzi1 + "与" + shuzi2 + "的和" + '</p>'
//         console.log(str)
//     }
//     else{
//         shuzi1 = sub_sushu(shuzi1)
//         // console.log(shuzi1)
//         shuzi2 = sub_sushu(shuzi2)
//         // console.log(shuzi2)
//         num(shuzi1,shuzi2)
//     }
//     document.getElementById("goldbach").innerHTML = str
//     // if(shuzi1 > 0){
//     //     goldbach()
//     // }
//     return 
// }
var array = []
var array2 = []
function goldbach() {
    str = ''
    let number = parseInt(document.getElementById("odd").value)
    if (isNaN(number)) {
        alert("请输入数字")
        return 
    }
    if (number % 2 != 0) {
        alert("请输入大于2的偶数")
        return 
    }
    sushu(number)
    console.log(array)
    for(let i = 0 ; i <= array.length / 2 ; i++){
        for(let j = array.length - 1 ; j >= array.length / 2; j--){
            if(array[i] + array[j] == number){
                str += '<p>' + number + "可以拆分为两个素数" + array[i] + "与" + array[j] + "的和" + '</p>'
            }
        }
    }
    document.getElementById("goldbach").innerHTML = str
    array = []
}
function sushu(number) {
    
    for(let i = 2 ; i <= number ; i++){
        for(let j = 2 ; j < i ; j++){
            if(i % j == 0){
                break
            }
            if(j == i - 1){
                array.push(i)
                // console.log(array)
                break 
            }
        }
    }
}