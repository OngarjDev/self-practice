//122 JSO
function add(a, b) {
    return a + b
}
console.log(add(5, 9))

function this_fucntiondecalation() {
    return "Hello world"
}

let multiple = (a, b) => a * b // arrow function
let multiple_dontreturn = (a, b) => { a * b } // not backet  arrow function
console.log(multiple(5, 9))
console.log(multiple_dontreturn(5895588557888477, 4478885221447755995)) //เหตุผลเพราะมันไม่รู้จะใช้ บรรทัดไหน return

console.log(Object instanceof Object)

//1. function declaration
function multiply1(a, b) {
    return a * b
}
// console.log(multiply1(2, 3))

//2. function expression (using arrow function syntax)
const multiply2 = (a, b) => { return a * b }  //(a,b)=>a*b
console.log(multiply2(4, 2))
//3. function expressiong (using function declaration)
const multiply3 = function (a, b) { return a * b }
console.log(multiply3(5, 2))

console.log(typeof multiply1)
console.log(typeof multiply2)
console.log(typeof multiply3)
const x = multiply1
const y = multiply2
const z = multiply3
console.log(typeof x)
console.log(typeof y)
console.log(typeof z)
console.log(x(2, 3))
console.log(y(3, 3))
console.log(z(4, 3))

let a = 1
let b = a
console.log(typeof a)
console.log(typeof b)

if (x === multiply1){
    console.log("x equals to multiply1")
}
else{
    console.log('x not equals to multiply1')
}


// 1. function declaration
function multiple1(a, b) {
    return a * b;
}
function doSomething(x) { //x=multiplyl
    return x;//mu1tip1y1(3,5)
}

const yy= doSomething(multiple1)
console.log(y(2,4))

function sayGoodBye ( ) {
return 'Good bye'
}
function doSomething(){
return sayGoodBye
}
let doIt=doSomething()
console.log(doIt())