let children = ["Ilyha", "Egor", "Max", "Danil", "Artyr"]
for (let i = 0; i < children.length; i++) {
    if (children[i].length > 4) {
        console.log("My name is " + children[i].toUpperCase())
    } else {
        console.log("My name is " + children[i])
    }
}
let a = 2
let b = 1
let result = (a + b < 4) ? 'Мало' : 'Много'; 
console.log(result)

let stroke = function(str1) {
    (str1.length < str1.length) ? console.log(1) : console.log(2)
}
stroke("dfgdfgdfgdg", ";lkj;ldfs;lkdfsk")

function getMaxOfArray(numArray) {
    console.log(Math.min(...numArray)) 
}
getMaxOfArray([2,3,6,8,1])

let arrayOfElements = [2, 3, 4, 56, 76]
let isFindInArray = function(array, x) {
    return (array.indexOf( x ) != -1) ?  true : false
}
console.log(isFindInArray(arrayOfElements,566))