function sum(x, y,...z) {
    let count = 0
    for (args of arguments) {
        count += args
    }
    // console.log(`check element: ${z}`)
    // console.log(`length: ` + arguments.length)
    return count
}
console.log(sum(1,2,3,4,5,6,7,8))



function greeting(greet = "Hello", whom = "Guest" , quote = "How are you?"){
    return `${greet} ${whom} ${quote}`
}
console.log(greeting('hi'))
console.log(greeting('Good morning', "Guy" , 'Great!'))
console.log(greeting(undefined, null , 'Fine'))
console.log(greeting())



function sum (num1, num2, num3){
    return num1 + num2 + num3
}
let nums = [5]
console . log (sum (...nums))
