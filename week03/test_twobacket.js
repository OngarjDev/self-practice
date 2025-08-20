function sayGoodBye() {
return 'Good bye'
}
function doSomething(){
return sayGoodBye
}
let doIt=doSomething()
console.log(doSomething()())




function myFunc (theObject) {
    theObject.model = "A9999"
}
const product = {model: "A1001", price:199}
console.log (product.model )
myFunc(product);
console.log (product.model)


function square(side) {
    side=9
}
let theSide = 2
square(theSide)
console.log(theSide) // 2