let calcSum1 = function(num1, num2, num3) {
    return num1 + num2 + num3
}

function calcSum2(num1, num2, num3) {
    return num1 + num2 + num3
}

let calcSum3 = (num1, num2, num3) => num1 + num2 + num3

console.log(calcSum1(3, 4, 2))
console.log(calcSum2(3, 5, 3))
console.log(calcSum3(3, 4, 2))

let arrOfNumbers = [2,4,6,1,8]

let getMostNumber1 = function() {
    return Math.max( ...arrOfNumbers )
}

function getMostNumber2() {
    return Math.max( ...arrOfNumbers )
}

let getMostNumber3 = () => Math.max( ...arrOfNumbers )

console.log(getMostNumber1())
console.log(getMostNumber2())
console.log(getMostNumber3())

function getSumOfArr1(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

let getSumOfArr2 = function(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}
let getSumOfArr3 = (array) => { 
    let sum = 0;
    for(var i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}
console.log(getSumOfArr1(arrOfNumbers))
console.log(getSumOfArr2(arrOfNumbers))
console.log(getSumOfArr3(arrOfNumbers))


let isTrue1 = function(str1, str2) {
    if (str2[0] === str1[str1.length -1]) {
        return true
    } else {
        return false
    }
}

function isTrue2(str1, str2) {
    if (str2[0] === str1[str1.length -1]) {
        return true
    } else {
        return false
    }
}

let isTrue3 = (str1, str2)  => (str2[0] === str1[str1.length -1]) ? true : false

console.log(isTrue1("fgdfgdfgfgfgd", "sdfdsfdsfsg"))
console.log(isTrue2("fgdfgdfgfgfgd", "sdfdsfdsfsg"))
console.log(isTrue3("fgdfgdfgfgfgd", "sdfdsfdsfsg"))