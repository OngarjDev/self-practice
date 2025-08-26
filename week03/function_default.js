function greeting(greet = "Hello", whom = "Guest" , quote = "How are you?"){
    return `${greet} ${whom} ${quote}`
}
console.log(greeting('hi'))
console.log(greeting('Good morning', "Guy" , 'Great!'))
console.log(greeting(undefined, null , 'Fine'))
console.log(greeting())
